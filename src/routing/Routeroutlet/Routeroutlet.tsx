import React from 'react';
import { Switch } from "react-router";
import { HashRouter as Router, Route, RouteProps } from 'react-router-dom';

import { SideMenu, Navbar } from "../../core/components";
import { routes } from "./routes";

export const Routeroutlet = () => {
  return (
    <Router>
      <Navbar />
      <SideMenu routes={routes} />
      <Switch>
        {routes.map((route:RouteProps, i: number) => 
          <Route key={i} {...route} />
        )}
      </Switch>
    </Router>
  )
}