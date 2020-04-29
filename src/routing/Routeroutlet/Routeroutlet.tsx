import React from 'react';
import { Switch } from "react-router";
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';

import { SideMenu } from "../../core/components";
import { Start } from "../../pages";

export const Routeroutlet = () => {
  const routerId = "IonReactRouter";

  return (
    <Router>
      <SideMenu />
      <Switch>
        <Route path="/home" component={Start} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/about" component={() => <div>about</div>} />
      </Switch>
    </Router>
  )
}