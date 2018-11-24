import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "reflexbox";
import { Maximize } from "react-feather";
import { Button } from "@blueprintjs/core";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: #f8f8fa;
  border-left: 2px solid #5069f9;
  border-bottom: 1px solid #ececec;
`;

const Details = styled("div")`
  background-color: #f2f6fa;
  padding: 10px;
`;

const Title = styled("div")`
  font-size: 20px;
  font-weight: 600;
  padding-left: 10px;
`;

const Description = styled("div")`
  padding-left: 10px;
`;

interface Props {
  icon: any;
  children: any;
}
interface State {
  isExpanded: boolean;
}

export default class BlockFrame extends Component<Props, State> {
  state = {
    isExpanded: false
  };

  render() {
    const { icon, children } = this.props;
    return (
      <Container>
        <Flex justify="space-between" align="center" p={1}>
          <Flex>
            {icon}
            <Flex column>
              <Title>Webpack</Title>
              <Description>Webpack Configuration block</Description>
            </Flex>
          </Flex>
          <Flex pr={2}>
            <Button
              minimal
              icon="maximize"
              onClick={() =>
                this.setState({
                  isExpanded: !this.state.isExpanded
                })
              }
            />
          </Flex>
        </Flex>
        {this.state.isExpanded && <Details>{children}</Details>}
      </Container>
    );
  }
}
