// import React from "react";
// import Modal from "react-modal";
// import Datetime from 'react-datetime';
// import { useState } from "react";
// import { on } from "events";
// import axios from "axios";
// // import event from "../../../server/controller/EventController";


// export default function ({ isOpen, onClose, OnEventAdded }) {
//     const [title, setTitle] = useState("");
//     const [roomName, setroomName] = useState("");
//     const [StartTime, setStartTime] = useState(new Date());
//     const [EndTime, setEndTime] = useState(new Date());
//     const [availability, setAvailability] = useState(false);

//     const handleSubmit = async(event) => {
//         event.preventDefault();

//         OnEventAdded({
//             title,
//             roomName,
//             StartTime,
//             EndTime,
//             availability,

//         })
//         // console.log(OnEventAdded)
//         const submitedData={
//             title:title,
//             roomName:roomName,
//             StartTime:StartTime,
//             EndTime:EndTime,
//             availability:availability
//         }
//         const config={
//             headers:{
//                 "Content-Type":"application/json"
//             }
//         }
//         const data = await axios.post('http://localhost:5000/event',
//            submitedData,config)
//         console.log(data)
//         onClose();
//     }



//     return (
//         <Modal isOpen={isOpen} onRequestClose={onClose}>
//             <form onSubmit={handleSubmit}>
//                 <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
//                 <select placeholder="Select Room" value={roomName} onChange={e => setroomName(e.target.value)}>
//                     <option>RoomONe</option>
//                     <option>RoomTwo</option>
//                     <option>RoomThree</option>
//                     <option>RoomFour</option>
//                 </select>
//                 <div>
//                     <label>StartTime</label>
//                     <Datetime value={StartTime} onChange={date => setStartTime(date)} />
//                 </div>
//                 <div>
//                     <label>EndTime</label>
//                     <Datetime value={EndTime} onChange={date => setEndTime(date)} />
//                 </div>

//                 <div>
//                     <input type="checkbox"  value={availability} onChange={chk => setAvailability(chk)} />
//                 </div>

//                 <button >Add Event</button>

//             </form>

//         </Modal>
//     )
// }