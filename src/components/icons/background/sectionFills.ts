export type BackgroundSection =
  | "section1"
  | "section2"
  | "section3"
  | "section4"
  | "section5"
  | "section6"
  | "intro-section"
  | "outro-section";

export type BackgroundSubtopic =
  | "subtopic1"
  | "subtopic2"
  | "subtopic3"
  | "subtopic4"
  | "subtopic5"
  | "subtopic6"
  | "subtopic7"
  | "subtopic8"
  | "subtopic9"
  | "subtopic10"
  | "subtopic11"
  | "subtopic12"
  | "subtopic13";

/** Shape IDs match SVG element `id` values. */
export type BackgroundShapeId =
  // Section 1 background
  | "section1Base"
  | "section1Muted"
  | "section1Dark"
  | "section1Highlight"
  | "section1Orange"
  | "section1Grey"
  | "section1Red"
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
  | "T01Orange"
  | "T01Gray"
  // Topic 2
  | "T02Base"
  | "T02Brown"
  | "T02Dark"
  | "T02Highlight"
  | "T02Red"
  | "T02Skin"
  | "T02Yellow"
  | "T02Pink"
  // Section 2
  | "S02Base"
  // Topic 3
  | "T03Base"
  | "T03Highlight"
  // Topic 4
  | "T04Base"
  | "T04Brown"
  | "T04Dark"
  | "T04Highlight"
  | "T04Red"
  | "T04Skin"
  | "T04Yellow"
  | "T04Pink"
  // Section 3
  | "section3Base"
  | "section3Dark"
  | "section3Highlight"
  | "section3Yellow"
  | "section3Pink"
  // Topic 5
  | "T05Highlight"
  | "T05Pink"
  // Topic 6
  | "T06Highlight"
  | "T06Skin"
  | "T06Blue"
  | "T06Red"
  // Topic 7
  | "T07Highlight"
  | "T07Skin"
  | "T07Blue"
  | "T07Yellow"
  | "T07Base"
  | "T07Muted"
  | "T07Brown"
  // Section 4
  | "section4Pink"
  // Topic 8
  | "T08Muted"
  | "T08Highlight"
  // Section 5
  | "section5Pink"
  | "section5Muted"
  | "section5Red"
  // Topic 9
  | "T09Base"
  | "T09Highlight"
  | "T09Grey"
  | "T09Skin"
  // Topic 10
  | "T10Yellow"
  | "T10Highlight"
  | "T10Grey"
  | "T10Skin"
  | "T10Pink"
  | "T10Brown"
  // Section 6
  | "section6Base"
  | "section6Muted"
  | "section6Highlight"
  | "section6Pink"
  | "section6Grey"
  | "section6Red"
  | "section6Blue"
  | "section6Orange"
  | "section6Yellow"
  // Topic 11
  | "T11Base"
  | "T11Highlight"
  | "T11Grey"
  | "T11Skin"
  | "T11Red"
  // Topic 12
  | "T12Highlight"
  | "T12Red"
  | "T12Pink"
  // Topic 13
  | "T13Base"
  | "T13Highlight"
  | "T13Grey"
  | "T13Skin"
  | "T13Red"
  | "T13Yellow"
  | "T13Mauve"
  | "T13Brown"
  | "T13Blue";

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
  newStroke: "#FFBAA1",
} as const;

/** Per-section fill overrides for background illustration shapes. */
export const BACKGROUND_SECTION_FILLS: Record<
  BackgroundSection,
  FillOverrides
> = {
  "intro-section": {
    section1Base: "#FFFFFF",
    section1Muted: "#FFFFFF",
    section1Dark: "#FFFFFF",
    section1Highlight: "#FFFFFF",
    section1Orange: "#FFFFFF",
    section1Grey: "#FFFFFF",
    section1Red: "#FFFFFF",

    // Topic 1
    T01Yellow: "#FFFFFF",
    T01Brown: "#FFFFFF",
    T01Dark: "#FFFFFF",
    T01Muted: "#FFFFFF",
    T01Plant: "#FFFFFF",
    T01Highlight: "#FFFFFF",
    T01Skin: "#FFFFFF",
    T01Blue: "#FFFFFF",
    T01Red: "#FFFFFF",
    T01Orange: "#FFFFFF",
    T01Gray: "#FFFFFF",

    // Topic 2
    T02Base: "#FFFFFF",
    T02Brown: "#FFFFFF",
    T02Dark: "#FFFFFF",
    T02Highlight: "#FFFFFF",
    T02Red: "#FFFFFF",
    T02Skin: "#FFFFFF",
    T02Yellow: "#FFFFFF",
    T02Pink: "#FFFFFF",

    // Section 2
    S02Base: "#FFFFFF",

    // Topic 3
    T03Base: "#FFFFFF",
    T03Highlight: "#FFFFFF",

    // Topic 4
    T04Base: "#FFFFFF",
    T04Brown: "#FFFFFF",
    T04Dark: "#FFFFFF",
    T04Highlight: "#FFFFFF",
    T04Red: "#FFFFFF",
    T04Skin: "#FFFFFF",
    T04Yellow: "#FFFFFF",
    T04Pink: "#FFFFFF",

    // Section 3
    section3Base: "#FFFFFF",
    section3Dark: "#FFFFFF",
    section3Highlight: "#FFFFFF",
    section3Yellow: "#FFFFFF",
    section3Pink: "#FFFFFF",

    // Topic 5
    T05Highlight: "#FFFFFF",
    T05Pink: "#FFFFFF",

    // Topic 6
    T06Highlight: "#FFFFFF",
    T06Skin: "#FFFFFF",
    T06Blue: "#FFFFFF",
    T06Red: "#FFFFFF",

    // Topic 7
    T07Highlight: "#FFFFFF",
    T07Skin: "#FFFFFF",
    T07Blue: "#FFFFFF",
    T07Yellow: "#FFFFFF",
    T07Base: "#FFFFFF",
    T07Muted: "#FFFFFF",
    T07Brown: "#FFFFFF",

    // Section 4
    section4Pink: "#FFFFFF",

    // Topic 8
    T08Muted: "#FFFFFF",
    T08Highlight: "#FFFFFF",

    // Section 5
    section5Pink: "#FFFFFF",
    section5Muted: "#FFFFFF",
    section5Red: "#FFFFFF",

    // Topic 9
    T09Base: "#FFFFFF",
    T09Highlight: "#FFFFFF",
    T09Grey: "#FFFFFF",
    T09Skin: "#FFFFFF",

    // Topic 10
    T10Yellow: "#FFFFFF",
    T10Highlight: "#FFFFFF",
    T10Grey: "#FFFFFF",
    T10Skin: "#FFFFFF",
    T10Pink: "#FFFFFF",
    T10Brown: "#FFFFFF",

    // Section 6
    section6Base: "#FFFFFF",
    section6Muted: "#FFFFFF",
    section6Highlight: "#FFFFFF",
    section6Pink: "#FFFFFF",
    section6Grey: "#FFFFFF",
    section6Red: "#FFFFFF",
    section6Blue: "#FFFFFF",
    section6Orange: "#FFFFFF",
    section6Yellow: "#FFFFFF",

    // Topic 11
    T11Base: "#FFFFFF",
    T11Highlight: "#FFFFFF",
    T11Grey: "#FFFFFF",
    T11Skin: "#FFFFFF",
    T11Red: "#FFFFFF",

    // Topic 12
    T12Highlight: "#FFFFFF",
    T12Red: "#FFFFFF",
    T12Pink: "#FFFFFF",

    // Topic 13
    T13Base: "#FFFFFF",
    T13Highlight: "#FFFFFF",
    T13Grey: "#FFFFFF",
    T13Skin: "#FFFFFF",
    T13Red: "#FFFFFF",
    T13Yellow: "#FFFFFF",
    T13Mauve: "#FFFFFF",
    T13Brown: "#FFFFFF",
    T13Blue: "#FFFFFF",
  },
  section1: {
    // Section background
    section1Base: SECTION_1_COLORS.base,
    section1Muted: SECTION_1_COLORS.muted,
    section1Dark: SECTION_1_COLORS.dark,
    section1Highlight: SECTION_1_COLORS.highlight,
    section1Orange: "#FFBAA1",
    section1Grey: "#CFBFBE",
    section1Red: "#FF4C15",

    // Topic 1
    T01Yellow: "#FFE150",
    T01Brown: "#594A49",
    T01Dark: "#1D252C",
    T01Muted: "#CFBFBE",
    T01Plant: "#E5D6D6",
    T01Highlight: "#FCFFF5",
    T01Skin: "#FF9088",
    T01Blue: "#1552FF",
    T01Red: "#FF4C15",
    T01Orange: "#FFBAA1",
    T01Gray: "#E5D6D6",

    // Topic 2
    T02Base: "#FFDAD9",
    T02Brown: "#443A39",
    T02Dark: "#1D252C",
    T02Highlight: "#FCFFF5",
    T02Red: "#FF4C15",
    T02Skin: "#FF9088",
    T02Yellow: "#FFE150",
    T02Pink: "#FCC2BE",

    // Section 2
    S02Base: "#FFFFFF",
  },
  section2: {
    // Section 2
    S02Base: "#FCFFF5",

    // Topic 3
    T03Base: "#E5D6D6",
    T03Highlight: "#FCFFF5",

    // Topic 4
    T04Base: "#E5D6D6",
    T04Brown: "#443A39",
    T04Dark: "#1D252C",
    T04Highlight: "#FCFFF5",
    T04Red: "#FF4C15",
    T04Skin: "#FF9088",
    T04Yellow: "#FFE150",
    T04Pink: "#FCC2BE",
  },
  section3: {
    // Section 3
    section3Base: "#E5D6D6",
    section3Dark: SECTION_1_COLORS.dark,
    section3Highlight: "#FCFFF5",
    section3Yellow: "#FFE150",
    section3Pink: "#FFDAD9",

    // Topic 5
    T05Highlight: "#FCFFF5",
    T05Pink: "#FFB1A7",

    // Topic 6
    T06Highlight: "#FCFFF5",
    T06Skin: "#FF9088",
    T06Blue: "#1552FF",
    T06Red: "#FF4C15",

    // Topic 7
    T07Highlight: "#FCFFF5",
    T07Skin: "#FF9088",
    T07Blue: "#1552FF",
    T07Yellow: "#FFE150",
    T07Base: "#E5D6D6",
    T07Muted: "#CFBFBE",
    T07Brown: "#594A49",
  },
  section4: {
    // Section 4
    section4Pink: "#FFB1A7",

    // Topic 8
    T08Muted: "#CFBFBE",
    T08Highlight: "#FCFFF5",
  },
  section5: {
    // Section 5
    section5Pink: "#FFDAD9",
    section5Muted: "#CFBFBE",
    section5Red: "#FF4C15",

    // Topic 9
    T09Base: "#E5D6D6",
    T09Highlight: "#FCFFF5",
    T09Grey: "#6B6262",
    T09Skin: "#FF9088",

    // Topic 10
    T10Yellow: "#FFE150",
    T10Highlight: "#FCFFF5",
    T10Grey: "#6B6262",
    T10Skin: "#FF9088",
    T10Pink: "#FFB1A7",
    T10Brown: "#594A49",
  },
  section6: {
    // Section 6
    section6Base: SECTION_1_COLORS.base,
    section6Muted: SECTION_1_COLORS.muted,
    section6Highlight: SECTION_1_COLORS.highlight,
    section6Pink: "#FF9088",
    section6Grey: "#E5D6D6",
    section6Red: "#FF4C15",
    section6Blue: "#1552FF",
    section6Orange: "#FFDAD9",
    section6Yellow: "#FFE150",

    // Topic 11
    T11Base: "#E5D6D6",
    T11Highlight: "#FCFFF5",
    T11Grey: "#6B6262",
    T11Skin: "#FF9088",
    T11Red: "#FF4C15",

    // Topic 12
    T12Highlight: "#FCFFF5",
    T12Red: "#FF4C15",
    T12Pink: "#FFDAD9",

    // Topic 13
    T13Base: "#CFBFBE",
    T13Highlight: "#FCFFF5",
    T13Grey: "#6B6262",
    T13Skin: "#FF9088",
    T13Red: "#FF4C15",
    T13Yellow: "#FFE150",
    T13Mauve: "#E5D6D6",
    T13Brown: "#594A49",
    T13Blue: "#1552FF",
  },
  "outro-section": {
    section1Base: SECTION_1_COLORS.base,
    section1Muted: SECTION_1_COLORS.muted,
    section1Dark: SECTION_1_COLORS.dark,
    section1Highlight: SECTION_1_COLORS.highlight,
    section1Orange: "#FFBAA1",
    section1Grey: "#CFBFBE",
    section1Red: "#FF4C15",

    // Topic 1
    T01Yellow: "#FFE150",
    T01Brown: "#594A49",
    T01Dark: "#1D252C",
    T01Muted: "#CFBFBE",
    T01Plant: "#E5D6D6",
    T01Highlight: "#FCFFF5",
    T01Skin: "#FF9088",
    T01Blue: "#1552FF",
    T01Red: "#FF4C15",
    T01Orange: "#FFBAA1",
    T01Gray: "#E5D6D6",

    // Topic 2
    T02Base: "#FFDAD9",
    T02Brown: "#443A39",
    T02Dark: "#1D252C",
    T02Highlight: "#FCFFF5",
    T02Red: "#FF4C15",
    T02Skin: "#FF9088",
    T02Yellow: "#FFE150",
    T02Pink: "#FCC2BE",

    // Section 2
    S02Base: "#FCFFF5",

    // Topic 3
    T03Base: "#E5D6D6",
    T03Highlight: "#FCFFF5",

    // Topic 4
    T04Base: "#E5D6D6",
    T04Brown: "#443A39",
    T04Dark: "#1D252C",
    T04Highlight: "#FCFFF5",
    T04Red: "#FF4C15",
    T04Skin: "#FF9088",
    T04Yellow: "#FFE150",
    T04Pink: "#FCC2BE",

    // Section 3
    section3Base: "#E5D6D6",
    section3Dark: SECTION_1_COLORS.dark,
    section3Highlight: "#FCFFF5",
    section3Yellow: "#FFE150",
    section3Pink: "#FFDAD9",

    // Topic 5
    T05Highlight: "#FCFFF5",
    T05Pink: "#FFB1A7",

    // Topic 6
    T06Highlight: "#FCFFF5",
    T06Skin: "#FF9088",
    T06Blue: "#1552FF",
    T06Red: "#FF4C15",

    // Topic 7
    T07Highlight: "#FCFFF5",
    T07Skin: "#FF9088",
    T07Blue: "#1552FF",
    T07Yellow: "#FFE150",
    T07Base: "#E5D6D6",
    T07Muted: "#CFBFBE",
    T07Brown: "#594A49",

    // Section 4
    section4Pink: "#FFB1A7",

    // Topic 8
    T08Muted: "#CFBFBE",
    T08Highlight: "#FCFFF5",

    // Section 5
    section5Pink: "#FFDAD9",
    section5Muted: "#CFBFBE",
    section5Red: "#FF4C15",

    // Topic 9
    T09Base: "#E5D6D6",
    T09Highlight: "#FCFFF5",
    T09Grey: "#6B6262",
    T09Skin: "#FF9088",

    // Topic 10
    T10Yellow: "#FFE150",
    T10Highlight: "#FCFFF5",
    T10Grey: "#6B6262",
    T10Skin: "#FF9088",
    T10Pink: "#FFB1A7",
    T10Brown: "#594A49",

    // Section 6
    section6Base: SECTION_1_COLORS.base,
    section6Muted: SECTION_1_COLORS.muted,
    section6Highlight: SECTION_1_COLORS.highlight,
    section6Pink: "#FF9088",
    section6Grey: "#E5D6D6",
    section6Red: "#FF4C15",
    section6Blue: "#1552FF",
    section6Orange: "#FFDAD9",
    section6Yellow: "#FFE150",

    // Topic 11
    T11Base: "#E5D6D6",
    T11Highlight: "#FCFFF5",
    T11Grey: "#6B6262",
    T11Skin: "#FF9088",
    T11Red: "#FF4C15",

    // Topic 12
    T12Highlight: "#FCFFF5",
    T12Red: "#FF4C15",
    T12Pink: "#FFDAD9",

    // Topic 13
    T13Base: "#CFBFBE",
    T13Highlight: "#FCFFF5",
    T13Grey: "#6B6262",
    T13Skin: "#FF9088",
    T13Red: "#FF4C15",
    T13Yellow: "#FFE150",
    T13Mauve: "#E5D6D6",
    T13Brown: "#594A49",
    T13Blue: "#1552FF",
  },
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
    section1Orange: "#FFFFFF",
    section1Grey: "#FFFFFF",
    section1Red: "#FFFFFF",

    // Topic 1
    T01Yellow: "#FFE150",
    T01Brown: "#594A49",
    T01Dark: "#1D252C",
    T01Muted: "#CFBFBE",
    T01Plant: "#D5C4C5",
    T01Highlight: "#FCFFF5",
    T01Skin: "#FF898B",
    T01Blue: "#1D55F5",
    T01Red: "#FF4B27",
    T01Gray: "#E5D6D6",

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
    section1Orange: "#FFFFFF",
    section1Grey: "#FFFFFF",
    section1Red: "#FFFFFF",

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
    T01Gray: "#FFFFFF",

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
  subtopic3: {
    // Section 2 background is muted while a subtopic is active
    S02Base: "#FFFFFF",

    // Topic 3
    T03Base: "#E5D6D6",
    T03Highlight: "#FCFFF5",

    // Topic 4
    T04Base: "#FFFFFF",
    T04Brown: "#FFFFFF",
    T04Dark: "#FFFFFF",
    T04Highlight: "#FFFFFF",
    T04Red: "#FFFFFF",
    T04Skin: "#FFFFFF",
    T04Yellow: "#FFFFFF",
    T04Pink: "#FFFFFF",
  },
  subtopic4: {
    // Section 2 background is muted while a subtopic is active
    S02Base: "#FFFFFF",

    // Topic 3
    T03Base: "#FFFFFF",
    T03Highlight: "#FFFFFF",

    // Topic 4
    T04Base: "#E5D6D6",
    T04Brown: "#443A39",
    T04Dark: "#1D252C",
    T04Highlight: "#FCFFF5",
    T04Red: "#FF4C15",
    T04Skin: "#FF9088",
    T04Yellow: "#FFE150",
    T04Pink: "#FCC2BE",
  },
  subtopic5: {
    // Section 3
    section3Base: "#FFFFFF",
    section3Dark: "#FFFFFF",
    section3Highlight: "#FFFFFF",
    section3Yellow: "#FFFFFF",
    section3Pink: "#FFFFFF",

    // Topic 5
    T05Highlight: "#FCFFF5",
    T05Pink: "#FFB1A7",

    // Topic 6
    T06Highlight: "#FFFFFF",
    T06Skin: "#FFFFFF",
    T06Blue: "#FFFFFF",
    T06Red: "#FFFFFF",

    // Topic 7
    T07Highlight: "#FFFFFF",
    T07Skin: "#FFFFFF",
    T07Blue: "#FFFFFF",
    T07Yellow: "#FFFFFF",
    T07Base: "#FFFFFF",
    T07Muted: "#FFFFFF",
    T07Brown: "#FFFFFF",
  },
  subtopic6: {
    // Section 3
    section3Base: "#FFFFFF",
    section3Dark: "#FFFFFF",
    section3Highlight: "#FFFFFF",
    section3Yellow: "#FFFFFF",
    section3Pink: "#FFFFFF",

    // Topic 5
    T05Highlight: "#FFFFFF",
    T05Pink: "#FFFFFF",

    // Topic 6
    T06Highlight: "#FCFFF5",
    T06Skin: "#FF9088",
    T06Blue: "#1552FF",
    T06Red: "#FF4C15",

    // Topic 7
    T07Highlight: "#FFFFFF",
    T07Skin: "#FFFFFF",
    T07Blue: "#FFFFFF",
    T07Yellow: "#FFFFFF",
    T07Base: "#FFFFFF",
    T07Muted: "#FFFFFF",
    T07Brown: "#FFFFFF",
  },
  subtopic7: {
    // Section 3
    section3Base: "#FFFFFF",
    section3Dark: "#FFFFFF",
    section3Highlight: "#FFFFFF",
    section3Yellow: "#FFFFFF",
    section3Pink: "#FFFFFF",

    // Topic 5
    T05Highlight: "#FFFFFF",
    T05Pink: "#FFFFFF",

    // Topic 6
    T06Highlight: "#FFFFFF",
    T06Skin: "#FFFFFF",
    T06Blue: "#FFFFFF",
    T06Red: "#FFFFFF",

    // Topic 7
    T07Highlight: "#FCFFF5",
    T07Skin: "#FF9088",
    T07Blue: "#1552FF",
    T07Yellow: "#FFE150",
    T07Base: "#E5D6D6",
    T07Muted: "#CFBFBE",
    T07Brown: "#594A49",
  },
  subtopic8: {
    // Section 4
    section4Pink: "#FFFFFF",

    // Topic 8
    T08Muted: "#CFBFBE",
    T08Highlight: "#FCFFF5",
  },
  subtopic9: {
    // Section 5
    section5Pink: "#FFFFFF",
    section5Muted: "#FFFFFF",
    section5Red: "#FFFFFF",

    // Topic 9
    T09Base: "#E5D6D6",
    T09Highlight: "#FCFFF5",
    T09Grey: "#6B6262",
    T09Skin: "#FF9088",

    // Topic 10
    T10Yellow: "#FFFFFF",
    T10Highlight: "#FFFFFF",
    T10Grey: "#FFFFFF",
    T10Skin: "#FFFFFF",
    T10Pink: "#FFFFFF",
    T10Brown: "#FFFFFF",
  },
  subtopic10: {
    // Section 5
    section5Pink: "#FFFFFF",
    section5Muted: "#FFFFFF",
    section5Red: "#FFFFFF",

    // Topic 9
    T09Base: "#FFFFFF",
    T09Highlight: "#FFFFFF",
    T09Grey: "#FFFFFF",
    T09Skin: "#FFFFFF",

    // Topic 10
    T10Yellow: "#FFE150",
    T10Highlight: "#FCFFF5",
    T10Grey: "#6B6262",
    T10Skin: "#FF9088",
    T10Pink: "#FFB1A7",
    T10Brown: "#594A49",
  },
  subtopic11: {
    // Section 6
    section6Base: "#FFFFFF",
    section6Muted: "#FFFFFF",
    section6Highlight: "#FFFFFF",
    section6Pink: "#FFFFFF",
    section6Grey: "#FFFFFF",
    section6Red: "#FFFFFF",
    section6Blue: "#FFFFFF",
    section6Orange: "#FFFFFF",
    section6Yellow: "#FFFFFF",

    // Topic 11
    T11Base: "#E5D6D6",
    T11Highlight: "#FCFFF5",
    T11Grey: "#6B6262",
    T11Skin: "#FF9088",
    T11Red: "#FF4C15",

    // Topic 12
    T12Highlight: "#FFFFFF",
    T12Red: "#FFFFFF",
    T12Pink: "#FFFFFF",

    // Topic 13
    T13Base: "#FFFFFF",
    T13Highlight: "#FFFFFF",
    T13Grey: "#FFFFFF",
    T13Skin: "#FFFFFF",
    T13Red: "#FFFFFF",
    T13Yellow: "#FFFFFF",
    T13Mauve: "#FFFFFF",
    T13Brown: "#FFFFFF",
    T13Blue: "#FFFFFF",
  },
  subtopic12: {
    // Section 6
    section6Base: "#FFFFFF",
    section6Muted: "#FFFFFF",
    section6Highlight: "#FFFFFF",
    section6Pink: "#FFFFFF",
    section6Grey: "#FFFFFF",
    section6Red: "#FFFFFF",
    section6Blue: "#FFFFFF",
    section6Orange: "#FFFFFF",
    section6Yellow: "#FFFFFF",

    // Topic 11
    T11Base: "#FFFFFF",
    T11Highlight: "#FFFFFF",
    T11Grey: "#FFFFFF",
    T11Skin: "#FFFFFF",
    T11Red: "#FFFFFF",

    // Topic 12
    T12Highlight: "#FCFFF5",
    T12Red: "#FF4C15",
    T12Pink: "#FFDAD9",

    // Topic 13
    T13Base: "#FFFFFF",
    T13Highlight: "#FFFFFF",
    T13Grey: "#FFFFFF",
    T13Skin: "#FFFFFF",
    T13Red: "#FFFFFF",
    T13Yellow: "#FFFFFF",
    T13Mauve: "#FFFFFF",
    T13Brown: "#FFFFFF",
    T13Blue: "#FFFFFF",
  },
  subtopic13: {
    // Section 6
    section6Base: "#FFFFFF",
    section6Muted: "#FFFFFF",
    section6Highlight: "#FFFFFF",
    section6Pink: "#FFFFFF",
    section6Grey: "#FFFFFF",
    section6Red: "#FFFFFF",
    section6Blue: "#FFFFFF",
    section6Orange: "#FFFFFF",
    section6Yellow: "#FFFFFF",

    // Topic 11
    T11Base: "#FFFFFF",
    T11Highlight: "#FFFFFF",
    T11Grey: "#FFFFFF",
    T11Skin: "#FFFFFF",
    T11Red: "#FFFFFF",

    // Topic 12
    T12Highlight: "#FFFFFF",
    T12Red: "#FFFFFF",
    T12Pink: "#FFFFFF",

    // Topic 13
    T13Base: "#CFBFBE",
    T13Highlight: "#FCFFF5",
    T13Grey: "#6B6262",
    T13Skin: "#FF9088",
    T13Red: "#FF4C15",
    T13Yellow: "#FFE150",
    T13Mauve: "#E5D6D6",
    T13Brown: "#594A49",
    T13Blue: "#1552FF",
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
