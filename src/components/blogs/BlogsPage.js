import React from "react";
import Header from "../header/Navigation";

export default class BlogsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hover_product: false,
      hover_whyTraackr: false,
      hover_blog: false,
    };
  }
  mouseevent() {
    this.setState(() => ({ hover: !this.props.hover }));
  }
  mouseeeventout() {
    this.setState((state) => ({ hover: false }));
  }
  mouseonproduct() {
    this.setState(() => ({
      hover_product: !this.state.hover_product,
    }));
  }
  mouseoutproduct() {
    this.setState((state) => ({ hover_product: false }));
  }
  mouseonwhyTraackr() {
    this.setState(() => ({
      hover_whyTraackr: !this.state.hover_whytTraackr,
    }));
  }
  mouseoutwhyTraackr() {
    this.setState((state) => ({ hover_whyTraackr: false }));
  }
  mouseonBlogPage() {
    this.setState((state) => ({ hover_blog: !this.state.hover_blog }));
  }
  mouseoutBlogPage() {
    this.setState((state) => ({ hover_blog: false }));
  }
  render() {
    console.log(this.state.hover_blog, "abhishek");
    return (
      <div>
        <Header
          hover={this.state.hover}
          hover_product={this.state.hover_product}
          hover_whyTraackr={this.state.hover_whyTraackr}
          hover_blog={this.hover_blog}
          mouseoverNav={() => this.mouseevent()}
          mouseoverProduct={() => this.mouseonproduct()}
          mouseoutNav={() => this.mouseeeventout()}
          mouseoutProduct={() => this.mouseoutproduct()}
          mouseoverWhyTraackr={() => this.mouseonwhyTraackr()}
          mouseoutWhyTraackr={() => this.mouseoutwhyTraackr()}
          mouseoverBlogPage={() => this.mouseonBlogPage()}
          mouseoutBlogPage={() => this.mouseoutBlogPage()}
        />
        <div onMouseOver={this.mouseonBlogPage.bind(this)}>
          hello from the blogs page
        </div>
      </div>
    );
  }
}
