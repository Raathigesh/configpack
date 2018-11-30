import React, { useContext } from "react";
import styled from "styled-components";
import BlockItem from "./block-item";
import { ThemeContext } from "../theme";

const Container = styled.div<{ backgroundColor: string }>`
  display: flex;
  min-width: 300px;
  height: 100vh;
  padding: 10px;
  background-color: ${props => props.backgroundColor};
`;

export default function SideBar() {
  const {
    sidebar: { backgroundColor }
  } = useContext(ThemeContext);
  return (
    <Container backgroundColor={backgroundColor}>
      <BlockItem />
    </Container>
  );
}
