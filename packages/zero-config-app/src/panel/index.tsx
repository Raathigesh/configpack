import React from "react";
import styled from "styled-components";
import { EnabledBlock } from "../types";

const Container = styled.div`
  display: flex;
`;

const InnerContainer = styled.div`
  box-shadow: 0px 0px 20px -8px rgba(163, 163, 163, 1);
  padding: 15px;
  background: white;
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
      <InnerContainer>
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
      </InnerContainer>
    </Container>
  );
}
