import { createAction } from "redux-actions";

export enum NavbarActionsTypes {
    CHANGE_TITLE = "NAVBAR.CHANGE_TITLE",
}

export class NavbarActions {
    static changeTitle = createAction<string>(NavbarActionsTypes.CHANGE_TITLE);
}