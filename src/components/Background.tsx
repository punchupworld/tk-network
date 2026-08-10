"use client";

import React from "react";
import {
  Background as BackgroundIllustration,
  type BackgroundSection,
  type BackgroundSubtopic,
} from "@/src/components/icons/background";

interface BackgroundProps {
  /** ความเข้มของพื้นหลัง 0-1 */
  opacity?: number;
  /** ขยายภาพพื้นหลัง 1 = ปกติ */
  zoom?: number;
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
  fill,
  stroke,
  section = "section1",
  subtopic = null,
  className = "",
}: BackgroundProps) {
  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}
      data-section={section}
      data-subtopic={subtopic ?? undefined}
      aria-hidden="true"
    >
      <BackgroundIllustration
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        fill={fill}
        stroke={stroke}
        section={section}
        subtopic={subtopic}
        style={{
          opacity,
          transform: `scale(${zoom})`,
          transformOrigin: "center center",
        }}
      />
    </div>
  );
}
