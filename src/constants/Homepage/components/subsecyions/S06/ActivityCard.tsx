import { T12 } from "@/src/components/icons/topics";
import type { ReactNode } from "react";
import CoverTri from "../../CoverTri";

const IconBoxOne = ({
  stroke,
  className,
}: {
  stroke: string;
  className: string;
}) => {
  return (
    <svg
      width="111"
      height="111"
      viewBox="0 0 111 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="110"
        height="110"
        rx="28.878"
        stroke={stroke}
      />
    </svg>
  );
};

const IconBoxTwo = ({
  stroke,
  className,
}: {
  stroke: string;
  className: string;
}) => {
  return (
    <svg
      width="111"
      height="111"
      viewBox="0 0 111 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M107.636 48.5868L62.4129 3.36351C58.5951 -0.454502 52.4049 -0.454502 48.5867 3.36351L3.36351 48.5868C-0.454503 52.4049 -0.454503 58.5952 3.36351 62.4129L48.5867 107.636C52.4049 111.455 58.5951 111.455 62.4129 107.636L107.636 62.4129C111.455 58.5952 111.455 52.4049 107.636 48.5868Z"
        stroke={stroke}
      />
    </svg>
  );
};

const IconLabel = ({
  icon,
  textClassName,
  children,
}: {
  icon: "box" | "diamond";
  textClassName: string;
  children: ReactNode;
}) => {
  const Icon = icon === "box" ? IconBoxOne : IconBoxTwo;

  return (
    <div className="col-span-1">
      <div className="relative mx-auto flex w-full max-w-27.5 items-center justify-center">
        <Icon stroke="#ffffff" className="h-auto w-full" />
        <h2
          className={`absolute inset-0 flex items-center justify-center text-center font-th mobile-s6-th-700 md:desktop-s6-th-700 ${textClassName}`}
        >
          {children}
        </h2>
      </div>
    </div>
  );
};

export const ActivityCell = ({
  children,
  textClassName,
  boxClassName = "border-y border-white flex flex-col items-center justify-center h-full py-2",
}: {
  children: ReactNode;
  textClassName: string;
  boxClassName?: string;
}) => {
  return (
    <div className="col-span-1">
      <div className={boxClassName}>
        <p className={`font-th desktop-s7-th-400 text-center ${textClassName}`}>
          {children}
        </p>
      </div>
    </div>
  );
};

type ActivityCardProps = {
  color: string;
  title: ReactNode;
  descriptions: ReactNode[];
  textClassName: string;
  targets: ReactNode[];
  areas: ReactNode[];
  principles: ReactNode;
  id: string;
};

const ActivityCard = ({
  color,
  title,
  descriptions,
  textClassName,
  targets,
  areas,
  principles,
  id,
}: ActivityCardProps) => {
  return (
    <div className="relative flex w-full flex-col items-start" id={id}>
      <CoverTri color={color}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="relative flex w-25 items-center justify-center sm:w-27.5">
            <T12
              fill="#ffffff"
              stroke="#ffffff"
              className="h-auto w-full"
              aria-hidden="true"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s7-th-700 md:desktop-s6-th-700 text-tk-red">
              {title}
            </h2>
          </div>
        </div>
      </CoverTri>
      <div
        className="flex w-full flex-col items-center justify-center gap-6 border-x-2 border-b-2 border-white p-5 text-white md:gap-10 md:p-10"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col items-center justify-center w-full gap-4 md:gap-5">
          <div className="w-full h-0.5 bg-white" />
          {descriptions.map((description, index) => (
            <div key={index} className="contents">
              <p
                className={`font-th mobile-s6-th-700 md:desktop-s6-th-700 text-center ${textClassName}`}
              >
                {description}
              </p>
              <div className="w-full h-0.5 bg-white" />
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col gap-4 md:grid md:grid-cols-4 md:gap-5">
          <IconLabel icon="box" textClassName={textClassName}>
            กลุ่ม
            <br />
            เป้าหมาย
            <br />
            ของกิจกรรม
          </IconLabel>
          {targets.map((target, index) => (
            <ActivityCell key={index} textClassName={textClassName}>
              {target}
            </ActivityCell>
          ))}
        </div>
        <div className="flex w-full flex-col gap-4 md:grid md:grid-cols-4 md:gap-5">
          <IconLabel icon="diamond" textClassName={textClassName}>
            ประเภท
            <br />
            พื้นที่
          </IconLabel>
          {areas.map((area, index) => (
            <ActivityCell key={index} textClassName={textClassName}>
              {area}
            </ActivityCell>
          ))}
        </div>
        <div className="flex w-full flex-col gap-4 md:grid md:grid-cols-4 md:gap-5">
          <IconLabel icon="diamond" textClassName={textClassName}>
            หลักการ
            <br />
            ออกแบบ
            <br />
            พื้นที่
          </IconLabel>
          {principles}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
