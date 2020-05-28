import React, { useState, useRef, useEffect } from "react";
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
    const messageInput = useRef<HTMLInputElement>(null);
    
    
    // Дикий костыль чтобы скрыть кнопку "DONE"
    // На клавиатуре iphone
    useEffect(() => {
        if (!!messageInput.current) {
            const input = document.getElementById('message-input');
            input?.setAttribute('mozactionhint', 'send');
        }
    }, [messageInput])

    const handleSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(PartnersActions.sendMessage({
            id: partner.id,
            message
        }));
        setMessage('');

        if (!!messageInput.current) {
            messageInput.current.focus();
        }
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
                        ref={messageInput}
                        type="text" 
                        placeholder="Сообщение..."
                        onChange={handleChangeMessage}
                        value={message}
                        id="message-input"
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