import React, { Component } from "react";
import "./login.css";
import Toggle from "../ToggleRenderProps";
import { CSSTransition } from "react-transition-group";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles";

const loginStyles = makeStyles(() => ({
loginButton: {
  fontFamily: "Courgette",
  fontSize: "50px",
  color: "#336600",
   backgroundColor: "transparent",
   border: "none",
   outline: "none",
   fontSize: "30px",
   cursor: "pointer",
   position: "absolute",
   top: "50%",
   left: "-10%",
   padding: "0 2em",

},

registerButton: {
  fontFamily: "Courgette",
  fontSize: "50px",
  color: "#336600",
   backgroundColor: "transparent",
   border: "none",
   outline: "none",
   fontSize: "30px",
   cursor: "pointer",
   position: "absolute",
   top: "60%",
   left: "-15%",
   padding: "0 2em",

},

loginFormWrapper: {
  height: "450px",
  width: "250px",
  top: "50%",
  left: "40%",
  position: "absolute",
  margin: "100px",
  transform:"translate(-60%, -50%)",



},

registerFormWrapper: {
  height: "450px",
  width: "250px",
  top: "50%",
  left: "40%",
  position: "absolute",
  margin: "100px",
  transform:"translate(-60%, -50%)",



}
}));

export default function Loginform () {
  const classes = loginStyles();

    return (
      <Toggle>
        {({ on, off, toggle }) => (
          <div>
            <div>
              <CSSTransition
                timeout={2000}
                in={off}
                appear={off}
                classNames="login-form-move"
                unmountOnExit={on}
                mountOnEnter={off}
              >
                <div className={classes.loginFormWrapper}>
                  <div className="form-login"></div>
                  <span className="login-title">
                    <Button>Login</Button>
                    <Button  onClick={toggle}>Register</Button>
                      
                    
                  </span>
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

                  <Button className = {classes.loginButton} type="submit">
                    Login
                  </Button>
                </div>
              </CSSTransition>
            </div>

            <CSSTransition
              timeout={2000}
              in={on}
              appear={on}
              classNames="login-form-move"
              unmountOnExit={off}
              mountOnEnter={on}
            >
              <div className={classes.registerFormWrapper}>
                <div className="register-flip-login"></div>
                <span className="register-flip-title">
                <Button onClick = {toggle}>Login</Button>
                    <Button  onClick={toggle}>Register</Button>
                </span>
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
                <TextField
                  required
                  id="standard-required"
                  label="Required"
                  type="Email"
                  autoComplete="current-password"
                  helperText="Email"
                />
                <Button className = {classes.registerButton}type="submit">
                  Register
                </Button>
              </div>
            </CSSTransition>
          </div>
        )}
      </Toggle>
    );
  }

