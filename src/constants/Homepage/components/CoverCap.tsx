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

export default CoverCap;
