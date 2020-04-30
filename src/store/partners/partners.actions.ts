import { createAction } from "redux-actions";

export enum PartnersActionsTypes {
    LIKE = "PARTNER.LIKE",
    DISLIKE = "PARTNER.DISLIKE",
    SKIP = "PARTNER.SKIP"
}

export class PartnersActions {
    // Предполагается что string тип id партнёра
    static like = createAction<string>(PartnersActionsTypes.LIKE);
    static dislike = createAction<string>(PartnersActionsTypes.DISLIKE);
    static skip = createAction<string>(PartnersActionsTypes.SKIP);
}