import React from "react";
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from "@ionic/react"

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
                        <IonItem>Мой профиль</IonItem>
                        <IonItem>Выбор</IonItem>
                        <IonItem>Сообщения</IonItem>
                        <IonItem>Настройки</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
            <div id={contentId}></div>
        </>
    )
}