import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { light } from "./palette";

const getTheme = (mode) =>
  responsiveFontSizes(
    createMuiTheme({
      palette: light,
      layout: {
        contentWidth: 1236,
      },
      typography: {
        fontFamily: ["Quattrocento", "serif"].join(", "),
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    })
  );

export default getTheme;
