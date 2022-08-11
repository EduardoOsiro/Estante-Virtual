import { Request, Response } from "express"
import ResultBusinessMeters from "../Business/Result100MetersBusiness"
import resultBusinessMeters from "../Business/Result100MetersBusiness"
import { registerResultMetersDTO } from "../Model/types"

export class Result100MetersController {
    async registerResult100Meters(req: Request, res: Response): Promise<void> {
        try {
            const { competition_name, athlete_name, highest_value, unity } = req.body
            const input: registerResultMetersDTO = {
                competition_name,
                athlete_name,
                highest_value,
                unity
            }
            await resultBusinessMeters.registerResult100Meters(input)
            res.status(200).send('Result registered successfully')
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
        async getRanking100Meters(req: Request, res: Response): Promise<void> {
            try {
                const competition_name = '100m Rasos'

                const result = await ResultBusinessMeters.getRanking100Meters(competition_name)

                res.status(200).send(result)
            } catch (error: any) {
                const { statusCode, message } = error
                res.status(statusCode || 400).send({ message })
        }
    }
}

export default new Result100MetersController(
)