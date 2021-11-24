import React from "react";
import { ElemProps } from "Shared/types";
import { Wrapper, BaseElem } from "./styles";

const Avatar: React.FC<ElemProps> = (props) => {
  return (
    <Wrapper>
      <BaseElem sizeType={props.size} />
    </Wrapper>
  );
};

export default Avatar;
