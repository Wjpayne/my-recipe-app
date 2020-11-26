import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SaveIcon from "@material-ui/icons/Save";
import NoteIcon from "@material-ui/icons/Note";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Login from "./Login";
import CancelIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 400;

const loginFormStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  menuButton: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  menuIcon: {
    height: "2em",
    width: "2em",
    color: "black",
  },

  loginButton: {
    backgroundColor: "white",
    left: "4.6em",
    top: "2em",
  },

  cancelButton: {
    float: "right",
  },

  //LOGO

  logo: {
    position: "absolute",
    left: "1.8em",
    top: "2em",
    fontSize: "40px",
    boxShadow: "none",
    textTransform: "none",
    fontFamily: ["Courgette"],
    color: "#336600",
    "&:hover": {
      backgroundColor: "white",
      fontFamily: ["Courgette"],
    },
  },

  logoContainer: {
    height: "20vh",
  },

  //MODAL

  modal: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "65vh",
    height: "30vh",
  },

  container: {
    position: "absolute",
    minHeight: "50vh",
    top: "250px",
    width: "100%",
  },
}));

export default function LoginForm() {
  const classes = loginFormStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button disableRipple className={classes.logo}>
        Relish
      </Button>

      <div className={classes.container}>
        <Divider />
        <Button
          onClick={handleOpen}
          className={classes.loginButton}
          variant="contained"
        >
          Login/Register
        </Button>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <Divider />

          <ListItem button>
            <ListItemIcon>
              <SaveIcon />
            </ListItemIcon>
            <ListItemText primary="Saved Recipes" />
          </ListItem>

          <Divider />
          <ListItem button>
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary="Articles" />
          </ListItem>

          <Divider />
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Randomize" />
          </ListItem>
          <Divider />
        </List>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <IconButton
              color="inherit"
              aria-label="close modal"
              edge="start"
              onClick={handleClose}
              className={classes.cancelButton}
            >
              <CancelIcon />
            </IconButton>
            <Login />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
