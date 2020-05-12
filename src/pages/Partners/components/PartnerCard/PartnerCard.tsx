import React from "react";

import "./style.scss";
import { PartnerCardProps } from "./PartnerCard.model";

export const PartnerCard: React.FC<PartnerCardProps> = (props) => {
    const { partner } = props;

    return (
        <div className="partner-card">
            <div className="partner-card-photo">
                <img src={partner.avatar} alt={partner.name} />
            </div>
            <div className="partner-card-description">
                <h2>{`${partner.name}, ${partner.age}`}</h2>
            </div>
        </div>
    )
}