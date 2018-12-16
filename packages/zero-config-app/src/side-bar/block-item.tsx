import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../theme";

const Container = styled.div<{ background: string }>`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 80px;
  width: 100%;
`;

interface Props {
  name: string;
  description: string;
}

export default function BlockItem({ name, description }: Props) {
  const {} = useContext(ThemeContext);

  return (
    <Container background={""}>
      <div>{name}</div>
      <div>{description}</div>
    </Container>
  );
}
