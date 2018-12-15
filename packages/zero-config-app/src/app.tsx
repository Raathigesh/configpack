import React, { Component, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import SideBar from "./side-bar";
import defaultTheme, { ThemeContext } from "./theme";
import Editor from "./editor";
import FileExplorer from "./file-explorer";
import Panel from "./panel";
import AddBlocksDialog from "./add-blocks-dialog";
import { app } from "./store/app";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    overflow: hidden;
    font-family: 'Karla', sans-serif !important;
}
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const mapResultsToFiles = (results: { [filepath: string]: string }) => {
  return Object.entries(results).map(([key, value]) => {
    return {
      name: key,
      content: value
    };
  });
};

export default function Container() {
  const {
    getFiles,
    extensions,
    addExtenion,
    addBlock,
    enabledBlocks,
    extensionsState,
    updateExtensionState,
    activeFile,
    setActiveFile
  } = app();

  useEffect(() => {
    import("zero-config-webpack").then((pack: any) => {
      addExtenion(pack.default);
      addBlock(pack.default.id, pack.default.blocks[0]);
    });
  }, []);

  const files = getFiles();
  const mappedFiles = mapResultsToFiles(files);
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeContext.Provider value={defaultTheme}>
        <ContainerDiv>
          {false && <AddBlocksDialog extensionPacks={extensions} />}
          <SideBar packs={extensions} />
          <Panel
            blocks={enabledBlocks}
            extensionState={extensionsState}
            onExtentionStateChange={updateExtensionState}
          />

          <Editor code={files[activeFile] || ""} />
          <FileExplorer files={mappedFiles} onClick={setActiveFile} />
        </ContainerDiv>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}
