import React from "react";
import { Input } from "@smooth-ui/core-sc";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function Text({ value, onChange }: Props) {
  return (
    <Input
      control
      size="sm"
      value={value}
      onChange={(e: any) => onChange(e.target.value)}
    />
  );
}
