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
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Contacts</a>
                      </li>
                      <li>
                        <a href="#">License</a>
                      </li>
                    </ul>
                  </div>

                  <div className="hizlilink">
                    <ul>
                      <h3>Products</h3>
                      <li>
                        <a href="#">Design Kit</a>
                      </li>
                      <li>
                        <a href="#">Component</a>
                      </li>
                      <li>
                        <a href="#">Elements</a>
                      </li>
                      <li>
                        <a href="#">Illustrations</a>
                      </li>
                    </ul>
                  </div>

                  <div className="hizlilink">
                    <ul>
                      <h3>Site Map</h3>
                      <li>
                        <a href="#">Icons</a>
                      </li>
                      <li>
                        <a href="#">Photos</a>
                      </li>
                      <li>
                        <a href="#">Templates</a>
                      </li>
                      <li>
                        <a href="#">Fonts</a>
                      </li>
                    </ul>
                  </div>

                  <div className="hizlilink">
                    <ul>
                      <h3>Social Media</h3>

                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Tweeter</a>
                      </li>
                      <li>
                        <a href="#">License</a>
                      </li>
                      <li>
                        <a href="#">Linkeidin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className="iconlar">
                  <i id="fotricon" className="fab fa-facebook-f"></i>
                  <i id="fotricon" className="fab fa-twitter"></i>
                  <i id="fotricon" className="fab fa-instagram"></i>
                </div>

                <div>
                  <p className="text-center m-0">Copyright @ 2020 Themesmile</p>
                </div>
                <ul className="d-flex justify-content-end hr-bottom-link">
                  <li>
                    <a href="#">Logic</a> |{" "}
                  </li>
                  <li>
                    <a href="#">Term And Condtions </a> |{" "}
                  </li>
                  <li>
                    <a href="#">License</a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
