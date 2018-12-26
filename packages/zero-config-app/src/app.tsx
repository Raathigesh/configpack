import React, { useEffect, useContext, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import SideBar from "./side-bar";
import defaultTheme from "./theme";
import EditorWithFileExplorer from "./editor";
import Panel from "./panel";
import AddBlocksDialog from "./add-blocks-dialog";
import app from "./store";
import Header from "./header";
import { ColorProps, color } from "styled-system";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    overflow: hidden;
    font-family: system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div<ColorProps>`
  display: flex;
  flex-direction: row;
  height: 100vh;
  ${color}
`;

export default function Container() {
  const {
    availableExtensions,
    addExtension,
    activeBlocks,
    addBlock,
    extensionState,
    setExtensionState,
    files,
    activeFile,
    setActiveFile
  } = app();

  const [isDialogOpen, setDialogState] = useState(false);

  useEffect(() => {
    import("zero-config-webpack").then((pack: any) => {
      addExtension(pack.default);
      for (const block of pack.default.blocks) {
        addBlock(pack.default.id, block);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <MainContainer>
          <Header />
          <ContentContainer>
            {isDialogOpen && (
              <AddBlocksDialog extensionPacks={availableExtensions} />
            )}
            <SideBar packs={availableExtensions} />
            <Panel
              blocks={activeBlocks}
              extensionState={extensionState}
              onExtentionStateChange={setExtensionState}
            />
            <EditorWithFileExplorer
              files={files()}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
            />
          </ContentContainer>
        </MainContainer>
      </ThemeProvider>
    </React.Fragment>
  );
}
