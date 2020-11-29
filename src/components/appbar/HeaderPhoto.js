import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Mountians from "../../assets/images/img-home.jpg";


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



let words = [
  "web whizz",
  "digital genius",
  "programming pro",
  "cracking coder",
]
let currentWord = words[0];
export default function HeaderPhoto(props) {
  const classes = useStyles();
  const [timer, setTimer] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    if (wordCount >= words.length) {
      setWordCount(0);
    }

    if (timer % 3 === 0) {
      currentWord = words[wordCount];
      setWordCount(wordCount + 1);
    }

    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <Grid container xs={12} className={classes.imageContainer}>
      <Grid item xs={12}>
        <Paper square className={classes.imageGrid}>
              <Typography className={classes.text}>I am a <span className={classes.colorText}>{currentWord}</span> !</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
