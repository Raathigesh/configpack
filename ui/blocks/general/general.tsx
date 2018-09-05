import React from "react";
import styled from "react-emotion";
import Details from "./Details";
const { Pane, Text, IconButton } = require("evergreen-ui");
import { Transition, animated } from "react-spring";

const Container = styled("div")``;
const Header = styled("div")`
  display: flex;
  flex-direction: column;
`;
const Title = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: #f9b10b;
  border-radius: 5px;
`;
const Buttons = styled("div")``;

interface State {
  isExpanded: boolean;
}

export default class General extends React.Component<{}, State> {
  state = {
    isExpanded: false
  };

  render() {
    return (
      <Container>
        <Pane
          elevation={1}
          float="left"
          backgroundColor="white"
          width={"100%"}
          display="flex"
          flexDirection="column"
          borderRadius={5}
          marginBottom={10}
        >
          <Title>
            <Header>
              <Text fontWeight={600} color={"#0C242D"}>
                General Configuration
              </Text>
              <Text size={300}>The must have configs</Text>
            </Header>
            <Buttons>
              <IconButton
                appearance="ghost"
                marginRight={12}
                icon="cog"
                onClick={() => {
                  this.setState({
                    isExpanded: !this.state.isExpanded
                  });
                }}
              />
              <IconButton appearance="ghost" marginRight={12} icon="close" />
            </Buttons>
          </Title>

          <Transition
            native
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 100 }}
            leave={{ opacity: 0, height: 0 }}
            toggle={this.state.isExpanded}
          >
            {this.state.isExpanded &&
              ((styles: any) => {
                return (
                  <animated.div style={styles}>
                    <Details />
                  </animated.div>
                );
              })}
          </Transition>
        </Pane>
      </Container>
    );
  }
}
