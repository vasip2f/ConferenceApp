import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {MDBCard,MDBCardHeader,MDBCardFooter,MDBValidation,MDBSpinnerMDB,MDBBtn, MDBCardBody} from "mdb-react-ui-kit" 

import ChipInput from 'material-ui-chip-input' 
import FileBase from 'react-file-base64' 

import{toast} from 'react-toastify' 

import {useNavigate}from 'react-router-dom'


import {useDispatch,useSelector} from 'react-redux' 
import { createTour } from '../redux/features/tourSlice'

const initialState = {
  title:"",
  description:"",
  tags:[]
}

const AddEditTour = () => {

  const [tourData, setTourData] = useState(initialState) 


  const {error , loading} = useSelector((state)=>({...state.tour}))
  const {user}  = useSelector((state)=>({...state.auth}))
const dispatch = useDispatch()

const navigate =useNavigate()


  // const{title,description,tags}  = tourData

  const {title,description,tags } = tourData
 

  // useEffect =(()=>{
  //   error && toast.error(error)

  // },[error]);

  // const onInputChange = (e)=>{
  //   const{name,value} =e.target.value
  //   setTourData({...tourData,[name]:value})
  // }
const handleSubmit = (e) =>{
   e.preventDefault()
  if(title && description && tags){
    const updatedTourData = {...tourData, name:user?.result?.name} 
    console.log("hello word")
     console.log(updatedTourData)
    // console.log(tourData)

   dispatch(createTour({updatedTourData ,navigate, toast}))
   

  }
 
  hanldeClear(); 

};

const onInputChange = (e) => {
  const { name, value } = e.target;
  setTourData({ ...tourData, [name]: value });
};
const handleAddTag = (tag) =>{
  setTourData({...tourData,tags:[...tourData.tags,tag ]})
};
const handleDeleteTage = (deleteTag)=>{
setTourData({
  ...tourData,
  tags:tourData.tags.filter((tag)=>tag !== deleteTag)
})
};

const hanldeClear = () =>{
setTourData({title:" ", description :" " ,tags :[]})
};

  return (
    <div style={{margin:"auto" ,padding:"15px",maxWidth :"450px" ,alignContent:"center",marginTop:"120px"}} className="container">

      <MDBCard alignment='center'>
        <MDBCardBody>
        <h3>Add Tour</h3>
        <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
          <div className='col-md-12'>
            <input type="text"
            placeholder="Enter title"
            value={title}
            name="title"
            onChange={onInputChange}
            className='form-control'
            required
            invalid 
            validation="please provide title">
            </input>
          </div>
          <div className='col-md-12'>
            <textarea type="text"
            placeholder="Enter the description"
            value={description}
            style={{height:"100px",marginTop:"20px"}}
            name="description"
            onChange={onInputChange}
            className='form-control'
            required
            invalid 
            validation="please provide Description">
            </textarea>
          </div>
         <div className='col-md-12'>
          <ChipInput
           name ='tags' 
           variant='outlined'
           placeholder='Enter Tgas'
           fullWidth
           value={tags}
           onAdd = {(tag)=>handleAddTag(tag)}
           onDelete = {(tag) =>handleDeleteTage(tag)}
           >
         

          </ChipInput>
         </div>
         <div className='d-flex justify-content-start'>
         <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setTourData({ ...tourData, imageFile: base64 })
                }
              />
         </div>
<div className='col-12'>
  <MDBBtn style={{width:"100%"}} className="mt-2">Submit</MDBBtn>
  <MDBBtn style={{width:"100%"}}  className = "mt-2" color="danger" onClick={hanldeClear}>Create</MDBBtn>

</div>

        </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default AddEditTour
