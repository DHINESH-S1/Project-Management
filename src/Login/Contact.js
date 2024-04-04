import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Container,
} from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
        <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Contact Us
        </Typography>
        {!submitted ? (
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              multiline
              rows={4}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '16px' }}
            >
              Submit
            </Button>
          </form>
        ) : (
          <Typography variant="h6" style={{ textAlign: 'center', marginTop: '16px' }}>
            Thank you for your response!
            <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
          <Link to="/" style={{color:'white',textDecoration:'none'}}>Back to home</Link>
          </Button>
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ContactUs;
