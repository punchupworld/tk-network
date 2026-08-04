import {
  DEFAULT_ICON_FILL,
  DEFAULT_ICON_STROKE,
  IconProps,
} from "./types";

export function T07({
  fill = DEFAULT_ICON_FILL,
  stroke = DEFAULT_ICON_STROKE,
  ...props
}: IconProps) {
  return (
    <svg
      width="602"
      height="601"
      viewBox="0 0 602 601"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M601 523.636C601 565.811 466.686 600 301 600C135.314 600 1 565.811 1 523.636V0C1 42.1745 135.314 76.3636 301 76.3636C466.686 76.3636 601 42.1745 601 0V523.636Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}
