import React from "react";
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from "@ionic/react"
import { Link } from "react-router-dom";
import { SideMenuProps } from "./SideMenu.model";

export const SideMenu:React.FC<SideMenuProps> = (props) => {
    const contentId = "SideMenu";

    return (
        <>
            <IonMenu side="start" menuId="first" contentId={contentId} >
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Меню</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>
                            <Link to="/home">Мой профиль</Link>
                        </IonItem>
                        <IonItem>
                            <Link to="/about">Настройки</Link>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
            <div id={contentId}></div>
        </>
    )
}