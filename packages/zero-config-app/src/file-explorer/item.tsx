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
`;

interface Props {
  file: File;
}

export default function FileItem({ file }: Props) {
  return (
    <Container>
      <FileIcon size="12" />
      <Label>{file.name}</Label>
      {file.children && file.children.map(child => <FileItem file={child} />)}
    </Container>
  );
}
