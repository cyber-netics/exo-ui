import styled from "styled-components";
import { InnerProps, InnerColorTypes } from "Shared"; //Types
import { label, wrapper, checkmark, input, labelText } from "./elems";
import {
  sizeSecondary,
  borderPrimary,
  backgroundPrimary,
  borderHoverPrimary,
  fontSizePrimary,
  backgroundSecondary,
} from "Shared";

interface InnerElemProps extends InnerProps {
  checked: boolean;
}

export const Label = styled.label`
  ${label};
`;

export const LabelText = styled.div`
  ${labelText};
`;

export const Wrapper = styled.span`
  ${wrapper};
`;

export const Mark = styled.span<InnerElemProps>`
  ${checkmark};
  ${sizeSecondary};
  ${fontSizePrimary};
  ${borderHoverPrimary};
`;

export const Input = styled.input<InnerColorTypes>`
  ${input};
  &:checked + ${Mark} {
    ${borderPrimary};
    ${backgroundPrimary};

    &:hover {
      ${backgroundSecondary};
    }
  }
`;
