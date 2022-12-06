import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "../styles/App.css";
import ComponentsTopic from "./ComponentsTopic";
import Home from "./Home";
import RenderingTopic from "./RenderingTopic";
import Topics from "./Topics";

const App = () => {
  return (
   
    <Router>
      <div id="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/topics/components">
            <ComponentsTopic />
          </Route>
          <Route path="/topics/rendering">
            <RenderingTopic />
          </Route>
        </Switch>
      </div>
    </Router>
   
  );
};

export default App;
