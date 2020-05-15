import { createAction } from "redux-actions";
import { Meeting } from "../../shared/models";

export enum MeetingsActionTypes {
    ADD = 'MEETINGS.ADD',
    REMOVE = 'MEETINGS.REMOVE'
}

export class MeetingsActions {
    static addMeeting = createAction<Meeting>(MeetingsActionTypes.ADD);
    static removeMeeting = createAction<string>(MeetingsActionTypes.REMOVE);
}
