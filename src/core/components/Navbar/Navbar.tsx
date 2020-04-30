import React from "react";
import { useHistory } from "react-router-dom";
import { IonToolbar, IonTitle, IonBackButton, IonButtons, IonIcon, IonButton } from "@ionic/react";


export const Navbar = () => {
    const history = useHistory();
    const showBtnBack = history.length > 1;

    console.log(history.length);

    return (
        <IonToolbar>
            {
                showBtnBack && 
                (<IonButtons slot="start">
                    <IonButton fill="clear" onClick={history.goBack}>Назад</IonButton>
                </IonButtons>)
            }
            <IonTitle>Title</IonTitle>
        </IonToolbar>
    )
}