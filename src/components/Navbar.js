import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  // Detecta a rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Alterna o estado do Drawer
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Links do menu
  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Sobre Mim", path: "/about" },
    { text: "Projetos", path: "/projects" },
    { text: "Contato", path: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled
          ? "rgba(28, 28, 40, 0.95)"
          : "rgba(28, 28, 40, 0.5)",
        boxShadow: scrolled ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "none",
        backdropFilter: "blur(10px)",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        zIndex: 10,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: { xs: "1rem", md: "2rem" },
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5rem",
            "&:hover": { color: "#f97316" },
          }}
        >
          Meu Portfólio
        </Typography>

        {/* Menu para desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? "#f97316" : "#e0e0e0",
                textDecoration: "none",
                textTransform: "uppercase",
                fontSize: "1.1rem",
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                borderBottom:
                  location.pathname === item.path
                    ? "2px solid #f97316"
                    : "none",
                transition: "color 0.3s ease, border-bottom 0.3s ease",
                "&:hover": { color: "#f97316" },
              }}
            >
              {item.text}
            </Typography>
          ))}
        </Box>

        {/* Botão para abrir o menu lateral */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer para dispositivos móveis */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#1c1c28",
            color: "#fff",
            width: 250,
            padding: "1rem",
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => toggleDrawer(false)}
                sx={{
                  textAlign: "left",
                  textTransform: "uppercase",
                  color:
                    location.pathname === item.path ? "#f97316" : "#e0e0e0",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  "&:hover": { color: "#f97316" },
                  transition: "color 0.3s ease",
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
