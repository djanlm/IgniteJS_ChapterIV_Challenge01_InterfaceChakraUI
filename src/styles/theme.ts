import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      yellow: "#FFBA08",
      gray: "#47585B",
    },
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },

  styles: {
    global: {
      body: {
        boxSizing: "border-box",
        bgColor: "gray",
      },
    },
  },
});
