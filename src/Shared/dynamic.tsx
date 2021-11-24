import { theme } from "./theme";
import { InnerColorTypes, InnerSizeTypes } from "./types";

/**
 *
 * Colors
 */
export const primaryColors = ({ colorType = "primary" }: InnerColorTypes) => {
  return theme.colors.primary[colorType];
};

export const secondaryColors = ({ colorType = "primary" }: InnerColorTypes) => {
  return theme.colors.secondary[colorType];
};

export const primaryFontColors = ({
  colorType = "primary",
}: InnerColorTypes) => {
  return theme.colors.font.primary[colorType];
};

export const primaryShadow = ({ colorType = "primary" }: InnerColorTypes) => {
  return theme.colors.shadow.primary[colorType];
};

export const secondaryShadow = ({ colorType = "primary" }: InnerColorTypes) => {
  return theme.colors.shadow.secondary[colorType];
};

/**
 *
 * Sizes
 */
export const primaryHeight = ({ sizeType = "small" }: InnerSizeTypes) => {
  return theme.sizes.primary[sizeType];
};

export const secondaryHeight = ({ sizeType = "small" }: InnerSizeTypes) => {
  return theme.sizes.secondary[sizeType];
};

export const primaryFontSize = ({ sizeType = "small" }: InnerSizeTypes) => {
  return theme.font.primary[sizeType];
};

/**
 *
 * Spacing
 */
export const primarySpace = ({ sizeType = "small" }: InnerSizeTypes) => {
  return theme.spacing.primary[sizeType];
};
