import React from "react";
import Cuisine from "./images/America.jpg";
import Diet from "./images/produce1.jpeg";
import Allergy from "./images/Veg.jpeg";
import Course from "./images/paleo.jpeg";
import CuisineForm from "./Cuisine";
import DietForm from "./Diet";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CancelIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import AllergyForm from "./Allergy"
import CourseForm from "./Course"

const choiceStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cuisine: {
    width: "10vh",
    height: "10vh",
    borderRadius: "50%",
    backgroundSize: "cover",
    display: "flex",
    left: "25%",
    background: `url(${Cuisine})`,
  },

  h1: {
    color: "white",
  },

  diet: {
    width: "10vh",
    height: "10vh",
    borderRadius: "50%",
    backgroundSize: "cover",
    left: "25%",
    background: `url(${Diet})`,
  },

  allergy: {
    width: "10vh",
    height: "10vh",
    borderRadius: "50%",
    backgroundSize: "cover",
    left: "25%",
    background: `url(${Allergy})`,
  },

  course: {
    width: "10vh",
    height: "10vh",
    borderRadius: "50%",
    backgroundSize: "cover",
    alignContent: "center",
    background: `url(${Course})`,
    left: "25%",
  },

  paper: {
    position: "absolute",
    backgroundColor: "white",
    width: "68vh",
    height: "25vh",
    left: "36.5%",
    outline: "none",
  },

  cuisineModal: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },

  cancelButton: {
    float: "right",
  },
}));

export default function () {
  const classes = choiceStyles();
  //handle cuisine state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //HANDLE DIET STATE
  const [openDiet, setOpenDiet] = React.useState(false);
  const handleOpenDiet = () => {
    setOpenDiet(true);
  };

  const handleCloseDiet = () => {
    setOpenDiet(false);
  };
  //HANDLE ALLERGY STATE
  const [openAllergy, setOpenAllergy] = React.useState(false);

  const handleOpenAllergy = () => {
    setOpenAllergy(true);
  };

  const handleCloseAllergy = () => {
    setOpenAllergy(false);
  };

  //HANDLE COURSE STATE
  const [openCourse, setOpenCourse] = React.useState(false);
  const handleOpenCourse = () => {
    setOpenCourse(true);
  };

  const handleCloseCourse = () => {
    setOpenCourse(false);
  };


  return (
    <div classesName={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1} sm={3} className={classes.grid}>
          <Button className={classes.cuisine} onClick={handleOpen}>
            <h1 className={classes.h1}>CUISINE</h1>
          </Button>
        </Grid>
        <Grid item xs={1} sm={3}>
          <Button className={classes.diet} onClick={handleOpenDiet}>
            <h1 className={classes.h1}>DIET</h1>
          </Button>
        </Grid>
        <Grid item xs={1} sm={3}>
          <Button className={classes.allergy} onClick={handleOpenAllergy}>
            <h1 className={classes.h1}>ALLERGY</h1>
          </Button>
        </Grid>
        <Grid item xs={1} sm={3}>
          <Button className={classes.course} onClick={handleOpenCourse}>
            <h1 className={classes.h1}>COURSE</h1>
          </Button>
        </Grid>
        <Grid item sm={3}></Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.cuisineModal}
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
            <CuisineForm />
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.cuisineModal}
        open={openDiet}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openDiet}>
          <div className={classes.paper}>
            <IconButton
              color="inherit"
              aria-label="close modal"
              edge="start"
              onClick={handleCloseDiet}
              className={classes.cancelButton}
            >
              <CancelIcon />
            </IconButton>
            <DietForm />
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.cuisineModal}
        open={openAllergy}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAllergy}>
          <div className={classes.paper}>
            <IconButton
              color="inherit"
              aria-label="close modal"
              edge="start"
              onClick={handleCloseAllergy}
              className={classes.cancelButton}
            >
              <CancelIcon />
            </IconButton>
            <AllergyForm />
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.cuisineModal}
        open={openCourse}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCourse}>
          <div className={classes.paper}>
            <IconButton
              color="inherit"
              aria-label="close modal"
              edge="start"
              onClick={handleCloseCourse}
              className={classes.cancelButton}
            >
              <CancelIcon />
            </IconButton>
            <CourseForm />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
