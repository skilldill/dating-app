import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import { MeetingsList, MeetingsFilter } from "./components";
import { MEETING_STATUSES } from "../../shared/constants";
import { Meeting } from "../../shared/models";

export const MeetingsPage = () => {
    const meetings = useSelector<any, Meeting[]>((state: any) => state.meetings.meetings);
    const awaitingMeetings = meetings.filter((meeting) => meeting.status === MEETING_STATUSES.AWAITING);
    const confirmedMeetings = meetings.filter((meeting) => meeting.status === MEETING_STATUSES.CONFIRMED);

    return (
        <div className="meetings-page">
            <MeetingsFilter />
            <MeetingsList 
                title="В ожидании"
                meetings={awaitingMeetings}
            />
            <MeetingsList 
                title="Подтверждённые"
                meetings={confirmedMeetings}
            />
        </div>
    )
}