import React from "react";
import InfluencerImage from "./InfluencerImage";
import "./InfluencerImage.css";

const inf_imagedata = [
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e74bb89a58f0f41d02e53b2_Chelsea%20Riggs.jpg",
  },

  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e74bb8d1c361033d2db1cc0_Santiago%20Garcia%20Solimei.jpg",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e74bb861b329397fd882ba2_Nathalie%20Folco.jpg",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e74bb8bfed489238935150e_Amisha%20Gandhi.jpg",
  },
];

const InfluencerImageList = (props) => (
  <div className="round_image_div">
    {inf_imagedata.map((image) => (
      <InfluencerImage {...image} />
    ))}
  </div>
);
export default InfluencerImageList;
