import { css } from "styled-components";
import { colors } from "./theme";
import {
  primaryColors,
  secondaryColors,
  primarySpace,
  primaryFontSize,
  primaryFontColors,
  primaryShadow,
  secondaryShadow,
  primaryHeight,
  secondaryHeight,
} from "./dynamic";

/**
 *
 * Colors
 */
export const fontColor = css`
  color: ${primaryFontColors};
`;

export const backgroundPrimary = css`
  background-color: ${primaryColors};
`;

export const backgroundSecondary = css`
  background-color: ${secondaryColors};
`;

// Border
export const borderPrimary = css`
  border-color: ${primaryColors};
`;

export const borderDefault = css`
  border-color: ${colors.highlight};
`;

export const borderHoverPrimary = css`
  ${borderDefault};
  &:hover {
    ${borderPrimary};
  }
`;

export const borderFocusPrimary = css`
  ${borderDefault};
  &:focus {
    ${borderPrimary};
  }
`;

// Shadow
export const shadowPrimary = css`
  box-shadow: 0 0 0 2px ${primaryShadow};
`;

export const shadowSecondary = css`
  box-shadow: 0 0 0 ${secondaryShadow};
  box-shadow: 0 0 0 6px ${secondaryShadow};
`;

export const shadowFocusPrimary = css`
  &:focus {
    ${shadowPrimary};
  }
`;

/**
 *
 * Sizes
 */
export const sizePrimary = css`
  width: ${primaryHeight};
  height: ${primaryHeight};
`;

export const sizeSecondary = css`
  width: ${secondaryHeight};
  height: ${secondaryHeight};
`;

export const hightPrimary = css`
  min-height: ${primaryHeight};
`;

export const fontSizePrimary = css`
  font-size: ${primaryFontSize};
`;

/**
 *
 * Spaceing
 */
export const paddingPrimary = css`
  padding: ${primarySpace};
`;
