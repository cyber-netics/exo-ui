import styled, { css } from "styled-components";
import { InnerStatusColorTypes, InnerSizeTypes } from "Shared"; //Types
import { statusPrimary, sizeSecondary, fontSizeSecondary } from "Shared";
import { wrapper, badgeBase, overflow, circle, dot } from "./elem";

export type IShapeTypes = "dot" | "circle" | "overflow";
export type IShape = { shape?: IShapeTypes };
type InnerProps = InnerStatusColorTypes & IShape & InnerSizeTypes;

const dynamicShape = css<InnerProps>`
  ${({ shape = "dot" }) => {
    if (shape === "dot") return dot;
    if (shape === "circle") return circle;
    if (shape === "overflow") return overflow;
  }};
`;

export const BadgeElem = styled.span<InnerProps>`
  ${badgeBase};
  ${dynamicShape};
  ${statusPrimary};
  ${fontSizeSecondary};
`;

export const Wrapper = styled.span<InnerSizeTypes>`
  ${wrapper};
  ${sizeSecondary};
`;
