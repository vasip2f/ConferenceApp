import { configureStore } from "@reduxjs/toolkit" 

import Authreducer from './features/authSlice' 

import TourReducer from './features/tourSlice' 



export default configureStore ({
    reducer:{
        auth:Authreducer,
        tour:TourReducer
    }
})