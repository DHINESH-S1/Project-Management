import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [isSlidePanelOpen, setSlidePanelOpen] = useState(false);

  const toggleSlidePanel = () => {
    setSlidePanelOpen(!isSlidePanelOpen);
  };

  const navBarStyle = {
    backgroundColor: '#333',
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
  };

  const toolbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  };

  const logoStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const linksStyle = {
    display: 'flex',
    gap: '1.5rem',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  const drawerStyle = {
    width: '200px',
  };

  return (
    <div>
      <AppBar position="static" style={navBarStyle}>
        <Toolbar style={toolbarStyle}>
          <Button color="inherit" onClick={toggleSlidePanel}>
            <MenuIcon />
          </Button>
          <Typography variant="h6">
            <Link to="/" style={logoStyle}>
              Home
            </Link>
          </Typography>
          <div style={linksStyle}>
          <Button color="inherit">   
              <Link to="/about" style={linkStyle}>
            About
           </Link>
        </Button>
        <Button color="inherit">   
              <Link to="/contact" style={linkStyle}>
           contact us
           </Link>
        </Button>
            <Button color="inherit">
              <Link to="/login" style={linkStyle}>
                Login
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/signup" style={linkStyle}>
                Signup
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      
      <Drawer anchor="left" open={isSlidePanelOpen} onClose={toggleSlidePanel} style={drawerStyle}>
        <List>
        <ListItem button><Link to='/acs'>
            <ListItemText primary="AC Service & Repair" /></Link>
          </ListItem>
          <ListItem button><Link to='/tyre'>
            <ListItemText primary="Tyres & Wheel Care" /></Link>
          </ListItem>
          <ListItem button><Link to='/Batt'>
            <ListItemText primary="Batteries" /></Link>
          </ListItem>
          <ListItem button><Link to='/period'>
            <ListItemText primary="Periodic Services" /></Link>
          </ListItem>
          
           <ListItem button><Link to='/Paint'>
            <ListItemText primary="Denting & Painting" /></Link> 
          </ListItem>
          <ListItem button>
            <ListItemText primary="Car spa & Cleaning" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
