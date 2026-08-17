"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  T01,
  T02,
  T03,
  T04,
  T05,
  T06,
  T07,
  T08,
  T09,
  T10,
  T11,
  T12,
  T13,
} from "@/src/components/icons/topics";

type TopicIcon = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { fill?: string; stroke?: string }
>;

type Topic = {
  icon: TopicIcon;
  subTopics: number;
  id: string;
};

const SECTION_IDS = [
  "section1",
  "section2",
  "section3",
  "section4",
  "section5",
  "section6",
] as const;

const STEP_LABELS = [
  "ทำความรู้จัก",
  "ตกลงแนวทางความร่วมมือ",
  "ออกแบบพื้นที่และบริการ",
  "ก่อสร้างพื้นที่",
  "เตรียมความพร้อม",
  "เปิดบริการ",
] as const;

const stepIndicators: Topic[][] = [
  [
    { icon: T02, subTopics: 1, id: "subtopic1" },
    { icon: T01, subTopics: 2, id: "subtopic2" },
  ],
  [
    { icon: T03, subTopics: 3, id: "subtopic3" },
    { icon: T04, subTopics: 1, id: "subtopic4" },
  ],
  [
    { icon: T05, subTopics: 1, id: "subtopic5" },
    { icon: T06, subTopics: 3, id: "subtopic6" },
    { icon: T07, subTopics: 1, id: "subtopic7" },
  ],
  [{ icon: T08, subTopics: 1, id: "subtopic8" }],
  [
    { icon: T09, subTopics: 4, id: "subtopic9" },
    { icon: T10, subTopics: 4, id: "subtopic10" },
  ],
  [
    { icon: T11, subTopics: 5, id: "subtopic11" },
    { icon: T12, subTopics: 3, id: "subtopic12" },
    { icon: T13, subTopics: 4, id: "subtopic13" },
  ],
];

const SUBTOPIC_IDS = stepIndicators.flatMap((topics) =>
  topics.map((topic) => topic.id),
);

const STEPS = (() => {
  let dashStart = 0;
  return stepIndicators.map((topics) =>
    topics.map((topic) => {
      const start = dashStart;
      dashStart += topic.subTopics;
      return { ...topic, dashStart: start };
    }),
  );
})();

const SUBSUBTOPIC_IDS = Array.from(
  {
    length: STEPS.reduce(
      (sum, topics) =>
        sum + topics.reduce((count, topic) => count + topic.subTopics, 0),
      0,
    ),
  },
  (_, i) => `subsubtopic${i + 1}`,
);

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function StepIndicator({
  showStepsOverlay = false,
}: {
  showStepsOverlay?: boolean;
}) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeSubtopic, setActiveSubtopic] = useState<string | null>(null);
  const [activeSubsubtopic, setActiveSubsubtopic] = useState<string | null>(
    null,
  );
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isInView = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;
      const { top, bottom } = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      return top <= viewportCenter && bottom >= viewportCenter;
    };

    const findActiveSubsubtopic = () => {
      const viewportCenter = window.innerHeight / 2;
      let current: string | null = null;
      for (const id of SUBSUBTOPIC_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (bottom <= 0 || top >= window.innerHeight) continue;
        if (top <= viewportCenter) current = id;
      }
      return current;
    };

    const updateActive = () => {
      const visibleIndex = SECTION_IDS.findIndex(isInView);
      setActiveStep(visibleIndex === -1 ? null : visibleIndex);
      setActiveSubtopic(SUBTOPIC_IDS.find(isInView) ?? null);
      setActiveSubsubtopic(findActiveSubsubtopic());
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const indicatorId =
      activeSubsubtopic ??
      activeSubtopic ??
      (activeStep != null ? SECTION_IDS[activeStep] : null);
    if (!indicatorId) return;

    const el = scroller.querySelector<HTMLElement>(
      `[data-indicator="${indicatorId}"]`,
    );
    if (!el) return;

    const align = () => {
      const elRect = el.getBoundingClientRect();
      const scrollerRect = scroller.getBoundingClientRect();
      const delta =
        elRect.left +
        elRect.width / 2 -
        (scrollerRect.left + scrollerRect.width / 2);
      scroller.scrollBy({ left: delta, behavior: "smooth" });
    };

    align();
    const timer = window.setTimeout(align, 320);
    return () => window.clearTimeout(timer);
  }, [activeStep, activeSubtopic, activeSubsubtopic]);

  return (
    <div className="relative z-40 mt-2 w-full min-w-0">
      <div
        ref={scrollerRef}
        className="flex h-10.5 items-center overflow-x-auto overscroll-x-contain rounded-full bg-red-50 px-3 scrollbar-none"
      >
        <ol
          className="flex w-max min-w-full items-center justify-between gap-2 text-[#FFCBCE]"
          aria-label="ลำดับ 6 ขั้นตอนในการเข้าร่วมเครือข่าย"
        >
          {STEPS.map((topics, index) => {
            const isActive = activeStep === index && !activeSubtopic;
            const highlightNumber = showStepsOverlay || isActive;

            return (
              <li key={index} role="listitem" className="contents">
                <span
                  role="button"
                  tabIndex={0}
                  data-indicator={SECTION_IDS[index]}
                  onClick={() => scrollToId(SECTION_IDS[index])}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      scrollToId(SECTION_IDS[index]);
                    }
                  }}
                  className={[
                    "flex cursor-pointer items-center gap-1 desktop-s7-th-700 font-th shrink-0 transition-colors duration-200 hover:text-tk-red",
                    highlightNumber ? "text-tk-red" : "",
                  ].join(" ")}
                >
                  {String(index + 1).padStart(2, "0")}
                  <span
                    className={[
                      "grid transition-[grid-template-columns,opacity] duration-300",
                      isActive
                        ? "grid-cols-[1fr] opacity-100"
                        : "grid-cols-[0fr] opacity-0",
                    ].join(" ")}
                    aria-hidden={!isActive}
                  >
                    <span className="overflow-hidden whitespace-nowrap">
                      {STEP_LABELS[index]}
                    </span>
                  </span>
                </span>
                {topics.map(
                  ({ icon: Icon, subTopics, id, dashStart }, topicIndex) => {
                    const isTopicActive =
                      activeSubtopic === id && !activeSubsubtopic;

                    return (
                      <React.Fragment key={topicIndex}>
                        <Icon
                          width={20}
                          height={20}
                          fill={
                            isTopicActive
                              ? "var(--color-tk-red)"
                              : "transparent"
                          }
                          stroke="currentColor"
                          role="button"
                          tabIndex={0}
                          data-indicator={id}
                          className="shrink-0 cursor-pointer overflow-visible **:stroke-1 **:[vector-effect:non-scaling-stroke] hover:**:fill-tk-red"
                          onClick={() => scrollToId(id)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              scrollToId(id);
                            }
                          }}
                        />
                        {Array.from({ length: subTopics }, (_, dashIndex) => {
                          const dashId = `subsubtopic${dashStart + dashIndex + 1}`;
                          const isDashActive = activeSubsubtopic === dashId;

                          return (
                            <span
                              key={dashIndex}
                              role="button"
                              tabIndex={0}
                              data-indicator={dashId}
                              onClick={() => scrollToId(dashId)}
                              onKeyDown={(event) => {
                                if (
                                  event.key === "Enter" ||
                                  event.key === " "
                                ) {
                                  event.preventDefault();
                                  scrollToId(dashId);
                                }
                              }}
                              className={[
                                "cursor-pointer w-0.5 shrink-0 rounded-full hover:bg-tk-red hover:h-4",
                                isDashActive
                                  ? "h-4 bg-tk-red"
                                  : "h-2 bg-[#FFCBCE]",
                              ].join(" ")}
                            />
                          );
                        })}
                      </React.Fragment>
                    );
                  },
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default StepIndicator;
