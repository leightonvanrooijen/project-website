import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  media: {
    height: 140,
    objectFit: "cover",
  },
  content: {
    height: "auto",
  },
});

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

export default function ProjectTile(props) {
  const classes = useStyles();
  getImg(props.entry);

  return (
    <Card square={false} className={classes.root}>
      <CardActionArea href={`${props.entry.urlLink}`} target="_blank">
        <CardMedia
          className={classes.media}
          conponent="img"
          image={imageUrl}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.entry.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.entry.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
