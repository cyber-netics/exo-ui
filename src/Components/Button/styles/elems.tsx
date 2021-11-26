import { css } from "styled-components";
import {
  fontColorPrimary,
  hightPrimary,
  paddingPrimary,
  fontSizePrimary,
  backgroundPrimary,
  backgroundSecondary,
} from "Shared";

export const base = css`
  border-width: 0;
  border-radius: 2px;
  position: relative !important;
  transition: all 0.3s;
`;

export const dynamicStyle = css`
  ${hightPrimary};
  ${paddingPrimary};
  ${fontSizePrimary};
  ${fontColorPrimary};
  ${backgroundPrimary};

  &:hover {
    ${backgroundSecondary};
  }
`;
