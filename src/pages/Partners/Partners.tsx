import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { NavbarActions } from "store/navbar/navbar.actions";
import { PartnersList } from "./components";
import { Page } from "shared/components";

export const Partners = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(NavbarActions.changeTitle("Коллеги"))
    }, [dispatch])

    return (
        <Page>
            <div className="partners">
                <PartnersList />
            </div>
        </Page>
    )
}