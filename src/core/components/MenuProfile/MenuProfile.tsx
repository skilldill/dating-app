import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import { Profile } from "../../../shared/models";

export const MenuProfile = () => {
    const profile: Profile = useSelector((state: any) => state.profile);

    return (
        <div className="menu-profile">
            <div className="menu-profile-avatar">
                <img src={profile.avatar} alt={profile.name} />
            </div>
            <div className="menu-profile-data">
                <h1>{`${profile.name} ${profile.surname}`}</h1>
            </div>
        </div>
    )
}