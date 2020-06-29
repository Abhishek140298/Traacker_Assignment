import React from "react";
import "./InfluencerImage.css";

export default class InfluencerImage extends React.Component {
  render() {
    return (
      <div className="inner_round_image_div">
        <img
          className="round_image"
          src={this.props.images.avatar_url}
          onClick={() => this.props.handleImageSelection(this.props.images.id)}
          style={
            this.props.selectedImage === this.props.images.id
              ? { border: "5px solid red", height: "12vh" }
              : null
          }
        />
      </div>
    );
  }
}
