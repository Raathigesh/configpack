import React, { useContext, useState } from "react";
import styled from "styled-components";
import { File as FileIcon, ChevronRight, ChevronDown } from "react-feather";
import { File } from "./index";
import { themeGet } from "styled-system";

const Container = styled.div`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  margin-left: 10px;
`;

const Label = styled.div`
  margin-left: 5px;
  font-size: 13px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 5px;
  padding-left: 5px;
  &:hover {
    border-radius: 5px;
    background: ${themeGet("colors.secondary")};
  }
`;
const ToggleContainer = styled.div`
  width: 14px;
`;

interface Props {
  file: File;
  onClick: (name: string) => void;
}

export default function FileItem({ file, onClick }: Props) {
  const [expanded, setExpanded] = useState(true);

  return (
    <Container>
      <ItemContainer>
        <ToggleContainer>
          {!expanded && file.children && <ChevronRight size="14" />}
          {expanded && file.children && <ChevronDown size="14" />}
        </ToggleContainer>
        <FileIcon size="11" />
        <Label onClick={() => onClick(file.name)}>{file.name}</Label>
      </ItemContainer>
      {expanded &&
        file.children &&
        file.children.map(child => <FileItem file={child} onClick={onClick} />)}
    </Container>
  );
}
