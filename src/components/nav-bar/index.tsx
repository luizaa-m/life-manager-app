import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { NavBarProps } from "./interface/nav-bar-interface";
import { NavBarListItemProps } from "../nav-bar-list-item/interface/nav-bar-list-item-interface";
import { NavBarNestedListItemProps } from "../nav-bar-nested-list-item/interface/nav-bar-nested-list-item-interface";
import NavBarNestedListItem from "../nav-bar-nested-list-item";
import NavBarListItem from "../nav-bar-list-item";
import "./index.css";

const drawerWidth = 240;

export default function NavBar(props: NavBarProps) {
  const isNesteditem = (item: NavBarListItemProps | NavBarNestedListItemProps ) => {
    return (item as NavBarNestedListItemProps).items !== undefined;
  }
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        {props.title}
      </Toolbar>
      <Divider />
      <List>
      {props.items.map((value)=>(
        <>
      {isNesteditem(value)&& <NavBarNestedListItem {...value as NavBarNestedListItemProps}></NavBarNestedListItem>}
      {!isNesteditem(value)&& <NavBarListItem {...value as NavBarListItemProps}></NavBarListItem>}
        </>
      ))}
      </List>
    </Drawer>
  );
}
