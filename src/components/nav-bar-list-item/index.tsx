import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
import { NavBarListItemProps } from "./interface/nav-bar-list-item-interface";


export default function NavBarListItem(props: NavBarListItemProps) {
  return (
          <ListItem key={props.itemText} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {props.itemIcon}
              </ListItemIcon>
              <ListItemText primary={props.itemText} />
            </ListItemButton>
          </ListItem>
  );
}
