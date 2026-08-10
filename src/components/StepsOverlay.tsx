"use client";

import React from "react";
import {
  T02,
  T04,
  T06,
  T07,
  T09,
  T11,
  T01,
  T03,
  T05,
  T08,
  T10,
  T12,
  T13,
} from "@/src/components/icons/topics";

type TopicIcon = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { fill?: string; stroke?: string }
>;

type StepItem = {
  label: string;
  icon: TopicIcon;
  placement: "middle" | "bottom";
};

type Step = {
  number: number;
  title: React.ReactNode;
  items: StepItem[];
};

const TOPIC_FILL = "#FFEFAD";
const TOPIC_STROKE = "#FFEFAD";

const steps: Step[] = [
  {
    number: 1,
    title: "ทำความรู้จัก",
    items: [
      { label: "แนวคิดห้องสมุดมีชีวิต", icon: T01, placement: "bottom" },
      { label: "ก้าวแรกสู่ห้องสมุดมีชีวิต", icon: T02, placement: "bottom" },
    ],
  },
  {
    number: 2,
    title: (
      <>
        ตกลง
        <br />
        แนวทาง
        <br />
        ความ
        <br />
        ร่วมมือ
      </>
    ),
    items: [
      { label: "สิทธิประโยชน์ของเครือข่าย", icon: T04, placement: "middle" },
      { label: "รูปแบบของการเข้าร่วม", icon: T03, placement: "bottom" },
    ],
  },
  {
    number: 3,
    title: "ออกแบบพื้นที่และบริการ",
    items: [
      {
        label: "แนวทางการบริหารจัดการพื้นที่เรียนรู้",
        icon: T05,
        placement: "bottom",
      },
      { label: "หลักการออกแบบพื้นที่", icon: T06, placement: "bottom" },
      { label: "ตัวอย่างสร้างแรงบันดาลใจ", icon: T07, placement: "bottom" },
    ],
  },
  {
    number: 4,
    title: "ก่อสร้างพื้นที่",
    items: [
      {
        label: "แนวทางการจัดสรรงบประมาณ",
        icon: T08,
        placement: "bottom",
      },
    ],
  },
  {
    number: 5,
    title: (
      <>
        เตรียม
        <br />
        ความ <br />
        พร้อม
      </>
    ),
    items: [
      { label: "หลักการบริหารบุคลากร", icon: T10, placement: "middle" },
      {
        label: "นโยบายและข้อตกลงการใช้พื้นที่",
        icon: T09,
        placement: "bottom",
      },
    ],
  },
  {
    number: 6,
    title: "เปิดบริการ",
    items: [
      {
        label: "รูปแบบบริการตามกลุ่มเป้าหมาย",
        icon: T11,
        placement: "bottom",
      },
      { label: "แนะนำกิจกรรม", icon: T12, placement: "bottom" },
      { label: "ตัวอย่างพื้นที่บันดาลใจ", icon: T13, placement: "bottom" },
    ],
  },
];

function TopicTag({ label, icon: Icon }: { label: string; icon: TopicIcon }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[110px]">
      <Icon
        fill={TOPIC_FILL}
        stroke={TOPIC_STROKE}
        className="h-full w-full transition-[fill,stroke] duration-200 group-hover:[&_*]:!fill-tk-red group-hover:[&_*]:!stroke-tk-red"
        aria-hidden="true"
      />
      <span className="absolute inset-0 flex items-center justify-center px-3 text-center font-th desktop-s6-400 leading-tight text-tk-black text-balance transition-colors duration-200 group-hover:text-white">
        {label}
      </span>
    </div>
  );
}

function StepColumn({ step, isFirst }: { step: Step; isFirst?: boolean }) {
  const middleItems = step.items.filter((item) => item.placement === "middle");
  const bottomItems = step.items.filter((item) => item.placement === "bottom");

  return (
    <div
      className={[
        "group relative flex min-h-0 flex-col items-center border-r-2 border-tk-red hover:bg-yellow-200",
        isFirst ? "border-l-2" : "",
      ].join(" ")}
    >
      <div className="mt-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-100 font-th desktop-s6-700 font-bold text-tk-red group-hover:bg-tk-red group-hover:text-white">
        {step.number}
      </div>
      <h3 className="mt-4  text-center font-th desktop-s5-th-700 leading-snug text-tk-black">
        {step.title}
      </h3>

      <div className="relative flex min-h-0 w-full flex-1 flex-col items-center justify-end">
        {middleItems.length > 0 ? (
          <div className="flex flex-col items-center justify-center gap-3">
            {middleItems.map((item) => (
              <TopicTag key={item.label} label={item.label} icon={item.icon} />
            ))}
          </div>
        ) : null}

        {bottomItems.length > 0 ? (
          <div
            className={[
              "flex w-full items-center ",
              middleItems.length === 0 ? "mt-auto" : "",
            ].join(" ")}
          >
            {bottomItems.map((item) => (
              <TopicTag key={item.label} label={item.label} icon={item.icon} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

const StepsOverlay = () => {
  return (
    <div className="fixed inset-0 z-20 bg-white pb-10 pt-40">
      <div className="mx-auto flex h-full max-w-[1200px]">
        {steps.map((step, index) => (
          <StepColumn key={step.number} step={step} isFirst={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default StepsOverlay;
