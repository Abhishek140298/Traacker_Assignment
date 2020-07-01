import React, { Component } from "react";
import SolutionBulb from "../landingPage/image/solutionBulb.png";
import bulbidea from "../landingPage/image/bubidea.png";
import usecase from "../landingPage/image/usecase.png";
import "./productDiv.css";

export default class ProductDiv extends React.Component {
  /*constructor(props) {
    super(props);
88*/
  render() {
    return (
      <div className="product_div">
        <div className="solution_div">
          <img
            style={{ paddingTop: "10px", marginRight: "15px" }}
            src={bulbidea}
          />
          Solution
          <div style={{ paddingLeft: "40px", paddingTop: "20px" }}>
            <a
              style={{
                textDecoration: "none",
                fontSize: "16px",
                fontFamily: "Avenir",
                color: "#677080",
              }}
              href="#home"
            >
              For Brands
            </a>
          </div>
          <div style={{ paddingLeft: "40px", paddingTop: "20px" }}>
            <a
              style={{
                textDecoration: "none",
                fontSize: "16px",
                fontFamily: "Avenir",
                color: "#677080",
              }}
              href="#home"
            >
              For Agencies
            </a>
          </div>
        </div>
        <div className="usecase_div">
          <img
            src={usecase}
            style={{
              paddingTop: "10px",
              marginRight: "15px",
              width: "2vw",
            }}
          />
          USE CASES
          <div style={{ display: "flex" }}>
            <div>
              {" "}
              <div style={{ paddingLeft: "40px", paddingTop: "25px" }}>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    color: "#677080",
                  }}
                  href="#home"
                >
                  Influencer Discovery
                </a>
              </div>
              <div style={{ paddingLeft: "40px", paddingTop: "25px" }}>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    color: "#677080",
                  }}
                  href="#home"
                >
                  Influencer Vetting
                </a>
              </div>
              <div style={{ paddingLeft: "40px", paddingTop: "25px" }}>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    color: "#677080",
                  }}
                  href="#home"
                >
                  Brand Supply
                </a>
              </div>
              <div style={{ paddingLeft: "40px", paddingTop: "25px" }}>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    color: "#677080",
                  }}
                  href="#home"
                >
                  Campaign Discovery
                </a>
              </div>
            </div>
            <div>
              <div style={{ paddingLeft: "40px", paddingTop: "25px" }}>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    color: "#677080",
                  }}
                  href="#home"
                >
                  Budget Optimization
                </a>
              </div>
              <div style={{ paddingLeft: "40px", paddingTop: "25px" }}>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    color: "#677080",
                  }}
                  href="#home"
                >
                  Program Management
                </a>
              </div>
              <div style={{ paddingLeft: "40px", paddingTop: "25px" }}>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    color: "#677080",
                  }}
                  href="#home"
                >
                  Relationship Management
                </a>
              </div>
              <div style={{ paddingLeft: "40px", paddingTop: "25px" }}>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Avenir",
                    color: "#677080",
                  }}
                  href="#home"
                >
                  Market Benchmarking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
