import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./style.scss";
import { MessageForm, MessageField } from "./components";
import { Partner } from "shared/models";

export const Chat = () => {
    const [partner, setPartner] = useState<Partner | null>(null);
    const { id } = useParams();
    const partners = useSelector<any, Partner[]>((state: any) => state.partners.partnersLiked);
    const messagesBlock = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const foundPartner = partners.find((curPartner) => curPartner.id === id);
        !!foundPartner && setPartner(foundPartner);
    }, [])

    // Для скроллинга при появлении нового сообщения
    useEffect(() => {
        const block = messagesBlock;
        if (block && block.current) {
            block.current.scrollIntoView(false);
        }
        
    }, [partners])

    const renderMessages = () => {
        return (
            <div 
                className="messages"
                ref={messagesBlock}
            >
                {
                    partner && partner.messages?.map((message, i) =>
                        <MessageField key={i} message={message} />
                    )
                }
            </div>
        )
    }

    return (
        <div className="chat">
            {renderMessages()}
            { 
                !!partner && 
                <MessageForm partner={partner} /> 
            }
        </div>
    )
}