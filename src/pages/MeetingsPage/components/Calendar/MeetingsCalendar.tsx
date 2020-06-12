import React, { useState } from "react";
import Calendar, { CalendarTileProperties } from "react-calendar";
import moment from "moment";

import "./style.scss";
import { MeetingsCalendarProps } from "./MeetingsCalendar.model";
import { ModalBottom } from "shared/components/ModalBottom";
import { Meeting } from "shared/models";
import { MeetingsList } from "../MeetingsList";

export const MeetingsCalendar: React.FC<MeetingsCalendarProps> = (props) => {
    const { meetings } = props;
    const [currentMeetings, setCurrentMeetings] = useState<Meeting[]>([]);
    const [modalTitle, setModalTitle] = useState("");
    const [showModal, setShowModal] = useState(false);

    const renderMeetings = (props: CalendarTileProperties) => {
        // date в Meeting в формате year-month-day
        const { date } = props;
        const tileFormatedDate = moment(date).format('DD-MM-YYYY');
        let day = tileFormatedDate.split('-')[0];

        // Убераем начальный ноль если он есть
        if (day[0] === "0") {
            day = day[1];
        }

        const meetingsToday = meetings.filter((meeting) => meeting.date === tileFormatedDate);
        
        const handleClick = () => {
            setModalTitle(`📅 ${moment(date).lang("ru").format('ll')}`);
            setCurrentMeetings(meetingsToday);
            setShowModal(true);
        }

        if (!!meetingsToday.length) {
            return (
                <div className="meeting-day" onClick={handleClick}>
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
            { 
                showModal && 
                (
                    <ModalBottom 
                        onClose={() => setShowModal(false)}
                        height={window.innerHeight - 40}
                    >
                        <div className="modal-meetings">
                            <MeetingsList 
                                title={modalTitle}
                                meetings={currentMeetings} 
                            />
                        </div>
                    </ModalBottom>
                )
            }
        </div>
    )
}