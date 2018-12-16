import React, { useContext } from "react";
import styled from "styled-components";
import { File as FileIcon } from "react-feather";
import { File } from "./index";
import { ThemeContext } from "../../theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const Label = styled.div`
  margin-left: 5px;
  font-size: 13px;
`;

const ItemContainer = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  &:hover {
    border-radius: 5px;
    background: ${props => props.background};
  }
`;

interface Props {
  file: File;
  onClick: (name: string) => void;
}

export default function FileItem({ file, onClick }: Props) {
  const {
    background: { tertiary }
  } = useContext(ThemeContext);
  return (
    <Container>
      <ItemContainer background={tertiary}>
        <FileIcon size="11" />
        <Label onClick={() => onClick(file.name)}>{file.name}</Label>
      </ItemContainer>
      {file.children &&
        file.children.map(child => <FileItem file={child} onClick={onClick} />)}
    </Container>
  );
}
