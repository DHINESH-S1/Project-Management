import React from 'react';
import {
  Paper,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';

const aboutUsStyles = {
  paper: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    marginTop: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px',
    color: '#333',
  },
  content: {
    lineHeight: '1.6',
    fontSize: '16px',
    color: '#555',
  },
  card: {
    display: 'flex',
    marginTop: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  cardMedia: {
    width: '200px',
    height: '140px',
    objectFit: 'cover',
  },
  cardContent: {
    flex: '1',
    padding: '16px',
  },
};

const AboutUs = () => {
  return (
    <Container>
      <Paper elevation={3} style={aboutUsStyles.paper}>
        <Typography variant="h4" style={aboutUsStyles.title} gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" style={aboutUsStyles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum felis sit amet ligula
          bibendum auctor. Duis euismod cursus dolor, nec fermentum orci accumsan quis. Phasellus auctor,
          libero in varius aliquam, eros elit fermentum odio, id posuere nunc purus id leo. Nulla facilisi.
          Nulla facilisi. Sed vitae tortor luctus, aliquam mauris vel, ultricies justo. Integer ultrices,
          ligula et efficitur luctus, elit justo sagittis orci, ut hendrerit justo ligula sit amet nunc.
          Vivamus sit amet urna vel libero laoreet cursus.
        </Typography>
        <Typography variant="body1" style={aboutUsStyles.content}>
          Fusce efficitur eget lectus nec fermentum. Nulla facilisi. Integer fringilla malesuada ipsum,
          non bibendum orci aliquet a. Donec gravida nisl eu ante luctus, et vestibulum velit aliquam.
          Nunc in dui at velit iaculis fermentum sit amet non ligula. Aliquam erat volutpat. Nullam eget
          felis fermentum, tincidunt nulla vitae, posuere ex. Praesent at ultrices nulla, eu aliquam elit.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card style={aboutUsStyles.card}>
              <CardMedia
                component="img"
                alt="Our Team"
                height="140"
                image="https://media.istockphoto.com/id/854342964/vector/solutions.jpg?s=612x612&w=0&k=20&c=0vfJIDvMXSXQ7_Eby2kQjj10ZVklSHY6vXwSJZpOSvk="
                style={aboutUsStyles.cardMedia}
              />
              <CardContent style={aboutUsStyles.cardContent}>
                <Typography variant="h6">Our Team</Typography>
                <Typography variant="body2">
                  Meet the talented individuals who make our team exceptional. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed fermentum felis sit amet ligula bibendum auctor.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={aboutUsStyles.card}>
              <CardMedia
                component="img"
                alt="Our Values"
                height="140"
                image="data:image/jpeg;base64,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"
                style={aboutUsStyles.cardMedia}
              />
              <CardContent style={aboutUsStyles.cardContent}>
                <Typography variant="h6">Our Values</Typography>
                <Typography variant="body2">
                  We are dedicated to delivering high-quality products and services. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sed fermentum felis sit amet ligula bibendum auctor.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutUs;
