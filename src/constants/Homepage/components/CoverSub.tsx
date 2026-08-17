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
      <div
        className="absolute inset-0"
        style={{ backgroundColor: colorStroke, clipPath: outerClip }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: color, clipPath: innerClip }}
      />
    </div>
  );
};

export default CoverSub;
