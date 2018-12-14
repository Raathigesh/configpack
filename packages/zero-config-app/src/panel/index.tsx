import React from "react";
import styled from "styled-components";
import { EnabledBlock } from "../app";

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
      {blocks.map(({ component: Component, packKey }) => {
        const packState = extensionState[packKey];
        return (
          <Component
            state={
              packState || {
                entry: "",
                output: {
                  path: "",
                  fileName: ""
                },
                resolve: [".js"]
              }
            }
            onChange={(nextState: any) => {
              onExtentionStateChange(packKey, nextState);
            }}
          />
        );
      })}
    </Container>
  );
}
