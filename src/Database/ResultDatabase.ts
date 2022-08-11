import { CustomError } from "../CustomError/CustomError";
import { registerResultDB, registerResultsDB } from "../Model/types";
import { BaseDatabase } from "./BaseDatabase";

export class ResultDatabase extends BaseDatabase {
    async registerResultDart(input: registerResultsDB) {
        try {
            await BaseDatabase.connection('estante_virtual_result_dardo')
                .insert(input)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async registerResult100Meters(input: registerResultDB) {
        try {
            await BaseDatabase.connection('estante_virtual_result_100m_rasos')
                .insert(input)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async getRanking100Meters(competition_name: string) {
        try {
            const result = await BaseDatabase.connection('estante_virtual_result_100m_rasos')
                .select('athlete_name', 'highest_value')
                .orderBy('highest_value', 'asc')

                return result
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
    async getRankingDart(competition_name: string) {
        try {
            const result = await BaseDatabase.connection('estante_virtual_result_dardo')
            .select('athlete_name', 'highest_value') 
            .orderBy('highest_value', 'desc')

            return result 
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
}