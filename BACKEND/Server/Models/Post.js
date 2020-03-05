const { Schema, model } = require('mongoose')

const postSchema = new Schema(
  {
    content: String,
    comments:[String],
    like:{default: 0, type:Number},
    date:Date,
    hashtags:[{
      type:Schema.Types.ObjectId
    }]
  },
)
