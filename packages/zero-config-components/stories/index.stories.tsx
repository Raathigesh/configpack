import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import { Frame, Row, Text, Label, Section, RichSelect } from "../src";

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
      <Section name="Entry" description="Entry point of your application">
        <Text value="entry" onChange={value => console.log(value)} />
      </Section>
      <Section name="Output" description="Configuration of output">
        <Label label="Path" description="Directory of the bundle">
          <Text value="entry" onChange={value => console.log(value)} />
        </Label>
        <Label label="File name" description="File name of the bundle">
          <Text value="entry" onChange={value => console.log(value)} />
        </Label>
      </Section>
      <Section name="Resolve" description="Extensions to resolve">
        <RichSelect
          options={[
            {
              label: "jsx",
              value: "jsx"
            },
            {
              label: "tsx",
              value: "tsx"
            }
          ]}
          onChange={option => console.log(option)}
        />
      </Section>
    </Frame>
  </Fragment>
));
