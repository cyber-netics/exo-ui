import styled from "styled-components";
import { InnerColorTypes } from "Shared"; //Types
import { borderDefault, backgroundHighlight } from "Shared";
import { container, header, body, divider } from "./elem";
import {
  IReady,
  IActive,
  toggleAnim,
  dynamicHight,
  dynamicDivider,
  dynamicPadding,
} from "./dynamic";

export const Container = styled.div`
  ${container};
`;

export const Header = styled.div<InnerColorTypes>`
  ${header};
  ${borderDefault};
  ${backgroundHighlight};
`;

export const Divider = styled.div`
  ${divider};
  ${borderDefault};
  ${dynamicDivider};
`;

export const Body = styled.div<InnerColorTypes & IActive & IReady>`
  ${body};
  ${toggleAnim};
  ${dynamicHight};
  ${borderDefault};
  ${dynamicPadding};
  ${backgroundHighlight};
`;
