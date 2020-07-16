import React, { Component } from "react";
import "./Login.css";
import { Nav } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", redirect: null };
  }
  onclick() {
    this.setState({ redirect: "/users/signup" });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}></Redirect>;
    }
    console.log(this.state.email, "abhi");
    return (
      <div className="red_line">
        <div className="top_red_line"></div>
        <div className="main_div">
          <img
            className="logo"
            src="https://app.traackr.com/img/svg/logo-white.svg"
          />

          <div className="main_login_div">
            <h1 className="welcome">Welcome to Traackr</h1>
            <h4 className="enter">Enter Your Email</h4>
            <form className="login_form">
              <input
                className="enter_email"
                placeholder="enter your email id"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              ></input>

              <button className="submit_button">Login</button>
              <button className="signup" onClick={() => this.onclick()}>
                Signup
              </button>
            </form>
          </div>
          <div className="links_div">
            <p className="fooetr_para_login">
              © 2020 <a href="#home">Traacker</a>|
              <a href="#home">Terms of Service</a>|
              <a href="#home">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
