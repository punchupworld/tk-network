type CoverSubProps = {
  color?: string;
  colorStroke?: string;
  strokeWidth?: number;
};

const CoverSub = ({
  color = "#FEDFCA",
  colorStroke = "white",
  strokeWidth = 2,
}: CoverSubProps) => {
  const outerClip = "polygon(28.221% 0%, 100% 0%, 100% 100%, 0% 100%)";
  const innerClip = `polygon(calc(28.221% + ${strokeWidth}px) ${strokeWidth}px, calc(100% - ${strokeWidth}px) ${strokeWidth}px, calc(100% - ${strokeWidth}px) 100%, ${strokeWidth}px 100%)`;

  return (
    <div className="relative h-32 w-full" aria-hidden="true">
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

export default CoverSub;
