import React, { Component } from "react";
import "./register.css";

export default class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="row">
          <div className="col-6 left">
            <div className="row justify-content-center">
              <form className="form-signin">
                <div className="text-center mb-4">
                  <h1 className="h3 mb-3 font-weight-normal">Join us today!</h1>
                  <p>
                    Create your account now. And join <br />
                    our community, it’s free
                  </p>
                </div>
                <div className="form-label-group">
                  <label>Your Name</label>
                  <input type="text" className="form-control" required />
                </div>

                <div className="form-label-group">
                  <label>Email Mail</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    autofocus
                  />
                </div>

                <div className="form-label-group">
                  <label>Password</label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    required
                  />
                </div>

                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> I gree
                  </label>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Create accounts
                </button>
                <a href="#">Forgot password?</a>
                <div className="d-flex">
                  <span className="hr1">
                    <hr />
                  </span>
                  <p>or sign up with</p>
                  <span className="hr2">
                    <hr />
                  </span>
                </div>
                <button className="facebtn" type="submit">
                  Facebook
                </button>
              </form>
            </div>
          </div>
          <div className="col-6 right">
            <div className="subscribe">
              <div className="context">
                <p>Short headline</p>
                <h1>
                  Subcribe our <br /> newsletter
                </h1>
                <p>
                  Online businesses utilize newsletters to <br/> keep their brand
                  top-of-mind for <br/> consumers, establishing authority.
                </p>
                <button className="btn btn-primary btn-lg btn-block" type="submit">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
