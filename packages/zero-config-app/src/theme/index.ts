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
  fontSize: {
    small: number;
    medium: number;
    larget: number;
  };
  padding: {
    mini: number;
    medium: number;
    large: number;
  };
}

const DefaultTheme: Theme = {
  background: {
    primary: "#0074EE",
    secondary: "#434854",
    tertiary: "#F5F8FB"
  },
  color: {
    primary: "#F5F8FB",
    secondary: "",
    tertiary: ""
  },
  fontWeight: {
    bold: 700,
    normal: 400
  },
  fontSize: {
    small: 12,
    medium: 15,
    larget: 18
  },
  padding: {
    mini: 5,
    medium: 10,
    large: 15
  }
};
export default DefaultTheme;

export const ThemeContext = React.createContext(DefaultTheme);
