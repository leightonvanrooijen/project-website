import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Mountians from "../../assets/img-home.jpg";
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  imageContainer: {},
  image: {
    width: "100%",
    
  },
  imageGrid: {
    height: "35vh",
    overflow: "hidden",
    backgroundImage: `url(${Mountians})`,
    display: 'flex'
  },
  text: {
    margin: 'auto',
    color: '#ffffff',
    [theme.breakpoints.down("xs")]: {
      fontSize: 34,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 54,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 64,
    },
  },
  colorText: {
    color: '#FF1493'
  },
}));


export default function HeaderPhoto(props) {
  const classes = useStyles();
  const [timer, setTimer] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const words = props.punch
  const [currentWord, setCurrentWord] = useState(0)

  let checked = true

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      setTimer(t => t + 1);
    }, 1000);

    if (wordCount >= words.length) {
      setWordCount(w => 0);
      
    }

    if (timer % 3 === 0) {
      setCurrentWord(words[wordCount]);
      setWordCount(w => w + 1);
    }
    
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return (
    <Grid container className={classes.imageContainer}>
      <Grid item xs={12}>
        <Paper square className={classes.imageGrid}>
              <Typography className={classes.text}>{props.start} <Grow in={checked}><span className={classes.colorText}>{currentWord}</span></Grow> !</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
