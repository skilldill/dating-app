import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import { PartnerCard } from "../PartnerCard";
import heartOutline from "../../../../assets/icons/heart-outline.svg";
import closeOutline from "../../../../assets/icons/close-circle-outline.svg";
import starOutline from "../../../../assets/icons/star-outline.svg";
import { Partner } from "shared/models";

export const PartnersList = () => {
    const partners = useSelector<any, Partner[]>((state: any) => state.partners.partners);
    const partner = partners[0];

    return (
        <div className="partners-list">
            {
                !!partner ? 
                (
                    <>
                        <PartnerCard partner={partners[0]} />
                        <div className="partners-list-controls">
                            <button className="btn btn-circle btn-like">
                                <img src={heartOutline} alt="heart"/>
                            </button>
                            <button className="btn btn-circle btn-middle btn-mark">
                                <img src={starOutline} alt="cross"/>
                            </button>
                            <button className="btn btn-circle btn-close">
                                <img src={closeOutline} alt="star"/>
                            </button>
                        </div>
                    </>
                ) : "Пусто"
            }
        </div>
    )
}