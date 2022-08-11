export type createCompetitionDTO = {
     competition_name: string,
     start_date: string,
     end_date: string
 }
 
 export type createCompetitionDB = createCompetitionDTO & { id_competition: string }
 
 export type registerResultDartDTO = {
     competition_name: string,
     athlete_name: string,
     highest_value: string,
     average_value: string,
     lowest_value: string,
     unity: string
 }
 
 export type registerResultsDB = registerResultDartDTO & { id_athlete: string }
 
 export type registerResultMetersDTO = {
     competition_name: string,
     athlete_name: string,
     highest_value: string,
     unity: string
 }
 
 export type registerResultDB = registerResultMetersDTO & { id_athlete: string } 