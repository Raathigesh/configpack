import React from "react";
import { Checkbox } from "@smooth-ui/core-sc";

interface Props {
  id?: string;
  name?: string;
  value: string;
}

export default function Check({ id, name, value }: Props) {
  return <Checkbox size="sm" id={id} name={name} value={value} />;
}
