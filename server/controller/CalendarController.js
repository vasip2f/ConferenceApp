const { model } = require("mongoose");
const Event = require("../models/Event");
const moment = require("moment");

const router = require("express").Router();

router.post("/create-event", async (req, res) => {
    const event = Event(req.body);
    console.log(req.body);
    await event.save();
    res.sendStatus(201);

});

router.get("/get-events", async (req, res) => {
    const events = await Event.find({
        StartTime: {$gte: moment(req.query.StartTime).toDate(),
        EndTime: { $lte: moment(req.query.EndTime).toDate() },
              
            
        }
    });

    res.send(events);
});



module.exports = router;