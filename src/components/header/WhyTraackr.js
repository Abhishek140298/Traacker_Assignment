import React from "react";
import message from "../landingPage/image/message copy.png";
import info from "../landingPage/image/info.png";
import "./WhyTraackr.css";

const custom_data = [
  {
    image_url: message,
    anchor: "Customers",
    para:
      "Explore the successful influencer programs our customers have built around the world.",
  },
  {
    image_url: info,
    anchor: "About Us",
    para: "Discover our influencer marketing philosophy and meet our team.",
  },
];

class WhyTrackerDiv extends React.Component {
  render() {
    const data = this.props;
    return (
      <div className="why_traackr_main_div">
        <div className="why_traackr_customers">
          <img className="customer_image" src={data.image_url} />
          <a className="customers" href="#home">
            {data.anchor}
          </a>
        </div>
        <div className="customer_para">{data.para}</div>
      </div>
    );
  }
}

const CustomerList = (props) => (
  <div className="customus">
    {custom_data.map((data) => (
      <WhyTrackerDiv {...data} />
    ))}
  </div>
);
export default CustomerList;
