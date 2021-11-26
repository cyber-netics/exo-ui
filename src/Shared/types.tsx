/**
 *
 * Events
 */
export type EventOnChange = React.FormEvent<HTMLInputElement>;
export type EventTarget = { value: string; name: string };

/**
 *
 */
export type IColorTypes = "primary" | "dark";
export type ISizeTypes = "small" | "medium" | "large";

/**
 *
 */
export interface ElemSizeTypes {
  size?: ISizeTypes;
}

export interface ElemColorTypes {
  color?: IColorTypes;
}

/**
 *
 */
export interface InnerSizeTypes {
  sizeType?: ISizeTypes;
}

export interface InnerColorTypes {
  colorType?: IColorTypes;
}

/**
 *
 */
export type ElemProps = ElemColorTypes & ElemSizeTypes;
export type InnerProps = InnerColorTypes & InnerSizeTypes;
