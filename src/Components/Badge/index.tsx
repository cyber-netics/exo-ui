import React from "react";
import { ElemColorAll, ElemSize } from "Shared/types";
import { Wrapper, BadgeElem } from "./styles";

export interface BadgeProps extends ElemColorAll, ElemSize {
  children?: JSX.Element;
}

const Badge: React.FC<BadgeProps> = (props) => {
  return (
    <div>
      <Wrapper id="badge-component" sizeType={props.size}>
        <BadgeElem id="badge-element" colorType={props.color} />
      </Wrapper>
    </div>
  );
};

export default Badge;
