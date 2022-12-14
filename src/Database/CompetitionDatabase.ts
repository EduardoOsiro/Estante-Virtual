import { CustomError } from "../CustomError/CustomError";
import { createCompetitionDB } from "../Model/types";
import { BaseDatabase } from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {
    async createCompetition(input: createCompetitionDB) {
        try {
            await BaseDatabase.connection('estante_virtual_competition')
                .insert(input)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async searchCompetition(competition_name: string) {
        try {
           return await BaseDatabase.connection('estante_virtual_competition')
                .select('*')
                .where({ competition_name })
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
} 