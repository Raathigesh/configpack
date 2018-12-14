import React, { Fragment } from "react";
import styled from "styled-components";
import { ExtensionPack } from "../app";
import ExtenionPackComponent from "./extension-pack";

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

const Container = styled.div`
  width: 950px;
  height: 800px;
  display: flex;
  position: absolute;
  background-color: white;
  align-self: center;
  padding: 15px;
`;

interface Props {
  extensionPacks: ExtensionPack[];
}

export default function AddBlocksDialog({ extensionPacks }: Props) {
  return (
    <Fragment>
      <BackDrop />
      <Wrapper>
        <Container>
          {extensionPacks.map(extensionPack => (
            <ExtenionPackComponent extensionPack={extensionPack} />
          ))}
        </Container>
      </Wrapper>
    </Fragment>
  );
}
