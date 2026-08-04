import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  fill?: string;
  stroke?: string;
};

export const DEFAULT_ICON_FILL = "#F5333F";
export const DEFAULT_ICON_STROKE = "white";
