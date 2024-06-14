const { Schema, default: mongoose } = require("mongoose");

const roomSchema = new Schema({
  type: {
    type: String,
    enum: ["personal", "group"],
  },
  name: {
    type: String,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ]
});

const roomModel = new mongoose.model('room', roomSchema)
module.exports = roomModel
