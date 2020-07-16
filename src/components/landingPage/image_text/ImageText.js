import React from "react";
import "./ImageText.css";
import sideopen from "../image/sideopen.png";

export default class ImageText extends React.Component {
  renderImageView = (data, index) => {
    return (
      <div className="image_div">
        <img className="image_name" src={data.avatar_url} />
      </div>
    );
  };

  renderTextView = (data, index) => {
    return (
      <div className="text_div">
        <div className="text">
          {" "}
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
          <div
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#250e62",
              width: "190px",
              height: "8vh",
              borderRadius: "5px",
              color: "#250e62",
              paddingLeft: "20px",
              paddingTop: "9px",
            }}
          >
            {data.button_text}
            <img src={sideopen} />
          </div>
        </div>
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
    return (
      <div className="image_text_main_div">{this.renderView(data, index)}</div>
    );
  }
}
