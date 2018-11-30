import React from "react";
import code from "./initial-code";
import { Highlight } from "./app";

const ConfigObjectContext = React.createContext({
  activeFile: "",
  files: {},
  highlights: {},
  setFileContent: (path: string, code: string) => {},
  setHighlights: (highlights: { string: Highlight[] }) => {}
});

export default ConfigObjectContext;
