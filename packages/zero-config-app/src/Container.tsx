import React, { Component } from "react";
import styled from "styled-components";
const prettier = require("prettier/standalone");
const parser = require("prettier/parser-babylon");
import Editor from "./Editor";
import Guide from "./Guide";
import initialCode from "./initial-code";
import ConfigObjectContext from "./context";
import Files from "./files";
import Header from "./header";
import { Flex } from "reflexbox";
import { produce } from "immer";

const ContainerDiv = styled("div")`
  display: flex;
  flex-direction: row;
`;

export default class Container extends Component<{}> {
  render() {
    return <div />;
  }
}
