import React from "react";
import { Frame, Section, Checkbox } from "zero-config-components";

export default function BabelForWebpack() {
  return (
    <Frame direction="column">
      <Section name="Typescript" description="Add typescript support">
        <Checkbox value="typescript" />
      </Section>
    </Frame>
  );
}
