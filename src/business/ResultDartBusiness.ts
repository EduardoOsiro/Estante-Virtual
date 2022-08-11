import { CustomError } from "../CustomError/CustomError";
import { registerResultDartDTO, registerResultsDB } from "../Model/types";
import { IdGenerator } from "../Services/idGenerator";
import { ResultDatabase } from "../Database/ResultDatabase";
import { CompetitionDatabase } from "../Database/CompetitionDatabase";

export class ResultBusinessDart {
    static registerResultDart(input: { competition_name: any; athlete_name: any; highest_value: any; average_value: any; lowest_value: any; unity: any; }) {
        throw new Error("Method not implemented.");
    }
    constructor(
        private idGenerator: IdGenerator,
        private competitionDataBase: CompetitionDatabase,
        private resultDatabase: ResultDatabase
    ) { }
    async registerResultDart(input: registerResultDartDTO) {
        try {
            const { competition_name, athlete_name, highest_value, average_value, lowest_value, unity } = input
            if (!competition_name || !athlete_name || !highest_value || !average_value || !lowest_value || !unity) {
                throw new CustomError(422, 'Invalid Parameter')
            }

            const competition = await this.competitionDataBase.searchCompetition(competition_name)
            if (competition.length === 0) {
                throw new CustomError(422, 'Competition not found')
            }

            this.dateCompare(competition[0].end_date)

            const id_athlete = this.idGenerator.generateId()

            let firstValue = highest_value
            let secondValue = average_value
            let thirdValue = lowest_value

            if(average_value > highest_value) firstValue = average_value, secondValue = highest_value
            if(lowest_value > highest_value) firstValue = lowest_value, secondValue = highest_value, thirdValue = average_value

            const register: registerResultsDB = {
                id_athlete,
                competition_name,
                athlete_name,
                highest_value: firstValue,
                average_value: secondValue,
                lowest_value: thirdValue,
                unity
            }

            await this.resultDatabase.registerResultDart(register)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
    private dateCompare = (end_date: string) => {
        const revertedDate = end_date.split('/').reverse().join('/') //2022/07/26 = [2022,07,26] = '26/07/2022'
        const dateNow = Date.now()
        const competitionClosed = new Date(revertedDate).getTime()
        if ((competitionClosed - dateNow) < 0) {
            throw new CustomError(422, 'Competition closed')
        }
    }
    async getRankingDart(competition_name: string) {
        try {
            const competition = await this.competitionDataBase.searchCompetition(competition_name)
            if (competition.length === 0) {
                throw new CustomError(422, 'Competition not found')
            }

            const ranking = await this.resultDatabase.getRankingDart(competition_name)

            return ranking



        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new ResultBusinessDart(
    new IdGenerator(),
    new CompetitionDatabase(),
    new ResultDatabase()
) 