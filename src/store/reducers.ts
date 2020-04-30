import { combineReducers } from "redux";
import { PartnersModule } from "./partners";
import { ProfileModule } from "./profile";

export const reducers = combineReducers({
    partners: PartnersModule.reducer,
    profile: ProfileModule.reducer
});