import { DEFAULT_ICON_FILL, DEFAULT_ICON_STROKE, IconProps } from "./types";

export function T03({
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
      <path
        d="M401.976 188.317H601V601H1V1H200.024V94.6585H401.976V188.317Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}
