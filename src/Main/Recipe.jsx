import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Main from "../Components/Main";
import Welcome from "../Components/Welcome"
import ResponsiveDrawer from "../Components/SideBar";
import Search from '../Components/Search';

export default function MainContainer() {
  const mainStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#ccffff",
      height: "6800px",
      minWidth: "2000px",
    
    },



    recipeContent: {
      width: "1200px",
      height: "800px",
 
      position: "relative",
      top: "2%",
      left: "30%",
    }

  }));

  const classes = mainStyles();
  return (
    <div className={classes.root}>
    
        <ResponsiveDrawer />
     

      <Box className={classes.recipeContent} >
        <Main />
        <Welcome />
        
      </Box>
      <Search />

      
    </div>
  );
}
