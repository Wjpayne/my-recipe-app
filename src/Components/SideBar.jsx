import React from 'react';

import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SaveIcon from '@material-ui/icons/Save';
import MenuIcon from '@material-ui/icons/Menu';
import NoteIcon from '@material-ui/icons/Note';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
    
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: 'white',
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: 'white',
     
    },
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      backgroundColor: 'white',
      fontSize: '6em',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'white',
  
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: 'white',
  },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          
            <ListItem button>
              <ListItemIcon>
                  <HomeIcon />
              </ListItemIcon>
              <ListItemText primary = "Home" />
            </ListItem>
    

        <Divider />

        <ListItem button>
              <ListItemIcon>
                  <SaveIcon />
              </ListItemIcon>
              <ListItemText primary = "Saved Recipes" />
            </ListItem>
    
        
        <Divider />
        <ListItem button>
              <ListItemIcon>
                  <NoteIcon/>
              </ListItemIcon>
              <ListItemText primary = "Articles" />
            </ListItem>

            <Divider />
        <ListItem button>
              <ListItemIcon>
                  <SearchIcon/>
              </ListItemIcon>
              <ListItemText primary = "Randomize" />
            </ListItem>
            <Divider />
    
        </List>


      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <div className={classes.root}>
       
        <Box position="fixed" className={classes.appBar}>
             <CssBaseline />
            <IconButton
              color = 'inherit'
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
             
            >
              <MenuIcon />
            </IconButton>
          
        </Box>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        </div>
  );
}


  
  export default ResponsiveDrawer;