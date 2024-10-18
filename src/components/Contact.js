import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';  // Certifique-se de que o arquivo CSS está no local correto
import whatsappIcon from '../assets/Icons/whatsapp.png';  // Caminho correto para o ícone do WhatsApp
import gmailIcon from '../assets/Icons/gmail.png';        // Caminho correto para o ícone do Gmail
import contactVideo from '../assets/Videos/video1.mp4';  // Certifique-se de que o caminho do vídeo está correto

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_mpvslhm', 'template_EmailJS', {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.message,
    }, 'Wok3mV-Bl-3UNJa9I')
    .then((response) => {
      console.log('Email enviado com sucesso!', response.status, response.text);
      setSuccessMessage('Mensagem enviada com sucesso!');
      setErrorMessage('');
      setFormData({ name: '', email: '', phone: '', message: '' });  // Limpa o formulário após o envio
    }, (err) => {
      console.error('Falha ao enviar email:', err);
      setErrorMessage('Falha ao enviar a mensagem. Tente novamente mais tarde.');
      setSuccessMessage('');
    });
  };

  return (
    <div className="contactPage">
      <h1 className="contactTitle">Contato</h1>
      <p className="contactEmail">
        Entre em contato através do formulário abaixo ou clicando nos ícones do WhatsApp ou do Gmail para falar comigo.
      </p>

      <form onSubmit={handleSubmit} className="contactForm">
        <div className="formGroup">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submitButton">Enviar</button>
      </form>

      <div className="whatsappSection">
        {/* Ícone do WhatsApp */}
        <a href="https://wa.me/5521980292791" target="_blank" rel="noopener noreferrer" className="whatsappButton">
          <img src={whatsappIcon} alt="WhatsApp" className="whatsappIcon" />
          Fale pelo WhatsApp
        </a>

        {/* Ícone do Gmail */}
        <a href="mailto:leonardorfragoso@gmail.com" target="_blank" rel="noopener noreferrer" className="gmailButton">
          <img src={gmailIcon} alt="Enviar Email" className="gmailIcon" />
          Enviar Email
        </a>
      </div>

      {successMessage && <p className="successMessage">{successMessage}</p>}
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
    </div>
  );
}

export default Contact;
