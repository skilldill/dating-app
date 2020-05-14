import { handleActions, Action } from "redux-actions";
import { PartnersActionsTypes } from "./partners.actions";
import { Partner } from "../../shared/models";

import { mockPartners } from "./partners.mock";

export interface PartnersState {
    partners: Partner[],
    partnersLiked: Partner[],
    partnersBlocked: Partner[]
}

const initialState: PartnersState = {
    partnersLiked: [], //[mockPartners[mockPartners.length - 1]],
    partnersBlocked: [],
    partners: [...mockPartners]
}

const like = (state: PartnersState, action: Action<string>) => {
    const currentPartner = state.partners.pop();
    if (currentPartner) {
        return { 
            ...state,
            partners: [...state.partners], 
            partnersLiked: [...state.partnersLiked, currentPartner] 
        };
    }

    return { ...state };
}
const dislike = (state: PartnersState, action: Action<string>) => {
    const currentPartner = state.partners.pop();
    if (currentPartner) {
        return { 
            ...state,
            partners: [...state.partners], 
            partnersBlocked: [...state.partnersBlocked, currentPartner]
        };
    }

    return { ...state };
}
const skip = (state: PartnersState, action: Action<string>) => {
    return { ...state }
}

const dropAll = (state: PartnersState, action: Action<string>) => {
    return { 
        partnersLiked: [],
        partnersBlocked: [],
        partners: [...mockPartners]
    }
}

const mapReducers = {
    [PartnersActionsTypes.LIKE]: like,
    [PartnersActionsTypes.DISLIKE]: dislike,
    [PartnersActionsTypes.SKIP]: skip,
    [PartnersActionsTypes.DROP_ALL]: dropAll
}

export const partnersReducer = handleActions(mapReducers, initialState);