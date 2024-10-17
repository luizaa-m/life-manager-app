import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse, ListItem } from "@mui/material";
import { useState } from "react";
import { NavBarNestedListItemProps } from "./interface/nav-bar-nested-list-item-interface";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function NavBarNestedListItem(props: NavBarNestedListItemProps) {
    const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
      <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {props.primaryIcon}
        </ListItemIcon>
        <ListItemText primary={props.primaryText} />
        {open ? <HiChevronDown color='#6DB33F'/> : <HiChevronUp color='#6DB33F' />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {props.items.map((item) => (
          <ListItem key={item.itemText} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.itemIcon}
              </ListItemIcon>
              <ListItemText primary={item.itemText} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </Collapse>
      </>
  );
}
