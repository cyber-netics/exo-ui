import { css } from "styled-components";
import { InnerColorTypes } from "Shared";
import { borderRadius } from "Shared";
import {
  fadeEffect,
  waveEffectPrimary,
  waveEffectDark,
  radioWaveEffectPrimary,
} from "Components/Animation/common";

const base = css`
  position: absolute;
  inset: 0;
  display: block;
  opacity: 1;
  content: "";
`;

const waveAnim = css<{ colorType?: InnerColorTypes }>`
  ${({ colorType }) => {
    return colorType === "primary" ? waveEffectPrimary : waveEffectDark;
  }}
`;

const animation = css`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation: ${fadeEffect} 1.5s cubic-bezier(0.08, 0.82, 0.17, 1),
    ${waveAnim} 1s cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const waveAnimation = css`
  &:after {
    ${base};
    ${animation};
    ${borderRadius};
  }
`;

export const radioWaveAnim = css`
  animation: ${radioWaveEffectPrimary} 0.3s ease-in-out;
  width: 13px;
  height: 13px;
`;
