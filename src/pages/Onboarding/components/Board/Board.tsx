import React from "react";

import "./style.scss";

export const Board: React.FC = (props) => {
    return (
        <div className="board">
            {props.children}
        </div>
    )
}