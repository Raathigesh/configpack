import React, { Fragment, useState } from "react";
import { storiesOf } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import Blocks from "../src";

import "inter-ui";

const BodyStyle = createGlobalStyle`
body {
  font-family: 'Inter UI', sans-serif;
}
`;

function Example() {
  const Component = Blocks.blocks[1].component;
  const onFinalize = Blocks.onFinalize;
  const [state, setState] = useState(Blocks.getInitialState());

  Object.entries(onFinalize(state)).map(([, value]) => console.log(value));

  return (
    <Fragment>
      <BodyStyle />
      <Component state={state} onChange={setState} />
    </Fragment>
  );
}

storiesOf("Babel block", module).add("with text", () => <Example />);
