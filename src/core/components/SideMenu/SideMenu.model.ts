import { RouteNamedProps } from "../../../routing/routes.model";

export interface SideMenuProps {
    routes: RouteNamedProps[],
    isOpen: boolean,
    closeMenu: () => void
}