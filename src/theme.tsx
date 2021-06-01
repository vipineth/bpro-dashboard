import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    green: {
      200: "#d4f1e1",
      700: "#0fc264",
    },
  },
  fonts,
  breakpoints,
  initialColorMode: "light",
});

export default theme;
