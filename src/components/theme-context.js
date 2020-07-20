import React from "react";

export const themes = {
  red: {
    color: "grey",
    background: "black",
  },
  light: {
    color: "black",
  },
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
