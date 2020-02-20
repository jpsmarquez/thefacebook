const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    first_name:String,
    last_name: String,
    password: String,
    birthday: String,
    gender: String,
    posts:[String],
  },
  {
    friends:[
        type:Schema.Types.ObjectId,
    ]
  }
)
