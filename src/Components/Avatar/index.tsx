import React from "react";
import { ElemProps } from "Shared";
import { Wrapper, BaseElem } from "./styles";

export interface AvatarProps extends ElemProps {
  className?: string;
  children?: JSX.Element;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <Wrapper>
      <BaseElem className={props.className} sizeType={props.size} />
    </Wrapper>
  );
};

export default Avatar;
