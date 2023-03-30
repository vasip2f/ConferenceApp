const express = require("express"); 

const Tour = require('../models/tour') 

const TourController = express.Router()

const authmiddleware = require('../middlewares/auth')
 

TourController.post('/createTour',  async (req,res) =>{
    const tour = req.body;
    const newTour  = new Tour({
        ...tour,
        createdAt: new Date(). toISOString()

    });
    try{
        await newTour.save();
        res.status(201).json(newTour)
    }
    catch(error){
        res.status(404).json({message:"something Went Wrong"})
    }
})

TourController.get("/getTour",async(req,res)=>{
    try{

        const tours = await Tour.find();
        res.status(200).json(tours)

    }catch(error){
        res.status(404).json({message:"something Went Wrong"})

    }
})
module.exports = TourController
