import React, { Component } from "react";
import "./LandingPage.css";

import Header from "../header/Navigation";
import Hoc from "../hoc/Hoc";
import ImageList from "./moving_images/ImageList";
import InfluencerList from "./influencerDescription/InfluencerList";
import ImageTextList from "./image_text/ImageTextList";
import TraackerPressList from "./traacker_press/TraackerPressList";
import CustomerServiceList from "./customer_service/CustomerServiceList";
import LatestArticleList from "./latest_article/LatestArticleList";
import dropdown from "./image/dropdown.png";
import facebook from "./image/facbook.png";
import instagram from "./image/instagram.png";
import sideopen from "./image/openup.png";

import linkedin from "./image/linkedin.png";
import twiter from "./image/twiter.png";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="main_nav_box">
        <div className="inflenced_data-text">
          <Hoc cmp={Header} />
          <h1
            style={{
              color: "#ffcfbe",
              fontSize: "40px",
              paddingTop: "150px",
              paddingLeft: "50px",
            }}
          >
            Influenced by Data
          </h1>
          <div className="para_data_driven">
            Traackr is the data-driven influencer marketing platform that
            marketers use to optimize investments, streamline campaigns, and
            scale programs.
          </div>
          <div className="discover-traacker">
            <img src={dropdown} />
            Discover Traacker
          </div>
        </div>

        <ImageList />

        <hr />
        <div className="influencer">
          <h2 style={{ textAlign: "center" }}>
            Powering Data-Driven Influencer Marketing
          </h2>

          <InfluencerList />
          <div className="button_influencer">
            <div
              style={{
                borderRadius: "5px",
                borderColor: "#250e62",
                borderStyle: "solid",
                width: "13vw",
                height: "8vh",
                paddingLeft: "10px",
                borderWidth: "1px",
                paddingTop: "9px",
              }}
            >
              Meet our Customers
            </div>
          </div>
          <ImageTextList />
        </div>
        <div className="traacker_press_head">Traacker in the press</div>
        <TraackerPressList />
        <div className="button_talking_about">
          <button style={{ height: "8vh", borderRadius: "5px" }}>
            See Who's Talking About
          </button>
        </div>
        <div style={{ backgroundColor: "#f2f7fb" }}>
          <div className="customer_stories">Customer Stories</div>
          <p
            style={{
              paddingLeft: "30%",
              paddingRight: "30%",
              paddingTop: "2%",
            }}
          >
            More than twenty of the top global advertisers and hundreds of
            emerging brands and agencies depend on Traackr everyday to make
            smarter influencer marketing decisions.
          </p>
          <CustomerServiceList />
          <div
            style={{
              height: "8vh",
              width: "20vw",
              borderRadius: "8px",
              marginLeft: "41%",
              marginTop: "30px",
              marginBottom: "40px",
              color: "#250e62",
              borderColor: "black",

              borderStyle: "solid",
              paddingTop: "9px",
              paddingLeft: "30px",
            }}
          >
            Explore More Case Studies
          </div>
        </div>
        <div className="get_started">
          <div style={{ fontSize: "40px", color: "white" }}>
            Ready to Get Started?
          </div>
          <div
            style={{
              height: "8vh",
              width: "15vw",
              borderRadius: "10px",
              marginLeft: "10%",
              marginTop: "15px",
              backgroundColor: "#f9423a",
              display: "flex",
              justifyContent: "center",
              paddingTop: "13px",
              color: "white",
            }}
          >
            Contact Sale
          </div>
        </div>
        <div style={{ paddingTop: "20px", paddingLeft: "50px" }}>
          LATEST ARTICLE
        </div>
        <LatestArticleList />
        <div className="Footer">
          <div className="main_footer_div">
            <div className="platform">
              <img src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e413b3697f1ef29b22504f6_logo-footer.svg" />
              <p>The data-driven influencer marketing platform.</p>
              <div>
                <img src={facebook} />
                <img src={instagram} />

                <img src={linkedin} />
                <img src={twiter} />
              </div>
              <img
                style={{ width: "9vw", marginTop: "10px" }}
                src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5ed74ec9150cb03c5ba3c854_US-Privacy-Shield.png"
              />
            </div>
            <div className="product_footer">
              <h6
                style={{
                  fontFamily: "avenir",
                  fontSize: "16px",
                  color: "#250e62",
                }}
              >
                PRODUCT
              </h6>
              <div className="footer_link">For Brand</div>
              <div className="footer_link">For Agencies</div>
            </div>
            <div className="company_footer">
              <h6
                style={{
                  fontFamily: "avenir",
                  fontSize: "16px",
                  color: "#250e62",
                }}
              >
                COMPANY
              </h6>
              <div className="footer_link">About Us</div>
              <div className="footer_link">Customers</div>
              <div className="footer_link">Careers</div>
              <div className="footer_link">Partner</div>
              <div className="footer_link">Press</div>
            </div>
          </div>
          <div className="last_footer">
            <div className="image_div_footer">
              <img
                style={{ height: "3vh", marginRight: "8px", paddingTop: "5px" }}
                src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e1409589314cc7968aa32cf_en.png"
              />
              EN
              <img
                style={{
                  marginLeft: "8px",
                  paddingTop: "5px",
                  height: "4vh",
                  width: "2vw",
                }}
                src={sideopen}
              />
            </div>
            <div className="links">
              <p>© 2020 Traackr. All Rights Reserved.</p>
              <a style={{ paddingLeft: "15px" }} href="#home">
                Terms of Service
              </a>
              <a style={{ paddingLeft: "15px" }} href="#home">
                Privacy Policy
              </a>
              <a style={{ paddingLeft: "15px" }} href="#home">
                Influencer Privacy
              </a>
              <a style={{ paddingLeft: "15px" }} href="#home">
                Do not sell my Personal Information
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
