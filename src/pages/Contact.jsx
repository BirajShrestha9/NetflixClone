import React from 'react'
import Navbar from '../components/Navbar'
import "./Contact.css"

function Contact ()  {
  return (
    <div className='body'>
    
  
  <div className="form-container">
        <h2 >Contact Us</h2>
        <form action="">
            <label for="Name">Your Name</label>
            <input type="text" placeholder="Full Name" id="input"/>
            <label for="email">Email</label>
            <input type="email" id="input"  placeholder="Email Address" name="email" required/>
            <h4>Tell us more and we'll find the best solution for you</h4>
            <textarea name="issue" id="input" placeholder='Your issue goes here...'></textarea>
            <input type="submit" value="Submit"/>
        </form>
        </div>    
    </div>
  )
}

export default Contact
