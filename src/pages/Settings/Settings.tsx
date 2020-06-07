import React from "react";

import "./style.scss";
import { OnboardingSettings } from "./modules";
import { Page } from "shared/components"

export const Settings = () => {
    return (
        <Page>
            <div className="settings">
                <OnboardingSettings />
            </div>
        </Page>
    )
}