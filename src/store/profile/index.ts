import { ProfileActions } from "./profile.actions";
import { profileReducer } from "./profile.reducers";

export const ProfileModule = {
    reducer: profileReducer,
    actions: ProfileActions
}