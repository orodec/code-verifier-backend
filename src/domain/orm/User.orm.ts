import { userEntity } from '../entities/user.entity'
import { LogError } from 'src/utils/logger'

// CRUD

/**
 * Method to obtain all useres from collection users on Mongo Server
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
  try {
    const userModel = userEntity()

    // Search all Users
    return await userModel.find({ isDelete: false })
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Users: ${error}`)
  }
}
// TODO:
// GET User by id
// GET User by email
// Delete User by id
// create new User
// Update User by id
