import React, { Component } from "react";
import "./Login.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }
  render() {
    return (
      console.log(this.state.email),
      (
        <div>
          <div className="red-line"></div>
          <div className="login-container">
            <div className="top-icon">
              <img src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e4bb4398d9bb47b6830dc79_nav-logo-blue.svg" />
            </div>
            <div className="main-box">
              <div className="Welcome-box">
                <h2>Welcome To Traacker</h2>
              </div>
              <div className="email-enter-box">
                <h3>Enter Your Email</h3>
              </div>
              <div className="email-form">
                <form>
                  <input
                    className="input-box"
                    placeholder="Enter your email"
                    onChange={(e) => {
                      this.setState({
                        email: e.target.value,
                      });
                    }}
                  />

                  <button className="login-button">Next</button>
                </form>
              </div>
            </div>
            <div className="footer-box">
              <p>
                © 2020 <a href="#home">Traacker</a>|
                <a href="#home">Terms of Service</a>|
                <a href="#home">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      )
    );
  }
}
