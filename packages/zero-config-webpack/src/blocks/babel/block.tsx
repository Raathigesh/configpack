import React from "react";
import { Frame, Section, Checkbox } from "zero-config-components";

export default function BabelForWebpack() {
  return (
    <Frame direction="column">
      <Section name="React" description="Enable react support">
        <Checkbox value="react" />
      </Section>
    </Frame>
  );
}
