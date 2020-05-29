import React from "react";
import { PartnersList } from "./components";
import { Page } from "shared/components";

export const Partners = () => {
    return (
        <Page>
            <div className="partners">
                <PartnersList />
            </div>
        </Page>
    )
}