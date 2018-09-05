import React from "react";
import styled from "react-emotion";
import Editor from "./Editor";
import Guide from "./Guide";

const ContainerDiv = styled("div")`
  display: flex;
  flex-direction: row;
`;

// const ConfigObjectContext = React.createContext({});

export default function Container() {
  return (
    <ContainerDiv>
      <Editor />
      <Guide />
    </ContainerDiv>
  );
}
