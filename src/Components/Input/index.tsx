import React from "react";
import { ElemProps } from "Shared";
import { InputElem } from "./styles";

export interface InputProps extends ElemProps {
  className?: string;
  onChange?: (e: HTMLInputElement) => void;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <InputElem
      sizeType={props.size}
      colorType={props.color}
      className={props.className}
    />
  );
};

export default Input;
