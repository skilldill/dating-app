import React from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import { SettingsBlock } from "../../components";

export const OnboardingSettings = () => {
    const history = useHistory();

    const handleClick = () => {
        localStorage.clear();
        window.location.href = '/onboarding';
        // history.push('/onboarding');
    }

    return (
        <SettingsBlock title="Начальные слайды">
            <button onClick={handleClick} className="btn">
                Показать начальные слайды
            </button>
        </SettingsBlock>
    )
}
