import React from "react";

export default class Images extends React.Component {
  render() {
    const image = this.props;
    return (
      <div >
        <img src={image.avatar_url} />
      </div>
    );
  }
}
