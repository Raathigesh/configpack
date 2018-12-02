import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const LabelContainer = styled.div`
  display: flex;
  font-weight: 700;
  padding-bottom: 5px;
  font-size: 12px;
  margin-right: 10px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  color: gray;
  padding-bottom: 5px;
  font-size: 12px;
  margin-right: 10px;
`;

interface Props {
  label: string;
  description?: string;
  children: any;
}

export default function Label({ label, description, children }: Props) {
  return (
    <Container>
      <LabelContainer>{label}</LabelContainer>
      {description && (
        <DescriptionContainer>{description}</DescriptionContainer>
      )}
      {children}
    </Container>
  );
}
