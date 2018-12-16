import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme";

const Container = styled.div<{ background: string; padding: number }>`
  background-color: ${props => props.background};
  padding: ${props => `${props.padding}px`};
`;

const Logo = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 400;
`;

export default function Header() {
  const {
    background: { primary },
    padding: { medium }
  } = useContext(ThemeContext);

  return (
    <Container background={primary} padding={medium}>
      <Logo>Configpack</Logo>
    </Container>
  );
}
