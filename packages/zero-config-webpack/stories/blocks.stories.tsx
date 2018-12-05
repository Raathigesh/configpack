import React, { Fragment, useState } from "react";
import { storiesOf } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import Blocks from "../src";

import "inter-ui";

const BodyStyle = createGlobalStyle`
body {
  font-family: 'Inter UI var alt', sans-serif;
}
`;

function Example() {
  const Component = Blocks.blocks[0].component;
  const onFinalize = Blocks.onFinalize;
  const [state, setState] = useState({
    entry: "",
    output: {
      path: "",
      fileName: ""
    },
    resolve: [".js"]
  });

  console.log(onFinalize(state));

  return (
    <Fragment>
      <BodyStyle />
      <Component state={state} onChange={setState} />
    </Fragment>
  );
}

storiesOf("Blocks", module).add("with text", () => <Example />);
