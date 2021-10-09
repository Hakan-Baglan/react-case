import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
           
            <footer>
              <div className="fotrlink d-flex">
                <div className="address">
                  <h3>Nala</h3> <br />
                  <p>
                    {" "}
                    2464 Royal Ln undefined Mesa,
                    <br /> New Jersey 45463 United States.
                  </p>
                  <p>(208) 555-0112</p>
                  <p>nevaeh.simmons@example.com</p>
                </div>
                <div className="linkler d-flex">
                    
                <div className="hizlilink">
                <ul>
                  <h3>Legals</h3>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Contacts</a>
                  </li>
                  <li>
                    <a>License</a>
                  </li>
                </ul>
                </div>
                
                <div className="hizlilink">
                <ul>
                  <h3>Products</h3>
                  <li>
                    <a>Design Kit</a>
                  </li>
                  <li>
                    <a>Component</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Illustrations</a>
                  </li>
                </ul>
                </div>
                
                <div className="hizlilink">
                <ul>
                  <h3>Site Map</h3>
                  <li>
                    <a>Icons</a>
                  </li>
                  <li>
                    <a>Photos</a>
                  </li>
                  <li>
                    <a>Templates</a>
                  </li>
                  <li>
                    <a>Fonts</a>
                  </li>
                </ul>
                </div>
                
                <div className="hizlilink">
                <ul>
                  <h3>Social Media</h3>
                  
                  <li>
                    <a>Facebook</a>
                  </li>
                  <li>
                    <a>Tweeter</a>
                  </li>
                  <li>
                    <a>License</a>
                  </li>
                  <li>
                    <a>Linkeidin</a>
                  </li>
                </ul>
                </div>

              </div>
                </div>
              <hr/>
              <div>
                  
              </div>
              <div className="iconlar"></div>

              <p className="text-center m-0">Copyright @ 2020 Themesmile</p>
             
             <ul className="d-flex justify-content-end hr-bottom-link">
                  <li><a>Logic</a>  | </li>
                  <li><a>Term And Condtions </a>  | </li>
                  <li><a>License</a></li>
              </ul>
        
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
