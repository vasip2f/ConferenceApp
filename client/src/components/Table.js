import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Datetime from 'react-datetime';
import moment from "moment";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DateTimePicker from 'react-datetime-picker';


//********************************** */



//******************************** */

function Table() {
    const [Data, setData] = useState([])
    const [RowData, setRowData] = useState([]);
    const [ViewShow, setViewShow] = useState(false);
    const handleViewShow = () => { setViewShow(true) }
    const handleViewClose = () => { setViewShow(false) }

    // For Edit Modal*****
    const [ViewEdit, setEditShow] = useState(false);
    const handleEditShow = () => { setEditShow(true) }
    const handleEditClose = () => { setEditShow(false) }

    // For delete Modal*****
    const [ViewDelete, setDeleteShow] = useState(false);
    const handleDeletShow = () => { setDeleteShow(true) }
    const handleDeleteClose = () => { setDeleteShow(false) }

    // For Add new data Modal*****
    const [ViewPost, setPostShow] = useState(false);
    const handlePostShow = () => { setPostShow(true) }
    const handlePostClose = () => { setPostShow(false) }


    //define local state that store the form data
    const [title, setTitle] = useState();
    const [roomName, setroomName] = useState();
    const [StartTime, setStartTime] = useState(new Date());
    const [EndTime, setEndTime] = useState(new Date());
    const [availability, setAvailability] = useState(true);


    const [Delete, setDelete] = useState(false);
    //id for update record and delete
    const [id, setId] = useState("");




    useEffect(() => {
        axios.get('http://localhost:5000/get-events')
            .then((d) => {
                setData(d.data)
            })
            .catch((e) => { console.log(e) })

    }, [])

    const handleSubmit = () => {
        const Credentials = { title, roomName, StartTime, EndTime, availability }
        axios.post('http://localhost:5000/create-event', Credentials)
        .then((d) => {
            setData(d.data)
        })
        .catch((e) => { console.log(e) })
         window.location.reload();
    }


    const handleEdit = () => {
        const Credentials = { title, roomName, StartTime, EndTime, availability }
        axios.put(`http://localhost:5000/update-event/${id}`, Credentials)
            .then((d) => {
                setData(d.data)
            })
            .catch((e) => { console.log(e) })
        window.location.reload();

    }

    //handle delete function

    const handleDelete = () => {

        axios.delete(`http://localhost:5000/delete-event/${id}`)
            .then((d) => {
                setData(d.data)
            })
            .catch((e) => { console.log(e) })
        window.location.reload();

    }



    return (
        <div >
            <h1 className='text-danger'> Booked Events</h1>
            {/* {JSON.stringify(data)} */}

            <div className='row'>
                <div className='mt-5 mb-4'>
                    {/* <Button varient='primary'  onClick={() => { handlePostShow() }} ><i className='fa fa-plu'></i>Add New event</Button> */}
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead className='bg-warning text-Black'>
                            <tr>
                                <th>Title</th>
                                <th>Room Name</th>
                                <th>StartTime</th>
                                <th>EndTime</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.title}</td>
                                    <td>{item.roomName}</td>
                                    <td>{item.StartTime}</td>
                                    <td>{item.EndTime}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' varient='primary' onClick={() => { handleViewShow(setRowData(item)) }}>View</Button>|
                                        <Button size='sm' varient='warning' onClick={() => { handleEditShow(setRowData(item), setId(item._id)) }}>Edit</Button>|
                                        <Button size='sm' varient='danger' onClick={() => { handleViewShow(setRowData(item), setId(item._id), setDelete(true)) }}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        <tbody></tbody>
                    </table>

                </div>



            </div>
            {/* create modal for view data */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={handleViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Event Detail</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <div className='form-group'>
                                    <input type='text' className='form-control' required value={RowData.title} readOnly />
                                </div>
                            </div>
                            <div>
                                <div className='form-group mt-3'>
                                    <input type='text' className='form-control' required value={RowData.roomName} readOnly />
                                </div>
                            </div>
                            <div>
                                <div className='form-group mt-3'>
                                    <input type='text' className='form-control' required  value={RowData.StartTime} readOnly />
                                </div>
                            </div>
                            <div>
                                <div className='form-group mt-3'>
                                    <input type='text' className='form-control' required value={RowData.EndTime} readOnly />
                                </div>
                            </div>



                        </div>
                        {
                            Delete && (
                                <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Confirm Again</Button>
                            )
                        }


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleViewClose}>Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>

            {/* modal for Submit data to database */}

            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={handlePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Book Your Conference Meeting</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type='text' className='form-control' required value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Please Enter your Title' />
                            </div>

                            <div>
                                <div className='form-group mt-3'>
                                    <label style={{ color: "blue" }}>Select your Room</label>
                                    <select placeholder="Select Room" value={roomName} required onChange={e => setroomName(e.target.value)}>
                                        <option>  </option>
                                        <option>RoomOne</option>
                                        <option>RoomTwo</option>
                                        <option>RoomThree</option>
                                        <option>RoomFour</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className='form-group mt-3'>
                                    <label style={{ color: "blue" }}>StartTime</label>
                                    <DateTimePicker value={StartTime} required onChange={date => setStartTime(date)} />
                                    {/* <Datetime type='text' className='form-control' value={StartTime} onChange={Datetime => setStartTime(Datetime)} placeholder='Event Start Time' /> */}
                                </div>
                            </div>
                            <div>
                                <div className='form-group mt-3'>
                                    <label style={{ color: "blue" }}>EndTime</label>
                                    <DateTimePicker value={EndTime} required onChange={date => setEndTime(date)} />
                                    {/* <Datetime type='text' className='form-control' value={EndTime} onChange={Datetime => setEndTime(Datetime)} placeholder='Event End Time' /> */}
                                </div>
                            </div>
                            {/* <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmit}>Add new Event</Button> */}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handlePostClose}>Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>

            {/* modal for Edit data to database */}

            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={handleEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Book Your Conference Meeting</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <lable>Title</lable>
                                <input type='text' className='form-control'  value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Please Enter your Title' defaultValue={RowData.title} />
                            </div>

                            <div>
                                <div className='form-group mt-3'>
                                    <label style={{ color: "blue" }}>Select your Room</label>
                                    <select placeholder="Select Room" value={roomName} required onChange={e => setroomName(e.target.value)} defaultValue={RowData.roomName}>
                                        <option>  </option>
                                        <option>Big Room</option>
                                        <option>Small Room</option>
                                        <option>Booth One</option>
                                        <option>Booth Two</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className='form-group mt-3'>
                                    <label style={{ color: "blue" }}>StartTime</label>
                                    <DateTimePicker type='text' className='form-control' value={StartTime} onChange={(e) => setStartTime(e)} placeholder='Event Start Time' defaultValue={RowData.StartTime} />
                                </div>
                            </div>
                            <div>
                                <div className='form-group mt-3'>
                                    <label style={{ color: "blue" }}>EndTime</label>
                                    <DateTimePicker type='text' className='form-control' value={EndTime} onChange={(e) => setEndTime(e)} placeholder='Event End Time' defaultValue={RowData.EndTime} />
                                </div>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Update</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleEditClose}>Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>



        </div>




    );
};

export default Table



// data.map((item, key) => {
//     return <tr>
//         <td>{item._id}</td>
//         <td>{item.title}</td>
//         <td>{item.roomName}</td>
//         <td>{item.StartTime}</td>
//         <td>{item.EndTime}</td>
//         <td>{item.availability}</td>
//     </tr>
// })