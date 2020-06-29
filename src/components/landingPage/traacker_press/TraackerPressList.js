import React from "react";
import { render } from "@testing-library/react";
import TraackerPress from "./TraackerPress";
import "./TraackerPress.css";

const traacker_press_data = [
  {
    image_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5eda7bca661a4036b4acc430_PRWeek.jpg",
    date: "JUNE 5,2020",
    para: "The Science of Using Influencer Made Simpler by Data",
    image_name: "PRWeek",
  },
  {
    image_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e1409589314cca79faa400a_prdaily_logo.jpg",
    date: "MAY 27,2020",
    para: " How to boost SEO flow like a pro during COVID-19",
    image_name: "PR Daily",
  },
  {
    image_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5eda7bca661a4036b4acc430_PRWeek.jpg",
    date: "MAY 27,2020",
    para: "Traackr Moves to Demystify Influencer Marketing Spend",
    image_name: "PRWeek",
  },
  {
    image_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e1409589314cc5fbbaa3fa8_talking-influence-logo.jpg",
    date: "MAY 22,2020",
    para:
      "Traackr Releases Budget Optimisation Tools to Demystify Influencer Marketing Investments",
    image_name: "Talking Influence",
  },
];

export default class TraackerPressList extends React.Component {
  render() {
    return (
      <div className="traacker_press_main">
        {traacker_press_data.map((press) => (
          <TraackerPress {...press} />
        ))}
      </div>
    );
  }
}
