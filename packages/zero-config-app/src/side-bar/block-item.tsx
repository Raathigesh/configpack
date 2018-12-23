import React, { useContext } from "react";
import styled from "styled-components";
import WebpackIcon from "../webpack-icon.svg";
import { ThemeContext } from "../theme";

const Container = styled.div<{
  border: string;
  background: string;
  color: string;
}>`
  padding: 10px;
  display: flex;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  color: ${props => props.color};
  &:hover {
    background: ${props => props.background};
  }
`;

const Description = styled.div<{ size: number }>`
  font-size: ${props => `${props.size}px`};
`;

const Details = styled.div`
  margin-left: 10px;
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
      color={primary}
    >
      <WebpackIcon height="40" width="40" />
      <Details>
        <div>{name}</div>
        <Description size={small}>{description}</Description>
      </Details>
    </Container>
  );
}
