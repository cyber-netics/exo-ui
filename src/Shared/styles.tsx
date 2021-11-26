import { css } from "styled-components";
import { colors } from "./theme";
import {
  primaryColors,
  secondaryColors,
  primarySpace,
  primaryFontSize,
  secondaryFontSize,
  primaryFontColors,
  secondaryFontColors,
  primaryShadow,
  secondaryShadow,
  primaryHeight,
  secondaryHeight,
  tertiaryHeight,
  primaryStatusColors,
  primaryHighlight,
} from "./dynamic";

/**
 *
 * Colors
 */
export const fontColorPrimary = css`
  color: ${primaryFontColors};
`;

export const fontColorSecondary = css`
  color: ${secondaryFontColors};
`;

export const backgroundPrimary = css`
  background-color: ${primaryColors};
`;

export const backgroundSecondary = css`
  background-color: ${secondaryColors};
`;

export const backgroundHighlight = css`
  background-color: ${primaryHighlight};
`;

/**
 *
 * Status
 */
export const statusPrimary = css`
  background-color: ${primaryStatusColors};
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

export const borderFocusError = css<{ error?: boolean }>`
  ${({ error }) => {
    return (
      error &&
      `
      border-color: ${colors.error} !important;
      &:focus {
        box-shadow: 0 0 0 2px ${colors.error1} !important;
      }
      `
    );
  }}
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

export const borderFocusPrimary = css`
  ${borderDefault};
  &:focus {
    ${borderPrimary};
    ${shadowFocusPrimary};
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

export const sizeTertiary = css`
  width: ${tertiaryHeight};
  height: ${tertiaryHeight};
`;

export const hightPrimary = css`
  min-height: ${primaryHeight};
`;

export const fontSizePrimary = css`
  font-size: ${primaryFontSize};
`;

export const fontSizeSecondary = css`
  font-size: ${secondaryFontSize};
`;

/**
 *
 * Spaceing
 */
export const paddingPrimary = css`
  padding: ${primarySpace};
`;

/**
 *
 * Dynamic Border
 */
export const borderRadius = css<{ radius?: number }>`
  border-radius: ${({ radius }) => {
    return radius ? `${radius}px` : "inherit";
  }} !important;
`;

export const disabled = css<{ disabled?: boolean }>`
  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed;
      opacity: 0.4;
  `}
`;
