import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Divider,
  Modal,
  IconButton,
  TextField,
  Chip,
  Skeleton,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaStripe,
  FaSearch,
} from "react-icons/fa";
import {
  DiJavascript1,
  DiPostgresql,
  DiMongodb,
  DiNodejsSmall,
} from "react-icons/di";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Importação de imagens
import project1Img from "../assets/Img/project1.png";
import project2Img from "../assets/Img/project2.png";
import project3Img from "../assets/Img/project3.png";
import project4Img from "../assets/Img/project4.png";
import project5Img from "../assets/Img/project5.png";
import project6Img from "../assets/Img/project6.png";

// Função para Lazy Loading das imagens otimizadas
const lazyLoadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
  });
};

const projectsData = [
  {
    title: "Projeto 1",
    description: "Uma aplicação web full stack utilizando React e Django.",
    technologies: [
      { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
      { name: "Django", icon: <FaPython style={{ color: "#3776AB" }} /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 style={{ color: "#F7DF1E" }} />,
      },
    ],
    image: project1Img,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Projeto 2",
    description: "Um sistema de gerenciamento de usuários com Node.js e React.",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall style={{ color: "#3C873A" }} /> },
      { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
      { name: "Express", icon: <FaNodeJs style={{ color: "#3C873A" }} /> },
    ],
    image: project2Img,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Projeto 3",
    description: "Aplicativo de automação utilizando Flask e Selenium.",
    technologies: [
      { name: "Flask", icon: <FaPython style={{ color: "#3776AB" }} /> },
      { name: "Selenium", icon: <FaPython style={{ color: "#3776AB" }} /> },
      { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} /> },
    ],
    image: project3Img,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Projeto 4",
    description: "Plataforma de blog com Django e React.",
    technologies: [
      { name: "Django", icon: <FaPython style={{ color: "#3776AB" }} /> },
      { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
      {
        name: "PostgreSQL",
        icon: <DiPostgresql style={{ color: "#336791" }} />,
      },
    ],
    image: project4Img,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Projeto 5",
    description: "Sistema de autenticação e autorização usando Node.js.",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall style={{ color: "#3C873A" }} /> },
      { name: "MongoDB", icon: <DiMongodb style={{ color: "#47A248" }} /> },
      { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
    ],
    image: project5Img,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Projeto 6",
    description: "E-commerce completo com integração de APIs de pagamento.",
    technologies: [
      { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
      { name: "Stripe", icon: <FaStripe style={{ color: "#6772E5" }} /> },
      { name: "Node.js", icon: <DiNodejsSmall style={{ color: "#3C873A" }} /> },
    ],
    image: project6Img,
    demoLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    "Buscar projeto...",
    "Digite React, Django...",
    "Pesquise por tecnologias...",
  ];

  useEffect(() => {
    const placeholderInterval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(placeholderInterval);
  }, [placeholders.length]); // Adicionada a dependência

  const handleOpenModal = async (image) => {
    setLoading(true);
    const loadedImage = await lazyLoadImage(image); // Lazy Loading no Modal
    setModalImage(loadedImage);
    setLoading(false);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalImage("");
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => project.technologies.find((t) => t.name === cat));
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        backgroundColor: theme === "dark" ? "#1E1E2F" : "#F9F9F9",
        color: theme === "dark" ? "#e0e0e0" : "#1E1E2F",
        textAlign: "center",
        minHeight: "100vh",
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
      }}
    >
      <Tooltip title={theme === "dark" ? "Modo Claro" : "Modo Escuro"}>
        <IconButton
          onClick={toggleTheme}
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: theme === "dark" ? "#F97316" : "#333",
          }}
          aria-label="Alterar tema"
        >
          {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: "2rem",
            color: "#F97316",
            textTransform: "uppercase",
            textShadow: "0px 0px 8px #F97316",
          }}
        >
          Meus Projetos
        </Typography>
        <Divider
          sx={{
            backgroundColor: "#F97316",
            height: "3px",
            width: "100px",
            margin: "0 auto 3rem",
          }}
        />
      </motion.div>

      {/* Barra de busca */}
      <Box mb={4} sx={{ position: "relative", display: "inline-block" }}>
        <FaSearch
          style={{
            position: "absolute",
            left: "12px",
            top: "12px",
            color: "#F97316",
          }}
        />
        <TextField
          variant="outlined"
          placeholder={placeholders[placeholderIndex]}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{
            maxWidth: "400px",
            input: { color: theme === "dark" ? "#fff" : "#333" },
            fieldset: { borderColor: "#F97316" },
            paddingLeft: "40px",
          }}
        />
      </Box>

      {/* Filtros por categoria */}
      <Box mb={4}>
        {["React", "Node.js", "Django", "Python", "JavaScript"].map(
          (category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => toggleCategory(category)}
              sx={{
                margin: "0 8px",
                backgroundColor: selectedCategories.includes(category)
                  ? "#F97316"
                  : "#4C51BF",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#F97316",
                },
              }}
            />
          )
        )}
      </Box>

      {/* Feedback de busca vazia */}
      {filteredProjects.length === 0 && (
        <Typography variant="h6" sx={{ color: "#F97316", marginTop: "2rem" }}>
          Nenhum projeto encontrado. Tente outra busca ou filtro.
        </Typography>
      )}

      {/* Projetos */}
      <Grid container spacing={4}>
        {loading
          ? Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={250}
                  animation="wave"
                />
              </Grid>
            ))
          : filteredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      background: "linear-gradient(145deg, #2B2D42, #333647)",
                      borderRadius: "10px",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 8px 24px rgba(249, 115, 22, 0.6)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      onClick={() => handleOpenModal(project.image)}
                      sx={{
                        height: "180px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                    />
                    <CardContent sx={{ flex: 1, padding: "1.5rem" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#F97316",
                          marginBottom: "1rem",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#d0d0d0",
                          marginBottom: "1rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
      </Grid>

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: theme === "dark" ? "#1E1E2F" : "#F9F9F9",
            padding: "2rem",
            boxShadow: 24,
            borderRadius: "10px",
            outline: "none",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              color: theme === "dark" ? "#fff" : "#333",
            }}
            aria-label="Fechar modal"
          >
            <CloseIcon />
          </IconButton>
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={400} />
          ) : (
            <img
              src={modalImage}
              alt="Projeto"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}