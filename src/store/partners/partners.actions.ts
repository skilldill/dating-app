import { createAction } from "redux-actions";

export enum PartnersActionsTypes {
    LIKE = "PARTNER.LIKE",
    DISLIKE = "PARTNER.DISLIKE",
    SKIP = "PARTNER.SKIP",
    DROP_ALL = "PARTNER.DROP_ALL",
    SEND_MESSAGE = "PARTNER.SEND_MESSAGE"
}

export class PartnersActions {
    // Предполагается что string тип id партнёра
    static like = createAction<string>(PartnersActionsTypes.LIKE);
    static dislike = createAction<string>(PartnersActionsTypes.DISLIKE);
    static skip = createAction<string>(PartnersActionsTypes.SKIP);
    static dropAll = createAction(PartnersActionsTypes.DROP_ALL);
    static sendMessage = createAction(PartnersActionsTypes.SEND_MESSAGE);
}