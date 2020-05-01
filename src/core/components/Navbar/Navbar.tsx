import React from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import { NavbarProps } from "./Navbar.model";

// Common height 51px;

export const Navbar: React.FC<NavbarProps> = (props) => {
    const { toggleMenu } = props;
    const history = useHistory();

    return (
        <div className="navbar">
            <div 
                className="navbar-btn-menu"
                onClick={toggleMenu}
            >
                Меню
            </div>
            <h3 className="navbar-title">
                Title
            </h3>
        </div>
    )
}