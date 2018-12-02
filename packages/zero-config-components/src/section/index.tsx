import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 2px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`;

const Header = styled.div`
  font-size: 13px;
`;

const Description = styled.div`
  font-size: 12px;
  color: gray;
`;

const Content = styled.div`
  min-width: 300px;
  padding: 20px;
`;

interface Props {
  name?: string;
  description?: string;
  children: any;
}

export default function Section({ name, description, children }: Props) {
  return (
    <Container>
      <LeftContainer>
        <Header>{name}</Header>
        <Description>{description}</Description>
      </LeftContainer>

      <Content>{children}</Content>
    </Container>
  );
}
