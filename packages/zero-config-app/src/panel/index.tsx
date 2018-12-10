import React from "react";
import styled from "styled-components";
import { ExtensionPack } from "../app";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 10px;
`;

interface Props {
  packs: ExtensionPack[];
}

export default function Panel({ packs }: Props) {
  return (
    <Container>
      {packs.map(pack => {
        return pack.blocks.map(block => (
          <block.component
            state={{
              entry: "",
              output: {
                path: "",
                fileName: ""
              },
              resolve: [".js"]
            }}
          />
        ));
      })}
    </Container>
  );
}
