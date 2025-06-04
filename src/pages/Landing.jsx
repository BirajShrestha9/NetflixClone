import React from 'react'
import "./Landing.css"
import Ft from '../components/Ft'
import Movies from '../components/Movies'
import { Link } from 'react-router'

function Landing () {
  return (
    <div>
      <div className="body">
 <div className="banner">
        <b> <h1 className="banner-heading">Unlimited movies, TV shows, and more</h1></b>
        <h2 className="banner-subheading">Starts at Rs 250. Cancel anytime.</h2>
        <h6 className="banner-description">Ready to watch? Enter your email to create or restart your membership.</h6>
        <div className="email-input-container">
            <input type="email" placeholder="Email Address" className="email-input"/>

            <Link to="register" className="get-started-button">Get Started </Link>
        </div>
    </div> 
        <b> <h1 className="reasons-heading" id="reasons-heading">Trending Right Now</h1></b>
    
  <Movies/>

    <div id="reasons-page">
    <b> <h1 className="reasons-heading">Reasons To Join</h1></b>
    <div className="reasons-container">
        <div className="reason-box">
            <h2 className="reason-title">Enjoy on your TV</h2>
            <h4 className="reason-description">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
        </div>
        <div className="reason-box">
            <h2 className="reason-title">Download shows </h2>
            <h4 className="reason-description">Save your favorites easily and always have something to watch.</h4>
        </div>
        <div className="reason-box">
            <h2 className="reason-title">Watch everywhere</h2>
            <h4 className="reason-description">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
        </div>
        <div className="reason-box">
            <h2 className="reason-title">Create kids profiles</h2>
            <h4 className="reason-description">Stream unlimited movies and TV shows on your phone, laptop, etc.</h4>
        </div>
    </div></div>

    <b> <h1 className="faq-heading" id="faq-heading">Frequently Asked Questions</h1></b>
    <div className="faq-container">
        <div className="faq-item">
            <input type="checkbox" id="faq1"/>
            <label className="faq-title" for="faq1">1. How much does Netflix cost?</label>
            <div className="faq-content">
                <p>Netflix offers several subscription plans, including Basic, Standard, and Premium, with prices varying by region.</p>
            </div>
        </div>

        <div className="faq-item">
            <input type="checkbox" id="faq2"/>
            <label className="faq-title" for="faq2">2. How can I cancel my Netflix subscription?</label>
            <div className="faq-content">
                <p>You can cancel your Netflix subscription at any time by going to the Account settings and selecting 'Cancel Membership.'</p>
            </div>
        </div>

        <div className="faq-item">
            <input type="checkbox" id="faq3"/>
            <label className="faq-title" for="faq3">3. What devices can I watch Netflix on?</label>
            <div className="faq-content">
                <p>You can watch Netflix on a variety of devices, including smart TVs, smartphones, tablets, computers, and gaming consoles.</p>
            </div>
        </div>

        <div className="faq-item">
            <input type="checkbox" id="faq4"/>
            <label className="faq-title" for="faq4">4. How do I change the language on Netflix?</label>
            <div className="faq-content">
                <p>Go to Account  Language settings, and choose the language you prefer for both audio and subtitles.</p>
            </div>
        </div>

        <div className="faq-item">
            <input type="checkbox" id="faq5"/>
            <label className="faq-title" for="faq5">5. Can I share my Netflix account with others?</label>
            <div className="faq-content">
                <p>Netflix allows mlitiple users to share an account, depending on the plan you subscribe to. Each plan has a limit on how many screens can stream at the same time.</p>
            </div>
        </div>

        <div className="faq-item">
            <input type="checkbox" id="faq6"/>
            <label className="faq-title" for="faq6">6. Is Netflix available worldwide?</label>
            <div className="faq-content">
                <p>Yes, Netflix is available in most countries around the world, but the content library may vary depending on the region.</p>
            </div>
        </div>
    </div>

    <h6 className="email-prompt">Ready to watch? Enter your email to create or restart your membership.</h6>
    <div className="email-input-container">
        <input type="gmail" placeholder="Email Address" className="email-input"/>
          <Link to="register" className="get-started-button">Get Started </Link>
    </div>
    
   <Ft/>
  </div>    
    </div>
  )
}

export default Landing
