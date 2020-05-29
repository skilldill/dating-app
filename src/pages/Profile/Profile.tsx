import React from 'react';
import { useSelector } from "react-redux";

import "./style.scss";
import { Page } from "shared/components";
import { Profile as ProfileModel } from "shared/models";
import { Gallery } from "./components";

export const Profile: React.FC = () => {
  const profile: ProfileModel = useSelector((state: any) => state.profile);

  return (
    <Page>
      <div className="profile">
        <div className="profile-description">
          <div className="profile-avatar">
            <img src={profile.avatar} alt={profile.name} />
          </div>
        </div>
        <Gallery />
      </div>
    </Page>
  );
};
