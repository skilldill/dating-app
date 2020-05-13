import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import { PartnerCard } from "../PartnerCard";
import heartOutline from "../../../../assets/icons/heart-outline.svg";
import closeOutline from "../../../../assets/icons/close-circle-outline.svg";
import starOutline from "../../../../assets/icons/star-outline.svg";
import { Partner } from "shared/models";
import { PartnersActions } from "../../../../store/partners/partners.actions";

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
                                <img src={heartOutline} alt="heart"/>
                            </div>
                            <div 
                                className="btn btn-circle btn-close"
                                onClick={handleDislike}
                            >
                                <img src={closeOutline} alt="star"/>
                            </div>
                        </div>
                    </>
                ) : "Пусто"
            }
        </div>
    )
}