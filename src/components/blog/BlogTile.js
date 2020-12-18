import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme => ({
  root: {
    marginBottom: '3vh'
  },
  heading: {
    
  },
  media: {
    [theme.breakpoints.down("xs")]: {
      height: 140,
    },
    [theme.breakpoints.up("sm")]: {
      height: "100%",
    },
    [theme.breakpoints.up("lg")]: {
    },
  },
  content: {
    height: "auto",
    minHeight: '15vh'
  },
})));

const getImg = (entry) => {
  entry.featureImage.map((image) => {
    switch (image.__typename) {
      case "blog_Asset":
        imageUrl = image.url;
        title = image.title;
        break;

      default:
        return null;
    }
    return null;
  });
};

let imageUrl = "";
let title = "";

export default function MediaCard(props) {
  const classes = useStyles();
  getImg(props.entry);

  return (
    <Card square={false} className={classes.root}>
      <CardActionArea component={Link} imageUrl={imageUrl} to={`/blog/${props.entry.slug}`}>
        <Grid container >
          <Grid item xs={12} sm={9}>
            <CardContent className={classes.content}>
              <Typography className={classes.heading} gutterBottom variant="h5" component="h2">
                {props.entry.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.entry.summary}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CardMedia
              className={classes.media}
              conponent="img"
              image={imageUrl}
              title={title}
            />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
