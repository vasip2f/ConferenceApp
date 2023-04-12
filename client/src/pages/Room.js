import React from 'react'
import Calendar from '../components/Calendar';
import Modal from 'react-modal';


Modal.setAppElement('#root');

export default function Room() {
  return (
    <div>
      <Calendar />
    </div>
  )
}
