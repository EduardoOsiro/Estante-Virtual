import { Router } from "express";
import competitionController from "../Controller/CompetitionController";

export const competitionRouter = Router()

competitionRouter.post('/create', competitionController.createCompetition) 