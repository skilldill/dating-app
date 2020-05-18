import { 
    Profile, 
    Partners, 
    Matches,
    PartnerPage,
    MeetingsPage,
    Chat
} from "../../pages"
import { RouteNamedProps } from "../routes.model";

export const routes: RouteNamedProps[] = [
    { path: "/partners", component: Partners, name: "Коллеги" },
    { path: "/mathces", name: "Совпадения", component: Matches },
    { path: "/meetings", name: "Мои встречи", component: MeetingsPage },
    { path: "/chats", name: "Сообщения" },
    { path: "/profile", component: Profile, name: "Профиль" },
    { path: "/settings", name: "Настройки" },
    { path: "/partner/:id", component: PartnerPage },
    { path: "/chat/:id", component: Chat }
]