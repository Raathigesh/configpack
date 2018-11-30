import React from "react";
import styled, { css } from "styled-components";
import * as monaco from "monaco-editor";
import code from "./initial-code";
import { Highlight } from "./app";

const ContainerDiv = styled("div")``;

const editorCss = css`
  height: calc(100vh - 0px);
  width: 600px;
`;

const highlight = css`
  background: orange;
`;

interface Props {
  code: string;
  highlights?: Highlight[];
}

export default class Editor extends React.Component<Props> {
  editorRef: any;
  editor: any;

  componentDidMount() {
    monaco.editor.defineTheme("myTheme", {
      base: "vs",
      inherit: true,
      rules: [{ background: "EDF9FA", token: "" }],
      colors: {
        "editor.foreground": "#000000",
        "editor.background": "#F2F6FA",
        "editorCursor.foreground": "#8B0000",
        "editor.lineHighlightBackground": "#0000FF20",
        "editorLineNumber.foreground": "#008800",
        "editor.selectionBackground": "#88000030",
        "editor.inactiveSelectionBackground": "#88000015"
      }
    });

    this.editor = monaco.editor.create(this.editorRef, {
      value: code,
      language: "javascript",
      minimap: {
        enabled: false
      }
    });

    monaco.editor.setTheme("myTheme");

    this.editor.deltaDecorations(
      [],
      [
        {
          range: new monaco.Range(7, 1, 7, 24),
          options: { inlineClassName: highlight }
        }
      ]
    );
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
    return (
      <ContainerDiv>
        <div className={editorCss} ref={(e: any) => (this.editorRef = e)} />
      </ContainerDiv>
    );
  }
}
