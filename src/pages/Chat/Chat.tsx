import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./style.scss";
import { Page } from "shared/components";
import { MessageForm, MessagesList } from "./components";
import { Partner } from "shared/models";

export const Chat = () => {
    const [partner, setPartner] = useState<Partner | null>(null);
    const { id } = useParams();
    const partners = useSelector<any, Partner[]>((state: any) => state.partners.partnersLiked);

    useEffect(() => {
        const foundPartner = partners.find((curPartner) => curPartner.id === id);
        !!foundPartner && setPartner(foundPartner);
    }, [])

    return (
        <Page overflow="hidden">
            <div className="chat">
                {
                    (!!partner && !!partner.messages && !!partner.messages.length) ?
                        <MessagesList 
                            messages={partner.messages}
                            partners={partners} 
                        /> :
                        <p>У вас пока нет сообщений</p>
                }
                { 
                    !!partner && 
                    <MessageForm partner={partner} /> 
                }
            </div>
        </Page>
    )
}