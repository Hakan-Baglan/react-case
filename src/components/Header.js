import React, { Component, } from "react";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="navbar justify-content-center">
          <ul className="d-flex mt-4">
            <li><a>Home</a></li>
            <li><a>Services</a></li>
            <li><a>Downloads</a></li>
            <li><a>Contact Us</a></li>
          </ul>
            <div className="iconlars d-flex">
                <i id="navicon" class="fab fa-facebook-f"></i>
                <i id="navicon" class="fab fa-twitter"></i>
                <i id="navicon" class="fab fa-instagram"></i>
                </div>
        </div>
      
      </div>
    );
  }
}
