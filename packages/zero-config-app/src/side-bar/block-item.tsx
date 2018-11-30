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

export default function BlockItem() {
  const {
    sidebar: {
      blockItem: { backgroundColor }
    }
  } = useContext(ThemeContext);

  return (
    <Container backgroundColor={backgroundColor}>
      <div>Babel 7 for Webpack</div>
      <div>Adds babel for webpack</div>
    </Container>
  );
}
