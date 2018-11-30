import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import { Frame, Row, Text, Label, Select } from "../src";

import "inter-ui";

const BodyStyle = createGlobalStyle`
body {
  font-family: 'Inter UI var alt', sans-serif;
}
`;

storiesOf("Button", module).add("with text", () => (
  <Fragment>
    <BodyStyle />
    <Frame direction="column">
      <Row>
        <Label label="Entry">
          <Text />
        </Label>
      </Row>
      <Row>
        <Label label="Entry">
          <Select options={[{ label: "Option 1", value: "1" }]} />
        </Label>
      </Row>
    </Frame>
  </Fragment>
));
