import React from "react";
import styled, { css } from "styled-components";
const prettier = require("prettier/standalone");
const parser = require("prettier/parser-babylon");
import * as monaco from "monaco-editor";
import theme from "./theme";

const EditorDiv = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Container = styled.div`
  display: flex;
  width: calc(100vw - 1150px);
`;

interface Props {
  code: string;
  highlights?: any[];
  language: string;
}

export default class Editor extends React.Component<Props> {
  editor: any;
  editorContainer: any;

  mountEditor = () => {
    monaco.editor.defineTheme("myTheme", theme as any);
    this.editor = monaco.editor.create(this.editorContainer, {
      value: "",
      language: this.props.language,
      fixedOverflowWidgets: true,
      minimap: {
        enabled: false
      }
    });

    monaco.editor.setTheme("myTheme");
  };

  componentDidMount() {
    this.mountEditor();
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
    if (this.editor.model) {
      this.editor.model.setValue(nextProps.code);
      monaco.editor.setModelLanguage(this.editor.model, nextProps.language);
    }
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
    /*  const prettyCode = prettier.format(this.props.code, {
      parser: "babylon",
      plugins: [parser]
    }); */

    return (
      <Container>
        <EditorDiv ref={ele => (this.editorContainer = ele)} />
      </Container>
    );
  }
}
