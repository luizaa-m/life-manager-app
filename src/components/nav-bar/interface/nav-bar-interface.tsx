import { NavBarListItemProps } from "../../nav-bar-list-item/interface/nav-bar-list-item-interface";
import { NavBarNestedListItemProps } from "../../nav-bar-nested-list-item/interface/nav-bar-nested-list-item-interface";


export interface NavBarProps {
    items: (NavBarNestedListItemProps|NavBarListItemProps)[],
    title: string
}