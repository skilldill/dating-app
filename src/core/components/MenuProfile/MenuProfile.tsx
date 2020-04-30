import React from "react";
import { useSelector } from "react-redux";
import { IonAvatar, IonToolbar, IonHeader, IonTitle } from "@ionic/react";
import { Profile } from "../../../shared/models";

export const MenuProfile = () => {
    const profile: Profile = useSelector((state: any) => state.profile);

    return (
        <IonHeader>
            <IonToolbar color="primary">
                <IonAvatar>
                    <img src={profile.avatar} alt={profile.name} />
                </IonAvatar>
                <IonTitle>{`${profile.name} ${profile.surname}`}</IonTitle>
            </IonToolbar>
        </IonHeader>
        
    )
}