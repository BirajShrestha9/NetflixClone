import React from 'react'
import './Ft.css'
import { Link } from 'react-router'

function Ft(){
  return(
    <div className='block'>
 <div className="foot"> 
   <footer className="footer-container" >
   <Link to="/contact" id="ft">Contact Us</Link>
  <Link to="/help" id="ft">Help Center</Link>
  <Link to="/terms" id="ft">Terms of Use</Link>
  <Link to="/ways" id="ft">Ways to watch</Link>
  <Link to="/privacy" id="ft">Privacy</Link>
  <Link to="/legal" id="ft">Legal Notices</Link>
  <Link to="" id="ft">Only on Netflix</Link>
  <Link to="corporate" id="ft">Corporate Information</Link>
  <Link to="" id="ft">Speed test</Link>
  <Link to="/Signin" id="ft">Account</Link>
  <Link to="" id="ft">FAQ</Link>
  <Link to="" id="ft">Trending</Link>
  <Link to="" id="ft">Reasons</Link>
 <Link to="" id="ft">Packages</Link>
  
</footer>

</div>

<div className="footer-bottom">
  <div className="language-selector">
  <span className="icon">🌐</span>
  <span>English</span>
  <span className="arrow">▼</span>
</div>
  <div className="copyright">
    <p>© 2025 Netflix, Inc.</p>
  </div>
  

</div>
    </div>


)
}

export default Ft