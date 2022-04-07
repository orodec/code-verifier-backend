import { LogSuccess, LogError } from './src/utils/logger'
import dotenv from 'dotenv'
import server from './src/server/index'

// * Configuration the .env file
dotenv.config()

const port: string | number = process.env.PORT || 8000

// * Execute SERVER
server.listen(port, () => {
  LogSuccess(`[Server On]: Running at http://localhost:${port}/api`)
})

// *  Control Server error
server.on('error', (error) => {
  LogError(`[Server Error]: ${error}`)
})
