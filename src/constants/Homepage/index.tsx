"use client";

import Background from "@/src/components/Background";
import { useEffect, useState } from "react";

const SECTION_IDS = ["section1", "section2", "section3"] as const;
const SUBTOPIC_IDS = ["subtopic1", "subtopic2"] as const;
type SectionId = (typeof SECTION_IDS)[number];
type SubtopicId = (typeof SUBTOPIC_IDS)[number];

export default function Homepage() {
  const [activeSection, setActiveSection] = useState<SectionId>("section1");
  const [activeSubtopic, setActiveSubtopic] = useState<SubtopicId | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;

      const visibleSubtopic = SUBTOPIC_IDS.find((id) => {
        const subtopic = document.getElementById(id);
        if (!subtopic) return false;

        const { top, bottom } = subtopic.getBoundingClientRect();
        return top <= viewportCenter && bottom >= viewportCenter;
      });

      setActiveSubtopic(visibleSubtopic ?? null);

      const visibleSection = SECTION_IDS.find((id) => {
        const section = document.getElementById(id);
        if (!section) return false;

        const { top, bottom } = section.getBoundingClientRect();
        return top <= viewportCenter && bottom >= viewportCenter;
      });

      if (visibleSection) setActiveSection(visibleSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <div className="relative min-h-screen bg-yellow-50">
      <Background
        className="fixed! h-screen"
        section={activeSection}
        subtopic={activeSection === "section1" ? activeSubtopic : null}
      />
      <section
        className="relative z-10 max-w-[1200px] mx-auto w-full min-h-screen"
        id="section1"
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-2xl font-bold text-amber-950">
            ... เนื้อหาจริงของหน้า 1...
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center h-screen"
          id="subtopic1"
        >
          <p className="text-2xl font-bold text-amber-950">
            ... subtopic 1 เนื้อหาจริงของหน้า 1...
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center h-screen"
          id="subtopic2"
        >
          <p className="text-2xl font-bold text-amber-950">
            ... subtopic 2 เนื้อหาจริงของหน้า 1...
          </p>
        </div>
      </section>
      <section
        className="relative z-10 max-w-[1200px] mx-auto w-full h-screen"
        id="section2"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-2xl font-bold text-amber-950">
            ... เนื้อหาจริงของหน้า 2...
          </p>
        </div>
      </section>
      <section
        className="relative z-10 max-w-[1200px] mx-auto w-full h-screen"
        id="section3"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-2xl font-bold text-amber-950">
            ... เนื้อหาจริงของหน้า 3...
          </p>
        </div>
      </section>
    </div>
  );
}
