import {
  DEFAULT_ICON_FILL,
  DEFAULT_ICON_STROKE,
  IconProps,
} from "./types";

export function T13({
  fill = DEFAULT_ICON_FILL,
  stroke = DEFAULT_ICON_STROKE,
  ...props
}: IconProps) {
  return (
    <svg
      width="602"
      height="603"
      viewBox="0 0 602 603"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 203.149L303.927 1.20508L601 203.149V601.205H1L1 203.149Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}
