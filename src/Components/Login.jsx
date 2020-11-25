import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


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
  }
}));








export default function Login() {
  const classes = loginFormStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className = {classes.text}>

        <TextField 
        required id="standard-required" 
        label="Required" 
        helperText = "Username"
        
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          type="password"
          autoComplete="current-password"
          helperText = "Password"
        />
      </div>
    </form>
  );
}

