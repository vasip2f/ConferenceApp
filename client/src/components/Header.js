import React, { useState } from 'react'


import {MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarBrand} from 'mdb-react-ui-kit'

    import { useSelector } from 'react-redux'
    import { useDispatch } from 'react-redux'
import { setLogout } from '../redux/features/authSlice'
import { Link } from 'react-router-dom'
const Header = () => {

    const [show,setShow] = useState(false)
    const dispatch  = useDispatch()

    const {user} = useSelector((state)=>({...state.auth})) 
    const handleLogout = ()=>{
        dispatch(setLogout())
    }
   return (
   <MDBNavbar  expand="lg"  style={{backgroundColor:"blue", }}>
    <MDBContainer>
        <MDBNavbarBrand  href = '/' style={{color:"white",fontWeight:"600" ,fontSize:"22px", fontFamily: "arial"}}>
           Conference Room Booking App
        </MDBNavbarBrand>
        {/* <MDBNavbarToggler
        type='button'
        aria-expanded="false"
        aria-label='Toogle  navigation' 
        onClick={()=> setShow(!show)}
        >
            <MDBIcon icon='bars' fas />

        </MDBNavbarToggler>
            
            style={{color:"#0606080"}} */}

            <MDBCollapse show={show} navbar>
                <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
                    {user?.result?._id &&(
                        <h6 style={{marginRight:"30px",marginTop:"17px", color: "white"}}>Welcome :{user?.result?.email}</h6>
                    )}
                    <MDBNavbarItem >
<<<<<<< HEAD
                        <MDBNavbarLink href='/home'>
=======
                        <MDBNavbarLink href=''>
>>>>>>> 89b7a62df508d07d70f07071cbbc6dd11926d26f
                             
                         <p className='header-text' style={{color:"white"}}>Calendar</p>

                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    {user?.result?._id && (
                        <>
                         <MDBNavbarItem >
                        {/* <MDBNavbarLink href='/home'>
                            <p className='header-text' style={{color: "white"}}>Meeting Room</p>

                        </MDBNavbarLink> */}
                    </MDBNavbarItem>
                    <MDBNavbarItem >
                        {/* <MDBNavbarLink href='/dashboard'>
                            <p className='header-text' style={{color: "white"}}>Admin View</p>

                        </MDBNavbarLink> */}
                    </MDBNavbarItem>
                        </>
                    )}
                   {user?.result?._id ? (
                    <MDBNavbarItem >
                    <MDBNavbarLink href='/login'>
                        <p className='header-text' style={{color:"white"}} onClick={handleLogout}>Logout</p>

                    </MDBNavbarLink>
                </MDBNavbarItem>

                   ) :(
                    <MDBNavbarItem >
                        <MDBNavbarLink href='/login'>
                            <p className='header-text' style={{color:"white"}}>Login</p>

                        </MDBNavbarLink>
                    </MDBNavbarItem>

                   )}

                    

                    


                </MDBNavbarNav>

            </MDBCollapse>

        
    </MDBContainer>

   </MDBNavbar>
  )
}

export default Header
