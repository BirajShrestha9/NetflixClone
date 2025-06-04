import React from 'react'
import "./Form.css"

function Signin  (){
  return (
    <div className='body'>
      
      
      <div className="form-container">
        <h2 style={{ fontSize: '30px' }}>Sign In!</h2>
        <form action="">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" name="email" required/>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" name="password" required/>

            <input type="submit" value="Sign In"/>
        </form>
         <p id='notaccount'>Don't have an account? Sign up</p>
    </div>


    </div>
  )
}

export default Signin
