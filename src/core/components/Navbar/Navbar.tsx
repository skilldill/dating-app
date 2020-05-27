import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import "./style.scss";
import { NavbarProps } from "./Navbar.model";
import menuIcon from "../../../assets/icons/burger-outline.svg";


export const Navbar: React.FC<NavbarProps> = (props) => {
    const { toggleMenu } = props;
    const { title } = useSelector((state: any) => state.navbar);
    const { pathname } = useLocation();
    const history = useHistory();

    const btnBack = useMemo(() => {
        if (pathname.includes('/chat/')) {
            return (
                <span onClick={() => history.goBack()}>Назад</span>
            )
        }
        return null;
    }, [pathname])

    return (
        <div className="navbar">
            {btnBack}
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