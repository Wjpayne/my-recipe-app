import React from 'react';
import {useStyles} from '../Components/Css'
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import ResponsiveDrawer from '../Components/SideBar'


export default function MainContainer() {
  
    const classes = useStyles();
    return (

 
  <div className = {classes.root}>
      <Grid container spacing = {1} className = {classes.grid}>

      <Grid item xs={12} >
          
      <ResponsiveDrawer /> 
      </Grid>

      </Grid>
    
   
    </div>
    )
}

