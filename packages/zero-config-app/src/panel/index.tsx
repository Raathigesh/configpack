import React, { Fragment } from "react";
import styled from "styled-components";
import { EnabledBlock } from "../types";

const Container = styled.div`
  display: flex;
  background-color: #f8f8f8;
`;

const BlockContent = styled.div`
  padding: 15px;
  border-radius: 5px;
  background-color: #f4f4f4;
`;

const InnerContainer = styled.div`
  padding: 15px;
`;

const Header = styled.div``;
const Description = styled.div`
  font-size: 13px;
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
        {blocks.map(
          ({ component: Component, extensionKey, name, description }) => {
            const packState = extensionState[extensionKey];
            return (
              <BlockContent>
                <Header>{name}</Header>
                <Description>{description}</Description>
                <Component
                  key={name}
                  state={packState}
                  onChange={(nextState: any) => {
                    onExtentionStateChange(extensionKey, nextState);
                  }}
                />
              </BlockContent>
            );
          }
        )}
      </InnerContainer>
    </Container>
  );
}
