import { css } from "styled-components";
import {
  fontColor,
  hightPrimary,
  paddingPrimary,
  fontSizePrimary,
  backgroundPrimary,
  backgroundSecondary,
  borderFocusPrimary,
} from "Shared";

export const base = css`
  border-width: 0;
  border-radius: 2px;
  position: relative !important;
  transition: all 0.3s;
`;

export const dynamicStyle = css`
  ${fontColor};
  ${hightPrimary};
  ${paddingPrimary};
  ${fontSizePrimary};
  ${backgroundPrimary};

  &:hover {
    ${borderFocusPrimary};
    ${backgroundSecondary};
  }
`;
