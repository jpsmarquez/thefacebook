const { Schema, model } = require('mongoose')

const postSchema = new Schema(
  {
    title: String,
    content: String,
    date:Date,
    hashtags:[
        type:Schema.Types.ObjectId
    ]
  },
)
