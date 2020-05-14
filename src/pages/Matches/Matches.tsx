import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import { Partner } from "../../shared/models"
import { MatchesList } from "./components";
import { SearchBar } from "../../shared/components";

export const Matches = () => {
    const partnersLiked = useSelector<any, Partner[]>((state) => state.partners.partnersLiked);
    const matchesPartners = partnersLiked.filter((partner) => partner.selectMe);
    const [matches, setMatches] = useState(matchesPartners);

    const findPartners = (name: string) => {
        const foundPartners = matchesPartners.filter((partner) => partner.name.includes(name));
        setMatches(foundPartners);
    }

    return (
        <div className="matches">
            <SearchBar 
                placeholder="Поиск"
                onInput={findPartners}
            />
            <MatchesList matches={matches} />
        </div>
    )
}