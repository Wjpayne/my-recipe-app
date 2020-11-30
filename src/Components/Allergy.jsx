import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const allergyStyles = makeStyles(() => ({
  form: {
    position: "absolute",
  left: "10%",
  marginTop: "140px",
  
},
label: {
    position: "absolute",
    top: "-40%",
},

formHelper: {
    position: "absolute",
    top: "150%",


}
}));

export default function AllergyForm() {
  const classes = allergyStyles();
  const [state, setState] = React.useState({
    gluten: false,
    wheat: false,
    dairy: false,
    peanut: false,
    treeNut: false,
    soy: false,
    seafood: false,
    sulfite: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className="cuisine-container">
        <div className="cuisine">Allergy</div>

        <FormGroup aria-label="position" row className={classes.form}>
          <FormLabel component="legend" className={classes.label}>
            Do you have any of these allergies?
          </FormLabel>

          <FormControlLabel
            control={
              <Switch
                checked={state.gluten}
                onChange={handleChange}
                name="gluten"
              />
            }
            label="Gluten-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.wheat}
                onChange={handleChange}
                name="wheat"
              />
            }
            label="Wheat-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.dairy}
                onChange={handleChange}
                name="dairy"
              />
            }
            label="Dairy-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.peanut}
                onChange={handleChange}
                name="peanut"
              />
            }
            label="Peanut-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.treeNut}
                onChange={handleChange}
                name="treeNut"
              />
            }
            label="Tree Nut-Free"
          />
          <FormControlLabel
            control={
              <Switch checked={state.soy} onChange={handleChange} name="soy" />
            }
            label="Soy-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.seafood}
                onChange={handleChange}
                name="seafood"
              />
            }
            label="Seafood-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.sulfite}
                onChange={handleChange}
                name="sulfite"
              />
            }
            label="Sulfite-Free"
          />

          <FormHelperText className={classes.formHelper}>
            Choose one or several allergans.
          </FormHelperText>
        </FormGroup>
      </div>
    </div>
  );
}
