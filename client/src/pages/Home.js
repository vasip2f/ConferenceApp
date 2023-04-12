import React from 'react';
import Modal from 'react-modal';
import Calendar from '../components/Calendar';
import Table from "../components/Table";
import { Link } from 'react-router-dom'
import DisplayEvents from '../components/DisplayEvents';




Modal.setAppElement('#root');

const Home = () => {

  // var showdate = new Date();
  // var displaytodaysdate = showdate.getDate()+ ':' +showdate.getmonth()+ ':' +showdate.getFullYear();

  return (
    <div>
      
      <Link to="/home/ComponentPage">
        <button type='submit' style={{color:'blue', marginTop:"10px", background:"lightblue", textSizeAdjust:"inherit"} }  >𝐁𝐨𝐨𝐤 𝐘𝐨𝐮𝐫 𝐑𝐨𝐨𝐦</button> 
        </Link>

      {/* <Calendar />
      <Table />  */}
      <DisplayEvents />
      {/* <div>
        <input type='text' value={displaytodaysdate} readOnly='true' />
      </div> */}



    </div>
  )
}

export default Home
