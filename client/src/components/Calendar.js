import React, { useRef, useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPligin from '@fullcalendar/timegrid';
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list"
import AddEventModel from "./AddEventModel";
import axios from "axios";
import Datetime from 'react-datetime';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import moment from "moment"
import ReactDom from "react-dom"
import { render } from "@fullcalendar/core/preact";
import { Button } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';





export default function () {

    const [title, setTitle] = useState("");
    const [roomName, setroomName] = useState("");
    const [StartTime, setStartTime] = useState(new Date());
    const [EndTime, setEndTime] = useState(new Date());
    const [availability, setAvailability] = useState(true);
    const calendarRef = useRef(null);

    const [eventList, setEventList] = useState([]);
    const [Data, setData] = useState([])

    


    const handleclick = async (event) => {
        event.preventDefault();
        // console.log(title, roomName, StartTime, EndTime, availability);
        const payload = {
            title: title,
            roomName: roomName,
            StartTime: StartTime,
            EndTime: EndTime,
            availability: availability
        }
        const config = {
            headers: {
                "Content-Type": "Application/json"
            }
        }
        await axios.post('http://localhost:5000/create-event', payload, config)

            .then(() => { console.log("added data from axios") })
            .catch((e) => { console.log("unable to added data from axios: " + e) })

        // window.location.reload();


            .then(() => { console.log("added data from axios") })
            .catch((e) => { alert("the slot is already booked") })

        // if(!payload){
        //     const message = `slot is already booked: ${payload.statusText}`;
        //     window.alert(message);
        // }

        // window.location.reload();

    }







    const EventDetail = ({ data, el }) => {
        useEffect(() => {
            axios.get('http://localhost:5000/get-events?StartTime=', + moment(data.StartTime).toISOString() + "EndTime=" + moment(data.EndTime).toISOString)
                .then((d) => {
                    setEventList(d.data)
                })
                .catch((e) => { console.log(e) })

        }, [])

        const content = <div>{data.title}<div>{data.roomName}</div></div>;
        ReactDom.render(content, el);
        return el;
    }


    useEffect(() => {
        axios.get('http://localhost:5000/get-events')
            .then((d) => {
                const cdata=d.data.map(item=>{
                    return {title:item.title,date:item.StartTime, date:item.EndTime}
                })
                setData(cdata)
            })
            .catch((e) => { console.log(e) })

    }, [])

    console.log(Data)
    




    return (

        <div>
            <div>
                <h4></h4>
                <Popup trigger=
                    {<Button varient='primary'><i className='fa fa-plu'></i>Schedule Meeting</Button>}

                    position="bottom right">
                    <div>
                        <form onSubmit={handleclick}>

                            <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
                            <select placeholder="Select Room" value={roomName} onChange={e => setroomName(e.target.value)} required>
                                <option>Big Room</option>
                                <option>Small Room</option>
                                <option>Booth One</option>
                                <option>Booth Two</option>
                            </select>
                            <div>
                                <label>StartTime</label>
                                <DateTimePicker value={StartTime} onChange={date => setStartTime(date)} required />
                            </div>
                            <div>
                                <label>EndTime</label>
                                <DateTimePicker value={EndTime} onChange={date => setEndTime(date)} required />
                            </div>
                            <button >Add Event</button>
                        </form>
                    </div>

                </Popup>
            </div>


            <section>
                <div style={{ position: "relative", zIndex: 0 }}>
                    <FullCalendar
                        ref={calendarRef}
                        plugins={[dayGridPlugin, timeGridPligin, InteractionPlugin, ListPlugin]}
                        initialView="dayGridMonth"
                        events={
                            Data
                          }

                        headerToolbar={{
                            start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
                            center: 'title',
                            end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",// will normally be on the right. if RTL, will be on the left

                        }}

                        // eventAdd={(event) => handleclick(event)}

                        // datesSet={(date)=>getallevents(date)}

                        eventRendar={EventDetail}


                        height="70vh"
                    />

                    {/* {JSON.stringify(eventList)} */}

                </div>

            </section>

            {/* <div>
                <p>delete Event</p>
                <button onSubmit={deleteClick}></button>
            </div> */}



        </div>

    )
}



