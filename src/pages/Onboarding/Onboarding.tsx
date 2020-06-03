import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./style.scss";
import { OnboardingProps } from "./Onboarding.model";
import { NavbarActions } from "store/navbar/navbar.actions";

export const Onboarding: React.FC<OnboardingProps> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(NavbarActions.changeTitle(''));
  }, []);

  return (
    <div className="onboarding"></div>
  )
}