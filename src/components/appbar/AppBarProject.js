import React from "react";
import MobileDrawer from "./MobileDrawer";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/LogoLeighton.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    justifyContent: "center",
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    maxWidth: "1150px",
  },
  title: {
    marginRight: "auto",
    height: "40px",
    alignSelf: 'center'
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function WebAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="#ffffff" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <div className={classes.contentContainer}>
              <Button className={classes.title} component={Link}
                to={"/"} >
              <img className={classes.title} alt="logo" src={Logo} />
              </Button>
              <MobileDrawer />
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
