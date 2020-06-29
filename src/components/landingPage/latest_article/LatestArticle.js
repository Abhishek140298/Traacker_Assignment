import React from "react";
import "./LatestArticle.css";

export default class LatestArticle extends React.Component {
  render() {
    const article = this.props;
    return (
      <div className="articles">
        <img className="article_image" src={article.image_url} />
        <div style={{ color: "#250e62" }}>{article.small_head}</div>
        <p style={{ color: "#250e62", fontSize: "20px" }}>{article.big_head}</p>
      </div>
    );
  }
}
