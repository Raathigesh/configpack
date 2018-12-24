import React from "react";
import styled from "styled-components";
import { color, space } from "styled-system";
import { BoxProps } from "./types";

const Container = styled.div<BoxProps>`
  ${color}
  ${space}
`;

const Logo = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 400;
`;

export default function Header() {
  return (
    <Container bg="primary" p={2}>
      <Logo>Configpack</Logo>
    </Container>
  );
}
