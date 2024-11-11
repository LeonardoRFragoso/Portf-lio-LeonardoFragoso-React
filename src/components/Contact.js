import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Card,
  CardMedia,
  Grid,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

// Importação do vídeo
import contactVideo from "../assets/Videos/video1.mp4";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // Para mensagens de sucesso
  const [errorMessage, setErrorMessage] = useState(""); // Para mensagens de erro
  const [isSubmitting, setIsSubmitting] = useState(false); // Para estado de carregamento

  const validateField = (name, value) => {
    let error = "";
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Email inválido.";
    } else if (name === "phone" && !/^\d{10,11}$/.test(value)) {
      error = "Telefone deve ter 10 ou 11 números.";
    } else if (value.trim() === "") {
      error = "Campo obrigatório.";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Object.values(errors).some((error) => error) ||
      Object.values(formData).some((value) => value.trim() === "")
    ) {
      setErrorMessage("Por favor, corrija os erros antes de enviar.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "service_mpvslhm",
        "template_EmailJS",
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_message: formData.message,
        },
        "Wok3mV-Bl-3UNJa9I"
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSuccessMessage("Mensagem enviada com sucesso!");
          setErrorMessage("");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        () => {
          setIsSubmitting(false);
          setErrorMessage(
            "Falha ao enviar a mensagem. Tente novamente mais tarde."
          );
          setSuccessMessage("");
        }
      );
  };

  return (
    <Box
      sx={{
        padding: "100px 50px",
        backgroundColor: "#2a2a3b",
        color: "#e0e0e0",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      {/* Cabeçalho */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: "20px",
          color: "#f97316",
          textTransform: "uppercase",
          textShadow: "0px 0px 4px #f97316",
        }}
      >
        Contato
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#d0d0d0", marginBottom: "30px" }}
      >
        Entre em contato através do formulário abaixo ou clicando nas opções de
        WhatsApp e Email.
      </Typography>

      {/* Formulário */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {["name", "email", "phone", "message"].map((field, index) => (
          <TextField
            key={index}
            name={field}
            label={
              field === "name"
                ? "Nome"
                : field === "email"
                ? "Email"
                : field === "phone"
                ? "Telefone"
                : "Mensagem"
            }
            variant="outlined"
            fullWidth
            required
            value={formData[field]}
            onChange={handleChange}
            multiline={field === "message"}
            rows={field === "message" ? 5 : 1}
            error={Boolean(errors[field])}
            helperText={errors[field]}
            InputLabelProps={{
              style: { color: "#e0e0e0" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#1f1f1f",
                color: "#fff",
                "&.Mui-focused fieldset": {
                  borderColor: "#f97316",
                },
              },
              "& .MuiFormHelperText-root": {
                color: "#f44336",
              },
            }}
          />
        ))}

        <Button
          type="submit"
          variant="contained"
          color="warning"
          endIcon={<SendIcon />}
          disabled={isSubmitting}
          sx={{
            fontWeight: "bold",
            padding: "10px 20px",
            background:
              "linear-gradient(90deg, rgba(249,115,22,1) 0%, rgba(255,183,77,1) 100%)",
            "&:hover": {
              background: "rgba(249,115,22,0.9)",
              boxShadow: "0 4px 15px rgba(249, 115, 22, 0.6)",
            },
          }}
        >
          {isSubmitting ? (
            <CircularProgress size={24} sx={{ color: "#fff" }} />
          ) : (
            "Enviar"
          )}
        </Button>
      </Box>

      {/* Feedback de Mensagens */}
      {successMessage && (
        <Alert
          severity="success"
          sx={{
            marginTop: "20px",
            maxWidth: "600px",
            margin: "20px auto",
            borderRadius: "8px",
          }}
        >
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert
          severity="error"
          sx={{
            marginTop: "20px",
            maxWidth: "600px",
            margin: "20px auto",
            borderRadius: "8px",
          }}
        >
          {errorMessage}
        </Alert>
      )}

      {/* Botões de WhatsApp e Email */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 3 }}>
        <Grid item>
          <Tooltip title="Entre em contato pelo WhatsApp">
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/5521980292791"
              target="_blank"
              sx={{
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#25d366",
                  boxShadow: "0 4px 15px rgba(37, 211, 102, 0.6)",
                },
              }}
            >
              WhatsApp
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Envie um email">
            <Button
              variant="contained"
              color="info"
              startIcon={<EmailIcon />}
              href="mailto:leonardorfragoso@gmail.com"
              sx={{
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#1a73e8",
                  boxShadow: "0 4px 15px rgba(26, 115, 232, 0.6)",
                },
              }}
            >
              Email
            </Button>
          </Tooltip>
        </Grid>
      </Grid>

      {/* Vídeo de Demonstração */}
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          variant="h5"
          sx={{ color: "#f97316", marginBottom: "10px" }}
        >
          Demonstração
        </Typography>
        <Card
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <CardMedia
            component="video"
            controls
            src={contactVideo}
            sx={{
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(76, 81, 191, 0.5)",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 8px 20px rgba(76, 81, 191, 0.8)",
              },
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          />
        </Card>
      </Box>
    </Box>
  );
}

export default Contact;
