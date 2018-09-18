import { Provider, Subscribe, Container } from "unstated";
const prettier = require("prettier/standalone");
const parser = require("prettier/parser-babylon");
import { produce } from "immer";

export interface Highlight {
  start: {
    line: number;
    column: number;
  };
  end: {
    line: number;
    column: number;
  };
}

export interface TreeItem {
  name: string;
  content?: string;
  isExpanded?: boolean;
  children?: TreeItem[];
}

interface State {
  activeFile: string;
  files: TreeItem[];
  highlights: { string: Highlight[] } | {};
}

export default class ConfigState extends Container<State> {
  state = {
    activeFile: "",
    files: [
      {
        name: "package.json",
        content: "Content of package json"
      }
    ],
    highlights: {}
  };

  prettifyCode = (code: string) => {
    return prettier.format(code, {
      parser: "babylon",
      plugins: [parser]
    });
  };

  setFileContent = (path: string, content: string) => {
    const formattedCode = this.prettifyCode(content);

    this.setState(
      produce<State>((draft: State) => {
        const fileToUpdate = draft.files.find(file => file.name === path);
        if (!fileToUpdate) {
          return draft;
        }
        fileToUpdate.content = formattedCode;
      })
    );
  };

  setHighlights = (highlights: { string: Highlight[] }) => {
    this.setState({
      highlights
    });
  };

  setActiveFile = (filePath: string) => {
    this.setState({
      activeFile: filePath
    });
  };

  addFile = (name: string, content: string) => {
    this.setState(
      produce<State>((draft: State) => {
        draft.files.push({
          name,
          content
        });
      })
    );
  };
}
