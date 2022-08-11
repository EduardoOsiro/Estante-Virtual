import { Request, Response } from "express"
import ResultBusinessDart from "../Business/ResultDartBusiness"
import resultBusinessDart from "../Business/ResultDartBusiness"
import { registerResultDartDTO } from "../Model/types"

export class ResultDartController {
    async registerResultDart(req: Request, res: Response): Promise<void> {
        try {
            const { competition_name, athlete_name, highest_value, average_value, lowest_value, unity } = req.body
            const input: registerResultDartDTO = {
                competition_name,
                athlete_name,
                highest_value,
                average_value,
                lowest_value,
                unity
            }
            await resultBusinessDart.registerResultDart(input)
            res.status(200).send('Result registered successfully')
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
    async getRankingDart(req: Request, res: Response): Promise<void> {
        try {
            const competition_name = 'Dardo'

            const result = await ResultBusinessDart.getRankingDart(competition_name)

            res.status(200).send(result)
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
    }
}
}

export default new ResultDartController(
)