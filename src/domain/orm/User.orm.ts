import { userEntity } from '../entities/user.entity'
import { LogError } from '../../utils/logger'

// CRUD

/**
 * Method to obtain all useres from collection users on Mongo Server
 */
export const getAllUsers = async (): Promise<any[] | undefined> => {
  try {
    const userModel = userEntity()

    // Search all Users
    return await userModel.find({ isDelete: false })
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Users: ${error}`)
  }
}

// - GET User by id
export const getUserById = async (id: string) : Promise<any | undefined> => {
  try {
    const userModel = userEntity()

    // Search User by id
    return await userModel.findById(id)
  } catch (error) {
    LogError(`[ORM ERROR]: Getting User By ID: ${error}`)
  }
}

// - Delete User by id
export const deleteUserById = async (id: string) : Promise<any | undefined> => {
  try {
    const userModel = userEntity()
    // delete User By id
    return await userModel.findByIdAndDelete(id) // userModel.deleteOne({_id: id})
  } catch (error) {
    LogError(`[ORM ERROR]: Getting User By ID and delete: ${error}`)
  }
}

// create new User
export const createUser = async (user: any) : Promise<any | undefined> => {
  try {
    const userModel = userEntity()
    // create new user
    return await userModel.create(user)
  } catch (error) {
    LogError(`[ORM ERROR]: Creating new User: ${error}`)
  }
}

// Update User by id

export const updateUserById = async (id: string, user: any): Promise<any | undefined> => {
  try {
    const userModel = userEntity()
    // Update User
    return await userModel.findByIdAndUpdate(id, user)
  } catch (error) {
    LogError(`[ORM ERROR]: Updating User ${id}: ${error}`)
  }
}

// TODO:
// GET User by email
