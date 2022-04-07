
import { BasicResponse } from './types/index'
import { IHelloController } from './interfaces'
import { LogSuccess } from '../utils/logger'

export class HelloController implements IHelloController {
  public async getMessage (name?: string): Promise<BasicResponse> {
    LogSuccess('[/api/hello] Get Request')
    return {
      // eslint-disable-next-line no-undef
      message: `Hello, ${name || 'world'}`
    }
  }
}
