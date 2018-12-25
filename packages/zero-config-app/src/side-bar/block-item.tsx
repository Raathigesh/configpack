import React from "react";
import styled from "styled-components";
import { color, fontSize, themeGet, FontSizeProps, space } from "styled-system";
import { BoxProps } from "../types";

const Container = styled.div<BoxProps>`
  display: flex;
  width: 300px;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  ${color}
  ${space}
  &:hover {
    background: ${themeGet("colors.primary")};
  }
`;

const Description = styled.div<FontSizeProps>`
  ${fontSize}
`;

const Details = styled.div`
  margin-left: 10px;
`;

interface Props {
  name: string;
  description: string;
}

export default function BlockItem({ name, description }: Props) {
  return (
    <Container bg="secondary" color="tertiary" p={2} mb={2}>
      {/* <WebpackIcon height="40" width="40" /> */}
      <Details>
        <div>{name}</div>
        <Description fontSize={12}>{description}</Description>
      </Details>
    </Container>
  );
}
