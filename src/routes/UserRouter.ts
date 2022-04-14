import express, { Request, Response } from 'express'
import { UserController } from '../controller/UsersController'
import { LogInfo } from '../utils/logger'

// Router from express
const usersRouter = express.Router()

// http://localhost:8000/api/users?id=62544e4c88927c1ac5399713
usersRouter.route('/')
// GET:
  .get(async (req: Request, res: Response) => {
    // Obtain Query Param (ID)
    const id: any = req?.query?.id
    LogInfo(`Query Param: ${id}`)
    // Controller Instance to excute method
    const controller: UserController = new UserController()
    // Obtain Response
    const response: any = await controller.getUsers(id)
    // Send to the client the response
    return res.send(response)
  })
  .delete(async (req: Request, res: Response) => {
    // DELETE:
    // Obtain Query Param (ID)
    const id: any = req?.query?.id
    LogInfo(`Query Param: ${id}`)
    // Controller Instance to excute method
    const controller: UserController = new UserController()
    // Obtain Response
    const response: any = await controller.deleteUser(id)
    // Send to the client the response
    return res.send(response)
  })
  .post(async (req: Request, res: Response) => {
    const name: any = req?.query?.name
    const age: any = req?.query?.age
    const email: any = req?.query?.email

    // Controller Instance to excute method
    const controller: UserController = new UserController()

    const user = {
      name: name || 'default',
      email: email || 'default email',
      age: age || 18
    }
    // Obtain Response
    const response: any = await controller.createUser(user)
    // Send to the client the response
    return res.send(response)
  })
  .put(async (req:Request, res:Response) => {
    // Obtain Query Param (ID)
    const id: any = req?.query?.id
    const name: any = req?.query?.name
    const age: any = req?.query?.age
    const email: any = req?.query?.email
    LogInfo(`Query Param: ${id}, ${name}, ${age}, ${email}`)
    // Controller Instance to excute method
    const controller: UserController = new UserController()

    const user = {
      name: name,
      email: email,
      age: age
    }
    // Obtain Response
    const response: any = await controller.updateUser(id, user)
    // Send to the client the response
    return res.send(response)
  })

// usersRouter.route('/:user_id')

export default usersRouter
