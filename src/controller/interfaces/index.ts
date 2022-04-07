import { BasicResponse, DateResponse } from '../types/index'

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodbyeController {
    getMessage(name?:string): Promise<DateResponse>
}
