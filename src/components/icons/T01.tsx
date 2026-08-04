import {
  DEFAULT_ICON_FILL,
  DEFAULT_ICON_STROKE,
  IconProps,
} from "./types";

export function T01({
  fill = DEFAULT_ICON_FILL,
  stroke = DEFAULT_ICON_STROKE,
  ...props
}: IconProps) {
  return (
    <svg
      width="602"
      height="602"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1"
        y="1"
        width="600"
        height="600"
        rx="300"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}
