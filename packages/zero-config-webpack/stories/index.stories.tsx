import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import { GeneralBlockComponent } from "../src";

import "inter-ui";

const BodyStyle = createGlobalStyle`
body {
  font-family: 'Inter UI var alt', sans-serif;
}
`;

storiesOf("GeneralBlockComponent", module).add("with text", () => (
  <Fragment>
    <BodyStyle />
    <GeneralBlockComponent
      state={{
        entry: "",
        output: {
          path: "",
          fileName: ""
        },
        resolve: [".js"]
      }}
      onChange={state => {
        console.log(JSON.stringify(state));
      }}
    />
  </Fragment>
));
