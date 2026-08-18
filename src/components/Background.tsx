"use client";

import React from "react";
import {
  Background as BackgroundIllustration,
  type BackgroundSection,
  type BackgroundSubtopic,
} from "@/src/components/icons/background";

const MOBILE_QUERY = "(max-width: 767px)";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isMobile;
}

interface BackgroundProps {
  /** ความเข้มของพื้นหลัง 0-1 */
  opacity?: number;
  /** ขยายภาพพื้นหลัง 1 = ปกติ */
  zoom?: number;
  /** ขยายภาพพื้นหลังบนจอมือถือ (< 768px) ค่าเริ่มต้น = zoom */
  mobileZoom?: number;
  fill?: string;
  stroke?: string;
  /** section ที่กำลังแสดง */
  section?: BackgroundSection;
  /** subtopic ที่กำลังแสดง (override สีบาง shape) */
  subtopic?: BackgroundSubtopic | null;
  className?: string;
}

export default function Background({
  opacity = 1,
  zoom = 1,
  mobileZoom = zoom,
  fill,
  stroke,
  section = "section1",
  subtopic = null,
  className = "",
}: BackgroundProps) {
  const isMobile = useIsMobile();
  const activeZoom = isMobile ? mobileZoom : zoom;

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}
      data-section={section}
      data-subtopic={subtopic ?? undefined}
      aria-hidden="true"
    >
      <BackgroundIllustration
        className={
          isMobile
            ? "absolute -top-30 left-0 w-full h-[calc(100%-120px)]"
            : "h-full w-full"
        }
        preserveAspectRatio={isMobile ? "xMidYMid meet" : "xMidYMid slice"}
        fill={fill}
        stroke={stroke}
        section={section}
        subtopic={subtopic}
        style={{
          opacity,
          transform: `scale(${activeZoom})`,
          transformOrigin: "center center",
        }}
      />
    </div>
  );
}
