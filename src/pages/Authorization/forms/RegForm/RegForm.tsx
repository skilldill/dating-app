import React from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import { Input } from "../../components";

export const RegForm = () => {
    const history = useHistory();

    return (
        <div className="form login-form">
            <h3 className="title">Регистрация</h3>
            <div className="controls-inputs">
                <Input placeholder="E-mail" bottomBorder />
                <Input type="password" placeholder="Пароль" bottomBorder />
                <Input type="password" placeholder="Повторите пароль" />
            </div>
            <div>
                <button className="btn">Зарегистрироваться</button>
            </div>
        </div>
    )
}