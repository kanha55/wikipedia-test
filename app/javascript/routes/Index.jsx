import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Show from "../components/Show";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:famous_people" exact component={Show} />
    </Switch>
  </Router>
);