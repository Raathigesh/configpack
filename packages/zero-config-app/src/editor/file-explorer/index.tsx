import React from "react";
import styled from "styled-components";
import FileItem from "./item";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 25px;
  width: 200px;
  flex-grow: 0;
  & > div {
    margin-left: 0px;
  }
`;

export interface File {
  name: string;
  content: string;
  children?: File[];
}

interface Props {
  files: File[];
  onClick: (name: string) => void;
}

export default function FileExplorer({ files, onClick }: Props) {
  return (
    <Container>
      {files.map(file => (
        <FileItem key={file.name} file={file} onClick={onClick} />
      ))}
    </Container>
  );
}
