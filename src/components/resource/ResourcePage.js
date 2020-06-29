import React, { Component } from "react";
import Hoc from "../hoc/Hoc";
import Header from "../header/Navigation";

export default class ResourcePage extends Component {
  render() {
    return (
      <div>
        <Hoc cmp={Header} />
        <h1>hello from the resource page</h1>
      </div>
    );
  }
}
