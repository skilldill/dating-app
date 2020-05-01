import React, { useState } from 'react';
import { Switch } from "react-router";
import { HashRouter as Router, Route, RouteProps } from 'react-router-dom';

import { SideMenu, Navbar } from "../../core/components";
import { routes } from "./routes";

export const Routeroutlet = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  }

  return (
    <Router>
      <Navbar toggleMenu={toggleMenu} />
      <SideMenu 
        routes={routes} 
        isOpen={isOpenMenu}
        closeMenu={() => { setIsOpenMenu(false) }}
      />
      <Switch>
        {routes.map((route:RouteProps, i: number) => 
          <Route key={i} {...route} />
        )}
      </Switch>
    </Router>
  )
}