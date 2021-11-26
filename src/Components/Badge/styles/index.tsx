import styled, { css } from "styled-components";
import { InnerColorAll, InnerSize } from "Shared/types";
import { backgroundAll, sizeSecondary } from "Shared/styles";

interface BadgeElemProps extends InnerColorAll {
  shape?: "dot" | "circle" | "overflow";
}

export const Wrapper = styled.span<InnerSize>`
  display: inline-block;
  position: relative;
  ${sizeSecondary};
`;

const baseStyle = css`
  position: absolute;
  white-space: nowrap;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 0 0 1px #fff;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 50%;
`;

const overflow = css`
  padding: 0 8px;
  border-radius: 20px;
`;

const dot = css`
  width: calc(100% - 29%);
  height: calc(100% - 30%);
`;

const dynamicShape = css<BadgeElemProps>`
  ${({ shape = "dot" }) => {
    if (shape === "dot") return dot;
    if (shape === "overflow") return overflow;
  }};
`;

export const BadgeElem = styled.span<BadgeElemProps>`
  ${baseStyle};
  ${dynamicShape};
  ${backgroundAll};
`;
