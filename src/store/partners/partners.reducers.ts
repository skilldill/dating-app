import moment from "moment";
import { handleActions, Action } from "redux-actions";
import { PartnersActionsTypes } from "./partners.actions";
import { Partner } from "shared/models";
import { DATE_FORMAT } from "shared/constants";

import { mockPartners } from "./partners.mock";

export interface PartnersState {
    partners: Partner[],
    partnersLiked: Partner[],
    partnersBlocked: Partner[]
}

const initialState: PartnersState = {
    partnersLiked: [mockPartners[mockPartners.length - 1]],
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

const sendMessage = (state: PartnersState, action: Action<any>) => {
    const { id, message } = action.payload;
    const foundIndex = state.partnersLiked.findIndex((partner) => id === partner.id);
    const copyLiked = [...state.partnersLiked];

    if (!copyLiked[foundIndex].messages) {
        copyLiked[foundIndex].messages = [];
    }

    const nowDate = moment().format(DATE_FORMAT);

    copyLiked[foundIndex].messages?.push({
        date: nowDate,
        text: message,
        id: `${message}-${foundIndex}`,
        myself: true
    })

    return {
        ...state,
        partnersLiked: copyLiked
    }
}

const mapReducers = {
    [PartnersActionsTypes.LIKE]: like,
    [PartnersActionsTypes.DISLIKE]: dislike,
    [PartnersActionsTypes.SKIP]: skip,
    [PartnersActionsTypes.DROP_ALL]: dropAll,
    [PartnersActionsTypes.SEND_MESSAGE]: sendMessage
}

export const partnersReducer = handleActions(mapReducers, initialState);