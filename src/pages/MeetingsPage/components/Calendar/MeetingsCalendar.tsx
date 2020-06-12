import React from "react";
import Calendar, { CalendarTileProperties } from "react-calendar";
import moment from "moment";

import "./style.scss";
import { MeetingsCalendarProps } from "./MeetingsCalendar.model";

export const MeetingsCalendar: React.FC<MeetingsCalendarProps> = (props) => {
    const { meetings } = props;

    const renderMeetings = (props: CalendarTileProperties) => {
        // date в Meeting в формате year-month-day
        const { date } = props;
        const tileFormatedDate = moment(date).format('DD-MM-YYYY');
        const day = tileFormatedDate.split('-')[0];

        const meetingsToday = meetings.filter((meeting) => meeting.date === tileFormatedDate);
        
        if (!!meetingsToday.length) {
            console.log(meetingsToday.length);
            return (
                <div className="meeting-day">
                    <div className="meetings-count">
                        {meetingsToday.length}
                    </div>
                    {day}
                </div>
            )
        }

        return null;
    }

    return (
        <div className="meetings-calendar">
            <Calendar 
                tileContent={renderMeetings}
            />
        </div>
    )
}