import styled, { css } from "styled-components";
import { EventOnChange } from "Shared"; //Types
import { InnerProps } from "Shared";
import {
  hightPrimary,
  borderFocusError,
  borderHoverPrimary,
  borderFocusPrimary,
  // shadowFocusPrimary,
} from "Shared";

export interface InputElemProps extends InnerProps {
  error?: boolean;
  onChange?: (e: EventOnChange) => void;
}

const base = css`
  outline: 0;
  position: relative;
  background-image: none;
  font-variant: tabular-nums;
  font-feature-settings: "tnum";

  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  list-style: none;
  box-sizing: border-box;
  width: 100%;
  padding: 13.5px;
`;

const dynamicStyle = css`
  ${hightPrimary};
  ${borderHoverPrimary};
  ${borderFocusPrimary};
  ${borderFocusError};
`;

export const InputElem = styled.input<InputElemProps>`
  ${base};
  ${dynamicStyle};
`;
