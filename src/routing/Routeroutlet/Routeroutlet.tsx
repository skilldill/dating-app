import React, { useState } from 'react';
import { Redirect } from "react-router";
import { HashRouter as Router, Route, RouteProps, Switch } from 'react-router-dom';

import "./style.scss";
import { MIN_DIFF_TOUCH } from "../../shared/constants";
import { SideMenu, Navbar } from "../../core/components";
import { routes } from "./routes";

export const Routeroutlet = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [startTouch, setStartTouch] = useState(0);
  const [endTouch, setEndTouch] = useState(0);

  const toggleMenu = () => {
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (isOpenMenu) { setIsOpenMenu(false) }
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
      setEndTouch(event.touches[0].clientX);
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
      setStartTouch(event.touches[0].clientX);
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
      if (!!startTouch && !!endTouch) {
        // TODO: вынести 60 в отдельную константу, 
        // Это граница в пределах которой 
        // можно начать скролить чтобы открыть меню
        if (startTouch <= 60) {
          const touchDiff = startTouch - endTouch;
          if (touchDiff <= -MIN_DIFF_TOUCH) { setIsOpenMenu(true) }
        }
      }
      setEndTouch(0);
      setStartTouch(0);
  }

  return (
    <Router>
      <Navbar toggleMenu={toggleMenu} />
      <SideMenu 
        routes={routes} 
        isOpen={isOpenMenu}
        closeMenu={() => { setIsOpenMenu(false) }}
      />
      <div
        className="routes-holder"
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="routes">
          <Route path="/" render={() => <Redirect to="/profile" />} />
          {routes.map((route:RouteProps, i: number) => 
            <Route key={i} {...route} />
          )}
        </div>
      </div>
    </Router>
  )
}