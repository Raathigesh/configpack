import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

interface Props {
  children: any;
  direction: "row" | "column";
}

export default function Frame({ direction, children }: Props) {
  return <ContainerDiv direction={direction}>{children}</ContainerDiv>;
}
