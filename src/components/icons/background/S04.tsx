import type { FillMuteIllustrationProps } from "./fillMuteIllustrationTypes";

export function S04({ shapeFill, section4Stroke }: FillMuteIllustrationProps) {
  return (
    <g id="S04">
      <g id="S04_2">
        <path
          id="Vector_61"
          d="M1070.44 460.779C1070.44 461.331 1070.89 461.779 1071.44 461.779H1154.55C1155.1 461.779 1155.55 461.331 1155.55 460.779V233.961C1155.55 233.368 1155.03 232.905 1154.44 232.966L1071.34 241.599C1070.83 241.652 1070.44 242.081 1070.44 242.594V460.779Z"
          fill={shapeFill("section4Pink")}
          stroke={section4Stroke}
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}
