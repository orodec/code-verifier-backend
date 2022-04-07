
import { BasicResponse } from './types/index'
import { IHelloController } from './interfaces'
import { LogSuccess } from '../utils/logger'
import { Get, Query, Route, Tags } from 'tsoa'

@Route('/api/hello')
@Tags('HelloController')
export class HelloController implements IHelloController {
  /**
   * Endpoint to retrive a Message "Hello {name}" in Json
   * @param { string | undefined } name Name of user to be greeted
   * @returns { BasicResponse } Promise of BasicResponse
   */
  @Get('/')
  public async getMessage (@Query()name?: string): Promise<BasicResponse> {
    LogSuccess('[/api/hello] Get Request')
    return {
      // eslint-disable-next-line no-undef
      message: `Hello, ${name || 'world'}`
    }
  }
}
