import styled, { css } from "styled-components";
import { InnerProps, InnerSizeTypes } from "Shared";
import { dynamicStyle, base } from "./elems";
import { waveAnimation } from "Components/Animation/waveEffect";
import { Loading } from "Components/Animation/Loading";

interface ButtonElemProps extends InnerProps {
  focus?: boolean;
}

const animation = css<{ focus?: boolean }>`
  ${({ focus }) => (focus ? waveAnimation : null)};
`;

export const LoadingAnim = styled(Loading)<InnerSizeTypes>`
  margin-left: 8px;
`;

export const ButtonElem = styled.button<ButtonElemProps>`
  ${base};
  ${animation};
  ${dynamicStyle};
`;
