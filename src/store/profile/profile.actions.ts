import { createAction } from "redux-actions";

export enum ProfileActionsTypes {
    CHANGE_NAME = "PROFILE.CHANGE_NAME",
    CHANGE_SURNAME = "PROFILE.CHANGE_SURNAME",
    ADD_SOCIAL = "PROFILE.ADD_SOCIAL",
    CHANGE_SOCIAL = "PROFILE.CHANGE_SOCIAL",
    REMOVE_SOCIAL = "PROFILE.REMOVE_SOCIAL"
}

export class ProfileActions {
    static changeName = createAction<string>(ProfileActionsTypes.CHANGE_NAME);
    static changeSurname = createAction<string>(ProfileActionsTypes.CHANGE_SURNAME);
    static addSocial = createAction<string>(ProfileActionsTypes.ADD_SOCIAL);

    // id передаётся как number потому что пока что социальные сети будут в массиве
    static changeSocial = createAction<{id: number, newRef: string}>(ProfileActionsTypes.CHANGE_SOCIAL);
    static removeSocial = createAction<number>(ProfileActionsTypes.REMOVE_SOCIAL);
}