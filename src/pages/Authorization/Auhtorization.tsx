import React, { useState } from "react";

import "./style.scss";
import { LoginForm, RegForm } from "./forms";
import logoPng from "assets/logo.png";

export const Authorzation = () => {
  const [form, setForm] = useState(<LoginForm />);
  const [changeBtnContent, setChangeBtnContent] = useState('Зарегистрироваться');

  const handleChangeForm = (event: React.MouseEvent) => {
    event.preventDefault();

    if (changeBtnContent === 'Зарегистрироваться') {
      setForm(<RegForm />);
      setChangeBtnContent('Вход');
    }

    if (changeBtnContent === 'Вход') {
      setForm(<LoginForm />);
      setChangeBtnContent('Зарегистрироваться');
    }
  }

  return (
    <div className="authorization">
      <div className="logo logo-collapsed">
        <img src={logoPng} alt="logo" />
      </div>
      { form }
      <div className="change-control">
        <a href="#" onClick={handleChangeForm}>{changeBtnContent}</a>
      </div>
    </div>
  )
}