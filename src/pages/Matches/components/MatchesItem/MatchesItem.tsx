import React from "react";

import "./style.scss";
import { MatchesItemProps } from "./MatchesItem.model";

export const MatchesItem: React.FC<MatchesItemProps> = (props) => {
    const { partner } = props;
    return (
        <div className="matches-item">
            <div className="avatar">
                <img src={partner.avatar} alt={partner.name} />
            </div>
            <div className="description">
                <h4>{`${partner.name} ${partner.surname ? partner.surname : ''}`}</h4>
            </div>
        </div>
    )
}