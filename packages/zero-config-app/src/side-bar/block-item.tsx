import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../theme";

const Container = styled.div<{ backgroundColor: string }>`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 80px;
  width: 100%;
  background-color: ${props => props.backgroundColor};
`;

interface Props {
  name: string;
  description: string;
}

export default function BlockItem({ name, description }: Props) {
  const {
    sidebar: {
      blockItem: { backgroundColor }
    }
  } = useContext(ThemeContext);

  return (
    <Container backgroundColor={backgroundColor}>
      <div>{name}</div>
      <div>{description}</div>
    </Container>
  );
}
