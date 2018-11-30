import React from "react";
import styled from "styled-components";
import { Select } from "@smooth-ui/core-sc";

const Container = styled.div``;

interface Props {
  options: { label: string; value: string }[];
  onChange?(value: string);
}

export default function SingleSelect({ options, onChange = () => {} }: Props) {
  return (
    <Container>
      <Select size="sm" onChange={event => onChange(event.target.value)}>
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Select>
    </Container>
  );
}
