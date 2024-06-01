import React from 'react'
import Navbar from "./Frontend/Navbar"
import Footer from './Frontend/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Frontend/Home'
import Hero from './Frontend/Hero'
import Mid from './Frontend/Mid'
import Contact from './Frontend/Contact'
import Services1 from './Frontend/Services1'
import Banner from './Frontend/Banner'
import Services from './Frontend/Services'
import Location from '../pages/Location'

const Frontend = () => {
  return (
    <>
    <Navbar/>
<Routes>
    <Route path='/'>
    <Route index element={<Home/>}/>
        <Route path='hero' element={<Hero/>}/>
        <Route path='mid' element={<Mid/>}/>
        <Route path='services1' element={<Services1/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='banner' element={<Banner/>}/> 
        <Route path='/services' element={<Services/>} />
        {/* <Route path='/location' element={<Location/>} /> */}
    </Route>
</Routes>
        

    <Footer/>
    </>
  )
}

export default Frontend
