import React from "react";

import "./style.scss";
import { BoardProps } from "./Board.model";

export const Board: React.FC<BoardProps> = (props) => {
    return (
        <div className="board"></div>
    )
}