import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

interface Props {
  children: any;
}

export default function Row({ children }: Props) {
  return <Container>{children}</Container>;
}
