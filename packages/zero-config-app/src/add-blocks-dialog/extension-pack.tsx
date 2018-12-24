import React from "react";
import styled from "styled-components";
import BlockItem from "./block";
import { ExtensionPack } from "../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const DisplayName = styled.div`
  font-size: 16px;
  margin-right: 10px;
`;

const Description = styled.div`
  font-size: 13px;
  color: gray;
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
