import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    yellow: "#F4D04E",
    grey: "#6B6B6B",
  },
});

export default theme;
