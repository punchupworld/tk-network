"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SUBSUBTOPIC_LABELS } from "@/src/constants/topicItems";
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

const SHAPE_STEP_LABELS = [
  "ก้าวแรกสู่ ห้องสมุดมีชีวิต",
  "แนวคิด ห้องสมุดมีชีวิต",
  "รูปแบบของ การเข้าร่วม",
  "สิทธิประโยชน์ ของเครือข่าย",
  "แนวทางการบริหารจัดการพื้นที่เรียนรู้",
  "หลักการ ออกแบบพื้นที่",
  "ตัวอย่าง สร้างแรงบันดาลใจ",
  "แนวทาง การจัดสรร งบประมาณ",
  "นโยบายและ ข้อตกลง การใช้พื้นที่",
  "หลักการบริหาร บุคลากร",
  "รูปแบบบริการ ตามกลุ่มเป้าหมาย",
  "แนะนำ กิจกรรม",
  "ตัวอย่าง พื้นที่การเรียนรู้",
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

const SUBSUBTOPIC_START_SCROLL = new Set([
  2, 7, 12, 13, 14, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
]);

const SCROLL_START_OFFSET = 120;

function scrollBlock(id: string): ScrollLogicalPosition {
  if (!id.startsWith("subsubtopic")) return "start";
  const n = Number(id.replace("subsubtopic", ""));
  return SUBSUBTOPIC_START_SCROLL.has(n) ? "start" : "center";
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  if (scrollBlock(id) === "center") {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - SCROLL_START_OFFSET,
    behavior: "smooth",
  });
}

function dashTooltipItems(dashId: string) {
  const label = SUBSUBTOPIC_LABELS[dashId];
  return label ? [{ id: dashId, label }] : [];
}

function topicTooltipItems(topicId: string) {
  const label = SHAPE_STEP_LABELS[Number(topicId.replace("subtopic", "")) - 1];
  return label ? [{ id: topicId, label }] : [];
}

function HoverArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="8"
      viewBox="0 0 15 8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14.3536 4.03519C14.5488 3.83993 14.5488 3.52335 14.3536 3.32809L11.1716 0.146106C10.9763 -0.049156 10.6597 -0.0491559 10.4645 0.146106C10.2692 0.341368 10.2692 0.657951 10.4645 0.853213L13.2929 3.68164L10.4645 6.51007C10.2692 6.70533 10.2692 7.02191 10.4645 7.21717C10.6597 7.41244 10.9763 7.41244 11.1716 7.21717L14.3536 4.03519ZM0 3.68164L2.18557e-08 4.18164L14 4.18164L14 3.68164L14 3.18164L-2.18557e-08 3.18164L0 3.68164Z"
        fill="#C0A765"
      />
    </svg>
  );
}

type TooltipItem = { id: string; label: string };

type IndicatorTooltipProps = {
  anchor: Element;
  items: TooltipItem[];
  onSelect: (id: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function IndicatorTooltip({
  anchor,
  items,
  onSelect,
  onMouseEnter,
  onMouseLeave,
}: IndicatorTooltipProps) {
  const tipRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ left: number; top: number } | null>(
    null,
  );

  useLayoutEffect(() => {
    const place = () => {
      const tip = tipRef.current;
      if (!tip) return;

      const rect = anchor.getBoundingClientRect();
      const width = tip.offsetWidth;
      const height = tip.offsetHeight;
      const gap = 8;
      const pad = 12;

      const left = Math.max(
        pad,
        Math.min(
          rect.left + rect.width / 2 - width / 2,
          window.innerWidth - width - pad,
        ),
      );
      const top = Math.max(
        pad,
        Math.min(rect.bottom + gap, window.innerHeight - height - pad),
      );

      setCoords({ left, top });
    };

    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);

    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [anchor]);

  return createPortal(
    <div
      ref={tipRef}
      role="tooltip"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed z-[80] inline-flex flex-col items-start justify-center gap-2.5 rounded-[10px] bg-[#D9D9D9] p-5"
      style={{
        left: coords?.left ?? 0,
        top: coords?.top ?? 0,
        visibility: coords ? "visible" : "hidden",
      }}
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className="flex items-center gap-1.5 whitespace-nowrap rounded-[5px] border border-yellow-700 px-3 py-1 font-th desktop-s7-th-400 text-neutral-dark-darker hover:bg-yellow-700 hover:text-white"
        >
          {item.label}
          <HoverArrow />
        </button>
      ))}
    </div>,
    document.body,
  );
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
  const [hovered, setHovered] = useState<{
    el: Element;
    items: TooltipItem[];
  } | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number>(0);

  const showTooltip = (items: TooltipItem[], el: Element) => {
    if (!items.length) return;
    window.clearTimeout(hideTimer.current);
    setHovered({ el, items });
  };

  const hideTooltip = () => {
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setHovered(null), 140);
  };

  useEffect(() => () => window.clearTimeout(hideTimer.current), []);

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
        className="flex h-9.5 items-center overflow-x-auto overscroll-x-contain rounded-full bg-red-50 px-3 scrollbar-none"
      >
        <ol
          className="flex w-max min-w-full items-center justify-between gap-2 text-[#FFCBCE]"
          aria-label="ลำดับ 6 ขั้นตอนในการเข้าร่วมเครือข่าย"
        >
          {STEPS.map((topics, index) => {
            const isInSection = activeStep === index;
            const highlightNumber = showStepsOverlay || isInSection;

            return (
              <li key={index} role="listitem" className="contents">
                <span
                  role="button"
                  tabIndex={0}
                  data-indicator={SECTION_IDS[index]}
                  onClick={() => scrollToId(SECTION_IDS[index])}
                  onMouseEnter={(event) =>
                    showTooltip(
                      [{ id: SECTION_IDS[index], label: STEP_LABELS[index] }],
                      event.currentTarget,
                    )
                  }
                  onMouseLeave={hideTooltip}
                  onFocus={(event) =>
                    showTooltip(
                      [{ id: SECTION_IDS[index], label: STEP_LABELS[index] }],
                      event.currentTarget,
                    )
                  }
                  onBlur={hideTooltip}
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
                      isInSection
                        ? "grid-cols-[1fr] opacity-100"
                        : "grid-cols-[0fr] opacity-0",
                    ].join(" ")}
                    aria-hidden={!isInSection}
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
                          onMouseEnter={(event) =>
                            showTooltip(
                              topicTooltipItems(id),
                              event.currentTarget,
                            )
                          }
                          onMouseLeave={hideTooltip}
                          onFocus={(event) =>
                            showTooltip(
                              topicTooltipItems(id),
                              event.currentTarget,
                            )
                          }
                          onBlur={hideTooltip}
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
                              onMouseEnter={(event) =>
                                showTooltip(
                                  dashTooltipItems(dashId),
                                  event.currentTarget,
                                )
                              }
                              onMouseLeave={hideTooltip}
                              onFocus={(event) =>
                                showTooltip(
                                  dashTooltipItems(dashId),
                                  event.currentTarget,
                                )
                              }
                              onBlur={hideTooltip}
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
                                "relative cursor-pointer w-0.5 shrink-0 rounded-full hover:bg-tk-red hover:h-4",
                                "before:absolute before:-inset-x-1 before:-inset-y-2 before:content-['']",
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
      {hovered ? (
        <IndicatorTooltip
          anchor={hovered.el}
          items={hovered.items}
          onSelect={(id) => {
            scrollToId(id);
            setHovered(null);
          }}
          onMouseEnter={() => showTooltip(hovered.items, hovered.el)}
          onMouseLeave={hideTooltip}
        />
      ) : null}
    </div>
  );
}

export default StepIndicator;
