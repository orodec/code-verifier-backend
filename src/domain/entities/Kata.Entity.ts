import mongoose from 'mongoose'

export const kataEntity = () => {
  const userSchema = new mongoose.Schema(
    {
      name: String,
      description: String,
      level: Number,
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
      date: { type: Date, default: Date.now },
      valoration: Number,
      chances: Number
    }
  )
  return mongoose.model('Katas', userSchema)
}
