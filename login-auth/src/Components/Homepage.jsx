import React from 'react'
import NavBar from './NavBar'
import './style.css'

function Homepage() {
  return (
    <>
   <NavBar/>

   <div className='banner'>
    <h1 className='head'> Cyber Security </h1>
    <p className='para'>The practice of defending computers, servers, mobile devices, electronic systems
      <br/>, networks, and data from malicious attacks. </p>
   </div>
   </>
  )
}

export default Homepage
