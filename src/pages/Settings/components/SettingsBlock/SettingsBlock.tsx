import React from "react";

import "./style.scss";
import { SettingsBlockProps } from "./SettingsBlock.model";

export const SettingsBlock: React.FC<SettingsBlockProps> = (props) => {
    const { title, children } = props;

    return (
        <div className="settings-block">
            <h3 className="title">{title}</h3>
            <div className="settings-block-body">
                {children}
            </div>
        </div>
    )
}