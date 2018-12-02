import React from "react";
import Select from "react-select";

interface Props {
  options: {
    label: string;
    value: string;
  }[];
}

export default function RichSelect({ options = [] }: Props) {
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
    />
  );
}
