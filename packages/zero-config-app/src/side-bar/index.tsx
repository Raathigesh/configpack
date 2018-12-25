import React, { useContext } from "react";
import styled from "styled-components";
import BlockItem from "./block-item";
import { ExtensionPack, BoxProps } from "../types";
import { color, space } from "styled-system";

const Container = styled.div<BoxProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  ${space}
  ${color}
`;

interface Props {
  packs: ExtensionPack[];
}

export default function SideBar({ packs }: Props) {
  return (
    <Container bg="dark" p={2}>
      {packs.map(pack =>
        pack.blocks.map(({ name, description }) => (
          <BlockItem key={name} name={name} description={description} />
        ))
      )}
    </Container>
  );
}
