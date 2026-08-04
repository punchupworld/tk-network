import {
  DEFAULT_ICON_FILL,
  DEFAULT_ICON_STROKE,
  IconProps,
} from "./types";

export function T09({
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
        d="M501.488 401.976C556.448 401.976 601 446.528 601 501.488C601 556.448 556.448 601 501.488 601H100.512C45.5531 601 1 556.448 1 501.488C1 446.528 45.5531 401.976 100.512 401.976H101.976C46.2084 401.976 1 356.768 1 301C1 245.233 46.2084 200.024 101.976 200.024H100.512C45.5531 200.024 1 155.471 1 100.512C1 45.5531 45.5531 1 100.512 1H501.488C556.448 1.00001 601 45.5531 601 100.512C601 155.471 556.448 200.024 501.488 200.024H500.024C555.792 200.024 601 245.233 601 301C601 356.768 555.792 401.976 500.024 401.976H501.488Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}
