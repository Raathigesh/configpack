import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

const LabelContainer = styled.div`
  display: flex;
  padding-bottom: 5px;

  font-size: 12px;
`;

interface Props {
  label: string;
  children: any;
}

export default function Label({ label, children }: Props) {
  return (
    <Container>
      <LabelContainer>{label}</LabelContainer>
      {children}
    </Container>
  );
}
