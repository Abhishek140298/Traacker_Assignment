import React from "react";
import { render } from "@testing-library/react";
import ImageText from "./ImageText";
import "./ImageText.css";

const img_txt_data = [
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e75e473d0097c7a79f2c662_Frame%20165.png",
    logo_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e75e39b9105fa04a9dd266d_job-seach-team-woman.svg",
    small_heading: "UNRIVALED INFLUENCER DISCOVERY",
    main_heading: "Access the Largest Global Influencer Data Set",
    big_para:
      "Traackr provides rich insights for more than 6M vetted profiles including audience demographics, brand affinity, fraud detection, and historical performance indicators.",
    small_para1: "Search bios, captions, and content on 13 social platforms",
    small_para2: "Discover influencers in 49 countries and 26 languages",
    small_para3: "Identify top performing influencers across all tiers",
    small_para4: "Filter by 22 audience and influencer criteria",
    button_text: "Discover Traacker",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e75e478351b761b25f76988_Frame%20182.png",
    logo_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e75e39934e76cee15b07917_compass-1.svg",
    small_heading: "STREAMLINED WORKFLOWS",
    main_heading: "Intelligence & Tools to Manage Campaigns",
    big_para:
      "Run impactful campaigns with customizable workflows and influencer insights for all types of activations including organic advocacy, events, product gifting, and paid partnerships.",
    small_para1: "Simply workflows for all types of campaigns",
    small_para2: "Manage and track communications in one place",
    small_para3: "Reduce time spent on manual work",
    small_para4: "Optimize budgets with our predictive calculator",
    button_text: "Manage It All",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e75e476d25345a7f293cb1d_Frame%20181.png",
    logo_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e75e3964c71bd07073fd820_analytics-bars-3d.svg",
    small_heading: "POWERFUL PERFORMANCE INSIGHTS",
    main_heading: "Invest Your Budget Where It Drives Results",
    big_para:
      "Demonstrate impact and optimize influencer investments with actionable performance reporting. Traackr provides investment insights at the influencer, campaign, program, and market level.",
    small_para1: "Report on influencer, campaign, and program results",
    small_para2: "Track the return on your investments",
    small_para3: "Use competitive intelligence to shape your strategy",
    small_para4: "Benchmark your brand's performance in a given market",
    button_text: "Get the Scoop",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e75e47c9105fa56dddd2886_Frame%20184.png",
    logo_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e75e39764c103cf3b4351f4_navigation-up.svg",
    small_heading: "ENTERPRISE-GRADE SCALABILITY",
    main_heading: "Built to Scale with Global Organizations",
    big_para:
      "Standardize influencer management across brand portfolios and regions. We provide global teams with the technology and expertise to manage large-scale programs.",
    small_para1: "Manage complex programs spanning large brand portfolios",
    small_para2: "Unite regional teams with one system of record",
    small_para3: "Access world-class customer support and strategy services",
    small_para4: "",
    button_text: "Scale with Us",
  },
];

export default class ImageTextList extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: "60px" }}>
        {img_txt_data.map((data, index) => (
          <ImageText data={data} index={index} />
        ))}
      </div>
    );
  }
}
