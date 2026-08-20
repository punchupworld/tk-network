import type { FillMuteIllustrationProps } from "./fillMuteIllustrationTypes";

export function S02({ shapeFill, section2Stroke }: FillMuteIllustrationProps) {
  return (
    <g id="S02">
      <g id="S02_2">
        <path
          id="Vector_48"
          d="M555.281 146.375C554.641 146.188 554 146.668 554 147.335V550C554 550.552 554.448 551 555 551H665C665.552 551 666 550.552 666 550V179.553C666 179.109 665.707 178.719 665.281 178.594L555.281 146.375Z"
          fill={shapeFill("S02Base")}
          stroke={section2Stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}
