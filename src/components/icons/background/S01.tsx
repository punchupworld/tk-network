import type { FillMuteIllustrationProps } from "./fillMuteIllustrationTypes";

export function S01({ section1Stroke, shapeFill }: FillMuteIllustrationProps) {
  return (
    <g id="S01">
      <g id="S1">
        <g id="Vector_53">
          <path
            d="M50.9492 121.87L400.581 119.646L458.516 137.73V539.1H50.9492"
            fill={shapeFill("section1Base")}
          />
          <path
            d="M50.9492 121.87L400.581 119.646L458.516 137.73V539.1H50.9492"
            stroke={section1Stroke}
            strokeWidth={2}
            strokeMiterlimit={10}
            fill={shapeFill("section1Base")}
          />
        </g>
        <path
          id="Vector_54"
          d="M428.844 119.25V527.416H513.355V143.876L428.844 119.25Z"
          fill={shapeFill("section1Muted")}
          stroke={section1Stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_55"
          d="M419.852 119.25V527.416H428.843V121.872L419.852 119.25Z"
          fill={shapeFill("section1Dark")}
          stroke={section1Stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_56"
          d="M513.354 115.654V525.317H627.227V148.836L513.354 115.654Z"
          fill={shapeFill("section1Highlight")}
          stroke={section1Stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}
