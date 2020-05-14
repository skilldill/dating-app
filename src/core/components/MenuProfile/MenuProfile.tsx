import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import { Profile } from "../../../shared/models";

export const MenuProfile = () => {
    const profile: Profile = useSelector((state: any) => state.profile);

    return (
        <div className="menu-profile">
            <div className="profile-card">
                <div className="profile-card-avatar">
                    <img src={profile.avatar} alt={profile.name} />
                </div>
                <div className="profile-card-data">
                    <h1>{`${profile.name} ${profile.surname}`}</h1>
                </div>
            </div>
        </div>
    )
}