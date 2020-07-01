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
          <img className="solution_image" src={bulbidea} />
          Solution
          <div className="solution_inner_div">
            <a className="use_case_links" href="#home">
              For Brands
            </a>
          </div>
          <div className="solution_inner_div">
            <a className="use_case_links" href="#home">
              For Agencies
            </a>
          </div>
        </div>
        <div className="usecase_div">
          <img className="usecase_image" src={usecase} />
          USE CASES
          <div className="usecase_parts" style={{}}>
            <div>
              <div className="usecase_parts_inner_div">
                <a className="use_case_links" href="#home">
                  Influencer Discovery
                </a>
              </div>
              <div className="usecase_parts_inner_div">
                <a className="use_case_links" href="#home">
                  Influencer Vetting
                </a>
              </div>
              <div className="usecase_parts_inner_div">
                <a className="use_case_links" href="#home">
                  Brand Supply
                </a>
              </div>
              <div className="usecase_parts_inner_div">
                <a className="use_case_links" href="#home">
                  Campaign Discovery
                </a>
              </div>
            </div>
            <div>
              <div
                className="usecase_parts_inner_div"
                style={{ paddingLeft: "40px", paddingTop: "25px" }}
              >
                <a className="use_case_links" href="#home">
                  Budget Optimization
                </a>
              </div>
              <div className="usecase_parts_inner_div">
                <a className="use_case_links" href="#home">
                  Program Management
                </a>
              </div>
              <div className="usecase_parts_inner_div">
                <a className="use_case_links" href="#home">
                  Relationship Management
                </a>
              </div>
              <div className="usecase_parts_inner_div">
                <a className="use_case_links" href="#home">
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
