import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    marginTop: '10vh',
    
  },
});

export default function WebsiteGrid(props) {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.root} >
      <Grid container justify={props.align}  className={classes.container} spacing={1} xs={10} md={props.size || 8}>
        {props.children}
      </Grid>
    </Grid>
  );
}