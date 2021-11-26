import React from "react";
import { ElemProps } from "Shared";
import { Contaienr, Wrapper, ThumbnailImage } from "./styles";

export interface ThumbnailProps extends ElemProps {
  src: string;
  alt: string;
  className?: string;
  children?: JSX.Element;
}

const Thumbnail: React.FunctionComponent<ThumbnailProps> = (props) => (
  <div>
    <Contaienr className={props.className} sizeType={props.size}>
      <Wrapper>
        <ThumbnailImage src={props.src} alt={props.alt} />
      </Wrapper>
    </Contaienr>
  </div>
);

export default Thumbnail;
