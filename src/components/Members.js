import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./members.css";

export default class Members extends Component {
  render() {
    let members = [{}, {}, {}, {}, {}];
    return (
      <div>
        <div className="row">
          <div className="description text-center">
            <p>TEAM</p>
            <h3>Meet Our Big Family</h3>
            <p>
              Ullamco id est eu ad culpa laborum. In sit est velit et nostrud ad
              officia <br /> officia ex aliqua elit.
            </p>
          </div>
          <div className="carts d-flex">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {members.map((elm,index) => (
                <SwiperSlide key={index}>
                  <div className="cart d-flex">
                    <div className="img">
                      <span className="span1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                      </span>
                    </div>
                    <div className="title">
                      <div className="description">
                        <h6>Annette Hawkins</h6>
                        <p>Art Director of Gillette</p>
                        <div className="iconlar">
                          <i className="fab fa-facebook-f"></i>
                          <i className="fab fa-twitter"></i>
                          <i className="fab fa-instagram"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
}

{
  /*  */
}
