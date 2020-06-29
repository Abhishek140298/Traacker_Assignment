import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import BlogsPage from "./components/blogs/BlogsPage";
import ResourcePage from "./components/resource/ResourcePage";
import Header from "./components/header/Navigation";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <Router>
      {/*<Header />*/}
      <Route exact path="/" component={LandingPage} initial />
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/resource" component={ResourcePage} />
      <Route path="/users/login" component={LoginPage} />
    </Router>
  );
}

export default App;
