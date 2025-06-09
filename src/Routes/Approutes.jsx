import React from "react"
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Help from "../pages/Help"
import Signin from "../pages/Signin"
import Register from "../pages/Register";
import Landing from "../pages/Landing";
import Contact from "../pages/Contact"
import Corporate from "../pages/Corporate"
import Legal from "../pages/Legal"
import Terms from "../pages/Terms"
import Ways from "../pages/Ways"
import Privacy from "../pages/Privacy"
import ScrollToTop from "../components/ScrollToTop";
 
 
 function Approutes  ()  {
   return (
      <>
     <ScrollToTop />
      <Routes>
     <Route index element={<Landing />} />
      <Route path="signin" element={<Signin />} />
      <Route path="register" element={<Register />} />
      <Route path="help" element={<Help />} />
      <Route path="contact" element={<Contact />} />
      <Route path="corporate" element={<Corporate />} />
      <Route path="legal" element={<Legal />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="ways" element={<Ways />} />
</Routes>
      </>
   )
 }
 
 export default Approutes
 