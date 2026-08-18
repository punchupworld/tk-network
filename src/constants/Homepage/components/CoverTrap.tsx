import Image from "next/image";
import type { ReactNode } from "react";

type CoverTrapProps = {
  color?: string;
  colorStroke?: string;
  strokeWidth?: number;
  width?: number | string;
  height?: number | string;
  src?: string;
  alt?: string;
  flip?: "rotate" | "scaleY";
  children?: ReactNode;
};

const toCssSize = (value: number | string) =>
  typeof value === "number" ? `${value}px` : value;

const CoverTrap = ({
  color = "#4D2F2F",
  colorStroke = "white",
  strokeWidth = 2,
  width = "100%",
  height = 151,
  src,
  alt = "",
  flip,
  children,
}: CoverTrapProps) => {
  const outerClip = "polygon(0% 0%, 100% 0%, 89.539% 100%, 10.461% 100%)";
  const innerClip = `polygon(${strokeWidth}px ${strokeWidth}px, calc(100% - ${strokeWidth}px) ${strokeWidth}px, calc(89.539% - ${strokeWidth}px) calc(100% - ${strokeWidth}px), calc(10.461% + ${strokeWidth}px) calc(100% - ${strokeWidth}px))`;
  const flipClass =
    flip === "rotate" ? "rotate-180" : flip === "scaleY" ? "-scale-y-100" : "";

  return (
    <div
      className="relative"
      style={{ width: toCssSize(width), height: toCssSize(height) }}
    >
      <div className={`absolute inset-0 ${flipClass}`}>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: colorStroke, clipPath: outerClip }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: src ? undefined : color,
            clipPath: innerClip,
          }}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 600px) 100vw, 600px"
              className="object-cover rotate-180"
            />
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
};

export default CoverTrap;
