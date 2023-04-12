import React from 'react';
import Modal from 'react-modal';
import Calendar from '../components/Calendar';
import Table from "../components/Table";





Modal.setAppElement('#root');

const ComponentPage = () => {

  // var showdate = new Date();
  // var displaytodaysdate = showdate.getDate()+ ':' +showdate.getmonth()+ ':' +showdate.getFullYear();
  return (

    <div>
       <Calendar />
      <Table /> 
      {/* <div>
        <input type='text' value={displaytodaysdate} readOnly='true' />
      </div> */}



    </div>
  )
}

export default ComponentPage