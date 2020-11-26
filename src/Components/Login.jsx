import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import './index.css'

const loginFormStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
      height: "20ch",
      justifyContent: "center",
    },
  },

  text: {
    position: "absolute",
    top: "40%",
  },

  registerButton: {
    position: "absolute",
    color: "blue",
    top: "85%",
    left: "50%",
    "&:hover": {
      backgroundColor: "white",
      
    },
    login: {
        color: "white",
        fontSize: "20px"
    }


  },
}));

export default function Login() {
  const classes = loginFormStyles();

  return (

    <form className={classes.root} noValidate autoComplete="off">
      <div className  = "login">LOGIN</div>
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

        <Button className={classes.registerButton}>
          *Click here to register
        </Button>
       
      </div>
    </form>
  );
}
