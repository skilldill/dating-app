import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./style.scss";
import { PartnerCardProps } from "./PartnerCard.model";
import { MIN_DIFF_SCROLL_PARTNER } from "shared/constants";
import { PartnersActions } from "../../../../store/partners/partners.actions";
import defaultUser from "../../../../assets/default-user-image.png"

export const PartnerCard: React.FC<PartnerCardProps> = (props) => {
    const { partner } = props;
    const [startTouchX, setStartTouchX] = useState(0);
    const [currentTouchX, setCurrentTouchX] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoaded(false);
    }, [partner])

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setStartTouchX(event.touches[0].clientX);
    }

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        setCurrentTouchX(event.touches[0].clientX);
    }

    const handleTouchEnd = () => {
        const diff = currentTouchX - startTouchX
        const diffAbs = Math.abs(diff);

        if (diffAbs >= MIN_DIFF_SCROLL_PARTNER) {
            if (diff < 0) {
                dispatch(PartnersActions.like(partner.id));
            } else {
                dispatch(PartnersActions.dislike(partner.id));
            }
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

    const handleOnLoadPicture = () => {
        setLoaded(true);
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
                <img 
                    src={loaded ? partner.avatar : defaultUser} 
                    alt={partner.name}
                    onLoad={handleOnLoadPicture} 
                />
            </div>
            <div className="partner-card-description">
                <h2>{`${partner.name}, ${partner.age}`}</h2>
            </div>
        </div>
    )
}