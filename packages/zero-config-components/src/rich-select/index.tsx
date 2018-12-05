import React from "react";
import Select from "react-select";

export interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  onChange: (value: Option[]) => void;
}

export default function RichSelect({ options = [], onChange }: Props) {
  return (
    <Select
      styles={{
        control: (base: any) => ({
          ...base,
          minHeight: "27px",
          height: "27px"
        }),
        placeholder: (base: any) => ({
          ...base,
          fontSize: "12px"
        })
      }}
      isMulti
      options={options}
      onChange={(value: Option[]) => onChange(value)}
    />
  );
}
