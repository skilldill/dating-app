import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import { PartnerCard } from "../PartnerCard";
import lunchOutline from "../../../../assets/icons/lunch-outline.png";
import closeOutline from "../../../../assets/icons/close-circle-outline.svg";
import syncOutline from "../../../../assets/icons/sync-outline.svg";
import { Partner } from "shared/models";
import { PartnersActions } from "../../../../store/partners/partners.actions";

interface Clickable {
    onClick: () => void;
}

const Empty:React.FC<Clickable> = (props) => (
    <div className="empty" onClick={props.onClick}>
        <img src={syncOutline} alt="sync"/>
    </div>
)

export const PartnersList = () => {
    const partners = useSelector<any, Partner[]>((state: any) => state.partners.partners);
    const partnerIndex = partners.length - 1;
    const partner = partners[partnerIndex];
    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(PartnersActions.like(partner.id));
    }

    const handleDislike = () => {
        dispatch(PartnersActions.dislike(partner.id));
    }

    const handleDropAll = () => {
        dispatch(PartnersActions.dropAll());
    }

    return (
        <div className="partners-list">
            {
                !!partner ? 
                (
                    <>
                        <PartnerCard partner={partners[partnerIndex]} />
                        <div className="partners-list-controls">
                            <div 
                                className="btn btn-circle btn-like"
                                onClick={handleLike}
                            >
                                <img src={lunchOutline} alt="heart"/>
                            </div>
                            <div 
                                className="btn btn-circle btn-close"
                                onClick={handleDislike}
                            >
                                <img src={closeOutline} alt="star"/>
                            </div>
                        </div>
                    </>
                ) : <Empty onClick={handleDropAll} />
            }
        </div>
    )
}