import React from "react";
import styled, { css } from "styled-components";
const prettier = require("prettier/standalone");
const parser = require("prettier/parser-babylon");
import * as monaco from "monaco-editor";
import theme from "./theme";

const ContainerDiv = styled.div`
  display: flex;
  flex-grow: 1;
`;

interface Props {
  code: string;
  highlights?: any[];
}

export default class Editor extends React.Component<Props> {
  editor: any;

  componentDidMount() {
    monaco.editor.defineTheme("myTheme", theme as any);
    this.editor = monaco.editor.create(this.editor, {
      value: "",
      automaticLayout: true,
      language: "javascript",
      minimap: {
        enabled: false
      }
    });

    monaco.editor.setTheme("myTheme");
    /*  this.editor.deltaDecorations(
      [],
      [
        {
          range: new monaco.Range(7, 1, 7, 24),
          options: { inlineClassName: highlight }
        }
      ]
    ); */
  }

  componentWillReceiveProps(nextProps: Props) {
    this.editor.model && this.editor.model.setValue(nextProps.code);
  }

  componentDidUpdate() {
    /*   this.editor.setValue(this.props.code);

    if (this.props.highlights) {
      const docorations = this.props.highlights.map(high => ({
        range: new monaco.Range(
          high.start.line,
          high.start.column,
          high.end.line,
          high.end.column
        ),
        options: { inlineClassName: highlight }
      }));
      this.editor.deltaDecorations([], docorations);
    } */
  }

  render() {
    const prettyCode = prettier.format(this.props.code, {
      parser: "babylon",
      plugins: [parser]
    });

    return <ContainerDiv ref={ele => (this.editor = ele)} />;
  }
}
