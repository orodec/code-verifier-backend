
import { DateResponse } from './types/index'
import { IGoodbyeController } from './interfaces'
import { LogSuccess } from '../utils/logger'

export class GoodbyeController implements IGoodbyeController {
  public async getMessage (name?: string): Promise<DateResponse> {
    LogSuccess('[/api/goodbye] Get Request')
    return {
      // eslint-disable-next-line no-undef
      message: `Goodbye, ${name || 'world'}`,
      Date: new Date()
    }
  }
}
