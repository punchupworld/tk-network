import {
  DEFAULT_ICON_FILL,
  DEFAULT_ICON_STROKE,
  IconProps,
} from "./types";

export function T12({
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
        d="M431.244 1C524.999 1 601 77.0024 601 170.756C601 223.073 577.331 269.86 540.119 301C577.331 332.139 601 378.927 601 431.244C601 524.999 524.999 601 431.244 601C378.927 601 332.139 577.331 301 540.119C269.86 577.331 223.073 601 170.756 601C77.0024 601 1 524.999 1 431.244C1 378.927 24.667 332.139 61.8775 301C24.667 269.86 1 223.073 1 170.756C1 77.0024 77.0024 1 170.756 1C223.073 1 269.86 24.667 301 61.8775C332.139 24.667 378.927 1 431.244 1Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}
