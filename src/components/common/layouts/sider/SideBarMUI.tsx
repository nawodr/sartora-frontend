import React from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { SidebarItem } from "../Types";
import { ListItemButton, ListItemIcon } from "@mui/material";
import * as Icons from "@mui/icons-material";

const drawerWidth = 240;
const collapsedDrawerWidth = 56;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface SideBarMUIProps {
  items: SidebarItem[];
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

const SideBarMUI: React.FC<SideBarMUIProps> = ({
  items,
  open,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer
      sx={{
        width: open ? drawerWidth : collapsedDrawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        height: "100%",
        marginTop: "69px",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: theme.palette.background.paper, // Dynamic background color
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedDrawerWidth,
          marginTop: "69px",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: "hidden",
          backgroundColor: theme.palette.background.default, // Dynamic background color for paper
        },
      }}
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {items.map((item, index) => {
          const IconComponent = Icons[item.iconName as keyof typeof Icons];
          return (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: theme.palette.text.primary, // Dynamic text color
                }}
                onClick={() => handleNavigation(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: theme.palette.text.secondary, // Dynamic icon color
                  }}
                >
                  {IconComponent ? <IconComponent /> : null}
                </ListItemIcon>
                {open && (
                  <ListItemText
                    primary={item.text}
                    sx={{ color: theme.palette.text.primary }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SideBarMUI;
