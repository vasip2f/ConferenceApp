const {model} = require("mongoose");
const Event = require("../models/Event");
const moment = require("moment");



const router = require("express").Router();

const userEvent = require('../models/Event');
// const { response } = require("express");


const CreateEvent = async (req, res) => {

    const {username,title,roomName,StartTime,EndTime,availability} = req.body

    {
        try {

            // const oldBooking = await userEvent.findOne({roomName})
            
            const roomExits=await userEvent.findOne({availability})
            const startTimeAvailble=await userEvent.findOne({StartTime})
            const endTimeAvailble=await userEvent.findOne({EndTime})

            if(roomExits && startTimeAvailble && endTimeAvailble){
                return res.status(400).json({message:"Slot is alread booked"})
            }

            const EventResult = await userEvent.create({   
                username,
                title,
                roomName,
                StartTime,
                EndTime,
                availability,
               
            });
            res.status(201).json({EventResult});
        } catch (error) {
            res.status(500).json({message:"Something went Wrong"})
        console.log(error)
            
        }
    }

};

//demo

// const GetEventRoute = async(req, res) => {
//     const _id = req.params.id;
//         const allevents = await userEvent.find(_id)
//         res.send(allevents)
// };


const GetEventRoute = async(req, res) => {
    const allevents = await userEvent.find()
    res.send(allevents)

};



const DeleteEvent = async (req, res) =>{
    const _id = req.params.id;
    const DeletedEvent = await userEvent.findByIdAndDelete(_id)
    res.send(DeletedEvent)
};

const UpdateEvent = async (req, res) =>{
    const _id = req.params.id;
    const UpdateEvent = await userEvent.findByIdAndUpdate(_id, req.body,{new: true})
    res.send(UpdateEvent)
};

// const UpdateEventById = async (req, res) =>{
//     const _id = req.params.id;
//     const UpdateEvent = await userEvent.findByIdAndUpdate(req.body._id, req.body,{new: true})
//     res.send(UpdateEvent)
// };


module.exports = {CreateEvent, GetEventRoute,DeleteEvent, UpdateEvent, };
