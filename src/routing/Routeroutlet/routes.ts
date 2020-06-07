import { 
    Profile, 
    Partners, 
    Matches,
    PartnerPage,
    MeetingsPage,
    Chat,
    Onboarding,
    Settings
} from "../../pages"
import { RouteNamedProps } from "../routes.model";

export const routes: RouteNamedProps[] = [
    { path: "/partners", component: Partners, name: "Коллеги" },
    { path: "/mathces", name: "Совпадения", component: Matches },
    { path: "/meetings", name: "Мои встречи", component: MeetingsPage },
    { path: "/chats", name: "Сообщения" , component: Matches},
    { path: "/profile", component: Profile, name: "Профиль" },
    { path: "/settings", name: "Настройки", component: Settings },
    { path: "/partner/:id", component: PartnerPage },
    { path: "/chat/:id", component: Chat },
    { path: "/onboarding", component: Onboarding }
]