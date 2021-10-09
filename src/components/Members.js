import React, { Component } from 'react'
import "./members.css"
export default class Members extends Component {
    render() {
        return (
            <div>
               <div className="row">
                   <div className="description">
                       <p>team</p>
                   </div>
               <div className="cart d-flex">
                       <div className="img">
                       <span className="span1">
                       <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                       </span>
                       </div>
                       <div className="title">
                           <div className="information">
                           <h6>Annette Hawkins</h6>
                           <p>Art Director of Gillette</p>
                           </div>
                       </div>
                   </div>
                   <div className="cart d-flex">
                       <div className="img">
                       <span className="span2">
                       <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-person-fill"
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
                           </div>
                       </div>
                   </div>
                   <div className="cart d-flex">
                       <div className="img">
                       <span className="span3">
                       <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-person-fill"
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
                           </div>
                       </div>
                   </div>
                   
                   
               </div>
            </div>
        )
    }
}
