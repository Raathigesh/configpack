import React from "react";

export interface Theme {
  sidebar: {
    backgroundColor: string;
    blockItem: {
      backgroundColor: string;
    };
  };
}

const DefaultTheme: Theme = {
  sidebar: {
    backgroundColor: "#F0F0FF",
    blockItem: {
      backgroundColor: "#E6E7FF"
    }
  }
};
export default DefaultTheme;

export const ThemeContext = React.createContext(DefaultTheme);
