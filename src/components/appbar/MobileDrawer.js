import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import GavelIcon from "@material-ui/icons/Gavel";
import CreateIcon from "@material-ui/icons/Create";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

// Props: position={'left' || 'top' || 'right' || 'bottom'} default is 'right'
//  size={}

const useStyles = makeStyles((theme) => ({
  list: {
    width: "80vw",
  },
  fullList: {
    width: "auto",
  },
  hideDesktopButtons: {
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  hideMobileDrawer: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  linkButton: {
    fontWeight: 700,
    textTransform: "none",
  },
}));

const barButtons = [
  { text: "Home", icon: <HomeIcon />, route: "/" },
  { text: "Projects", icon: <GavelIcon />, route: "/projects" },
  { text: "Blog", icon: <CreateIcon />, route: "/blog" },
  { text: "Contact", icon: <PermContactCalendarIcon />, route: "/contact" },
];

export default function MobileDrawer(props) {
  const classes = useStyles();
  // Controlls drawer positions. Change to true to activate
  const activePosition = props.position || "top";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const buttonList = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {barButtons.map((barButton, index) => (
          <React.Fragment key={barButton}>
            <ListItem
              button
              color="inherit"
              component={Link}
              to={barButton.route}
            >
              <ListItemIcon>{barButton.icon}</ListItemIcon>
              <ListItemText
                primaryTypographyProps={"h2"}
                primary={barButton.text}
              />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <div>
        {barButtons.map((barButton) => (
          <Button
            color="inherit"
            className={classes.hideDesktopButtons}
            component={Link}
            to={barButton.route}
          >
            <Typography className={classes.linkButton}>
              {barButton.text}
            </Typography>
          </Button>
        ))}
      </div>
      <React.Fragment key={activePosition}>
        <IconButton
          className={classes.hideMobileDrawer}
          onClick={toggleDrawer(activePosition, true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor={activePosition}
          open={state[activePosition]}
          onClose={toggleDrawer(activePosition, false)}
          onOpen={toggleDrawer(activePosition, true)}
        >
          {buttonList(activePosition)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
