import React from 'react';
import {mainStyles} from '../Components/Css'
import Box from "@material-ui/core/Box";

import ResponsiveDrawer from '../Components/SideBar'


export default function MainContainer() {
  
    const classes = mainStyles();
    return (

 
  <div className = {classes.root}>
      <Box 
      className = {classes.mainContent} >

      
          
      <ResponsiveDrawer /> 
   

      </Box>
    
   
    </div>
    )
}

