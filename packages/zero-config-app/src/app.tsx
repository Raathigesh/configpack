import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import SideBar from "./side-bar";
import defaultTheme, { ThemeContext } from "./theme";
const prettier = require("prettier/standalone");
const parser = require("prettier/parser-babylon");
import Editor from "./editor";
import FileExplorer from "./file-explorer";
import Panel from "./panel";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    overflow: hidden;
    font-family: 'Karla', sans-serif !important;
}
`;

const ContainerDiv = styled("div")`
  display: flex;
  flex-direction: row;
`;

export interface ExtensionPack {
  displayName: string;
  description: string;
  blocks: {
    component: any;
    name: string;
    description: string;
  }[];
  onFinalize(options: any): any;
}

interface State {
  extensionPacks: ExtensionPack[];
}

export default class Container extends Component<{}, State> {
  state = {
    extensionPacks: []
  };

  componentDidMount() {
    import("zero-config-webpack").then((pack: any) => {
      console.log(pack);
      this.setState({
        extensionPacks: [pack.default]
      });
    });
  }

  render() {
    const { extensionPacks } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeContext.Provider value={defaultTheme}>
          <ContainerDiv>
            <SideBar packs={extensionPacks} />
            <Panel packs={extensionPacks} />
            <Editor />
            <FileExplorer
              files={[
                {
                  name: "webpack.config.js",
                  path: ""
                },
                {
                  name: "package.json",
                  path: ""
                }
              ]}
            />
          </ContainerDiv>
        </ThemeContext.Provider>
      </React.Fragment>
    );
  }
}
