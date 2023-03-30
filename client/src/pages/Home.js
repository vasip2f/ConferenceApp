import React from 'react';
import Modal from 'react-modal';
import Calendar from '../components/Calendar';
import AddEventModal from '../components/ConfirmMeetingmodal';

Modal.setAppElement('#root');

const Home = () => {
  return (
    <div >
      <Calendar />   
      
       {/* <AddEventModal /> */}
    </div>
  )
}

export default Home
