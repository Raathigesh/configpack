import React from "react";
import general from "./general";

const blocks = [general];

export default function Blocks() {
  return (
    <React.Fragment>
      {blocks.map(block => (
        <block.Component />
      ))}
    </React.Fragment>
  );
}
