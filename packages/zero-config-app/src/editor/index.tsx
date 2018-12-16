import React from "react";
import styled from "styled-components";
import Editor from "./editor";
import FileExplorer from "./file-explorer";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;

interface Props {
  files: { [name: string]: string };
  activeFile: string;
  setActiveFile: (activeFile: string) => void;
}

const mapResultsToFiles = (results: { [filepath: string]: string }) => {
  return Object.entries(results).map(([key, value]) => {
    return {
      name: key,
      content: value
    };
  });
};

export default function EditorWithFileExplorer({
  files,
  activeFile,
  setActiveFile
}: Props) {
  const mappedFiles = mapResultsToFiles(files);
  return (
    <Container>
      <FileExplorer files={mappedFiles} onClick={setActiveFile} />
      <Editor code={files[activeFile] || ""} />
    </Container>
  );
}
