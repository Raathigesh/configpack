import React from "react";
import styled from "react-emotion";
const { Label, TextInputField } = require("evergreen-ui");

const Container = styled("div")`
  padding: 10px;
`;

export default class Details extends React.Component {
  render() {
    return (
      <Container>
        <Label htmlFor={32} size={400} display="block">
          Entry
        </Label>
        <TextInputField name={32} id={32} placeholder="Entry of your bundle" />
      </Container>
    );
  }
}
