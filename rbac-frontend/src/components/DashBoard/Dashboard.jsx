import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import RoleList from "../RoleManagement/RoleList";
import UserList from "../UserManagement/UserList";
import HomePage from "../Homepage/HomePage";

// Navigation Items
const NAV_ITEMS = [
  { title: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { title: "User Management", icon: <LayersIcon />, path: "/users" },
  { title: "Role Management", icon: <LayersIcon />, path: "/roles" },
  // { title: "Reports", icon: <BarChartIcon />, path: "/reports" },
];

function useRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => ({
    pathname,
    navigate: (path) => setPathname(String(path)),
  }), [pathname]);

  return router;
}

export default function DashboardLayout() {
  const router = useRouter("/dashboard");
  const [drawerOpen, setDrawerOpen] = React.useState(true);

  // Light/Dark mode state
  const [mode, setMode] = React.useState("light");
  const toggleMode = () => setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  // Theme configuration
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { main: "#673ab7" },
                background: { default: "#f5f5f5" },
              }
            : {
                primary: { main: "#90caf9" },
                background: { default: "#121212" },
              }),
        },
        typography: {
          fontFamily: "Roboto, sans-serif",
        },
      }),
    [mode]
  );

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            VRV Dashboard
          </Typography>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="persistent"
        open={drawerOpen}
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem
              button
              key={item.title}
              onClick={() => router.navigate(item.path)}
              selected={router.pathname === item.path}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: mode === "light" ? "#f3e5f5" : "#333333",
                  "&:hover": {
                    backgroundColor: mode === "light" ? "#e1bee7" : "#444444",
                  },
                },
                "&:hover": {
                  backgroundColor: mode === "light" ? "#ede7f6" : "#555555",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          color: "text.primary",
          p: 3,
          marginLeft: drawerOpen ? "240px" : "0",
          transition: "margin-left 0.3s",
        }}
      >
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {router.pathname === "/dashboard" && <HomePage />}
            {router.pathname === "/users" && <UserList />}
            {router.pathname === "/roles" && <RoleList />}
            {router.pathname === "/reports" && (
              <Typography variant="h6">Reports Section Coming Soon</Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
