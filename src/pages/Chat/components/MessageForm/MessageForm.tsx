import React from "react";

import "./style.scss";
import { MessageFormProps } from "./MessageForm.model";

export const MessageForm: React.FC<MessageFormProps> = (props) => {
    const { partner } = props;

    return (
        <div className="message-form">
            <form>
                <input type="text" placeholder="Сообщение..."/>
            </form>
        </div>
    )
}