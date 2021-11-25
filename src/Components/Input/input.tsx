import React from "react";
import { ElemProps } from "Shared";
import { InputElem } from "./styles";

export type EventOnChange = React.FormEvent<HTMLInputElement>;
export type EventTarget = { value: string; name: string };

export interface InputProps extends ElemProps {
  name?: string;
  value?: string;
  error?: boolean;
  className?: string;
  onBlue?: () => void;
  onChange?: (e: EventTarget) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const handleOnChange = (event: EventOnChange) => {
    const { value, name } = event.currentTarget;
    if (props.onChange) props.onChange({ value, name });
  };

  return (
    <InputElem
      value={props.value}
      error={props.error}
      onBlur={props.onBlue}
      sizeType={props.size}
      colorType={props.color}
      onChange={handleOnChange}
      className={props.className}
    />
  );
};
