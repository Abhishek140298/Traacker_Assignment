import React, { Component } from "react";
import InfluencerPage from "./InfluencerPage";
import InfluencerImage from "../influencer/InfluencerImage";

const inf_desData = [
  {
    id: 0,
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e74bb89a58f0f41d02e53b2_Chelsea%20Riggs.jpg",
    paragraph_description:
      "We were looking for a platform that was essentially a CRM for influencer management that also allowed us to aggregate our campaign analytics and access the insights we need to properly evaluate influencers. We spent more than six months researching and testing every platform out there and found Traackr fits exactly what we needed.",
    name: "Chelsea Riggs",
    position: "Brand President, amika",
  },
  {
    id: 1,
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e74bb8d1c361033d2db1cc0_Santiago%20Garcia%20Solimei.jpg",
    paragraph_description:
      "We chose Traackr to be the backbone of our influencer program because of its product completeness, unparalleled depth of data and global presence.",
    name: "Santiago Garcia Solimei",
    position: "Global Director of Social Media, Meliá Hotels International",
  },
  {
    id: 2,
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e74bb861b329397fd882ba2_Nathalie%20Folco.jpg",
    paragraph_description:
      "Traackr’s data quality and breadth of its database are unrivaled. It’s been essential in our work to find the perfect influencers for our clients and prospects – whether we are working on a complex proposal with the creation of custom KPIs or on the day-to-day influencer relationships.",
    name: "Nathalie Folco",
    position: "Account Director, Integrated Media Strategy, Weber Shandwick",
  },
  {
    id: 3,
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e74bb8bfed489238935150e_Amisha%20Gandhi.jpg",
    paragraph_description:
      "We know that programs and content typically generate 2-4X greater return than if we were to run that same campaign without an influencer partnership.",
    name: "Amisha Gandhi",
    position: "VP of Influencer Marketing, SAP Ariba",
  },
];

class InfluencerList extends Component {
  constructor() {
    super();
    this.state = {
      selectedImage: 0,
    };
  }
  render() {
    return (
      <div>
        <div
          className="round_image_div"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          {inf_desData.map((image) => (
            <InfluencerImage
              images={image}
              handleImageSelection={(id) =>
                this.setState({ selectedImage: id })
              }
              selectedImage={this.state.selectedImage}
            />
          ))}
        </div>

        {inf_desData.map((description, index) =>
          this.state.selectedImage === index ? (
            <InfluencerPage {...description} />
          ) : null
        )}
      </div>
    );
  }
}
export default InfluencerList;
