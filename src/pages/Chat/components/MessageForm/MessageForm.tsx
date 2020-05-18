import React from "react";

import "./style.scss";
import { MessageFormProps } from "./MessageForm.model";
import attachIcon from "assets/icons/attach-outline.svg";
import arrowUp from "assets/icons/arrow-up-outline.svg";

export const MessageForm: React.FC<MessageFormProps> = (props) => {
    const { partner } = props;

    return (
        <div className="message-form">
            <form>
                <div className="input-file">
                    <label htmlFor="chat-file">
                        <img src={attachIcon} alt="attach"/>
                    </label>
                    <input type="file" id="chat-file" />
                </div>
                <div className="input-message">
                    <input type="text" placeholder="Сообщение..." />
                </div>
                <button className="submit">
                    <img src={arrowUp} alt="arrow"/>
                </button>
            </form>
        </div>
    )
}