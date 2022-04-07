import express, { Request, Response } from 'express'
import { GoodbyeController } from '../controller/GoodbyeController'
import { LogInfo } from '../utils/logger'
import { DateResponse } from '../controller/types/index'

// Router from express
const GoodbyeRouter = express.Router()

// http://localhost:8000/api/goodbye?name=Oscar/
GoodbyeRouter.route('/')
// GET:
  .get(async (req: Request, res: Response) => {
    // Obtain Query Param
    const name: any = req?.query?.name
    LogInfo(`Query Param: ${name}`)
    // Controller Instance to excute method
    const controller: GoodbyeController = new GoodbyeController()
    // Obtain Response
    const response: DateResponse = await controller.getMessage(name)
    // Send to the client the response
    return res.send(response)
  })

export default GoodbyeRouter
