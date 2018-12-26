import React, { Fragment } from "react";
import styled from "styled-components";
import { EnabledBlock, BoxProps } from "../types";
import { space } from "styled-system";

const Container = styled.div`
  display: flex;
  background-color: #f8f8f8;
`;

const BlockContent = styled.div<BoxProps>`
  border-radius: 5px;
  background-color: #f4f4f4;
  ${space}
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Header = styled.div``;
const Description = styled.div`
  font-size: 13px;
`;

interface Props {
  blocks: EnabledBlock[];
  extensionState: { [extensionId: string]: any };
  onExtentionStateChange: (extensionId: string, state: any) => void;
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
          ({ component: Component, extensionId, name, description }) => {
            const packState = extensionState[extensionId];
            return (
              <BlockContent p={3} mb={2}>
                <Header>{name}</Header>
                <Description>{description}</Description>
                <Component
                  key={name}
                  state={packState}
                  onChange={(nextState: any) => {
                    onExtentionStateChange(extensionId, nextState);
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
