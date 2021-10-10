import React, { Component } from "react";
import "./HeroBanner.css";
export default class HeroBanner extends Component {
  render() {
    return (
      <div id="hero-banner mt-0">
          <div className="arka">
          </div>
        <div className="container">
        <div className="hero-title">
          <h1>
            head of a <br /> newspaper <br /> <span>Store.</span>
          </h1>

          <p className="mt-5">
            What's a resume headline, and how can it help you showcase <br />
            your credentials? A resume headline (also known as a <br /> resume
            title) is a brief phrase that highlights your value as a <br /> 
            candidate
          </p>
          <div className="btns">
            <button className="btn-started">Get Started</button>
            <button className="btn-links">Action Links</button>
          </div>
          <div className="mt-4">
            <p>
              Need more some information? <a href="#">Learn more</a>
            </p>
          </div>
          <div className="scroll">
            <p>SCROLL</p>
            <span className="cizgi"></span>
          </div>
        </div>
        <div className="img-alani">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-image"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
          </svg>
        </div>
        </div>
        
      </div>
    );
  }
}
