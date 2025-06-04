import React from 'react'

import Ft from '../components/Ft'
import "./Layout.css"

function Corporate ()  {
  return (
    <div className='body'>
      
      
      <div className="layout"  style={{marginTop:"0px"}}>
  <div className="print"><button href="" id="print" >Print</button></div>
  <h1 id="mid">Corporate Information</h1>
    <br/><br/>
    <p>We're here to help if you need it -- for the fastest answer to your questions, we encourage you to reach out to our customer service. Visit the Help Center for more info or contact us.  </p>
    <p>If you have a request for a TV show or movie, see Request TV shows or movies.</p>
    <br/>
    <h4>Contractual partner and point of contact for Netflix members:</h4>
    <p>Netflix Pte. Ltd.</p>
    <p>9 Straits View, Marina One West Tower #14-07/12</p>
    <p>Singapore 018937</p>
    <p>Registration ID No. 201531197W</p>
    <br/>
    <h4>Data Controller:</h4>
    <p>Netflix Pte. Ltd.</p>
    <p>9 Straits View, Marina One West Tower #14-07/12</p>
    <p>Singapore 018937</p>
    <p>Registration ID No. 201531197W</p></div>
      <Ft/>

    </div>
  )
}

export default Corporate
