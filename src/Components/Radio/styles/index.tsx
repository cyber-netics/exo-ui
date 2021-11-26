import styled from "styled-components";
import { InnerProps } from "Shared"; // Types
import { label, input, checkmark, inputMarkSize, labelText } from "./elems";

import {
  borderPrimary,
  backgroundPrimary,
  sizeSecondary,
  sizeTertiary,
  disabled,
  borderHoverPrimary,
  fontSizePrimary,
} from "Shared";

export const RadioWrapper = styled.div`
  display: inline-block;
`;

export const Label = styled.label<{ disabled?: boolean }>`
  ${label};
  ${disabled};
`;

export const LabelText = styled.div`
  ${labelText};
`;

export const Mark = styled.span<InnerProps>`
  ${checkmark};
  ${sizeSecondary};
  ${fontSizePrimary};
  ${borderHoverPrimary};
`;

export const Input = styled.input<InnerProps>`
  ${input};

  &:checked + ${Mark} {
    ${borderPrimary};

    &::after {
      ${inputMarkSize};
      ${sizeTertiary};
      ${backgroundPrimary};
    }
  }
`;
