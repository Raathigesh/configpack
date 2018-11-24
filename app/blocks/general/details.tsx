import React from "react";
import styled from "react-emotion";
import {} from "@blueprintjs/core";

import manipulate from "./manipulator";
import Label from "../../primitives/label";

const Container = styled("div")`
  margin-top: 5px;
`;

interface Props {
  files: { string: string } | {};
  setFileContent: (path: string, content: string) => void;
}

interface State {
  entry: string;
}

export default class Details extends React.Component<Props, State> {
  private filePath = "webpack.config.js";

  state = {
    entry: "./entry.js"
  };

  componentDidMount(content: string) {
    this.props.setFileContent(this.filePath, content);
  }

  render() {
    return (
      <Container>
        <Label
          label="Entry"
          description="The point or points to enter the application. At this point the
        application starts executing."
        />

        <input
          value={this.state.entry}
          onChange={(e: any) => {
            this.setState({
              entry: e.target.value
            });

            /*  setCode(
              manipulate(code, {
                entryPath: e.target.value,
                setHighlights
              })
            ); */
          }}
          placeholder="Entry of your bundle"
        />

        <Label
          label="Mode"
          description="The point or points to enter the application. At this point the
          application starts executing."
        />
      </Container>
    );
  }
}
