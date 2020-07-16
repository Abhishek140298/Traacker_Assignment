import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import BlogsPage from "./components/blogs/BlogsPage";
import ResourcePage from "./components/resource/ResourcePage";
import Header from "./components/header/Navigation";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/login/SignupPage";
import TalkToUs from "./components/talktous/TalkToUs";
import Products from "./components/products/Products";
import Agencies from "./components/products/Agencies";

function App() {
  return (
    <Router>
      {/*<Header />*/}
      <Route exact path="/" component={LandingPage} initial />
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/resource" component={ResourcePage} />
      <Route path="/users/login" component={LoginPage} />
      <Route path="/users/signup" component={SignupPage} />
      <Route path="/talktous" component={TalkToUs} />
      <Route path="/products" component={Products} />
      <Route path="/agencies" component={Agencies} />
    </Router>
  );
}

export default App;
