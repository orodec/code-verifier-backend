import { BasicResponse, DateResponse } from '../types/index'

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodbyeController {
    getMessage(name?:string): Promise<DateResponse>
}

export interface IUserController {
    // Read all useres from database
    getUsers(id?: string): Promise<any>
    // Delete usere from database
    deleteUser(id?: string): Promise<any>
    // Create new User
    createUser(user: any): Promise<any>
    // Update user
    updateUser(id: string, user: any): Promise<any>
}
