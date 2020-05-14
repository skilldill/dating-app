import { 
    Profile, 
    Partners, 
    Matches,
    PartnerPage
} from "../../pages"
import { RouteNamedProps } from "../routes.model";

export const routes: RouteNamedProps[] = [
    { path: "/partners", component: Partners, name: "Коллеги" },
    { path: "/mathces", name: "Совпадения", component: Matches },
    { path: "/chats", name: "Сообщения" },
    { path: "/profile", component: Profile, name: "Профиль" },
    { path: "/settings", name: "Настройки" },
    { path: "/partner/:id", component: PartnerPage }
]