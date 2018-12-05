import React, { useState, useEffect } from "react";
import produce from "immer";
import {
  Frame,
  Section,
  RichSelect,
  Text,
  Label,
  RichSelectOption
} from "zero-config-components";
import { BlockProps } from "../types";

export interface GeralConfig {
  entry: string;
  output: {
    path: string;
    fileName: string;
  };
  resolve: string[];
}

interface Props extends BlockProps<GeralConfig> {}

export default function GeneralSetting({
  state: {
    entry,
    output: { path, fileName },
    resolve
  },
  state,
  onChange
}: Props) {
  const onEntryChange = (value: string) => {
    const next = produce(state, (draft: GeralConfig) => {
      draft.entry = value;
    });
    onChange(next);
  };

  const onPathChange = (value: string) => {
    const next = produce(state, (draft: GeralConfig) => {
      draft.output.path = value;
    });
    onChange(next);
  };

  const onOutputChange = (value: string) => {
    const next = produce(state, (draft: GeralConfig) => {
      draft.output.fileName = value;
    });
    onChange(next);
  };

  const onResolveChange = (options: RichSelectOption[]) => {
    const next = produce(state, (draft: GeralConfig) => {
      draft.resolve = options.map(option => option.value);
    });
    onChange(next);
  };

  return (
    <Frame direction="column">
      <Section name="Entry" description="Entry point of your application">
        <Text value={entry} onChange={onEntryChange} />
      </Section>
      <Section name="Output" description="Configuration of output">
        <Label label="Path" description="Directory of the bundle">
          <Text value={path} onChange={onPathChange} />
        </Label>
        <Label label="File name" description="File name of the bundle">
          <Text value={fileName} onChange={onOutputChange} />
        </Label>
      </Section>
      <Section name="Resolve" description="Extensions to resolve">
        <RichSelect
          options={resolve.map(item => ({ label: item, value: item }))}
          onChange={onResolveChange}
        />
      </Section>
    </Frame>
  );
}
