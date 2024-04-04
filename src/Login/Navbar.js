import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

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
    display: 'flex',
    alignItems: 'center', 
    marginRight: 'auto', 
    marginTop:'5px'
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
          <Typography variant="h6" style={logoStyle}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <HomeRoundedIcon style={{ marginRight: '0.5rem' }} />
            </Link>
          </Typography>
          <div style={linksStyle}>
            <Button color="inherit">Help</Button>
            <Button color="inherit"> 
              <Link to="/Contact" style={linkStyle}>
                Contact us
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
          <ListItem button>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Help" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Themes" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
