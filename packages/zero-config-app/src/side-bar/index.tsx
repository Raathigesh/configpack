import React, { useContext } from "react";
import styled from "styled-components";
import BlockItem from "./block-item";
import { ThemeContext } from "../theme";
import { ExtensionPack } from "../types";

const Container = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: flex-start;
  min-width: 300px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  background-color: ${props => props.backgroundColor};
`;

interface Props {
  packs: ExtensionPack[];
}

export default function SideBar({ packs }: Props) {
  const {} = useContext(ThemeContext);
  return (
    <Container backgroundColor="#29303c">
      {packs.map(pack =>
        pack.blocks.map(({ name, description }) => (
          <BlockItem key={name} name={name} description={description} />
        ))
      )}
    </Container>
  );
}
