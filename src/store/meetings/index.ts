import { MeetingsActions } from "./meetings.actions";
import { MeetingsReducer } from "./meetings.reducers";

export const MeetingModule = {
    reducer: MeetingsReducer,
    actions: MeetingsActions
}