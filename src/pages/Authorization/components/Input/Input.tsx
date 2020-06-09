import React, { useMemo } from "react";
import cn from "classnames";

import "./style.scss";
import { InputProps } from "./Input.model";

export const Input: React.FC<InputProps> = ({ placeholder="", type="text", bottomBorder }) => {
    const classes = useMemo(() => cn({
        'input-control': true,
        'input-control-border': !!bottomBorder
    }), [bottomBorder])

    return (
        <div className={classes}>
            <input 
                type={type} 
                placeholder={placeholder} 
            />
        </div>
    )
}