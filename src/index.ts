import app from './Controller/app'
import { competitionRouter } from './Router/competitionRouter'
import { resultRouter } from './Router/resultRouter'

app.use('/competition', competitionRouter)

app.use('/result', resultRouter)