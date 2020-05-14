import { Profile, Partners } from "../../pages"
import { RouteNamedProps } from "../routes.model";

export const routes: RouteNamedProps[] = [
    { path: "/partners", component: Partners, name: "Коллеги" },
    { path: "/mathces", name: "Совпадения" },
    { path: "/chats", name: "Сообщения" },
    { path: "/profile", component: Profile, name: "Профиль" },
    { path: "/settings", name: "Настройки" },
]