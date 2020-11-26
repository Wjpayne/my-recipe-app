import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

import ResponsiveDrawer from "../Components/SideBar";

export default function MainContainer() {
  const mainStyles = makeStyles(() => ({
    root: {
      backgroundColor: "#ccffff",
      height: "150vh",
    },

    mainContent: {
      backgroundColor: "#ccffff",
      maxWidth: "1000px",
      position: "absolute",
    },

    recipeContent: {
      width: "800px",
      height: "200px",
      backgroundColor: "white",
      position: "relative",
      top: "20%",
      left: "40%",
      
   
    },
  }));

  const classes = mainStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.mainContent}>
        <ResponsiveDrawer />
      </Box>
      <Box className={classes.recipeContent}></Box>
    </div>
  );
}
