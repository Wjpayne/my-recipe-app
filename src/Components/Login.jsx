import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./index.css";
import Register from "./Register";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CancelIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const loginFormStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
      height: "20ch",
      justifyContent: "center",
    },
  },
  cancelButton: {
    float: "right",
  },

  text: {
    position: "absolute",
    top: "30%",
  },

  registerButton: {
    position: "absolute",
    color: "blue",
    top: "85%",
    left: "50%",
    "&:hover": {
      backgroundColor: "white",
    },
  },

  modal: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "55vh",
    height: "30vh",
    left: "39%",
    position: "absolute",
    outline: "none",
  },

  registerButton: {
    position: "absolute",
    color: "blue",
    top: "85%",
    left: "5%",
    "&:hover": {
      backgroundColor: "white",
    },
  },

  paperRegister: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "55vh",
    height: "50vh",
    left: "39%",
    position: "absolute",
    outline: "none",
  },

  loginButton: {
    position: "absolute",
    color: "blue",
    top: "85%",
    left: "75%",
    "&:hover": {
      backgroundColor: "white",
    },
    fontSize: "30px"
  },

  goToLogin: {
    position: "absolute",
    color: "blue",
    top: "71.5%",
    left: "45%",
    "&:hover": {
      backgroundColor: "white",
    },
  },

  submitButton: {
    position: "absolute",
    color: "blue",
    top: "85%",
    left: "37%",
    "&:hover": {
      backgroundColor: "white",
    },
    fontSize: "30px"
  },
}));

export default function Login() {
  const classes = loginFormStyles();

  const [open, setOpen] = React.useState(true);
  
  const handleOpenRegister = () => {
    setOpen(true);
  }

  const handleCloseRegister = () => {
    setOpen(false);
  };

  return (
    <div className="login-container">
      <div className="login">Login</div>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.text}>
          <TextField
            required
            id="standard-required"
            label="Required"
            helperText="Username"
          />
          <TextField
            required
            id="standard-required"
            label="Required"
            type="password"
            autoComplete="current-password"
            helperText="Password"
          />

          <Button
            className={classes.loginButton}
            onClick={handleOpenRegister}
          >
            submit
          </Button>
        </div>

      </form>
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
            <div className={classes.paperRegister}>
              <IconButton
                color="inherit"
                aria-label="close modal"
                edge="start"
                onClick={handleCloseRegister}
                className={classes.cancelButton}
              >
                <CancelIcon />
              </IconButton>
              <Register />
              <Button className={classes.goToLogin} onClick = {handleCloseRegister}>
            *Already registered, click here to login.
          </Button>

          <Button
            className={classes.submitButton}
            onClick={handleCloseRegister}
          >
            submit
          </Button>
            </div>
          </Fade>
        </Modal>
    </div>
  );
}
