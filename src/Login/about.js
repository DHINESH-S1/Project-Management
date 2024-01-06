import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          About Our Vehicle Service
        </Typography>
        <Typography variant="body1" paragraph>
          Our vehicle service center is committed to providing top-notch service to our customers. With years of
          experience and a skilled team of technicians, we aim to ensure your vehicle runs smoothly and efficiently.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether it's routine maintenance, repairs, or specialized services, we are dedicated to delivering high-quality
          solutions for all your automotive needs.
        </Typography>
        <Typography variant="body1" paragraph>
          At our service center, we prioritize customer satisfaction and strive to exceed expectations. Your trust and
          safety are paramount, and we take pride in delivering reliable and professional services.
        </Typography>
        <Typography variant="body1" paragraph>
          We are committed to staying up-to-date with the latest automotive technologies to provide you with the best
          solutions for your vehicle's maintenance and repair.
        </Typography>
        <Typography variant="body1">
          Thank you for choosing us for your vehicle service needs. We look forward to serving you.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
