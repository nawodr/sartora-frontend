import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Switch from "@mui/material/Switch";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface AppTopBarProps {
  title: string;
  toggleTheme: () => void; // Add toggleTheme to props
}

const AppBarStyled = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const AppTopBar: React.FC<AppTopBarProps> = ({ title, toggleTheme }) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBarStyled position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <AdbIcon
              sx={{
                display: { xs: "flex", md: "flex" },
                mr: { xs: 0.5, md: 1 },
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: { xs: 1, md: 2 },
                display: { xs: "flex", md: "flex" },
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: { xs: ".1rem", md: ".3rem" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {title}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Switch onChange={toggleTheme} />
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/src/assets/user.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};

export default AppTopBar;
