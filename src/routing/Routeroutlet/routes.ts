import { Profile, Partners } from "../../pages"
import { RouteNamedProps } from "../routes.model";

export const routes: RouteNamedProps[] = [
    { path: "/profile", component: Profile, name: "Профиль" },
    { path: "/partners", component: Partners, name: "Коллеги" },
    { path: "/chats", name: "Сообщения" },
    { path: "/calendar", name: "Настройки" },
]