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
  const innerClip = `polygon(${strokeWidth}px 100%, 26.667% calc(21.665% + ${strokeWidth}px), calc(100% - ${strokeWidth}px) 100%)`;

  return (
    <div className="relative h-[133.857px] w-full" aria-hidden="true">
      {/* bleeds 1px past the box so the antialiased bottom edge never leaves a hairline seam against the block below */}
      <div className="absolute top-0 right-0 -bottom-px left-0">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: colorStroke, clipPath: outerClip }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: color, clipPath: innerClip }}
        />
      </div>
    </div>
  );
};

export default CoverCap;
