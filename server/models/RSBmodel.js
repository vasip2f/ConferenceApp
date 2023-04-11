const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    roomNumber: { type: Number, required: true },
    roomType: { type: String, required: true },
    roomCapacity: { type: Number, required: true }
},
    {
        collection: "Room",
    }
);

const slotSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
    availability: { type: Boolean, required: true }
},
    {
        collection: "Slot",
    }
);

const bookingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    roomNumber: { type: Number, required: true },
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
    clientName: { type: String, required: true }
},
    {
        collection: "Booking",
    }
);

const Room = mongoose.model('Room', roomSchema);
const Slot = mongoose.model('Slot', slotSchema);
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Room;
module.exports = Slot;
module.exports = Booking;