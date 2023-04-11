import React from 'react'
import { Button } from 'react-bootstrap'

const EventList = () => {
  return (
    <div>
        <div className='row'>
            <div className='mt-5 mb-4'>
                <Button varient='primary'><i className='fa fa-plu'></i>Add New event</Button>
            </div>
        </div>
        <div className='row'>
            <div className='table-responsive'>
                <table className='table table-striped table-hover table-border'>
                    <thead>
                        <tr></tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
  )
}

export default EventList