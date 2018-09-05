import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "emotion";
import Container from "./Container";

require("typeface-roboto");

injectGlobal`
body {
    margin: 0;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
}
`;

ReactDOM.render(<Container />, document.getElementById("root"));
if ((module as any).hot) {
  (module as any).hot.accept("./Container", function() {
    console.log("Accepting the updated!");
    ReactDOM.render(<Container />, document.getElementById("root"));
  });
}
