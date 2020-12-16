import React from "react";
import HeaderPhoto from "./appbar/HeaderPhoto";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebsiteGrid from "./WebsiteGrid";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "15vh",
    align: "center",
  },
  gridItem: {
    textAlign: "center",
  },
}));

export default function ContactBackdrop() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeaderPhoto start={"Have a"} punch={["yarn", "stalk", "gander"]}/>
      <WebsiteGrid align={"center"}>
        <Grid className={classes.gridItem} item xs={6} md={3}>
          <IconButton
            href="https://www.instagram.com/leighton_van_rooijen/"
            target="_blank"
          >
            <InstagramIcon className={classes.icon} />
          </IconButton>
        </Grid>
        <Grid className={classes.gridItem} item xs={6} md={3}>
          <IconButton
            href="https://www.linkedin.com/in/leightonvanrooijen"
            target="_blank"
          >
            <LinkedInIcon className={classes.icon} />
          </IconButton>
        </Grid>
        <Grid className={classes.gridItem} item xs={6} md={3}>
          <IconButton
            href="mailto: leightonvanrooijen@gmail.com"
            target="_blank"
          >
            <MailOutlineIcon className={classes.icon} />
          </IconButton>
        </Grid>
        <Grid className={classes.gridItem} item xs={6} md={3}>
          <IconButton
            href="https://github.com/leightonvanrooijen"
            target="_blank"
          >
            <GitHubIcon className={classes.icon} />
          </IconButton>
        </Grid>
      
      </WebsiteGrid>
    </React.Fragment>
  );
}
