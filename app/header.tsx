import React from "react";
import { Flex } from "reflexbox";
import styled from "react-emotion";

const Container = styled("div")`
  background-color: #5069f9;
`;

const Logo = styled("div")`
  font-size: 20px;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 3px;
  font-weight: 400;
`;

export default function Header() {
  return (
    <Container>
      <Logo>Configpack</Logo>
    </Container>
  );
}
