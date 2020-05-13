import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";
import { NavbarProps } from "./Navbar.model";

export const Navbar: React.FC<NavbarProps> = (props) => {
    const { toggleMenu } = props;
    const { title } = useSelector((state: any) => state.navbar);

    return (
        <div className="navbar">
            <span className="navbar-title">
                {title}
            </span>
        </div>
    )
}