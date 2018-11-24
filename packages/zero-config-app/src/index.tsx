import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import Container from "./Container";

require("typeface-karla");

injectGlobal`
body {
    margin: 0;
    overflow: hidden;
    font-family: 'Karla', sans-serif !important;
}

.bp3-tree-node-caret {
    margin-top: 10px;
    color: #F71948 !important;
}

.bp3-tree-node-label {
    padding-top: 4px;
    color: white;
}

.bp3-tree-node-icon {
    color: #d1d1d1 !important;
}

:focus {
    outline: #d1d1d1 auto 2px;
}
`;

ReactDOM.render(<Container />, document.getElementById("root"));
