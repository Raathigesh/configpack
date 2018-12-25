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
import { WebpackConfig } from "../..";

interface Props extends BlockProps<WebpackConfig> {}

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
    const next = produce(state, (draft: WebpackConfig) => {
      draft.entry = value;
    });
    onChange(next);
  };

  const onPathChange = (value: string) => {
    const next = produce(state, (draft: WebpackConfig) => {
      draft.output.path = value;
    });
    onChange(next);
  };

  const onOutputChange = (value: string) => {
    const next = produce(state, (draft: WebpackConfig) => {
      draft.output.fileName = value;
    });
    onChange(next);
  };

  const onResolveChange = (options: RichSelectOption[]) => {
    const next = produce(state, (draft: WebpackConfig) => {
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
          defaultValue={resolve.map(item => ({ label: item, value: item }))}
          options={resolve.map(item => ({ label: item, value: item }))}
          onChange={onResolveChange}
        />
      </Section>
    </Frame>
  );
}
