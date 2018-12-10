import React from "react";
import styled from "styled-components";

import FileItem from "./item";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export interface File {
  name: string;
  path: string;
  children?: File[];
}

interface Props {
  files: File[];
}

export default function FileExplorer({ files }: Props) {
  return (
    <Container>
      {files.map(file => (
        <FileItem file={file} />
      ))}
    </Container>
  );
}
