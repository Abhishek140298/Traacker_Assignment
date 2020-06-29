import React, { Component } from "react";
import Header from "../header/Navigation";
import Hoc from "../hoc/Hoc";

export default class BlogsPage extends Component {
  render() {
    return (
      <div>
        <Hoc cmp={Header} />
        <h1>hello from the blogs page</h1>
      </div>
    );
  }
}
