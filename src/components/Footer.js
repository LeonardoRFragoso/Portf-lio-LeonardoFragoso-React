import React from "react";
import { Box, Typography, Container, Link, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#15151f",
        paddingY: { xs: "16px", md: "24px" },
        borderTop: "1px solid #333",
        textAlign: "center",
        color: "#aaa",
        fontFamily: "'Poppins', sans-serif",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        {/* Links sociais */}
        <Grid
          container
          justifyContent="center"
          spacing={4}
          sx={{ marginBottom: "16px" }}
        >
          <Grid item>
            <Link
              href="https://github.com/LeonardoRFragoso?tab=repositories"
              target="_blank"
              rel="noopener"
              underline="none"
              aria-label="Visite meu GitHub"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#aaa",
                fontSize: "1rem",
                gap: "6px", // Espaço entre ícone e texto
                "&:hover": { color: "#fff", opacity: 0.9 },
                transition: "color 0.3s ease, opacity 0.3s ease",
              }}
            >
              <GitHubIcon fontSize="small" />
              GitHub
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.linkedin.com/in/leonardo-fragoso-921b166a/"
              target="_blank"
              rel="noopener"
              underline="none"
              aria-label="Visite meu LinkedIn"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#aaa",
                fontSize: "1rem",
                gap: "6px",
                "&:hover": { color: "#fff", opacity: 0.9 },
                transition: "color 0.3s ease, opacity 0.3s ease",
              }}
            >
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="mailto:leonardorfragoso@gmail.com"
              underline="none"
              aria-label="Enviar um email para mim"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#aaa",
                fontSize: "1rem",
                gap: "6px",
                "&:hover": { color: "#fff", opacity: 0.9 },
                transition: "color 0.3s ease, opacity 0.3s ease",
              }}
            >
              <EmailIcon fontSize="small" />
              Email
            </Link>
          </Grid>
        </Grid>

        {/* Direitos reservados */}
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.85rem",
            color: "#aaa",
            "&:hover": { color: "#fff" },
            transition: "color 0.3s ease",
          }}
        >
          © 2024 Leonardo Fragoso - Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
