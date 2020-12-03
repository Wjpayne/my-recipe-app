import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../index.css";

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



}));

export default function Login() {
  const classes = loginFormStyles();



  return (
    <div className="login-container">
      <div className="login">Register</div>
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
          <div className={classes.email}>
          <TextField
            required
            id="standard-required"
            label="Required"
            type="Email"
            autoComplete="current-password"
            helperText="Email"
            
          />
          </div>


        </div>
      </form>
    </div>
  );
}
