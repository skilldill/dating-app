import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./style.scss";
import { MatchesItemProps } from "./MatchesItem.model";
import { NavbarActions } from "../../../../store/navbar/navbar.actions";

export const MatchesItem: React.FC<MatchesItemProps> = (props) => {
    const { partner } = props;
    const dispatch = useDispatch();
    const router = useHistory();

    // Нужно чтобы компонента понимала
    // куда отправлять пользователя 
    // так как эта компонента общая и для совпадений и для чатов
    const { pathname } = useLocation();
    const isChatLink = pathname === '/chats';

    const handleClick = () => {
        const query = isChatLink ? `chat/${partner.id}` : `partner/${partner.id}`;
        dispatch(NavbarActions.changeTitle(partner.name));
        router.push(query);
    }

    return (
        <div className="matches-item" onClick={handleClick}>
            <div className="avatar">
                <img src={partner.avatar} alt={partner.name} />
            </div>
            <div className="description">
                <h4>{`${partner.name} ${partner.surname ? partner.surname : ''}`}</h4>
            </div>
        </div>
    )
}