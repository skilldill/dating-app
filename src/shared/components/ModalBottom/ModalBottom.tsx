import React, { useState, useEffect } from "react";

import "./style.scss";
import { ModalBottomProps } from "./ModalBottom.model";
import { MIN_DIFF_MODAL } from "../../constants";

export const ModalBottom: React.FC<ModalBottomProps> = (props) => {
    const { onClose, children } = props;
    const [closed, setClosed] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchCurrent, setTouchCurrent] = useState(0);
    const [withTransition, setWithTransition] = useState(true);
    const [isInit, setIsInit] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsInit(false), 10);
        setTimeout(() => {
            setWithTransition(false);
        }, 300);
        
    }, [])

    const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setClosed(true);
        setWithTransition(true);
        setTimeout(() => {
            setWithTransition(false);
            !!onClose && onClose();
        }, 300);
    }

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const touchY = event.touches[0].clientY;
        setTouchStart(touchY);
    }

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const touchY = event.touches[0].clientY;
        setTouchCurrent(touchY);
    }

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
        if (!!touchStart && !!touchCurrent) {
            const diff = touchCurrent - touchStart;
            const diffAbs = Math.abs(diff);
            
            setWithTransition(true);
            setTimeout(() => setWithTransition(false), 300);
            if (diff > 0 && diffAbs >= MIN_DIFF_MODAL) {
                // onClose
                setClosed(true);
                !!onClose && onClose();
            }

        }

        setTouchCurrent(0);
        setTouchStart(0);
    }

    const calcTranslateStyle = (): React.CSSProperties => {
        const diff = touchCurrent - touchStart;
        if (!closed) {
            if (!!touchStart && !!touchCurrent && diff > 0) {
                return { 
                    transform: `translateY(${diff}px)`,
                };
            }
            return { transform: `none` };
        }

        return {
            transform: 'translateY(600px)',
        }
    }

    const styleWithTransition = (): React.CSSProperties => {
        if (withTransition) {
            return {
                transition: 'all .3s'
            }
        }
        return {
            transition: 'none'
        }
    }

    const calcBackgroundStyle = (): React.CSSProperties => {
        if (closed) {
            return { opacity: 0 }
        } 
        return { opacity: 1 }
    }

    const initialTransform = (): React.CSSProperties => {
        if (isInit) {
            return { transform: 'translateY(600px)' }
        }
        return {}
    }

    return (
        <div 
            className="modal-background"
            onClick={handleClose}
            style={{
                ...calcBackgroundStyle()
            }}
        >
            <div 
                className="modal-bottom"
                style={{
                    ...calcTranslateStyle(),
                    ...styleWithTransition(),
                    ...initialTransform()
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
