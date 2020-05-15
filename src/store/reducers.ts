import { combineReducers } from "redux";
import { PartnersModule } from "./partners";
import { ProfileModule } from "./profile";
import { NavbarModule } from "./navbar";
import { MeetingModule } from "./meetings";

export const reducers = combineReducers({
    partners: PartnersModule.reducer,
    profile: ProfileModule.reducer,
    navbar: NavbarModule.reducer,
    meetings: MeetingModule.reducer
});