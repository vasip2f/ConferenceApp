const { model } = require("mongoose");
const RSBmodel = require("../models/RSBmodel");
const moment = require("moment");
const router = require("express").Router();

router.post("/create-RSBevent", async(req, res)=> {
    const rsbmodel = RSBmodel(req.body);
    console.log(req.body);
    await rsbmodel.save();
    res.sendStatus(201);

});

    


router.get("/get-RSBevents", async(req, res)=> {
    const rsbmodels = await RSBmodel.find()
        $where('startTime').lt(newEndTime);
        $where('endTime').gt(newStartTime);
        $exec();



    
})
