import React from 'react';
import { useSelector } from "react-redux";

import "./style.scss";
import { Profile as ProfileModel } from "../../shared/models";
import { Gallery } from "./components";

export const Profile: React.FC = () => {
  const profile: ProfileModel = useSelector((state: any) => state.profile);

  return (
    <div className="profile">
      <Gallery />
    </div>
  );
};
