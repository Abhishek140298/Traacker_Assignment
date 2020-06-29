import React from "react";
import "./InfluencerDes.css";

export default class InfluencerPage extends React.Component {
  render() {
    const description = this.props;
    return (
      <div className="main_box">
        <div className="main_image_box">
          <div className="image_box">
            <img className="img-info" src={description.avatar_url} />
          </div>
        </div>
        <div className="description_box">
          <div className="main_description">
            <p className="paragraph">{description.paragraph_description}</p>
          </div>
          <div className="name_position">
            <div className="name">{description.name}</div>
            <div className="position">{description.position}</div>
          </div>
        </div>
      </div>
    );
  }
}
