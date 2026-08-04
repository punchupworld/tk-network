import {
  DEFAULT_ICON_FILL,
  DEFAULT_ICON_STROKE,
  IconProps,
} from "./types";

export function T06({
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
        d="M585.38 263.291L338.707 16.6191C317.883 -4.20638 284.118 -4.20638 263.291 16.6191L16.6191 263.291C-4.20638 284.118 -4.20638 317.883 16.6191 338.707L263.291 585.38C284.118 606.207 317.883 606.207 338.707 585.38L585.38 338.707C606.207 317.883 606.207 284.118 585.38 263.291Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}
