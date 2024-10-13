import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: theme.palette.background.default, // Dynamically change background based on theme
  color: theme.palette.text.primary, // Dynamically change text color
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MainContent: React.FC = () => {
  const theme = useTheme(); // Get the current theme

  return (
    <Main>
      <DrawerHeader />
      <Outlet />
    </Main>
  );
};

export default MainContent;
