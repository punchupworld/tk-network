import React from "react";
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
};

const stepIndicators: Topic[][] = [
  [
    { icon: T01, subTopics: 1 },
    { icon: T02, subTopics: 2 },
  ],
  [
    { icon: T04, subTopics: 3 },
    { icon: T03, subTopics: 1 },
  ],
  [
    { icon: T05, subTopics: 1 },
    { icon: T06, subTopics: 3 },
    { icon: T07, subTopics: 1 },
  ],
  [{ icon: T08, subTopics: 1 }],
  [
    { icon: T10, subTopics: 4 },
    { icon: T09, subTopics: 4 },
  ],
  [
    { icon: T11, subTopics: 5 },
    { icon: T12, subTopics: 3 },
    { icon: T13, subTopics: 4 },
  ],
];

function StepIndicator({
  showStepsOverlay = false,
}: {
  showStepsOverlay?: boolean;
}) {
  return (
    <div className="mt-2 z-40 relative">
      <div className="flex h-10.5 items-center overflow-x-auto rounded-full bg-red-50 px-3">
        <ol
          className="flex w-full items-center justify-between text-[#FFCBCE]"
          aria-label="ลำดับ 6 ขั้นตอนในการเข้าร่วมเครือข่าย"
        >
          {stepIndicators.map((topics, index) => (
            <li key={index} role="listitem" className="contents">
              <span
                className={[
                  "desktop-s7-th-700 font-th shrink-0 transition-colors duration-200",
                  showStepsOverlay ? "text-tk-red" : "",
                ].join(" ")}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {topics.map(({ icon: Icon, subTopics }, topicIndex) => (
                <React.Fragment key={topicIndex}>
                  <Icon
                    width={20}
                    height={20}
                    fill="transparent"
                    stroke="currentColor"
                    className="shrink-0 overflow-visible **:stroke-1 **:[vector-effect:non-scaling-stroke]"
                    aria-hidden="true"
                  />
                  {Array.from({ length: subTopics }, (_, dashIndex) => (
                    <span
                      key={dashIndex}
                      aria-hidden="true"
                      className="h-2 w-0.5 shrink-0 rounded-full bg-[#FFCBCE]"
                    />
                  ))}
                </React.Fragment>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default StepIndicator;
