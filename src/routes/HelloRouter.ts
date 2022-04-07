import express, { Request, Response } from 'express'
import { HelloController } from '../controller/HelloController'
import { LogInfo } from '../utils/logger'
import { BasicResponse } from '../controller/types/index'

// Router from express
const helloRouter = express.Router()

// http://localhost:8000/api/hello?name=Oscar/
helloRouter.route('/')
// GET:
  .get(async (req: Request, res: Response) => {
    // Obtain Query Param
    const name: any = req?.query?.name
    LogInfo(`Query Param: ${name}`)
    // Controller Instance to excute method
    const controller: HelloController = new HelloController()
    // Obtain Response
    const response: BasicResponse = await controller.getMessage(name)
    // Send to the client the response
    return res.send(response)
  })

export default helloRouter
