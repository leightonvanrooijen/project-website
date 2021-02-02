import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@material-ui/core";
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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

import ContactMenu from "./ContactMenu";
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

const contactButtons = [
  { text: "Home", icon: <HomeIcon />, route: "/" },
  { text: "Projects", icon: <GavelIcon />, route: "/projects" },
  { text: "Blog", icon: <CreateIcon />, route: "/blog" },
  { text: "Contact", icon: <PermContactCalendarIcon />, route: "/contact" },
];

export default function MobileDrawer(props) {
  const classes = useStyles();
  const [contactOpen, setContactOpen] = useState(false);
  // Controlls drawer positions. Change to true to activate
  const activePosition = props.position || "top";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleOpen = () => {
    setContactOpen(!contactOpen);
    console.log(contactOpen);
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
            <ListItem button color="inherit" component={Link} to={barButton.route}>
              <ListItemIcon>{barButton.icon}</ListItemIcon>
              <ListItemText primaryTypographyProps={"h2"} primary={barButton.text} />
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
        {barButtons.map((barButton) =>
          barButton.text === "Contact" ? (
            <>
              <Button
                className={classes.hideDesktopButtons}
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <Typography className={classes.linkButton}>{barButton.text}</Typography>
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem onClick={handleClose}>
                            <MuiLink
                              color="textPrimary"
                              underline="none"
                              href="https://www.linkedin.com/in/leightonvanrooijen"
                              target="_blank"
                            >
                              LinkedIn
                            </MuiLink>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <MuiLink
                              color="textPrimary"
                              underline="none"
                              href="https://github.com/leightonvanrooijen"
                              target="_blank"
                            >
                              GitHub
                            </MuiLink>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <MuiLink
                              color="textPrimary"
                              underline="none"
                              href="mailto: leightonvanrooijen@gmail.com"
                              target="_blank"
                            >
                              Email
                            </MuiLink>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <MuiLink
                              color="textPrimary"
                              underline="none"
                              href="https://www.instagram.com/leighton_van_rooijen/"
                              target="_blank"
                            >
                              Instagram
                            </MuiLink>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
          ) : (
            <Button color="inherit" className={classes.hideDesktopButtons} component={Link} to={barButton.route}>
              <Typography className={classes.linkButton}>{barButton.text}</Typography>
            </Button>
          )
        )}
      </div>
      <React.Fragment key={activePosition}>
        <IconButton className={classes.hideMobileDrawer} onClick={toggleDrawer(activePosition, true)}>
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
