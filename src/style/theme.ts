import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#5E6DFA",
    label: "#5D5F6D"
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  fontSize: {
    10: "0.625rem",
    12: "0.75rem",
    13: "0.813rem",
    14: "0.875rem",
  }
});
