import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import { Partner } from "../../shared/models"
import { MatchesList } from "./components";

export const Matches = () => {
    const likedPartners = useSelector<any, Partner[]>((state) => state.partners.likedPartnesr);
    const matchesPartners = likedPartners.filter((partner) => partner.selectMe);

    return (
        <div className="matches">
            <MatchesList matches={matchesPartners} />
        </div>
    )
}