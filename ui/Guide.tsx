import React from "react";
import styled from "react-emotion";
const { IconButton, Popover, Position } = require("evergreen-ui");
import Blocks from "./blocks";

const ContainerDiv = styled("div")`
  padding: 15px;
  flex-grow: 1;
  background-color: #f2f6fa;
`;

export default function Guide() {
  return (
    <ContainerDiv>
      <Blocks />
      <Popover content={<div>Hello</div>} position={Position.TOP_LEFT}>
        <IconButton
          appearance="ghost"
          height={58}
          icon="add"
          position="absolute"
          bottom={5}
          right={5}
        />
      </Popover>
    </ContainerDiv>
  );
}
