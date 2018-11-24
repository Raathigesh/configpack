import React, { Component } from "react";
import styled from "styled-components";
const prettier = require("prettier/standalone");
const parser = require("prettier/parser-babylon");
import Editor from "./Editor";
import Guide from "./Guide";
import initialCode from "./initial-code";
import ConfigObjectContext from "./context";
import Files from "./files";
import Header from "./header";
import { Flex } from "reflexbox";
import { produce } from "immer";
import ConfigState from "./state";
import { Subscribe, Provider } from "unstated";

const ContainerDiv = styled("div")`
  display: flex;
  flex-direction: row;
`;

export default class Container extends Component<{}> {
  render() {
    return (
      <Provider>
        <ContainerDiv>
          <Subscribe to={[ConfigState]}>
            {(config: ConfigState) => (
              <Flex column w="100%">
                <Header />
                <Flex>
                  <Files
                    files={config.state.files}
                    activeFile={config.state.activeFile}
                    setActiveFile={config.setActiveFile}
                  />
                  <Editor
                    code={config.state.files[config.state.activeFile]}
                    highlights={
                      config.state.highlights[config.state.activeFile]
                    }
                  />
                  <Guide />
                </Flex>
              </Flex>
            )}
          </Subscribe>
        </ContainerDiv>
      </Provider>
    );
  }
}
