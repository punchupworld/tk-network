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
      {/* bleeds 1px past the box so the antialiased bottom edge never leaves a hairline seam against the block below */}
      <div
        className="absolute top-0 right-0 -bottom-px left-0"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: colorStroke, clipPath: outerClip }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: color, clipPath: innerClip }}
        />
      </div>
      {children}
    </div>
  );
};

export default CoverTri;
