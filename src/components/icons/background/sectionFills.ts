export type BackgroundSection = "section1" | "section2" | "section3";
export type BackgroundSubtopic = "subtopic1" | "subtopic2";

/** Shape IDs match SVG element `id` values. */
export type BackgroundShapeId =
  // Section 1 background
  | "section1Base"
  | "section1Muted"
  | "section1Dark"
  | "section1Highlight"
  // Shared SVG shapes
  | "Vector 188"
  | "Vector 189"
  | "Rectangle 457"
  | "Rectangle 430"
  | "Rectangle 431"
  | "Ellipse 1"
  // Topic 1
  | "T01Yellow"
  | "T01Brown"
  | "T01Dark"
  | "T01Muted"
  | "T01Plant"
  | "T01Highlight"
  | "T01Skin"
  | "T01Blue"
  | "T01Red"
  // Topic 2
  | "T02Base"
  | "T02Brown"
  | "T02Dark"
  | "T02Highlight"
  | "T02Red"
  | "T02Skin"
  | "T02Yellow"
  | "T02Pink";

type FillOverrides = Partial<Record<BackgroundShapeId, string>>;

/**
 * Base colors for section 1.
 * Add section 2 / section 3 colors as designs land.
 */
export const SECTION_1_COLORS = {
  base: "#FFDAD9",
  muted: "#E5D6D6",
  dark: "#1D252C",
  highlight: "#FCFFF5",
  stroke: "#1D252C",
} as const;

/** Per-section fill overrides for background illustration shapes. */
export const BACKGROUND_SECTION_FILLS: Record<
  BackgroundSection,
  FillOverrides
> = {
  section1: {
    // Section background
    section1Base: SECTION_1_COLORS.base,
    section1Muted: SECTION_1_COLORS.muted,
    section1Dark: SECTION_1_COLORS.dark,
    section1Highlight: SECTION_1_COLORS.highlight,

    // Topic 1
    T01Yellow: "#FFE150",
    T01Brown: "#594A49",
    T01Dark: "#1D252C",
    T01Muted: "#CFBFBE",
    T01Plant: "#CFBFBE",
    T01Highlight: "#FCFFF5",
    T01Skin: "#FF9088",
    T01Blue: "#1552FF",
    T01Red: "#FF4C15",

    // Topic 2
    T02Base: "#FFDAD9",
    T02Brown: "#443A39",
    T02Dark: "#1D252C",
    T02Highlight: "#FCFFF5",
    T02Red: "#FF4C15",
    T02Skin: "#FF9088",
    T02Yellow: "#FFE150",
    T02Pink: "#FCC2BE",
  },
  section2: {},
  section3: {},
};

/**
 * Subtopic overrides take precedence over section fills.
 * Unlisted shapes keep their section color.
 */
export const BACKGROUND_SUBTOPIC_FILLS: Record<
  BackgroundSubtopic,
  FillOverrides
> = {
  subtopic1: {
    // Section background
    section1Base: "#FFFFFF",
    section1Muted: "#FFFFFF",
    section1Dark: "#FFFFFF",
    section1Highlight: "#FFFFFF",

    // Topic 1
    T01Yellow: "#FFE150",
    T01Brown: "#5A4B4B",
    T01Dark: "#1D252C",
    T01Muted: "#D5C4C5",
    T01Plant: "#D5C4C5",
    T01Highlight: "#FCFFF5",
    T01Skin: "#FF898B",
    T01Blue: "#1D55F5",
    T01Red: "#FF4B27",

    // Topic 2 is muted in subtopic 1
    T02Base: "#FFFFFF",
    T02Brown: "#FFFFFF",
    T02Dark: "#FFFFFF",
    T02Highlight: "#FFFFFF",
    T02Red: "#FFFFFF",
    T02Skin: "#FFFFFF",
    T02Yellow: "#FFFFFF",
    T02Pink: "#FFFFFF",
  },
  subtopic2: {
    // Section background
    section1Base: "#FFFFFF",
    section1Muted: "#FFFFFF",
    section1Dark: "#FFFFFF",
    section1Highlight: "#FFFFFF",

    // Topic 2 background detail
    "Ellipse 1": "#FCFFF5",

    // Topic 1 is muted in subtopic 2
    T01Yellow: "#FFFFFF",
    T01Brown: "#FFFFFF",
    T01Dark: "#FFFFFF",
    T01Muted: "#FFFFFF",
    T01Plant: "#FFFFFF",
    T01Highlight: "#FFFFFF",
    T01Skin: "#FFFFFF",
    T01Blue: "#FFFFFF",
    T01Red: "#FFFFFF",

    // Topic 2
    T02Base: "#FFDAD9",
    T02Brown: "#443A39",
    T02Dark: "#1D252C",
    T02Highlight: "#FCFFF5",
    T02Red: "#FF4C15",
    T02Skin: "#FF9088",
    T02Yellow: "#FFE150",
    T02Pink: "#FCC2BE",
  },
};

/**
 * Some topic shapes reuse the fill of a shared SVG shape.
 * Resolve these only when no direct section/subtopic override exists.
 */
const BACKGROUND_SHAPE_FALLBACKS: Partial<
  Record<BackgroundShapeId, BackgroundShapeId>
> = {
  // Topic 2 uses the shared pool background.
  T02Base: "Rectangle 457",
  T02Brown: "Rectangle 457",
  T02Dark: "Rectangle 457",
  T02Highlight: "Rectangle 457",
  T02Red: "Rectangle 457",
  T02Skin: "Rectangle 457",
  T02Yellow: "Rectangle 457",

  // Topic 1 yellow also uses the shared pool background.
  T01Yellow: "Rectangle 457",

  // Topic 1 uses the shared desk background.
  T01Brown: "Rectangle 430",
  T01Dark: "Rectangle 430",
  T01Muted: "Rectangle 430",
  T01Plant: "Rectangle 430",
  T01Highlight: "Rectangle 430",
  T01Skin: "Rectangle 430",
  T01Blue: "Rectangle 430",

  // Topic 1 red uses a separate shared shape.
  T01Red: "Rectangle 431",
};

export function getShapeFill(
  section: BackgroundSection,
  shapeId: BackgroundShapeId,
  fallback: string,
  subtopic?: BackgroundSubtopic | null,
): string {
  const subtopicFill = subtopic
    ? BACKGROUND_SUBTOPIC_FILLS[subtopic][shapeId]
    : undefined;
  const sectionFill = BACKGROUND_SECTION_FILLS[section][shapeId];
  const directFill = subtopicFill ?? sectionFill;

  if (directFill !== undefined) return directFill;

  const fallbackShapeId = BACKGROUND_SHAPE_FALLBACKS[shapeId];

  return fallbackShapeId
    ? getShapeFill(section, fallbackShapeId, fallback, subtopic)
    : fallback;
}

/** @deprecated Use getShapeFill instead. */
export function getSectionFill(
  section: BackgroundSection,
  shapeId: BackgroundShapeId,
  fallback: string,
): string {
  return getShapeFill(section, shapeId, fallback);
}

/** Shared fill/stroke transition when section changes */
export const BACKGROUND_COLOR_TRANSITION_MS = 300;
export const BACKGROUND_COLOR_TRANSITION = `fill ${BACKGROUND_COLOR_TRANSITION_MS}ms ease-in-out, stroke ${BACKGROUND_COLOR_TRANSITION_MS}ms ease-in-out`;
