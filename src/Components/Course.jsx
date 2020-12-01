import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const courseStyles = makeStyles(() => ({
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
    bottom: "-150%",
    backgroundColor: "grey",
    color: "white",
    width: "10em",
    "&:hover": {
      backgroundColor: "white",
      color: "grey",
    },
  },
}));

export default function CourseForm() {
  const classes = courseStyles();
  const [state, setState] = React.useState({
    breakfast: false,
    brunch: false,
    lunch: false,
    dinner: false,
    dessert: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.checked)
  // }
  return (
    <div>
      <div className="cuisine-container">
        <div className="cuisine">Course</div>

        <FormGroup aria-label="position" row className={classes.form}>
          <FormLabel component="legend" className={classes.label}>
            Which course would you like to make?
          </FormLabel>

          <FormControlLabel
            control={
              <Switch
                checked={state.breakfast}
                onChange={handleChange}
                name="breakfast"
              />
            }
            label="Breakfast"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.brunch}
                onChange={handleChange}
                name="brunch"
              />
            }
            label="Brunch"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.lunch}
                onChange={handleChange}
                name="lunch"
              />
            }
            label="Lunch"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.dinner}
                onChange={handleChange}
                name="dinner"
              />
            }
            label="Dinner"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.dessert}
                onChange={handleChange}
                name="dessert"
              />
            }
            label="Dessert"
          />
          

          <FormHelperText className={classes.formHelper}>
            Choose a course.
          </FormHelperText>
          <Button className={classes.save}>Save</Button>
        </FormGroup>
      </div>
    </div>
  );
}
