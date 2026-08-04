import {
  DEFAULT_ICON_FILL,
  DEFAULT_ICON_STROKE,
  IconProps,
} from "./types";

export function T08({
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
        d="M601 24.4146C567.055 24.4146 539.537 51.9327 539.537 85.8781V519.049C539.537 552.994 567.055 580.512 601 580.512V601H1V580.512C34.9454 580.512 62.4634 552.994 62.4634 519.049V85.8781C62.4634 51.9327 34.9454 24.4146 1 24.4146V1H601V24.4146Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}
