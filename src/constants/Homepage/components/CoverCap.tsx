type CoverCapProps = {
  color?: string;
  colorStroke?: string;
  strokeWidth?: number;
};

const CoverCap = ({
  color = "#4D2F2F",
  colorStroke = "white",
  strokeWidth = 2,
}: CoverCapProps) => {
  const outerClip = "polygon(0 100%, 26.667% 21.665%, 100% 100%)";

  return (
    <div className="relative h-[133.857px] w-full" aria-hidden="true">
      {/* bleeds 1px past the box so the antialiased bottom edge never leaves a hairline seam against the block below */}
      <div
        className="absolute top-0 right-0 -bottom-px left-0"
        style={{ backgroundColor: color, clipPath: outerClip }}
      >
        {/* double width because the clip discards the outer half of a centered stroke, leaving an even inset outline */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
        >
          <path
            d="M0 100 L26.667 21.665 L100 100"
            fill="none"
            stroke={colorStroke}
            strokeWidth={strokeWidth * 2}
            strokeLinejoin="miter"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
};

export default CoverCap;
