import React from "react";
import SideBarMUI from "../sider/SideBarMUI";
import Box from "@mui/material/Box";
import MainContent from "./mainContent/MainContent";
import { useDrawer } from "../../../../hooks/UseDrawer";
import AppTopBar from "../topBar/TopBar";
import { CssBaseline } from "@mui/material";
import { SidebarItem } from "../Types";
import { useThemeContext } from "../../../../context/ThemeContext";

interface MainLayoutProps {
  requiredRoles?: string[];
}

const MainLayout: React.FC<MainLayoutProps> = () => {
  const { toggleTheme } = useThemeContext();
  const { open, handleDrawerOpen, handleDrawerClose } = useDrawer();

  const menuItems: SidebarItem[] = [
    { text: "Dashboard", iconName: "Dashboard", path: "/" },
    { text: "Temp", iconName: "Info", path: "/temp" },
    { text: "Send email", iconName: "Mail", path: "/send-email" },
    { text: "Drafts", iconName: "Folder", path: "/drafts" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppTopBar title={"GMS"} toggleTheme={toggleTheme} />{" "}
      {/* Pass toggleTheme here */}
      <SideBarMUI
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        items={menuItems}
      />
      <MainContent />
    </Box>
  );
};

export default MainLayout;
