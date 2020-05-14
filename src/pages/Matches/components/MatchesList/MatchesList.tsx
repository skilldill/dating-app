import React, { useMemo } from "react";

import "./style.scss";
import { MatchesListProps } from "./MatchesList.model";
import { MatchesItem } from "../MatchesItem";

export const MatchesList: React.FC<MatchesListProps> = (props) => {
    const { matches } = props;

    const renderMatches = useMemo(() => {
        if (!!matches.length) {
            return (
                <>
                    {
                        matches.map((partner, i) => 
                            <MatchesItem key={i} partner={partner} />
                        )
                    }
                </>
            )
        }

        return <p className="not-found">Нет совпадений</p>;
    }, [matches]);

    return (
        <div className="matches-list">
            {renderMatches}
        </div>
    )
}