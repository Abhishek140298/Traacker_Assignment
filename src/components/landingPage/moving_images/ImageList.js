import React from "react";
import Images from "./Moving_images.js";
import "./Images.css";

const imagedata = [
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e80b09189fbd73d9412c77e_L%27Ore%CC%81al_logo.svg",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e80b0a589fbd7ae3612c78d_OakFort_logo.svg",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e80afcd5836db61b3bd605e_Cartier_logo.svg",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e80b0de89fbd767dd12c89c_Shiseido_logo.svg",
  },

  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e80b13f89fbd7c2a012cda9_coty.svg",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e80b11243a59d2efb18822f_Tatcha_logo.svg",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e80b079a7eca1338e945541_Kendo_logo.svg",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e80b01b957e0a1d682f00b3_Charlotte_Tilbury_logo.svg",
  },
  {
    avatar_url:
      "https://assets-global.website-files.com/5e1409589314cc9e40aa2dae/5e80b0679d75517e29ca4e12_Coach_logo.svg",
  },
];

const ImageList = (props) => (
  <marquee direction="right">
    <div className="moving_images">
      {imagedata.map((image) => (
        <Images {...image} />
      ))}
    </div>
  </marquee>
);
export default ImageList;
