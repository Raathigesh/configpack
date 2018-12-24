import { theme } from "@smooth-ui/core-sc";

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  space: number[];
  fontSizes: number[];
}

const DefaultTheme: Theme = {
  ...theme,
  colors: {
    primary: "#0074EE",
    secondary: "#434854",
    tertiary: "#F5F8FB",
    dark: "#29303c"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12]
};
export default DefaultTheme;
