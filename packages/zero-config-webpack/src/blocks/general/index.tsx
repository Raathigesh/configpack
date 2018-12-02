import React, { Component } from "react";
import { Frame, Row, Text, Label } from "zero-config-components";

export default class GeneralSetting extends Component {
  render() {
    return (
      <Frame direction="column">
        <Row>
          <Label label="Entry">
            <Text />
          </Label>
        </Row>
        <Row>
          <Label label="Path">
            <Text />
          </Label>
        </Row>
        <Row>
          <Label label="File name">
            <Text />
          </Label>
        </Row>
      </Frame>
    );
  }
}
