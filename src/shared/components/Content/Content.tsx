import React from "react";
import "./style.scss";

export const Content:React.FC = (props) => (
    <div className="content">{props.children}</div>
)