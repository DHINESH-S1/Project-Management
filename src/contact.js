// src/components/Contact.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import './contact.css';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const StyledForm = styled('form')({
  width: '80%',
  maxWidth: '400px',
  marginTop: '20px',
});

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
  width: '100%',
});

const StyledButton = styled(Button)({
  backgroundColor: '#1976D2',
  color: 'white',
  '&:hover': {
    backgroundColor: '#135193',
  },
});

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Implement logic to handle form submission (e.g., send an email or save to a database)

    // Clear the form after submission
    setName('');
    setEmail('');
    setMessage('');

    // Display a success message or redirect the user
  };

  return (
    <StyledContainer>
      <Typography variant="h4" component="div" gutterBottom>
        Contact Us
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          label="Your Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <StyledTextField
          label="Your Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledTextField
          label="Your Message"
          multiline
          rows={4}
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <StyledButton type="submit" variant="contained">
          Submit
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default Contact;