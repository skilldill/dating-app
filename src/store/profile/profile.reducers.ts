import { handleActions, Action } from "redux-actions";
import { ProfileActionsTypes } from "./profile.actions";
import { Profile } from "../../shared/models";

const initialState: Profile = {
    name: "Harry",
    surname: "Potter",
    age: 19,
    phone: "989831923",
    avatar: "",
    gallery: [],
    socials: []
}

const changeName = (state: Profile, action: Action<string>) => {
    return { ...state }
}

const changeSurname = (state: Profile, action: Action<string>) => {
    return { ...state }
}

// Почему id number смотреть в profile.actions
const changeSocial = (state: Profile, action: Action<{id: number, newRef: string}>) => {
    return { ...state }
}

const addSocial = (state: Profile, action: Action<string>) => {
    return { ...state }
}

const removeSocial = (state: Profile, action: Action<number>) => {
    return { ...state }
}

const mapReducers = {
    [ProfileActionsTypes.CHANGE_NAME]: changeName,
    [ProfileActionsTypes.CHANGE_SURNAME]: changeSurname,
    [ProfileActionsTypes.CHANGE_SOCIAL]: changeSocial,
    [ProfileActionsTypes.ADD_SOCIAL]: addSocial,
    [ProfileActionsTypes.REMOVE_SOCIAL]: removeSocial
}

export const profileReducer = handleActions<Profile, any>(mapReducers, initialState);