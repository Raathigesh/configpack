import React, { useEffect, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import SideBar from "./side-bar";
import defaultTheme, { ThemeContext } from "./theme";
import EditorWithFileExplorer from "./editor";
import Panel from "./panel";
import AddBlocksDialog from "./add-blocks-dialog";
import { app } from "./store/app";
import Header from "./header";

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

const ContentContainer = styled.div<{ background: string }>`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

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

  const {
    background: { tertiary }
  } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeContext.Provider value={defaultTheme}>
        <MainContainer>
          <Header />
          <ContentContainer background={tertiary}>
            {false && <AddBlocksDialog extensionPacks={extensions} />}
            <SideBar packs={extensions} />
            <Panel
              blocks={enabledBlocks}
              extensionState={extensionsState}
              onExtentionStateChange={updateExtensionState}
            />
            <EditorWithFileExplorer
              files={files}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
            />
          </ContentContainer>
        </MainContainer>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}
