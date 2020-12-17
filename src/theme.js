import { createMuiTheme } from "@material-ui/core/styles";
import "fontsource-roboto";

const theme = createMuiTheme({
  typography: {
    blog: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "20rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
  },
});

export default theme;
