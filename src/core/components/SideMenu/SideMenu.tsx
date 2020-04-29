import React, { useRef } from "react";
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from "@ionic/react"
import { useHistory } from "react-router-dom";

import { RouteNamedProps } from "../../../routing/routes.model";
import { SideMenuProps } from "./SideMenu.model";

interface MenuItemProps {
    name: string,
    onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = (props) => (
    <IonItem onClick={props.onClick}>
        {props.name}
    </IonItem>
)

export const SideMenu: React.FC<SideMenuProps> = (props) => {
    const { routes } = props;
    const contentId = "SideMenu";
    const history = useHistory();
    // TODO: Необходимо any заменить на HTMLIonMenuElement
    const menuRef = useRef<any>(null);

    const handleChangeRoute = (to: string) => {
        history.push(to);
        menuRef.current?.close()
    }

    return (
        <>
            <IonMenu ref={menuRef} side="start" menuId="first" contentId={contentId}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Меню</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        { routes.map(
                            (route: RouteNamedProps, i: number) => (
                                <MenuItem 
                                    key={i}
                                    name={route.name}
                                    onClick={() => handleChangeRoute(`${route.path}`)}
                                />
                            ))
                        }
                        <IonItem>
                            Выйти
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
            <div id={contentId}></div>
        </>
    )
}