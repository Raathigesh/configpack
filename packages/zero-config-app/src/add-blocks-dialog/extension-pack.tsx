import React from "react";
import styled from "styled-components";
import { ExtensionPack } from "../app";
import BlockItem from "./block";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 15px;
`;

const DisplayName = styled.div`
  font-size: 20px;
`;

const Description = styled.div`
  font-size: 14px;
`;

const Blocks = styled.div``;

interface Props {
  extensionPack: ExtensionPack;
}

export default function ExtenionPack({
  extensionPack: { displayName, description, blocks }
}: Props) {
  return (
    <Container>
      <Header>
        <DisplayName>{displayName}</DisplayName>
        <Description>{description}</Description>
      </Header>
      <Blocks>
        {blocks.map(block => (
          <BlockItem block={block} />
        ))}
      </Blocks>
    </Container>
  );
}
