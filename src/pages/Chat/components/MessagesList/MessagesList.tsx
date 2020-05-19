import React, { useEffect, useRef } from "react";

import "./style.scss";
import { MessagesListProps } from "./MessagesList.model";
import { MessageField } from "../Message";

export const MessagesList: React.FC<MessagesListProps> = (props) => {
    const { messages, partners } = props;
    const messagesBlock = useRef<HTMLDivElement>(null);

    // Для скроллинга при появлении нового сообщения
    // partners нужно только чтобы следить за стором 
    // И когда он меняется из-за сообщений автоматически скролить вниз
    useEffect(() => {
        scrollToBottom();
    }, [partners])

    const scrollToBottom = () => {
        const block = messagesBlock;
        if (block && block.current) {
            block.current.scrollIntoView(false);
        }
    }

    return (
        <div 
            className="messages-list"
            ref={messagesBlock}
        >
            {
                messages.map((message, i) =>
                    <MessageField key={i} message={message} />
                )
            }
        </div>
    )
}