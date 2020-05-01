import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import cn from "classnames";

import "./style.scss";
import { RouteNamedProps } from "../../../routing/routes.model";
import { SideMenuProps } from "./SideMenu.model";
import { MenuProfile } from "../MenuProfile";

type MenuItemProps = {
    name: string,
    onClick: () => void,
}

const MenuItem: React.FC<MenuItemProps> = (props) => (
    <li className="side-menu-item" onClick={props.onClick}>
        {props.name}
    </li>
)

export const SideMenu: React.FC<SideMenuProps> = (props) => {
    const { routes, closeMenu, isOpen } = props;
    const history = useHistory();

    const classes = cn({
        "side-menu": true,
        "side-menu-open": isOpen
    })

    const handleChangeRoute = (to: string) => {
        history.push(to);
        closeMenu();
    }

    const renderMenuItems = () => (
        <>
            {
                routes.map((route: RouteNamedProps, i: number) => 
                    <MenuItem 
                        key={i}
                        name={route.name}
                        onClick={() => handleChangeRoute(`${route.path}`)}
                    />
                )
            }
        </>
    )

    return (
        <div className={classes}>
            <ul className="side-menu-items">
                { renderMenuItems() }
                <li className="side-menu-item">
                    Выход
                </li>
            </ul>
        </div>
    )
}