import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./style.scss";
import { PartnersActions } from "store/partners/partners.actions";
import { MessageFormProps } from "./MessageForm.model";
import attachIcon from "assets/icons/attach-outline.svg";
import arrowUp from "assets/icons/arrow-up-outline.svg";

export const MessageForm: React.FC<MessageFormProps> = (props) => {
    const [message, setMessage] = useState('');
    const { partner } = props;
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(PartnersActions.sendMessage({
            id: partner.id,
            message
        }));
        setMessage('');
    }

    const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setMessage(value);
    }

    return (
        <div className="message-form">
            <form onSubmit={handleSubmit}>
                <div className="input-file">
                    <label htmlFor="chat-file">
                        <img src={attachIcon} alt="attach"/>
                    </label>
                    <input type="file" id="chat-file" />
                </div>
                <div className="input-message">
                    <input 
                        type="text" 
                        placeholder="Сообщение..."
                        onChange={handleChangeMessage}
                        value={message}
                    />
                </div>
                {   
                    !!message.length && 
                    (<button className="submit">
                        <img src={arrowUp} alt="arrow"/>
                    </button>    )
                }
            </form>
        </div>
    )
}