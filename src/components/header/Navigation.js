import React, { Componenet } from "react";

import { Navbar, Form, Nav, Button, FormControl } from "react-bootstrap";
import LoginPage from "../login/LoginPage";
import "./Navigation.css";
import message from "../landingPage/image/message.png";

import ProductDiv from "./ProductDiv";
import CustomerList from "./WhyTraackr.js";

let orangeLogo =
  "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e4bb43bf08158791d23d7ce_nav-logo-rose.svg";
let blueLogo =
  "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e4bb4398d9bb47b6830dc79_nav-logo-blue.svg";

export default class Naav extends React.Component {
  constructor() {
    super();
  }
  mouseoverNav = () => {
    this.props.mouseoverNav();
  };
  mouseoverProduct = () => {
    this.props.mouseoverProduct();
  };
  mouseoutNav = () => {
    this.props.mouseoutNav();
  };
  mouseoutProduct = () => {
    this.props.mouseoutProduct();
  };
  mouseoverWhyTraackr = () => {
    this.props.mouseoverWhyTraackr();
  };
  mouseoutWhyTraackr = () => {
    this.props.mouseoutWhyTraackr();
  };

  render() {
    console.log(this.props.hover_product, "abhi");
    return (
      <div className="header">
        <Navbar
          className="nav_bar"
          onMouseOut={this.mouseoutNav.bind(this)}
          onMouseOver={this.mouseoverNav.bind(this)}
          style={
            this.props.hover_product || this.props.hover_whyTraackr
              ? { backgroundColor: "#ffffff" }
              : null
          }
        >
          <Nav>
            <Navbar.Brand href="/">
              <img
                src={
                  this.props.hover ||
                  this.props.hover_product ||
                  this.props.hover_whyTraackr
                    ? blueLogo
                    : orangeLogo
                }
              />
            </Navbar.Brand>
          </Nav>
          <Nav className="About_Traacker">
            <Nav.Link
              href="#home"
              onMouseOver={this.mouseoverProduct.bind(this)}
              /*onMouseOut={this.mouseoutproduct.bind(this)}*/
              style={
                this.props.hover ||
                this.props.hover_product ||
                this.props.hover_whyTraackr
                  ? { color: "#677080" }
                  : { color: "#ffffff" }
              }
            >
              Product
            </Nav.Link>
            <Nav.Link
              href="#home"
              /*   onMouseOver={this.mouseoutProduct.bind(this)}*/
              onMouseOver={() => {
                this.mouseoverWhyTraackr();
                this.mouseoutProduct();
              }}
              style={
                this.props.hover ||
                this.props.hover_product ||
                this.props.hover_whyTraackr
                  ? { color: "#677080" }
                  : { color: "#ffffff" }
              }
            >
              WhyTracker?
            </Nav.Link>
            <Nav.Link
              href="/blogs"
              onMouseOver={this.mouseoutProduct.bind(this)}
              style={
                this.props.hover ||
                this.props.hover_product ||
                this.props.hover_whyTraackr
                  ? { color: "#677080" }
                  : { color: "#ffffff" }
              }
            >
              Blog
            </Nav.Link>
            <Nav.Link
              onMouseOver={this.mouseoutProduct.bind(this)}
              href="/resource"
              style={
                this.props.hover ||
                this.props.hover_product ||
                this.props.hover_whyTraackr
                  ? { color: "#677080" }
                  : { color: "#ffffff" }
              }
            >
              Resources
            </Nav.Link>
          </Nav>
          <Nav
            className="Login"
            style={
              this.props.hover ||
              this.props.hover_product ||
              this.props.hover_whyTraackr
                ? { color: "#677080" }
                : { color: "#ffffff" }
            }
          >
            <Nav.Link
              href="/users/login"
              onMouseOver={this.mouseoutProduct.bind(this)}
              style={
                this.props.hover ||
                this.props.hover_product ||
                this.props.hover_whyTraackr
                  ? { color: "#677080" }
                  : { color: "#ffffff" }
              }
            >
              Login
            </Nav.Link>
            <div
              className="button"
              onMouseOver={this.mouseoutProduct.bind(this)}
            >
              <img
                src={message}
                style={{
                  marginBottom: "8px",
                  marginRight: "8px",
                }}
              />{" "}
              Talk to us
            </div>
          </Nav>
        </Navbar>

        {this.props.hover_product ? this.productdiv() : null}
        {this.props.hover_whyTraackr ? this.whyTraackr() : null}
      </div>
    );
  }
  productdiv() {
    return <ProductDiv />;
  }
  whyTraackr() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <CustomerList />
      </div>
    );
  }
}
