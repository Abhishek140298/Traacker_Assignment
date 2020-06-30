import React, { Componenet } from "react";

import { Navbar, Form, Nav, Button, FormControl } from "react-bootstrap";
import LoginPage from "../login/LoginPage";
import "./Navigation.css";
import message from "../landingPage/image/message.png";

let orangeLogo =
  "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e4bb43bf08158791d23d7ce_nav-logo-rose.svg";
let blueLogo =
  "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e4bb4398d9bb47b6830dc79_nav-logo-blue.svg";

export default class Naav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hover_product: false,
    };
  }
  mouseevent() {
    this.setState((state) => ({ hover: !state.hover }));
  }
  mouseeeventout() {
    this.setState((state) => ({ hover: false }));
  }
  mouseonproduct() {
    this.setState((state) => ({ hover_product: !state.hover_product }));
  }
  mouseoutproduct() {
    this.setState((state) => ({ hover_product: false }));
  }
  render() {
    console.log(this.state.hover);
    return (
      <div className="header">
        <Navbar
          className="nav_bar"
          onMouseOut={this.mouseeeventout.bind(this)}
          onMouseOver={this.mouseevent.bind(this)}
        >
          <Nav>
            <Navbar.Brand href="/">
              <img src={this.state.hover ? blueLogo : orangeLogo} />
            </Navbar.Brand>
          </Nav>
          <Nav className="About_Traacker">
            <Nav.Link
              href="#home"
              onMouseOver={this.mouseonproduct.bind(this)}
              /*onMouseOut={this.mouseoutproduct.bind(this)}*/
              style={
                this.state.hover ? { color: "#677080" } : { color: "#ffffff" }
              }
            >
              Product
            </Nav.Link>
            <Nav.Link
              href="#home"
              style={
                this.state.hover ? { color: "#677080" } : { color: "#ffffff" }
              }
            >
              WhyTracker?
            </Nav.Link>
            <Nav.Link
              href="/blogs"
              style={
                this.state.hover ? { color: "#677080" } : { color: "#ffffff" }
              }
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="/resource"
              style={
                this.state.hover ? { color: "#677080" } : { color: "#ffffff" }
              }
            >
              Resources
            </Nav.Link>
          </Nav>
          <Nav
            className="Login"
            style={
              this.state.hover ? { color: "#677080" } : { color: "#ffffff" }
            }
          >
            <Nav.Link
              href="/users/login"
              style={
                this.state.hover ? { color: "#677080" } : { color: "#ffffff" }
              }
            >
              Login
            </Nav.Link>
            <div className="button">
              <img
                src={message}
                style={{ marginBottom: "8px", marginRight: "8px" }}
              />{" "}
              Talk to us
            </div>
          </Nav>
        </Navbar>
        {this.state.hover_product ? this.productdiv() : null}
      </div>
    );
  }
  productdiv() {
    console.log(this.state.hover_product);
    return (
      <div
        className="main_product"
        /* onMouseOver={this.mouseonproduct.bind(this)}*/
        onMouseOut={this.mouseoutproduct.bind(this)}
      >
        <img src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e1409589314cc42cfaa3205_ic_checklist.svg" />
        <div className="solution_div">
          Solution{" "}
          <div style={{ fontSize: "18px", paddingTop: "20px" }}>for Brands</div>
          <div style={{ fontSize: "18px", paddingTop: "20px" }}>
            For Agencies
          </div>
        </div>

        <img src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e1409589314cc42cfaa3205_ic_checklist.svg" />
        <div>Use Cases</div>
      </div>
    );
  }
}
