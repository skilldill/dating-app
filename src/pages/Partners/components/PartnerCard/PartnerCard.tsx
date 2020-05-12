import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PartnersActions } from "../../../../store/partners/partners.actions";

import "./style.scss";
import { PartnerCardProps } from "./PartnerCard.model";

export const PartnerCard: React.FC<PartnerCardProps> = (props) => {
    const { partner } = props;
    const [startTouchX, setStartTouchX] = useState(0);
    const [currentTouchX, setCurrentTouchX] = useState(0);
    const dispatch = useDispatch();

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setStartTouchX(event.touches[0].clientX);
    }

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        setCurrentTouchX(event.touches[0].clientX);
    }

    const handleTouchEnd = () => {
        const diff = currentTouchX - startTouchX;
        if (diff < 0) {
            dispatch(PartnersActions.like(partner.id));
        } else {

        }

        setCurrentTouchX(0);
        setStartTouchX(0);
    }

    const calcTranslateStyle = (): React.CSSProperties => {
        if (!!currentTouchX && !!startTouchX) {
            const translateLength = currentTouchX - startTouchX;
            return {
                transform: `translate(${translateLength}px)`
            }
        }

        return {
            transform: `translate(0px)`
        }
    }

    return (
        <div 
            style={calcTranslateStyle()}
            className="partner-card"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="partner-card-photo">
                <img src={partner.avatar} alt={partner.name} />
            </div>
            <div className="partner-card-description">
                <h2>{`${partner.name}, ${partner.age}`}</h2>
            </div>
        </div>
    )
}