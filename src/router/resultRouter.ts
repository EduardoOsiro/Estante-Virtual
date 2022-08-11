import { Router } from "express";
import resultDartController from "../Controller/ResultDartController";
import resultMetersController from "../Controller/Result100MetersController";

export const resultRouter = Router()

resultRouter.post('/register/dart', resultDartController.registerResultDart)

resultRouter.post('/register/100meters', resultMetersController.registerResult100Meters)

resultRouter.get('/ranking/dart', resultDartController.getRankingDart)

resultRouter.get('/ranking/100meters', resultMetersController.getRanking100Meters) 