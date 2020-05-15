import React, { useState } from "react";

import "./style.scss";
import { MittingFormProps } from "./MittingForm.model";

export const MittingForm: React.FC<MittingFormProps> = (props) => {
    const { partnerId, onSubmit } = props;
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!!onSubmit) {

        }
    }

    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.currentTarget.value);
    }

    const handleChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        setTime(event.currentTarget.value);
    }

    return (
        <form 
            className="mitting-form"
            onSubmit={handleSubmit}
        >
            <div className="control">
                <label htmlFor="mitting-date-control">Выберите дату:</label>
                <input 
                    type="date" 
                    id="mitting-date-control"
                    onChange={handleChangeDate} 
                    placeholder="Дата"
                />
            </div>
            <div className="control">
                <label htmlFor="mitting-time-control">Выберите время:</label>
                <input 
                    type="time" 
                    id="mitting-time-control"
                    onChange={handleChangeTime}
                    value="12:00"
                />
            </div>
            <div className="control control-last">
                <button className="btn btn-primary">Пригласить</button>
            </div>
        </form>
    )
}