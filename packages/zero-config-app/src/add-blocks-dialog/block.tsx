import React from "react";
import styled from "styled-components";
import { BlockItem } from "../app";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: wheat;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: purple;
  }
`;

const DisplayName = styled.div`
  font-size: 15px;
`;

const Description = styled.div`
  font-size: 12px;
`;

interface Props {
  block: BlockItem;
}

export default function Block({ block: { name, description } }: Props) {
  return (
    <Container>
      <DisplayName>{name}</DisplayName>
      <Description>{description}</Description>
    </Container>
  );
}
