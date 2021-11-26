import styled from "styled-components";
import { InnerProps, InnerSizeTypes } from "Shared";
import { select, wrapper, arrow, caret } from "./elem";
import {
  hightPrimary,
  paddingPrimary,
  borderHoverPrimary,
  borderFocusPrimary,
  fontSizePrimary,
} from "Shared";

export const Wrapper = styled.div`
  ${wrapper};
`;

export const Arrow = styled.img`
  ${arrow};
`;

export const Caret = styled.div`
  ${caret};
`;

export const SelectElem = styled.select<InnerProps>`
  ${select};
  ${hightPrimary};
  ${paddingPrimary};
  ${borderHoverPrimary};
  ${borderFocusPrimary};
`;

export const OptionElem = styled.option<InnerSizeTypes>`
  ${fontSizePrimary};
`;

export const GroupElem = styled.optgroup``;
