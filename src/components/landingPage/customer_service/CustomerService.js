import React from "react";
import "./CustomerService.css";

export default class CustomerService extends React.Component {
  render() {
    const customer = this.props;
    return (
      <div className="customer_stories_box">
        <img
          style={{ height: "40vh", width: "30vw", borderRadius: "10px" }}
          src={customer.image_url}
        />

        <h3>{customer.name}</h3>
        <p>{customer.para}</p>
      </div>
    );
  }
}
