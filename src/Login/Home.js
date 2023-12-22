import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';
import TodoList from './TodoList';
import AboutUs from './About';
import { Button } from '@mui/material';  // Make sure to import Button from MUI

const Home = () => {
  const buttonStyle = {
    // Add your button styles here
    marginTop: '20px',
  };

  return (
    <div>
      <NavBar />
      <div style={{ padding: '1rem' }}>
        <section style={{ marginTop: '80px' }}>
          <center>
            <h2>Welcome to Our Website</h2>
          </center>
        </section>
      </div>
      <TodoList />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
