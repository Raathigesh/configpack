import React, { useContext } from "react";
import styled from "styled-components";
import BlockItem from "./block-item";
import { ExtensionPack, BoxProps } from "../types";
import { color } from "styled-system";

const Container = styled.div<BoxProps>`
  display: flex;
  align-items: flex-start;
  min-width: 300px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  ${color}
`;

interface Props {
  packs: ExtensionPack[];
}

export default function SideBar({ packs }: Props) {
  return (
    <Container bg="dark">
      {packs.map(pack =>
        pack.blocks.map(({ name, description }) => (
          <BlockItem key={name} name={name} description={description} />
        ))
      )}
    </Container>
  );
}
