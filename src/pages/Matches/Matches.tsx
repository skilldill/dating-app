import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import "./style.scss";
import { Partner } from "shared/models"
import { MatchesList } from "./components";
import { SearchBar } from "shared/components";
import { PartnersState } from "store/partners/partners.reducers";

export const Matches = () => {
    // Нужно чтобы проверять на каком урле находится компонента
    // текущая компонента используется для отрисовки списка чатов
    const { pathname } = useLocation();
    const isChats = pathname === '/chats';

    const { partnersLiked, allPartners } = useSelector<any, PartnersState>((state) => state.partners);
    
    const preparePartners = (): Partner[] => {
        if (isChats) {
            console.log(1);
            return allPartners.filter((partner) => !!partner.messages && !!partner.messages.length);
        }
        console.log(2);
        return partnersLiked.filter((partner) => partner.selectMe);
    }
    
    // TODO: Оптимизировать
    const matchesPartners = preparePartners();
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
            <MatchesList 
                matches={matches} 
            />
        </div>
    )
}