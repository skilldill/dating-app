import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { SideMenu } from "../../core/components";
import { Start } from "../../pages";

export const Routeroutlet = () => {
  const routerId = "IonReactRouter";

  return (
    <>
      <SideMenu />
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Start} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </>
  )
}