import React from "react";
import "./ImageText.css";

export default class ImageText extends React.Component {
  renderImageView = (data, index) => {
    return (
      <div>
        
        <img className="image_name" src={data.avatar_url} />
      </div>
    );
  };

  renderTextView = (data, index) => {
    return (
      <div className="text">
        <img src={data.logo_url} />
        <h4>{data.small_heading}</h4>
        <h2>{data.mai_heading}</h2>
        <p style={{ fontFamily: "Avenir,sans-serif", fontSize: "18px" }}>
          {data.big_para}
        </p>
        <p>
          {" "}
          <img src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e1409589314cc42cfaa3205_ic_checklist.svg" />
          {data.small_para1}
        </p>
        <p>
          {" "}
          <img src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e1409589314cc42cfaa3205_ic_checklist.svg" />
          {data.small_para2}
        </p>
        <p>
          {" "}
          <img src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e1409589314cc42cfaa3205_ic_checklist.svg" />
          {data.small_para3}
        </p>
        {data.small_para4 !== "" ? (
          <p>
            {" "}
            <img src="https://assets-global.website-files.com/5e1409589314cc7fecaa2d8e/5e1409589314cc42cfaa3205_ic_checklist.svg" />
            {data.small_para4}
          </p>
        ) : null}
        <button>{data.button_text}</button>
      </div>
    );
  };

  renderView = (data, index) => {
    if (index % 2 === 0) {
      return (
        <>
          {this.renderImageView(data, index)} {this.renderTextView(data, index)}
        </>
      );
    } else {
      return (
        <>
          {this.renderTextView(data, index)}
          {this.renderImageView(data, index)}
        </>
      );
    }
  };

  render() {
    const data = this.props.data;
    const index = this.props.index;
    console.log(index, "index");
    return <div className="image_text">{this.renderView(data, index)}</div>;
  }
}
