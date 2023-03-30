import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:5000"});  

export  const signIn =  (formData) => API.post("/login",formData)
export const signUp  = (formData) =>API.post('/signup',formData) 

export const googleSignIn = (result) =>API.post('/googlesignIn');


export const createTour = (tourData) =>API.post('/createTour',tourData) 
