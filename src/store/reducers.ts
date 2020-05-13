import { combineReducers } from "redux";
import { PartnersModule } from "./partners";
import { ProfileModule } from "./profile";
import { NavbarModule } from "./navbar";

export const reducers = combineReducers({
    partners: PartnersModule.reducer,
    profile: ProfileModule.reducer,
    navbar: NavbarModule.reducer
});