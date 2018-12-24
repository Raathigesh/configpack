import React, { Fragment } from "react";
import { Button } from "@smooth-ui/core-sc";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import ExtenionPackComponent from "./extension-pack";
import { ExtensionPack } from "../types";

const BackDrop = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: gray;
  z-index: 999;
  opacity: 0.6;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

const Container = styled.div<SpaceProps>`
  width: 950px;
  height: 800px;
  display: flex;
  position: absolute;
  background-color: white;
  align-self: center;
  flex-direction: column;
  ${space}
`;

const Header = styled.div<SpaceProps>`
  ${space}
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
`;

interface Props {
  extensionPacks: ExtensionPack[];
}

export default function AddBlocksDialog({ extensionPacks }: Props) {
  return (
    <Fragment>
      <BackDrop />
      <Wrapper>
        <Container p={15}>
          <Header mb={2}>Add blocks to your workspace</Header>
          <Content>
            {extensionPacks.map(extensionPack => (
              <ExtenionPackComponent extensionPack={extensionPack} />
            ))}
          </Content>
          <Footer>
            <Button backgroundColor="blue">Add</Button>
          </Footer>
        </Container>
      </Wrapper>
    </Fragment>
  );
}
