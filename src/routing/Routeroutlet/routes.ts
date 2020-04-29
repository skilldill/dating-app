import { RouteProps } from "react-router-dom";
import { Profile } from "../../pages"

export const routes: RouteProps[] = [
    { path: "/profile", component: Profile },
    { path: "/chats" },
    { path: "/calendar" },
    { path: "/find_partners" },
]