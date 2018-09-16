import React from "react";
import { Classes, Icon, ITreeNode, Tooltip, Tree } from "@blueprintjs/core";
import styled from "react-emotion";

const Container = styled("div")`
  width: 250px;
  background-color: #1a1b44;
`;

export default function Files() {
  return (
    <Container>
      <Tree
        contents={[
          {
            id: 0,
            hasCaret: true,
            icon: "folder-close",
            label: "Folder 0"
          }
        ]}
      />
    </Container>
  );
}
