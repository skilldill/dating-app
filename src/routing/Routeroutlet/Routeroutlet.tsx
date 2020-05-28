import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { 
  HashRouter as Router, 
  Route, 
  RouteProps, 
} from 'react-router-dom';

import "./style.scss";
import { MIN_DIFF_TOUCH } from "../../shared/constants";
import { SideMenu, Navbar } from "../../core/components";
import { routes } from "./routes";
import { NavbarActions } from "../../store/navbar/navbar.actions"

export const Routeroutlet = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [startTouch, setStartTouch] = useState(0);
  const [endTouch, setEndTouch] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NavbarActions.changeTitle("Коллеги"))
  }, [dispatch])

  const toggleMenu = () => {
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (isOpenMenu) { setIsOpenMenu(false) }
  }

  // Эти методы нужны для того чтобы можно было свайпом вытаскивать меню
  // Но пока что они отключены
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

  // const routesClasses = cn({
  //   'routes-holder': true,
  //   'routes-overflow': !location.pathname.includes('/chat/'),
  // })

  return (
    <Router>
      <Navbar toggleMenu={toggleMenu} />
      <SideMenu 
        routes={routes} 
        isOpen={isOpenMenu}
        closeMenu={() => { setIsOpenMenu(false) }}
      />
      <div
        className='routes-holder'
        onClick={handleClick}
      >
        <div className="routes routes-overflow" id="routes">
          <Route path="/" render={() => <Redirect to="/partners" />} />
          {routes.map((route:RouteProps, i: number) => 
            <Route key={i} {...route} />
          )}
        </div>
      </div>
    </Router>
  )
}