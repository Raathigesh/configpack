import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import SideBar from "./side-bar";
import defaultTheme, { ThemeContext } from "./theme";
import Editor from "./editor";
import FileExplorer from "./file-explorer";
import Panel from "./panel";
import AddBlocksDialog from "./add-blocks-dialog";

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

export interface BlockItem {
  component: any;
  name: string;
  description: string;
}

export interface ExtensionPack {
  id: string;
  displayName: string;
  description: string;
  blocks: BlockItem[];
  onFinalize(options: any): any;
}

export interface EnabledBlock extends BlockItem {
  packKey: string;
}

interface State {
  extensionPacks: ExtensionPack[];
  enabledBlocks: EnabledBlock[];
  extensionState: { [extensionKey: string]: any };
  files: { [filePath: string]: string };
  activeFile: string;
}

export default class Container extends Component<{}, State> {
  state: State = {
    extensionPacks: [],
    enabledBlocks: [],
    extensionState: {},
    activeFile: ""
  };

  componentDidMount() {
    import("zero-config-webpack").then((pack: any) => {
      console.log(pack);
      this.setState({
        extensionPacks: [pack.default],
        enabledBlocks: [
          {
            ...pack.default.blocks[0],
            packKey: pack.default.id
          }
        ]
      });
    });
  }

  onExtentionStateChange = (extensionKey: string, state: any) => {
    this.setState({
      extensionState: {
        ...this.state.extensionState,
        [extensionKey]: state
      }
    });
  };

  getExtentionPackByKey = (key: string) =>
    this.state.extensionPacks.find(pack => pack.id === key);

  getFiles = () => {
    return this.state.enabledBlocks.reduce((acc, block: EnabledBlock) => {
      const extenionPack = this.getExtentionPackByKey(block.packKey);
      let result = {};

      if (extenionPack && this.state.extensionState[block.packKey]) {
        result = extenionPack.onFinalize(
          this.state.extensionState[block.packKey]
        );
      }

      return {
        ...acc,
        ...result
      };
    }, {});
  };

  mapResultsToFiles = (results: { [filepath: string]: string }) => {
    return Object.entries(results).map(([key, value]) => {
      return {
        name: key,
        content: value
      };
    });
  };

  render() {
    const {
      extensionPacks,
      enabledBlocks,
      extensionState,
      activeFile
    } = this.state;
    const files = this.getFiles();
    const mappedFiles = this.mapResultsToFiles(files);
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeContext.Provider value={defaultTheme}>
          <ContainerDiv>
            {false && <AddBlocksDialog extensionPacks={extensionPacks} />}
            <SideBar packs={extensionPacks} />
            <Panel
              blocks={enabledBlocks}
              extensionState={extensionState}
              onExtentionStateChange={this.onExtentionStateChange}
            />

            <Editor code={files[activeFile] || ""} />
            <FileExplorer
              files={mappedFiles}
              onClick={(fileName: string) => {
                this.setState({
                  activeFile: fileName
                });
              }}
            />
          </ContainerDiv>
        </ThemeContext.Provider>
      </React.Fragment>
    );
  }
}
