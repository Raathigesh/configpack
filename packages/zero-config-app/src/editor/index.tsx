import React from "react";
import styled from "styled-components";
import Editor from "./editor";
import FileExplorer from "./file-explorer";

// box-shadow: 0px 0px 20px -8px rgba(163, 163, 163, 1);
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
  const children = Object.entries(results).map(([key, value]) => {
    return {
      name: key,
      content: value
    };
  });

  return [
    {
      name: "root",
      content: "",
      children
    }
  ];
};

export function getLanguageForExtension(extension: string) {
  switch (extension) {
    case "js":
      return "javascript";
    case "json":
      return "json";
    default:
      return "";
  }
}

export default function EditorWithFileExplorer({
  files,
  activeFile,
  setActiveFile
}: Props) {
  const mappedFiles = mapResultsToFiles(files);
  const extension = activeFile.split(".").pop();
  const language = getLanguageForExtension(extension || "");
  console.log(extension, language, activeFile);
  return (
    <Container>
      <Editor language={language} code={files[activeFile] || ""} />
      <FileExplorer files={mappedFiles} onClick={setActiveFile} />
    </Container>
  );
}
