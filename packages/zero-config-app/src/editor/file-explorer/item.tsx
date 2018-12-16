import React from "react";
import styled from "styled-components";
import { File as FileIcon } from "react-feather";
import { File } from "./index";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  margin-left: 5px;
  font-size: 13px;
  cursor: pointer;
`;

interface Props {
  file: File;
  onClick: (name: string) => void;
}

export default function FileItem({ file, onClick }: Props) {
  return (
    <Container>
      <FileIcon size="12" />
      <Label onClick={() => onClick(file.name)}>{file.name}</Label>
      {file.children &&
        file.children.map(child => <FileItem file={child} onClick={onClick} />)}
    </Container>
  );
}
