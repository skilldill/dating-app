import React from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import { Input } from "../../components";

export const LoginForm = () => {
    const history = useHistory();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        history.push('/partners');
    } 

    return (
        <div className="form login-form" onSubmit={handleSubmit}>
            <h3 className="title">Вход</h3>
            <div className="controls-inputs">
                <Input placeholder="Логин" bottomBorder />
                <Input type="password" placeholder="Пароль" />
            </div>
            <div>
                <button className="btn">Войти</button>
            </div>
        </div>
    )
}