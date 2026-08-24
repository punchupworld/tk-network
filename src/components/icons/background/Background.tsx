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
  //isSection
  const isSection1Palette =
    section === "section1" || section === "outro-section";
  const isSection2Palette =
    section === "section2" || section === "outro-section";
  const isSection3Palette =
    section === "section3" || section === "outro-section";
  const isSection4Palette =
    section === "section4" || section === "outro-section";
  const isSection5Palette =
    section === "section5" || section === "outro-section";
  const isSection6Palette =
    section === "section6" || section === "outro-section";

  //section 1
  const section1Stroke =
    isSection1Palette && !subtopic ? SECTION_1_COLORS.newStroke : stroke;
  const section1OldStroke =
    isSection1Palette && !subtopic ? SECTION_1_COLORS.stroke : stroke;
  const t01Stroke =
    isSection1Palette && subtopic !== "subtopic2"
      ? SECTION_1_COLORS.stroke
      : stroke;
  const t02Stroke =
    isSection1Palette && subtopic !== "subtopic1"
      ? SECTION_1_COLORS.stroke
      : stroke;

  //section 2
  const section2Stroke =
    isSection2Palette && !subtopic ? SECTION_1_COLORS.newStroke : stroke;
  const section2OldStroke =
    isSection2Palette && !subtopic ? SECTION_1_COLORS.stroke : stroke;
  const t03Stroke =
    isSection2Palette && subtopic !== "subtopic4"
      ? SECTION_1_COLORS.stroke
      : stroke;
  const t04Stroke =
    isSection2Palette && subtopic !== "subtopic3"
      ? SECTION_1_COLORS.stroke
      : stroke;

  //section 3
  const section3Stroke =
    isSection3Palette && !subtopic ? SECTION_1_COLORS.newStroke : stroke;
  const section3OldStroke =
    isSection3Palette && !subtopic ? SECTION_1_COLORS.stroke : stroke;
  const t05Stroke =
    isSection3Palette && subtopic !== "subtopic7" && subtopic !== "subtopic6"
      ? SECTION_1_COLORS.stroke
      : stroke;
  const t06Stroke =
    isSection3Palette && subtopic !== "subtopic5" && subtopic !== "subtopic7"
      ? SECTION_1_COLORS.stroke
      : stroke;
  const t07Stroke =
    isSection3Palette && subtopic !== "subtopic6" && subtopic !== "subtopic5"
      ? SECTION_1_COLORS.stroke
      : stroke;

  //section 4
  const section4Stroke =
    isSection4Palette && !subtopic ? SECTION_1_COLORS.newStroke : stroke;
  const section4OldStroke =
    isSection4Palette && !subtopic ? SECTION_1_COLORS.stroke : stroke;
  const t08Stroke =
    isSection4Palette && subtopic !== "subtopic9"
      ? SECTION_1_COLORS.stroke
      : stroke;

  //section 5
  const section5Stroke =
    isSection5Palette && !subtopic ? SECTION_1_COLORS.newStroke : stroke;
  const section5OldStroke =
    isSection5Palette && !subtopic ? SECTION_1_COLORS.stroke : stroke;
  const t09Stroke =
    isSection5Palette && subtopic !== "subtopic10"
      ? SECTION_1_COLORS.stroke
      : stroke;
  const t10Stroke =
    isSection5Palette && subtopic !== "subtopic9"
      ? SECTION_1_COLORS.stroke
      : stroke;

  //section 6
  const section6Stroke =
    isSection6Palette && !subtopic ? SECTION_1_COLORS.newStroke : stroke;
  const section6OldStroke =
    isSection6Palette && !subtopic ? SECTION_1_COLORS.stroke : stroke;
  const t11Stroke =
    isSection6Palette && subtopic !== "subtopic12" && subtopic !== "subtopic13"
      ? SECTION_1_COLORS.stroke
      : stroke;
  const t12Stroke =
    isSection6Palette && subtopic !== "subtopic13" && subtopic !== "subtopic11"
      ? SECTION_1_COLORS.stroke
      : stroke;
  const t13Stroke =
    isSection6Palette && subtopic !== "subtopic12" && subtopic !== "subtopic11"
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
        t03Stroke={t03Stroke}
        t04Stroke={t04Stroke}
        t05Stroke={t05Stroke}
        t06Stroke={t06Stroke}
        t07Stroke={t07Stroke}
        t08Stroke={t08Stroke}
        t09Stroke={t09Stroke}
        t10Stroke={t10Stroke}
        t11Stroke={t11Stroke}
        t12Stroke={t12Stroke}
        t13Stroke={t13Stroke}
        section6Stroke={section6Stroke}
        section1Stroke={section1Stroke}
        section2Stroke={section2Stroke}
        section3Stroke={section3Stroke}
        section4Stroke={section4Stroke}
        section5Stroke={section5Stroke}
        shapeFill={shapeFill}
        section1OldStroke={section1OldStroke}
        section2OldStroke={section2OldStroke}
        section3OldStroke={section3OldStroke}
        section4OldStroke={section4OldStroke}
        section5OldStroke={section5OldStroke}
        section6OldStroke={section6OldStroke}
      />
    </svg>
  );
}
