import React from "react";
import styled from "styled-components";
import Details from "./details";
import { Transition, animated } from "react-spring";
import BlockFrame from "../../primitives/block-frame";
import ConfigObjectContext from "../../context";
import ConfigState from "../../state";
const WebpackIcon = require("./webpack-icon.svg");

export default class General extends React.Component {
  render() {
    return (
      <BlockFrame icon={<WebpackIcon height={50} width={50} />}>
        <Transition
          native
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 150 }}
          leave={{ opacity: 0, height: 0 }}
        >
          {(styles: any) => {
            return <animated.div style={styles} />;
          }}
        </Transition>
      </BlockFrame>
    );
  }
}