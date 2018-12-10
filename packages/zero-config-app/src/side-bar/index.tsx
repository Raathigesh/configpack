import React, { useContext } from "react";
import styled from "styled-components";
import BlockItem from "./block-item";
import { ThemeContext } from "../theme";
import { ExtensionPack } from "../app";

const Container = styled.div<{ backgroundColor: string }>`
  display: flex;
  min-width: 300px;
  height: 100vh;
  padding: 10px;
  background-color: ${props => props.backgroundColor};
`;

interface Props {
  packs: ExtensionPack[];
}

export default function SideBar({ packs }: Props) {
  const {
    sidebar: { backgroundColor }
  } = useContext(ThemeContext);
  return (
    <Container backgroundColor={backgroundColor}>
      {packs.map(pack =>
        pack.blocks.map(({ name, description }) => (
          <BlockItem name={name} description={description} />
        ))
      )}
    </Container>
  );
}
