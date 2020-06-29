import React from "react";
import "./LatestArticle.css";
import LatestArticle from "./LatestArticle";

const article_data = [
  {
    image_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5ef3a535148dd1607eb4bb32_TLrainbowbanner.jpg",
    small_head: "TREND LIGHTLY",
    big_head: "Trend Lightly: We Don’t Need More Rainbows",
  },
  {
    image_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5ef0d09b5cd3763216489336_virtualeventbanner.jpg",
    small_head: "HOW TO",
    big_head: "How to Virtually Launch a New Product with Influencers",
  },

  {
    image_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5eebb640ab2874bc83d2c3e2_productbanner.jpg",
    small_head: "TRAACKR NEWS",
    big_head: "What’s New in Traackr: June 2020 Edition",
  },
];

export default class LatestArticleList extends React.Component {
  render() {
    return (
      <div className="latest_article">
        {article_data.map((article) => (
          <LatestArticle {...article} />
        ))}
        <div className="stay_in_know">
          Stay in the Know
          <p style={{}}>
            Get new case studies, invites to our events and our monthly
            influencer marketing newsletter.
          </p>
          <div className="input_button">
            <input style={{ width: "20vw" }}></input>
            <button>Go</button>
          </div>
          <p style={{ fontSize: "13px" }}>
            By submitting this form, you agree to the processing of your
            personal data by Traackr as described in the Privacy Policy.
          </p>
        </div>
      </div>
    );
  }
}
