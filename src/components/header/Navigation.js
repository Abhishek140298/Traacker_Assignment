import React, { Componenet } from "react";

import { Navbar, Form, Nav, Button, FormControl } from "react-bootstrap";
import LoginPage from "../login/LoginPage";
import "./Navigation.css";
import message from "../landingPage/image/message.png";

import ProductDiv from "./ProductDiv";
import CustomerList from "./WhyTraackr.js";
import bubidea from "../landingPage/image/bubidea.png";
import forward from "../landingPage/image/forward.png";
import threeline from "../landingPage/image/threeline.png";
import { Redirect } from "react-router-dom";

let orangeLogo =
  "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e4bb43bf08158791d23d7ce_nav-logo-rose.svg";
let blueLogo =
  "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e4bb4398d9bb47b6830dc79_nav-logo-blue.svg";

const links = [
  { list: "Customer" },
  { list: "AboutUs" },
  { list: "Blog" },
  { list: "Resources" },
];
export default class Naav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickOnimage: false,
      redirect: null,
    };
  }
  onclickTalkToUs() {
    this.setState(() => ({ redirect: "/talktous" }));
  }
  onclickImage() {
    this.setState(() => ({
      clickOnimage: !this.state.clickOnimage,
    }));
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
  mouseoverBlogPage = () => {
    this.props.mouseoverBlogPage();
  };
  mouseoutBlogPage = () => {
    this.props.mouseoutBlogPage();
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}></Redirect>;
    }
    console.log(this.props.hover_product, "abhi");
    return (
      <div className="header">
        <Navbar
          className="nav_bar"
          /*   onMouseOut={this.mouseoutNav.bind(this)}*/
          onMouseOver={this.mouseoverNav.bind(this)}
          onMouseOut={this.mouseoutNav.bind(this)}
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
              onMouseOver={() => {
                this.mouseoutWhyTraackr();
                this.mouseoverProduct();
              }}
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
              onMouseOver={() => {
                this.mouseoutProduct();
                this.mouseoutWhyTraackr();
              }}
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
              onMouseOver={() => {
                this.mouseoutProduct();
                this.mouseoutWhyTraackr();
              }}
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
          <div className="login_button_div">
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
                className="login_click"
                href="/users/login"
                onMouseOver={() => {
                  this.mouseoutProduct();
                  this.mouseoutWhyTraackr();
                }}
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
                style={
                  this.props.hover
                    ? { backgroundColor: "#f9423a" }
                    : { backgroundColor: "#250e62" }
                }
                className="button"
                onMouseOver={() => {
                  this.mouseoutProduct();
                  this.mouseoutWhyTraackr();
                }}
                onClick={() => this.onclickTalkToUs()}
              >
                <img className="talk-msg-image" src={message} /> Talk to us
              </div>
            </Nav>
          </div>
        </Navbar>

        {this.props.hover_product ? this.productdiv() : null}
        {this.props.hover_whyTraackr ? this.whyTraackr() : null}

        <Navbar className="small-nav">
          <div className="naav">
            <Navbar.Brand href="#home">
              <img src={blueLogo} />
            </Navbar.Brand>

            <div className="toggle_button">
              <img src={threeline} onClick={this.onclickImage.bind(this)} />
            </div>
          </div>
        </Navbar>
        {this.state.clickOnimage ? this.navitems() : null}
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
  navitems() {
    return (
      <div>
        <div className="navbar_product">
          <div className="product">Product</div>
          <div className="product_arrow">
            <img src={forward} />
          </div>
        </div>

        <div className="customer_blog">
          {links.map((list) => (
            <a className="links" href="#">
              {list.list}
            </a>
          ))}
          ;
        </div>
      </div>
    );
  }
}
