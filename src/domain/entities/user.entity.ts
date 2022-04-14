import mongoose from 'mongoose'

export const userEntity = () => {
  const userSchema = new mongoose.Schema(
    {
      // _id: mongoose.Schema.Types.ObjectId,
      name: String,
      email: String,
      age: Number
    }
  )
  return mongoose.models.Users || mongoose.model('Users', userSchema)
}
