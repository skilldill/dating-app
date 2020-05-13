import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import cn from "classnames";

import "./style.scss";
import { MIN_DIFF_TOUCH } from "../../../shared/constants";
import { RouteNamedProps } from "../../../routing/routes.model";
import { SideMenuProps } from "./SideMenu.model";
import { MenuProfile } from "../MenuProfile";
import { useDispatch } from "react-redux";
import { NavbarActions } from "store/navbar/navbar.actions";

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
    const [startTouch, setStartTouch] = useState(0);
    const [endTouch, setEndTouch] = useState(0);
    const dispatch = useDispatch();

    const { routes, closeMenu, isOpen } = props;
    const history = useHistory();

    const classes = cn({
        "side-menu": true,
        "side-menu-open": isOpen
    })

    const handleChangeRoute = (route: RouteNamedProps) => {
        dispatch(NavbarActions.changeTitle(route.name));
        route.path && history.push(route.path.toString());
        closeMenu();
    }

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        setEndTouch(event.touches[0].clientX);
    }

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setStartTouch(event.touches[0].clientX);
    }
    
    const handleTouchEnd = () => {
        if (!!startTouch && !!endTouch) {
            const touchDiff = startTouch - endTouch;
            if (touchDiff >= MIN_DIFF_TOUCH) {
                closeMenu();
            }
        }
        setEndTouch(0);
        setStartTouch(0);
    }

    const renderMenuItems = () => (
        <>
            {
                routes.map((route: RouteNamedProps, i: number) => 
                    <MenuItem 
                        key={i}
                        name={route.name}
                        onClick={() => handleChangeRoute(route)}
                    />
                )
            }
        </>
    )

    return (
        <div 
            className={classes}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <MenuProfile />
            <ul className="side-menu-items">
                { renderMenuItems() }
                <li className="side-menu-item">
                    Выход
                </li>
            </ul>
        </div>
    )
}