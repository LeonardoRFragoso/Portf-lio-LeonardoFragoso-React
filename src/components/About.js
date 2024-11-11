import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { motion } from "framer-motion";
import profilePic from "../assets/Img/profile.png";

export default function About() {
  const skills = [
    { skill: "Python (Django, Flask)", percentage: 90 },
    { skill: "React & Node.js", percentage: 85 },
    { skill: "Criação e integração de APIs RESTful", percentage: 80 },
    { skill: "Automação com Selenium e Puppeteer", percentage: 70 },
    { skill: "Testes automatizados e desenvolvimento ágil", percentage: 75 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 2rem",
        backgroundColor: "#1e1e2f",
      }}
    >
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centraliza horizontalmente
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <Avatar
            src={profilePic}
            alt="Leonardo Fragoso"
            sx={{
              width: 150,
              height: 150,
              border: "5px solid #f97316",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05) rotate(5deg)",
              },
            }}
          />
          <Typography
            variant="h3"
            sx={{ color: "#f97316", fontWeight: "bold" }}
          >
            SOBRE MIM
          </Typography>
        </Box>
      </motion.div>

      {/* Descrição */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.5rem",
            lineHeight: 2,
            maxWidth: "800px",
            marginBottom: "3rem",
            color: "#e0e0e0",
          }}
        >
          Sou Leonardo Fragoso, Desenvolvedor Full Stack com foco em back-end
          usando Python, Django e Flask. Tenho uma forte base em infraestrutura
          de TI e especialização em soluções seguras e escaláveis. Além disso,
          tenho experiência com front-end utilizando React e frameworks
          modernos.
        </Typography>
      </motion.div>

      {/* Competências */}
      <Typography
        variant="h4"
        sx={{
          color: "#f97316",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        COMPETÊNCIAS
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        {skills.map((skill, index) => (
          <Box key={index}>
            <Typography
              variant="body1"
              sx={{
                textAlign: "left",
                marginBottom: "0.5rem",
                color: "#e0e0e0",
              }}
            >
              {skill.skill}
            </Typography>
            <Box
              sx={{
                height: "10px",
                backgroundColor: "#333",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{
                  height: "100%",
                  backgroundColor: "#f97316",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      {/* Botões */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "3rem",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f97316",
            "&:hover": { backgroundColor: "#d65c13" },
          }}
          href="https://linkedin.com/in/leonardofragoso"
        >
          Ver LinkedIn
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f97316",
            "&:hover": { backgroundColor: "#d65c13" },
          }}
          href="mailto:contato@leonardofragoso.com"
        >
          Entre em Contato
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4c51bf",
            "&:hover": { backgroundColor: "#3b3f9e" },
          }}
          href="/CV%20Leonardo.pdf"
          download
        >
          Baixar Currículo
        </Button>
      </Box>
    </Box>
  );
}
