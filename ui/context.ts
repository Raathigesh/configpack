import React from "react";
import code from "./initial-code";
import { Highlight } from "./Container";

const ConfigObjectContext = React.createContext({
  activeFile: "",
  files: {},
  highlights: {},
  setFileContent: (path: string, code: string) => {},
  setHighlights: (highlights: { string: Highlight[] }) => {}
});

export default ConfigObjectContext;
