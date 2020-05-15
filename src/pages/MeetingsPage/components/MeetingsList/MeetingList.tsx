import React from "react";

import "./style.scss";
import { MeetinListProps } from "./MeetingList.model";
import { MeetingItem } from "../MeetingItem";

export const MeetingsList: React.FC<MeetinListProps> = (props) => {
    const { title, meetings } = props;
    
    const renderMeetings = () => {
        if (!!meetings.length) {
            return (
                <>
                    {
                        meetings.map((meeting, i) => 
                            <MeetingItem key={i} meeting={meeting} />
                        )
                    }
                </>
            )
        }
        // TODO: Обязтельно сделать заглушку если нет митингов
        return <h3>Встреч нет</h3>
    }

    return (
        <div className="meeting-list">
            <h3 className="title">{title}</h3>
            {renderMeetings()}
        </div>
    )
}