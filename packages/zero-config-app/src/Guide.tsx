import React from "react";
import styled from "styled-components";
import Blocks from "./blocks";
import Files from "./files";

const ContainerDiv = styled("div")`
  flex-grow: 1;
  background-color: #f2f6fa;
`;

export default function Guide() {
  return (
    <ContainerDiv>
      <Blocks />
    </ContainerDiv>
  );
}
