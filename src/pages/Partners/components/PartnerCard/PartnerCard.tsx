import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import cn from "classnames";

import "./style.scss";
import { PartnerCardProps } from "./PartnerCard.model";
import { MIN_DIFF_SCROLL_PARTNER, ANGLE_COEFF } from "shared/constants";
import { PartnersActions } from "../../../../store/partners/partners.actions";
import defaultUser from "../../../../assets/default-user-image.png"

export const PartnerCard: React.FC<PartnerCardProps> = (props) => {
    const { partner } = props;
    // Для touch событий
    const [startTouchX, setStartTouchX] = useState(0);
    const [currentTouchX, setCurrentTouchX] = useState(0);
    
    // Состояние загрузки картинки
    const [loaded, setLoaded] = useState(false);

    // Состояние анимирования во время возвращения карточки в начальнее положение
    const [lockTransition, setLockTransition] = useState(false);

    // Состояние выбора свайпа вправо или влево
    const [finishLeft, setFinishLeft] = useState(false);
    const [finishRight, setFinishRight] = useState(false);
    const [transitionAfterFinish, setTransitionAfterFinish] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {setLoaded(false)}, [partner])

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setStartTouchX(event.touches[0].clientX);
    }

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        setCurrentTouchX(event.touches[0].clientX);
    }

    const handleLikeSwipe = () => {
        setFinishLeft(true);
        setTransitionAfterFinish(true);
        setTimeout(() => {
            dispatch(PartnersActions.like(partner.id));
            setFinishLeft(false);
        }, 300);
        setTimeout(() => {
            setTransitionAfterFinish(false);
        }, 600)
    }

    const handleDislikeSwipe = () => {
        setFinishRight(true);
        setTransitionAfterFinish(true);
        setTimeout(() => {
            dispatch(PartnersActions.dislike(partner.id));
            setFinishRight(false)
        }, 300);
        setTimeout(() => {
            setTransitionAfterFinish(false);
        }, 600)
    }

    const handleTouchEnd = () => {
        if (!!currentTouchX && !!startTouchX) {
            const diff = currentTouchX - startTouchX
            const diffAbs = Math.abs(diff);
            
            if (diffAbs >= MIN_DIFF_SCROLL_PARTNER) {
                if (diff < 0) {
                    // LIKE
                    handleLikeSwipe();
                } else {
                    // DISLIKE
                    handleDislikeSwipe();
                }
            }

            // Lock transition
            setLockTransition(true);
            setTimeout(() => setLockTransition(false), 300);
        }

        setCurrentTouchX(0);
        setStartTouchX(0);
    }

    const calcTranslateStyle = (): React.CSSProperties => {
        if (!!currentTouchX && !!startTouchX) {
            const translateLength = currentTouchX - startTouchX;
            const angle = translateLength * ANGLE_COEFF;
            
            return {
                transform: `translate(${translateLength}px) rotate(${angle}deg)`
            }
        }

        return {
            transform: `translate(0px)`
        }
    }

    const styleCard = (): React.CSSProperties => {
        if (transitionAfterFinish) {
            return { transition: 'all 0.3s' };
        }
        return {
            ...calcTranslateStyle(),
            transition: lockTransition ? 'all 0.3s' : 'none'
        }
    }

    const handleOnLoadPicture = () => {
        setLoaded(true);
    }

    const classes = cn({
        "partner-card": true,
        "partner-card-swipe-left": finishLeft,
        "partner-card-swipe-right": finishRight
    })

    return (
        <div 
            style={styleCard()}
            className={classes}
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