import React from "react";
import CustomerService from "./CustomerService";
import "./CustomerService.css";

const customer_data = [
  {
    image_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e8d8bbbf5d16aa45ba5d235_5e1cedc8af056b2f168a0f98_Michelin%20case%20study%20-%20Blog%20Post%20Detail-100_sm.jpg",
    name: "Michelin",
    para:
      "Michelin utilized Traackr to transform its early influencer marketing efforts into a streamlined, high-performing machine.",
  },
  {
    image_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e1409589314cc735caa41d0_Pegasus_Resource%20Page%20Banner.jpg",
    name: "Pegasus",
    para:
      "Pegasus tripled new influencer marketing business with data-driven strategies powered by Traackr.",
  },
  {
    image_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e1409589314cc5380aa405f_Card%20Cover%20_%20Detail%20Page%20Mobile.jpg",
    name: "Meliá Hotels International",
    para:
      "How Meliá Hotels International established a data-driven influencer program across its 6 brands and 380 hotels.",
  },
];

export default class CustomerServiceList extends React.Component {
  render() {
    return (
      <div className="customer">
        {customer_data.map((customer) => (
          <CustomerService {...customer} />
        ))}
      </div>
    );
  }
}
