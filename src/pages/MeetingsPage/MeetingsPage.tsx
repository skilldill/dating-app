import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import { Page } from "shared/components";
import { MeetingsList, MeetingsFilter } from "./components";
import { MEETING_STATUSES } from "shared/constants";
import { Meeting } from "shared/models";

export const MeetingsPage = () => {
    const [showStatus, setShowStatus] = useState<MEETING_STATUSES | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const meetings = useSelector<any, Meeting[]>((state: any) => state.meetings.meetings);
    const awaitingMeetings = meetings.filter((meeting) => meeting.status === MEETING_STATUSES.AWAITING);
    const confirmedMeetings = meetings.filter((meeting) => meeting.status === MEETING_STATUSES.CONFIRMED);

    const filtredMeetings = (meetings: Meeting[]): Meeting[] => {
        return meetings.filter((meeting) => meeting.description?.includes(searchQuery));
    } 

    return (
        <Page>
            <div className="meetings-page">
                <MeetingsFilter 
                    onChangeStatuses={setShowStatus}
                    onSearch={setSearchQuery}
                />
                {
                    (showStatus !== MEETING_STATUSES.CONFIRMED) && (
                        <MeetingsList 
                            title="В ожидании"
                            meetings={filtredMeetings(awaitingMeetings)}
                        />
                    )
                }
                {
                    (showStatus !== MEETING_STATUSES.AWAITING) && (
                        <MeetingsList 
                            title="Подтверждённые"
                            meetings={filtredMeetings(confirmedMeetings)}
                        />
                    )
                }
            </div>
        </Page>
    )
}