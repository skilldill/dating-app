import { handleActions, Action } from "redux-actions";
import { PartnersActionsTypes } from "./partners.actions";
import { Partner } from "../../shared/models";

export interface PartnersState {
    partners: Partner[]
}

const initialState: PartnersState = {
    partners: [
        { 
            id: "1", 
            name: "Harry", 
            age: 19,
            gender: "male",
            avatar: "",
            gallery: []
        }
    ]
}

const like = (state: PartnersState, action: Action<string>) => {
    return { ...state }
}
const dislike = (state: PartnersState, action: Action<string>) => {
    return { ...state }
}
const skip = (state: PartnersState, action: Action<string>) => {
    return { ...state }
}

const mapReducers = {
    [PartnersActionsTypes.LIKE]: like,
    [PartnersActionsTypes.DISLIKE]: dislike,
    [PartnersActionsTypes.SKIP]: skip
}

export const partnersReducer = handleActions(mapReducers, initialState);