import React from "react";
import './App.css';

export const Footer = () => {
  return (
    <div className="footer d-flex">
    {/* <div class="logo">
      <img src={require('../images/logo.png')} id="icon" alt="logo" />
    </div> */}
    <div className="footer-copyright">
      <p style={{color: "red"}}>Cyd Losekann © 2022</p>
    </div>
  </div>
  )
}

export default Footer;
