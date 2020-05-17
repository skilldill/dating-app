import React, { useState } from "react";

import "./style.scss";
import { MeetingsFilterProps } from "./MeetingFilter.model";
import { SearchBar } from "../../../../shared/components";
import { MEETING_STATUSES } from "shared/constants";

export const MeetingsFilter: React.FC<MeetingsFilterProps> = (props) => {
    const { onSearch, onChangeStatuses } = props;
    const [status, setStatus] = useState<MEETING_STATUSES | null>(null);

    const handleSearch = (value: string) => {
        onSearch && onSearch(value);
    }

    const handleChangeStatuses = (status: MEETING_STATUSES | null) => {
        setStatus(status);
        onChangeStatuses && onChangeStatuses(status);
    }

    return (
        <div className="meetings-filter">
            <SearchBar placeholder="Поиск" onInput={handleSearch} />
            <div className="toggle-filter">
                <a href="#">Все</a>
                <a href="#">В ожид.</a>
                <a href="#">В ожид.</a>
            </div>
        </div>
    )
}