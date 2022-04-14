import { Delete, Get, Post, Put, Query, Route, Tags } from 'tsoa'
import { IUserController } from './interfaces'
import { LogSuccess, LogWarning } from '../utils/logger'

// ORM - Users Collection
import { getAllUsers, getUserById, deleteUserById, createUser, updateUserById } from '../domain/orm/User.orm'

@Route('/api/users')
@Tags('UserController')
export class UserController implements IUserController {
  /**
   * Endpoint to retrive the Users in the Collection "Users" of DB
   * @param {string} id  Id of Users to retrive (optional)
   * @returns All user o user found by id
   */
    @Get('/')
  public async getUsers (@Query()id?: string): Promise<any> {
    let response: any = ''

    if (id) {
      LogSuccess(`[/api/users] Get User By ID: ${id} `)
      response = await getUserById(id)
    } else {
      LogSuccess('[/api/users] Get All Users Request')
      response = await getAllUsers()
    }

    return response
  }

  /**
   * Endpoint to delete one User in the Collection "Users" of DB
   * @param {string} id  Id of User to delete
   * @returns info message
   */
  @Delete('/')
    public async deleteUser (@Query()id?: string): Promise<any> {
      let response: any = ''

      if (id) {
        LogSuccess(`[/api/users] Delete User By ID: ${id} `)
        await deleteUserById(id).then((r) => {
          response = {
            message: `User with id ${id} deleted successfully`
          }
        })
      } else {
        LogWarning('[/api/users] Delete User without Id')
        response = {
          message: 'Please, provide an Id to remove from database'

        }
      }
      return response
    }

  @Post('/')
  public async createUser (user: any): Promise<any> {
    let response: any = ''
    await createUser(user).then((r) => {
      LogSuccess(`[/api/users] Create Users: ${user} `)
      response = {
        message: `User created successfully: ${user.name}`
      }
    })

    return response
  }

  @Put('/')
  public async updateUser (@Query()id: string, user: any): Promise<any> {
    let response: any = ''

    if (id) {
      LogSuccess(`[/api/users] Update User with ID: ${id} `)
      await updateUserById(id, user).then((r) => {
        response = {
          message: `User with id ${id} updated successfully`
        }
      })
    } else {
      LogWarning('[/api/users] Update User Request without Id')
      response = {
        message: 'Please, provide an Id to update an exixting user'

      }
    }
    return response
  }
}
