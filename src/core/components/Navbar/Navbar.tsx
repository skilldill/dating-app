import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import { NavbarProps } from "./Navbar.model";
import menuIcon from "../../../assets/icons/burger-outline.svg";

export const Navbar: React.FC<NavbarProps> = (props) => {
    const { toggleMenu } = props;
    const { title } = useSelector((state: any) => state.navbar);

    return (
        <div className="navbar">
            <span className="navbar-title">
                {title}
            </span>
            <div 
                className="menu-btn"
                onClick={toggleMenu}
            >
                <img src={menuIcon} alt="lines"/>
            </div>
        </div>
    )
}