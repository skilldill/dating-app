import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router";
import cn from "classnames";
import { 
  HashRouter as Router, 
  Route, 
  RouteProps, 
} from 'react-router-dom';

import "./style.scss";
import { MIN_DIFF_TOUCH } from "../../shared/constants";
import { SideMenu, Navbar } from "../../core/components";
import { routes } from "./routes";

export const Routeroutlet = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [startTouch, setStartTouch] = useState(0);
  const [endTouch, setEndTouch] = useState(0);
  const [redirectPath, setRedirectPath] = useState('');

  // Нужен для того чтобы можно было 
  // определять перед стартом приложения
  // показывать ли onboarding
  // пока что инфа по показыванию onboarding
  // хранится в localstorage
  useEffect(() => {
    const isShowedOnboarding = localStorage.getItem('isShowedOnboarding');
    const path = isShowedOnboarding ? '/partners' : '/onboarding';
    setRedirectPath(path);
  }, []);


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

  const holderClasses = cn({
    'routes-holder': true,
    'routes-holder-padding': redirectPath !== '/onboarding'
  })

  return (
    <Router>
      <Navbar toggleMenu={toggleMenu} />
      <SideMenu 
        routes={routes} 
        isOpen={isOpenMenu}
        closeMenu={() => { setIsOpenMenu(false) }}
      />
      <div
        className={holderClasses}
        onClick={handleClick}
      >
        <Route path="/" render={() => <Redirect to={redirectPath} />} />
        {routes.map((route:RouteProps, i: number) => 
          <Route key={i} {...route} />
        )}
      </div>
    </Router>
  )
}