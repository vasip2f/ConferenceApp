const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({
  name: String,
  Img: {
    data: Buffer,
    contentType: String,
  },


});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
