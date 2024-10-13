import React from "react";
import Button from "@mui/material/Button";
import { useThemeContext } from "../../../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button variant="contained" onClick={toggleTheme}>
      {theme.palette.mode === "light"
        ? "Switch to Dark Mode"
        : "Switch to Light Mode"}
    </Button>
  );
};

export default ThemeToggle;
