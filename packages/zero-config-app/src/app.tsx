import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import SideBar from "./side-bar";
import defaultTheme, { ThemeContext } from "./theme";
const prettier = require("prettier/standalone");
const parser = require("prettier/parser-babylon");
import Editor from "./editor";
import Guide from "./Guide";
import ConfigObjectContext from "./context";
import Files from "./files";
import Header from "./header";
import { Flex } from "reflexbox";
import { produce } from "immer";
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

export default class Container extends Component<{}> {
  render() {
    import("zero-config-webpack").then(module => {
      console.log(module);
    });
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeContext.Provider value={defaultTheme}>
          <ContainerDiv>
            <SideBar />
            <Editor />
          </ContainerDiv>
        </ThemeContext.Provider>
      </React.Fragment>
    );
  }
}
