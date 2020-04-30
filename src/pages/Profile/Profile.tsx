import React from 'react';
import { IonPage, IonContent, IonText } from '@ionic/react';
import { useSelector } from "react-redux";

import "./style.scss";
import { Profile as ProfileModel } from "../../shared/models";
import { Content } from "../../shared/components";

export const Profile: React.FC = () => {
  const profile: ProfileModel = useSelector((state: any) => state.profile);

  return (
    <IonPage>
      <IonContent>
        <Content>
          <div className="profile">
            <div 
              className="profile-avatar"
              style={{backgroundImage: `url(${profile.avatar})`}}
            >
              <div className="inner">
                <img src={profile.avatar} alt={profile.name} />
              </div>
            </div>
            <div className="profile-content">
              <IonText color="dark">
                <h1>{`${profile.name} ${profile.surname}`}</h1>
              </IonText>
            </div>
          </div>
        </Content>
      </IonContent>
    </IonPage>
  );
};
