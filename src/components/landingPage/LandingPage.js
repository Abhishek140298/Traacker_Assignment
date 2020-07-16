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
import collaspe from "./image/collaspe.png";
//import {login_page_top_icon} from '../../constants/image'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hover_product: false,
      hover_whyTraackr: false,
      hover_blog: false,
      hover_influenced: false,
    };
  }
  mouseevent() {
    this.setState(() => ({ hover: !this.props.hover }));
  }
  mouseeeventout() {
    this.setState((state) => ({ hover: false }));
  }
  mouseonproduct() {
    this.setState(() => ({
      hover_product: !this.props.hover_product,
    }));
  }
  mouseoutproduct() {
    this.setState((state) => ({ hover_product: false }));
  }
  mouseonwhyTraackr() {
    this.setState(() => ({
      hover_whyTraackr: !this.props.hover_whytTraackr,
    }));
  }
  mouseoutwhyTraackr() {
    this.setState((state) => ({ hover_whyTraackr: false }));
  }
  mouseonBlogPage() {
    this.setState((state) => ({ hover_blog: true }));
  }
  mouseoutBlogPage() {
    this.setState((state) => ({ hover_blog: false }));
  }
  mouseonInfluencerDiv() {
    this.setState((state) => ({
      hover_influenced: true,
    }));
  }
  mouseoutInfluencerDiv() {
    this.setState((state) => ({ hover_influenced: false }));
  }
  render() {
    console.log(this.state.hover_influenced, "abhishekya");
    return (
      <div className="main_nav_box">
        <div className="inflenced_data-text">
          <Header
            hover={this.state.hover}
            hover_product={this.state.hover_product}
            hover_whyTraackr={this.state.hover_whyTraackr}
            hover_blog={this.state.hover_blog}
            mouseoverNav={() => this.mouseevent()}
            mouseoverProduct={() => this.mouseonproduct()}
            mouseoutNav={() => this.mouseeeventout()}
            mouseoutProduct={() => this.mouseoutproduct()}
            mouseoverWhyTraackr={() => this.mouseonwhyTraackr()}
            mouseoutWhyTraackr={() => this.mouseoutwhyTraackr()}
            mouseoverBlogPage={() => this.mouseonBlogPage()}
            mouseoutBlogPage={() => this.mouseoutBlogPage()}
          />
          <div
            onMouseOver={() => {
              this.mouseoutproduct();
              this.mouseoutwhyTraackr();
              this.mouseeeventout();
            }}
            style={{
              color: "#ffcfbe",
              fontSize: "40px",
              paddingTop: "100px",
              paddingLeft: "50px",
            }}
          >
            Influenced by Data
          </div>
          <div className="para_data_driven">
            Traackr is the data-driven influencer marketing platform that
            marketers use to optimize investments, streamline campaigns, and
            scale programs.
          </div>
          <div
            className="dis_traac"
            //onMouseOut={this.mouseoutInfluencerDiv.bind(this)}
          >
            <div
              className="discover-traacker"
              onMouseEnter={this.mouseonInfluencerDiv.bind(this)}
              onMouseLeave={this.mouseoutInfluencerDiv.bind(this)}
              style={
                this.state.hover_influenced
                  ? {
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }
                  : { borderRadius: "5px" }
              }
            >
              Discover Traacker
              <img
                className="drop_down_button"
                src={this.state.hover_influenced ? collaspe : dropdown}
              />
            </div>

            {this.state.hover_influenced ? this.discoverTraacker() : null}
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
            <div className="meet_our_customer">Meet our Customers</div>
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
          <p className="customer_stories_para" style={{}}>
            More than twenty of the top global advertisers and hundreds of
            emerging brands and agencies depend on Traackr everyday to make
            smarter influencer marketing decisions.
          </p>
          <CustomerServiceList />
          <div className="explore_more_casestudy">
            Explore More Case Studies
          </div>
        </div>
        <div className="get_started">
          <div style={{ fontSize: "40px", color: "white" }}>
            Ready to Get Started?
          </div>
          <div className="contact_sale">Contact Sale</div>
        </div>
        <div className="latest-article" style={{}}>
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
              <h6 className="product_footer_head">PRODUCT</h6>
              <div className="footer_link">For Brand</div>
              <div className="footer_link">For Agencies</div>
            </div>
            <div className="company_footer">
              <h6 className="company_footer_head">COMPANY</h6>
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
                className="image_footer"
                src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e1409589314cc7968aa32cf_en.png"
              />
              EN
              <img className="image_footer2" src={sideopen} />
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
  discoverTraacker() {
    return (
      <div
        className=" discover_traackr_dropdown"
        onMouseEnter={this.mouseonInfluencerDiv.bind(this)}
        onMouseLeave={this.mouseoutInfluencerDiv.bind(this)}
      >
        <a className="links_discover_tracckr_button" href="/products">
          For Brands
        </a>
        <hr className="link_line" />
        <a className="links_discover_tracckr_button" href="/agencies">
        
          For Agencies
        </a>
      </div>
    );
  }
}
