import type { BackgroundShapeId } from "./sectionFills";

export type FillMuteIllustrationProps = {
  fill: string;
  stroke: string;
  t01Stroke: string;
  t02Stroke: string;
  section1Stroke: string;
  shapeFill: (shapeId: BackgroundShapeId) => string;
};
