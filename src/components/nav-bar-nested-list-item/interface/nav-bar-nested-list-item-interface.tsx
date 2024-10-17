import { ReactNode } from "react";
import { NavBarListItemProps} from "../../nav-bar-list-item/interface/nav-bar-list-item-interface";

export interface NavBarNestedListItemProps{
    primaryText: string,
    primaryIcon: ReactNode,
    items: NavBarListItemProps[]
}

