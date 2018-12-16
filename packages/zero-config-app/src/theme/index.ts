import React from "react";

export interface Theme {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  fontWeight: {
    bold: number;
    normal: number;
  };
  padding: {
    mini: number;
    medium: number;
    large: number;
  };
}

const DefaultTheme: Theme = {
  background: {
    primary: "#7057D2",
    secondary: "#FFFFFF",
    tertiary: "#F5F8FB"
  },
  color: {
    primary: "",
    secondary: "",
    tertiary: ""
  },
  fontWeight: {
    bold: 700,
    normal: 400
  },
  padding: {
    mini: 5,
    medium: 10,
    large: 15
  }
};
export default DefaultTheme;

export const ThemeContext = React.createContext(DefaultTheme);
