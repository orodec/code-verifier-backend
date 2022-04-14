/**
 * Root Router
 * Rediterctions to Routers
 */
import express, { Request, Response } from 'express'
import helloRouter from './HelloRouter'
import goodbyeRouter from './GoodbyeRouter'
import { LogInfo } from '../utils/logger'
import usersRouter from './UserRouter';

// Server instance
const server = express()

// Router instance
const rootRouter = express()

// Activate for request to http://localhost:8000/api

// GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('GET: http://localhost:8000/api/')
  // Send Hello World
  res.send('Welcome to App Restfull Express from Oscar')
})

// Redirections to Routers & Controllers
server.use('/', rootRouter) // http://localhost:8000/api/
server.use('/hello', helloRouter) // http://localhost:8000/api/hello
server.use('/goodbye', goodbyeRouter) // https://localhost:8000/api/goodbye
// Add more routes to the app
server.use('/users', usersRouter) // http://localhost:8000/api/users --> UserRouter
export default server
