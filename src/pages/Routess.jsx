import React from 'react'
import {Routes, Route} from "react-router-dom"
import Frontend from '../Components/Frontend'
// import Services from "../Components/Frontend/Services"


const Routess = () => {
  return (
   <>
   <Routes>
     <Route path="/*" element={<Frontend/>}/>
     {/* <Route path='/services' element={<Services/>} /> */}
     {/* <Route path="/*" element={<>}/> */}
   </Routes>
   </>
  )
}

export default Routess
