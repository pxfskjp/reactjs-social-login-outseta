import React from "react";
import { BrowsweRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";

import Home from "../Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <PrivateRoutes path="/" component={Home} exact />
  </Switch>
);

export default Routes;
