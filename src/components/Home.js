import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import {
  FaLinkedin,
  FaGithub,
  FaPython,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import profilePic from "../assets/Img/profile.png";
import { SiPostgresql } from "react-icons/si";
import { DiDjango } from "react-icons/di";

// Lista de habilidades
const skills = [
  { icon: <FaPython />, label: "Python" },
  { icon: <FaReact />, label: "React" },
  { icon: <SiPostgresql />, label: "PostgreSQL" },
  { icon: <DiDjango />, label: "Django" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
];

// Componente para cartões de informações
const InfoCard = ({ title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Box
      sx={{
        padding: "2rem",
        borderRadius: 2,
        background:
          "linear-gradient(#292933, #292933), linear-gradient(to right, #9333ea, #4c51bf)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
        },
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "#9333ea", fontWeight: "bold", mb: 2 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#e0e0e0", lineHeight: 1.8, fontSize: "1.1rem" }}
      >
        {text}
      </Typography>
    </Box>
  </motion.div>
);

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e1e2f 30%, #15151f 100%)",
        padding: "2rem",
        textAlign: "center",
        paddingTop: { xs: "100px", md: "120px" }, // Adicionado espaçamento para compensar a navbar
      }}
    >
      {/* Seção de Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Avatar
            alt="Leonardo Fragoso"
            src={profilePic}
            loading="lazy"
            sx={{
              width: 180,
              height: 180,
              mb: 3,
              border: "8px solid #9333ea",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
              margin: "0 auto",
              "&:hover": {
                transform: "scale(1.2)",
                boxShadow: "0 0 20px #9333ea",
              },
            }}
          />

          <Typography variant="h3" sx={{ color: "#fff", fontWeight: "bold" }}>
            Leonardo Fragoso
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#e0e0e0",
              mt: 1,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Desenvolvedor Full Stack | Python | Django | React
          </Typography>
        </Box>
      </motion.div>

      {/* Seção de Habilidades */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          mb: 6,
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.label}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Box
              sx={{
                textAlign: "center",
                color: "white",
                fontSize: "3rem",
                transition:
                  "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                "&:hover": {
                  color: "#f97316",
                  textShadow: "0 0 10px rgba(249, 115, 22, 0.7)",
                },
              }}
            >
              {skill.icon}
              <Typography
                variant="body1"
                sx={{ mt: 1, fontSize: "1.1rem", color: "#e0e0e0" }}
              >
                {skill.label}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Seção de Informações */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: "3rem",
          mb: 6,
        }}
      >
        <InfoCard
          title="Backend"
          text="Desenvolvedor back-end com ampla experiência em Python e frameworks como Django e Flask. Focado na criação de soluções escaláveis, otimizadas e seguras, com integração de APIs e automação de processos."
        />
        <InfoCard
          title="Frontend"
          text="Desenvolvedor front-end com sólida experiência em React, especializado na criação de interfaces de usuário dinâmicas e altamente responsivas. Foco em detalhes, usabilidade e performance, com ênfase na criação de experiências interativas."
        />
      </Box>

      {/* Seção de Ações */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          <Button
            href="https://www.linkedin.com/in/leonardo-fragoso-921b166a"
            target="_blank"
            variant="contained"
            sx={{
              backgroundColor: "#0e76a8",
              "&:hover": {
                backgroundColor: "#0b5a86",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <FaLinkedin style={{ marginRight: "8px" }} />
            LinkedIn
          </Button>
          <Button
            href="https://github.com/leonardo-fragoso"
            target="_blank"
            variant="contained"
            sx={{
              backgroundColor: "#333",
              "&:hover": {
                backgroundColor: "#222",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <FaGithub style={{ marginRight: "8px" }} />
            GitHub
          </Button>
          <Button
            href="/contact"
            variant="contained"
            sx={{
              backgroundColor: "#f97316",
              "&:hover": {
                backgroundColor: "#ea580c",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Contato
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
}
