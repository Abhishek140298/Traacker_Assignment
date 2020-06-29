import React from "react";
import "./TraackerPress.css";

export default class Traackerpress extends React.Component {
  render() {
    const press = this.props;
    return (
      <div className="traacker_press">
        <img className="news_image" src={press.image_url} />
        <h4>{press.date}</h4>
        <p>{press.para} </p>
        <h4>{press.image_name}</h4>
      </div>
    );
  }
}
