import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import "./style.scss";
import { NavbarProps } from "./Navbar.model";
import menuIcon from "../../../assets/icons/burger-outline.svg";
import backIcon from "../../../assets/icons/arrow-back-outline.svg";


export const Navbar: React.FC<NavbarProps> = (props) => {
    const { toggleMenu } = props;
    const { title } = useSelector((state: any) => state.navbar);
    const { pathname } = useLocation();
    const history = useHistory();

    const btnBack = useMemo(() => {
        if (pathname.includes('/chat/')) {
            return (
                <div 
                    className="navbar-back"
                    onClick={() => history.goBack()}
                >
                    <img src={backIcon} alt="back"/>
                </div>
            )
        }
        return null;
    }, [pathname])

    return (
        <div className="navbar">
            <div className="navbar-title">
                {btnBack}
                <span>{title}</span>
            </div>
            <div 
                className="menu-btn"
                onClick={toggleMenu}
            >
                <img src={menuIcon} alt="lines"/>
            </div>
        </div>
    )
}