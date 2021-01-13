import React from "react";
import Routes from "./Routes.js";
import AppBarProject from "./appbar/AppBarProject";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "100vh",
    paddingBottom: "90px",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarProject />
      <Routes />
      <Footer />
    </div>
  );
}

// export default App;
