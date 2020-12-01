import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const dietStyles = makeStyles(() => ({
  form: {
    position: "absolute",
    left: "10%",
    marginTop: "140px",
  },
  label: {
    position: "absolute",
    top: "-70%",
  },

  formHelper: {
    position: "absolute",
    top: "150%",
  },

  save: {
    position: "absolute",
    right: "5%",
    bottom: "-100%",
    backgroundColor: "grey",
    color: "white",
    width: "10em",
    "&:hover": {
      backgroundColor: "white",
      color: "grey",
    },
  },
}));

export default function DietForm() {
  const classes = dietStyles();
  const [state, setState] = React.useState({
    vegetarian: false,
    lowFodMap: false,
    vegan: false,
    paleo: false,
    pescetarian: false,
    ketogenic: false,
    mediterranean: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className="cuisine-container">
        <div className="cuisine">Diet</div>

        <FormGroup aria-label="position" row className={classes.form}>
          <FormLabel component="legend" className={classes.label}>
            Do you follow any of these diets?
          </FormLabel>

          <FormControlLabel
            control={
              <Switch
                checked={state.vegetarian}
                onChange={handleChange}
                name="vegetarian"
              />
            }
            label="Vegetarian"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.lowFodMap}
                onChange={handleChange}
                name="lowFodMap"
              />
            }
            label="Low-FodMap"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.vegan}
                onChange={handleChange}
                name="vegan"
              />
            }
            label="Vegan"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.paleo}
                onChange={handleChange}
                name="paleo"
              />
            }
            label="Paleo"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.pescetarian}
                onChange={handleChange}
                name="pescetarian"
              />
            }
            label="Pescetarian"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.ketogenic}
                onChange={handleChange}
                name="ketogenic"
              />
            }
            label="Ketogenic"
          />

          <FormControlLabel
            control={
              <Switch
                checked={state.mediterranean}
                onChange={handleChange}
                name="mediterranean"
              />
            }
            label="Mediterranean"
          />

          <FormHelperText className={classes.formHelper}>
            Choose one or several diets
          </FormHelperText>
          <Button className={classes.save}>Save</Button>
        </FormGroup>
      </div>
    </div>
  );
}
