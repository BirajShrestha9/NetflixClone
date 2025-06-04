import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'


function Navbar() {
  return (
  
      <div className="header-container">
        <h1 id='title' >NETFLIX</h1>
      <Link to="/signin" id='signin'>  Sign in</Link> 
      </div>
      
    
  )
}

export default Navbar
