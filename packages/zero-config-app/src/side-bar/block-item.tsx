import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../theme";

const Container = styled.div<{
  border: string;
  background: string;
  color: string;
}>`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  background: ${props => props.background};
  color: ${props => props.color};
`;

const Description = styled.div<{ size: number }>`
  font-size: ${props => `${props.size}px`};
`;

interface Props {
  name: string;
  description: string;
}

export default function BlockItem({ name, description }: Props) {
  const {
    background: { primary: primaryBackground, secondary: secondaryBackground },
    color: { primary },
    fontSize: { small }
  } = useContext(ThemeContext);

  return (
    <Container
      border={primaryBackground}
      background={secondaryBackground}
      color={primaryBackground}
    >
      <div>{name}</div>
      <Description size={small}>{description}</Description>
    </Container>
  );
}
