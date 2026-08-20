"use client";

import Background from "@/src/components/Background";
import { useEffect, useState } from "react";
import SectionOne from "./components/sections/SectionOne";
import IntroSection from "./components/sections/IntroSection";
import SectionTwo from "./components/sections/SectionTwo";
import SectionThree from "./components/sections/SectionThree";
import SectionFour from "./components/sections/SectionFour";
import SectionFive from "./components/sections/SectionFive";
import SectionSix from "./components/sections/SectionSix";
import OutroSection from "./components/sections/OutroSection";

const SECTION_IDS = [
  "intro-section",
  "section1",
  "section2",
  "section3",
  "section4",
  "section5",
  "section6",
  "outro-section",
] as const;
const SUBTOPIC_IDS = [
  "subtopic1",
  "subtopic2",
  "subtopic3",
  "subtopic4",
  "subtopic5",
  "subtopic6",
  "subtopic7",
  "subtopic8",
  "subtopic9",
  "subtopic10",
  "subtopic11",
  "subtopic12",
  "subtopic13",
] as const;
const SUBTOPIC_SECTIONS = [
  "section1",
  "section2",
  "section3",
  "section4",
  "section5",
  "section6",
] as const;
type SectionId = (typeof SECTION_IDS)[number];
type SubtopicId = (typeof SUBTOPIC_IDS)[number];

export default function Homepage() {
  const [activeSection, setActiveSection] =
    useState<SectionId>("intro-section");
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
    <div className="relative min-h-screen md:bg-yellow-50 md:p-0 p-2.5 bg-white">
      <Background
        className="fixed! inset-0 w-full h-full"
        section={activeSection}
        subtopic={
          SUBTOPIC_SECTIONS.some((id) => id === activeSection)
            ? activeSubtopic
            : null
        }
        mobileZoom={1.6}
      />
      <IntroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <OutroSection />
    </div>
  );
}
