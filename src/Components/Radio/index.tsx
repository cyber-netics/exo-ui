import React, { useState } from "react";
import { ISizeTypes, IColorTypes, EventOnChange, EventTarget } from "Shared"; //Types
import { RadioWrapper, LabelText, Label, Mark, Input } from "./styles";

export interface RadioProps {
  name?: string;
  size?: ISizeTypes;
  color?: IColorTypes;
  disabled?: boolean;
  className?: string;
  onChange?: (e: EventTarget) => void;
  children?: JSX.Element | string;
}

const Radio: React.FC<RadioProps> = (props) => {
  const [focus, setFocus] = useState(false);

  const handleOnChange = (event: EventOnChange) => {
    setFocus(!focus);

    const { name, value } = event.currentTarget;
    if (props.onChange) props.onChange({ name, value });
  };

  return (
    <Label>
      <RadioWrapper>
        <Input
          type="radio"
          name={props.name}
          sizeType={props.size}
          colorType={props.color}
          onChange={handleOnChange}
        />
        <Mark className={props.className} sizeType={props.size}>
          {props.children && (
            <LabelText>
              <>{props.children}</>
            </LabelText>
          )}
        </Mark>
      </RadioWrapper>
    </Label>
  );
};

export default Radio;
