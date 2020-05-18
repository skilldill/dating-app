import React, { useState } from "react";

import "./style.scss";
import { MeetingsFilterProps } from "./MeetingFilter.model";
import { SearchBar } from "shared/components";
import { MEETING_STATUSES } from "shared/constants";
import { ToggleRadio } from "shared/components";

const FilterRadioValues = [
    { name: "Все", value: null },
    { name: "В ожид.", value: MEETING_STATUSES.AWAITING },
    { name: "Подтв.", value: MEETING_STATUSES.CONFIRMED }
]

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
            <div className="radio">
                <ToggleRadio 
                    values={FilterRadioValues} 
                    onChange={handleChangeStatuses} 
                />
            </div>
        </div>
    )
}