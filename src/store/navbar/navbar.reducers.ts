import { handleActions, Action } from "redux-actions";
import { NavbarActionsTypes } from "./navbar.actions";

export interface NavbarState {
    title: string;
}

const initialState: NavbarState = {
    title: ""
}

const changeTitle = (state: NavbarState, action: Action<string>) => ({
    ...state,
    title: action.payload
})

const mapReducers = {
    [NavbarActionsTypes.CHANGE_TITLE]: changeTitle
}

export const navbarReducer = handleActions(mapReducers, initialState);