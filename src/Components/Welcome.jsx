import React from "react";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login"
import Modal from "@material-ui/core/Modal"
import CancelIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Divider from "@material-ui/core/Divider"


const welcomeStyles = makeStyles((theme) => ({
   
  
    caption: {
    fontSize: "60px",
    marginTop: "30px",
    fontFamily: ["Courgette"],
    color: "#336600",
  },

  message: {
      fontSize: "20px",
  },

  button: {
      color: "blue",
      fontStyle: "italic"

  },

  cancelButton: {
    float: "right",
  },
  

 

  //MODAL

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


}));

export default function Welcome() {
  const classes = welcomeStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Typography align="center" className={classes.caption}>
        Welcome
      </Typography>
      <Typography align="center" className={classes.message}>
       <br></br> Here at Relish we curate recipes based on your personal style, preferences, and taste.<br></br><br></br>Feel free to create a random recipe or choose from the options above to narrow your search.<br></br><br></br>We highly suggest you <Button className = {classes.button} onClick={handleOpen}>login/register</Button> to get the full experience!
      </Typography>
      <br></br><br></br>
      <Divider />
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
        disableAutoFocus={true}
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