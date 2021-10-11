import React, { Component, } from "react";
import './Header.css';

export default class Header extends Component {
  render() {
   
    return (
      <div className="navbar" id="home">
        <div className="navbar justify-content-center">
          <ul className="d-flex mt-4">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#download">Downloads</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
            <div className="iconlars d-flex">
                <i id="navicon" className="fab fa-facebook-f"></i>
                <i id="navicon" className="fab fa-twitter"></i>
                <i id="navicon" className="fab fa-instagram"></i>
                </div>
        </div>
      
      </div>
    );
  }
}
