import React from "react";
import styled from "styled-components";
import { EnabledBlock } from "../types";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 10px;
`;

interface Props {
  blocks: EnabledBlock[];
  extensionState: { [extensionKeyl: string]: any };
  onExtentionStateChange: (extensionKey: string, state: any) => void;
}

export default function Panel({
  blocks,
  extensionState,
  onExtentionStateChange
}: Props) {
  return (
    <Container>
      {blocks.map(({ component: Component, extensionKey, name }) => {
        const packState = extensionState[extensionKey];
        return (
          <Component
            key={name}
            state={packState}
            onChange={(nextState: any) => {
              onExtentionStateChange(extensionKey, nextState);
            }}
          />
        );
      })}
    </Container>
  );
}
