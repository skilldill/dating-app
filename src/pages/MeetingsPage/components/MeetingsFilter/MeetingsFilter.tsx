import React, { useState } from "react";

import "./style.scss";
import { MeetingsFilterProps } from "./MeetingFilter.model";
import { SearchBar } from "shared/components";
import { MEETING_STATUSES } from "shared/constants";
import { ToggleRadio } from "shared/components";

import searchIcon from "assets/icons/filter-outline.svg";
import filterIcon from "assets/icons/search-outline.svg";

const FilterRadioValues = [
    { name: "Все", value: null },
    { name: "В ожид.", value: MEETING_STATUSES.AWAITING },
    { name: "Подтв.", value: MEETING_STATUSES.CONFIRMED }
]

export const MeetingsFilter: React.FC<MeetingsFilterProps> = (props) => {
    const { onSearch, onChangeStatuses } = props;
    const [status, setStatus] = useState<MEETING_STATUSES | null>(null);
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleSearch = (value: string) => {
        onSearch && onSearch(value);
    }

    const handleChangeStatuses = (status: MEETING_STATUSES | null) => {
        setStatus(status);
        onChangeStatuses && onChangeStatuses(status);
    }

    const handleToggleSearchbar = () => {
        setShowSearchBar(!showSearchBar);
    }

    return (
        <div className="meetings-filter">
            {
                showSearchBar ?
                <SearchBar placeholder="Поиск" onInput={handleSearch} /> :
                (
                    <div className="radio">
                        <ToggleRadio 
                            values={FilterRadioValues} 
                            onChange={handleChangeStatuses} 
                        />
                    </div>
                )    
            }
            <button
                className="btn-toggle" 
                onClick={handleToggleSearchbar}
            >
                <img src={showSearchBar ? searchIcon : filterIcon} alt="icon"/>
            </button>
        </div>
    )
}