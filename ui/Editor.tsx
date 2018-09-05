import React from "react";
import styled, { css } from "react-emotion";
import * as monaco from "monaco-editor";
import code from "./initial-code";

const ContainerDiv = styled("div")``;

const editorCss = css`
  height: calc(100vh - 0px);
  width: 600px;
`;

const highlight = css`
  background: #a4c5e3;
`;

export default class Editor extends React.Component {
  editorRef: any;

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

    const editor = monaco.editor.create(this.editorRef, {
      value: code,
      language: "javascript",
      minimap: {
        enabled: false
      }
    });

    monaco.editor.setTheme("myTheme");

    editor.deltaDecorations(
      [],
      [
        {
          range: new monaco.Range(7, 1, 7, 24),
          options: { inlineClassName: highlight }
        }
      ]
    );
  }

  render() {
    return (
      <ContainerDiv>
        <div className={editorCss} ref={(e: any) => (this.editorRef = e)} />
      </ContainerDiv>
    );
  }
}
