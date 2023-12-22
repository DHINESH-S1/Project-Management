// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, withStyles } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const drawerWidth = 240;

const styles = (theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

const Sidebar = ({ classes }) => {
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
