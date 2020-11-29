import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  loading: {
    display: "flex",
    height: "60vh",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Loading() {
  const classes = useStyles();
  
  return (
    <div className={classes.loading}>
      <CircularProgress size={100} />
    </div>
  );
}
