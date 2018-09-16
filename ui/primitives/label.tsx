import React from "react";
import styled from "react-emotion";
const { Flex, Box } = require("reflexbox");

const Label = styled("div")`
  font-weight: 600;
  color: #000023;
`;

interface Props {
  label: string;
  description: string;
}

export default function ConfigLabel({ label, description }: Props) {
  return (
    <Flex>
      <Label>{label}</Label>
      {description}
    </Flex>
  );
}
