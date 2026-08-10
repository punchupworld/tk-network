import {
  DEFAULT_BACKGROUND_FILL,
  DEFAULT_BACKGROUND_STROKE,
  BackgroundProps,
} from "./types";
import {
  BACKGROUND_COLOR_TRANSITION,
  SECTION_1_COLORS,
  getShapeFill,
  type BackgroundShapeId,
} from "./sectionFills";
import {
  FILL_MUTE_HEIGHT,
  FILL_MUTE_VIEWBOX,
  FILL_MUTE_WIDTH,
  FillMuteIllustration,
} from "./FillMuteIllustration";

export function Background({
  fill = DEFAULT_BACKGROUND_FILL,
  stroke = DEFAULT_BACKGROUND_STROKE,
  section = "section1",
  subtopic = null,
  className,
  ...props
}: BackgroundProps) {
  const shapeFill = (shapeId: BackgroundShapeId) =>
    getShapeFill(section, shapeId, fill, subtopic);
  const section1Stroke =
    section === "section1" && !subtopic ? SECTION_1_COLORS.stroke : stroke;
  const t01Stroke =
    section === "section1" && subtopic !== "subtopic2"
      ? SECTION_1_COLORS.stroke
      : stroke;
  const t02Stroke =
    section === "section1" && subtopic !== "subtopic1"
      ? SECTION_1_COLORS.stroke
      : stroke;

  return (
    <svg
      width={FILL_MUTE_WIDTH}
      height={FILL_MUTE_HEIGHT}
      viewBox={FILL_MUTE_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={
        className
          ? `background-illustration ${className}`
          : "background-illustration"
      }
      {...props}
    >
      <style>{`
        .background-illustration path,
        .background-illustration rect,
        .background-illustration circle,
        .background-illustration ellipse {
          transition: ${BACKGROUND_COLOR_TRANSITION};
        }
      `}</style>
      <FillMuteIllustration
        fill={fill}
        stroke={stroke}
        t01Stroke={t01Stroke}
        t02Stroke={t02Stroke}
        section1Stroke={section1Stroke}
        shapeFill={shapeFill}
      />
    </svg>
  );
}
