import React from "react";
import cn from "classnames";

import "./style.scss";
import { MessageProps } from "./Message.model";

export const MessageField: React.FC<MessageProps> = (props) => {
    const { message } = props;

    const classes = () => cn({
        'message': true,
        'message-myself': message.myself
    })

    return (
        <div className={classes()}>
            <div className="message-date">
                <span>{message.date}</span>
            </div>
            <div className="message-body">
                <p>{message.text}</p>
            </div>
        </div>
    )
}