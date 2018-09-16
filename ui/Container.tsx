import React, { Component } from "react";
import styled from "react-emotion";
const prettier = require("prettier/standalone");
const parser = require("prettier/parser-babylon");
import Editor from "./Editor";
import Guide from "./Guide";
import initialCode from "./initial-code";
import ConfigObjectContext from "./context";
import Files from "./files";
import Header from "./header";
import { Flex } from "reflexbox";

const ContainerDiv = styled("div")`
  display: flex;
  flex-direction: row;
`;

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

interface State {
  activeFile: string;
  files: { string: string } | {};
  highlights: { string: Highlight[] } | {};
}

export default class Container extends Component<{}, State> {
  prettifyCode = (code: string) => {
    return prettier.format(code, {
      parser: "babylon",
      plugins: [parser]
    });
  };

  setFileContent = (path: string, content: string) => {
    const formattedCode = this.prettifyCode(content);
    this.setState({
      files: {
        ...this.state.files,
        ...{ [path]: formattedCode }
      }
    });
  };

  setHighlights = (highlights: { string: Highlight[] }) => {
    this.setState({
      highlights
    });
  };

  state = {
    activeFile: "",
    files: {},
    highlights: {}
  };

  render() {
    const { files, highlights, activeFile } = this.state;
    const activeFileContent = files[activeFile];
    const activeFileHighlights = highlights[activeFile];

    return (
      <ContainerDiv>
        <ConfigObjectContext.Provider
          value={{
            ...this.state,
            setFileContent: this.setFileContent,
            setHighlights: this.setHighlights
          }}
        >
          <Flex column w="100%">
            <Header />
            <Flex>
              <Files />
              <Editor
                code={activeFileContent}
                highlights={activeFileHighlights}
              />
              <Guide />
            </Flex>
          </Flex>
        </ConfigObjectContext.Provider>
      </ContainerDiv>
    );
  }
}
