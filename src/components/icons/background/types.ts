import { SVGProps } from "react";
import type { BackgroundSection, BackgroundSubtopic } from "./sectionFills";

export type BackgroundProps = SVGProps<SVGSVGElement> & {
  fill?: string;
  stroke?: string;
  section?: BackgroundSection;
  subtopic?: BackgroundSubtopic | null;
};

export const DEFAULT_BACKGROUND_FILL = "#FFFFFF";
export const DEFAULT_BACKGROUND_STROKE = "#FEDFCA";
