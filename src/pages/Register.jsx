import React from 'react'
import "./Form.css"


function Register  ()  {
  return (
    <div className='body'>

      <div className="form-container">
        <h2>Create an Account</h2>
        <form action="">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" name="first-name" required/>

            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last Name" name="last-name" required/>

            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" name="email" required/>

            <label for="password">New Password</label>
            <input type="password" id="password" placeholder="New Password" name="password" required/>

            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm Password" name="confirm-password" required/>

            <input type="submit" value="Register"/>
        </form>
        <p id='notaccount'>Already have an account? Sign in</p>
    </div>
    </div>
  )
}

export default Register
