const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    first_name:String,
    last_name: String,
    password: String,
    birthday: Date,
    gender: String,
    friends:[{
      type:Schema.Types.ObjectId
    }]
  },
)
