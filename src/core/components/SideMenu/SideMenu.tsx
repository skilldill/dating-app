import React, { useRef } from "react";
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from "@ionic/react"
import { Link, useHistory } from "react-router-dom";

import { SideMenuProps } from "./SideMenu.model";

export const SideMenu:React.FC<SideMenuProps> = (props) => {
    const contentId = "SideMenu";
    const history = useHistory();
    // TODO: Необходимо any заменить на HTMLIonMenuElement
    const menuRef = useRef<any>(null);

    const handleChangeRoute = (event:React.MouseEvent<HTMLAnchorElement>, to: string) => {
        event.preventDefault();
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
                        <IonItem>
                            <Link 
                                to="/home"
                                onClick={(event) => { handleChangeRoute(event, "/home") }}
                            >Мой профиль</Link>
                        </IonItem>
                        <IonItem>
                            <Link 
                                to="/about"
                                onClick={(event) => { handleChangeRoute(event, "/about") }}
                            >Настройки</Link>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
            <div id={contentId}></div>
        </>
    )
}