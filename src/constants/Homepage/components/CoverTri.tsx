import type { ReactNode } from "react";

type CoverTriProps = {
  color?: string;
  colorStroke?: string;
  strokeWidth?: number;
  children?: ReactNode;
};

const CoverTri = ({
  color = "#5B73ED",
  colorStroke = "white",
  strokeWidth = 2,
  children,
}: CoverTriProps) => {
  const outerClip = "polygon(0 100%, 50% 0, 100% 100%)";
  const innerClip = `polygon(${strokeWidth}px 100%, 50% ${strokeWidth}px, calc(100% - ${strokeWidth}px) 100%)`;

  return (
    <div className="relative h-[169px] w-full">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: colorStroke, clipPath: outerClip }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: color, clipPath: innerClip }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default CoverTri;
