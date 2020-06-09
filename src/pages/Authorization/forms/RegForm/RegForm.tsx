import React from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import { Input } from "../../components";

export const RegForm = () => {
    const history = useHistory();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        history.push('/partners');
    } 

    return (
        <div className="form login-form" onSubmit={handleSubmit}>
            <h3 className="title">Регистрация</h3>
            <div className="controls-inputs">
                <Input placeholder="E-mail" bottomBorder />
                <Input type="password" placeholder="Пароль" bottomBorder />
                <Input type="password" placeholder="Повторите пароль" />
            </div>
            <div>
                <button className="btn" type="submit">Зарегистрироваться</button>
            </div>
        </div>
    )
}