import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import { MeetingItemProps } from "./MeetingItem.model";
import { Partner } from "../../../../shared/models";

export const MeetingItem: React.FC<MeetingItemProps> = (props) => {
    const [partner, setPartner] = useState<Partner | null>(null);
    const partners = useSelector<any, Partner[]>((state: any) => state.partners.allPartners);
    const { meeting } = props;

    useEffect(() => {
        const foundPartner = partners.find((partner) => partner.id === meeting.partnerId);
        !!foundPartner && setPartner(foundPartner);
    }, [meeting]);

    return (
        <div className="meeting-item">
            <div className="meeting-item-header">
                {`Дата: ${meeting.date} Время: ${meeting.time}`}
            </div>
            <p>С кем: {!!partner ? partner.name : ''}</p>
            <p>Описание:</p>
            <p>{meeting.description ? meeting.description : ''}</p>
        </div>
    )
}