import React from "react";
import Select from "react-select";

export interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  defaultValue: Option[];
  onChange: (value: Option[]) => void;
}

export default function RichSelect({
  options = [],
  defaultValue,
  onChange
}: Props) {
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
        }),
        option: (styles: any) => {
          return {
            ...styles,
            padding: "5px",
            fontSize: "13px"
          };
        },
        multiValue: (styles: any) => {
          return {
            ...styles,
            fontSize: "13px"
          };
        }
      }}
      isMulti
      options={options}
      defaultValue={defaultValue}
      onChange={(value: Option[]) => onChange(value)}
    />
  );
}
