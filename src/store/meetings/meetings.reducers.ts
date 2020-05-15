import { handleActions, Action } from "redux-actions";
import { MeetingsActionTypes } from "./meetings.actions";
import { Meeting } from "../../shared/models";
import { mockMeetings } from "./meetings.mock";

export interface MeetingState {
    meetings: Meeting[]
} 

const initialState: MeetingState = {
    meetings: [...mockMeetings]
}

const addMeeting = (state: MeetingState, action: Action<Meeting>) => ({
    ...state,
    meetings: [...state.meetings, action.payload]
});

const removeMeeting = (state: MeetingState, action: Action<any>) => {
    const foundMeeting = state.meetings.find((meeting) => meeting.id === action.payload);
    if (!!foundMeeting) {
        const indexMeeting = state.meetings.indexOf(foundMeeting); 
        const updateMeetings = [...state.meetings.splice(indexMeeting, 1)];

        return {
            ...state,
            meetings: [...updateMeetings]
        }
    }
    
    return { ...state };
}

const mapReducers = {
    [MeetingsActionTypes.ADD]: addMeeting,
    [MeetingsActionTypes.REMOVE]: removeMeeting
}

export const MeetingsReducer = handleActions(mapReducers, initialState);