"use client";

import { useCallback, useState, type ElementType, type ReactNode } from "react";
import CoverTrap from "../../CoverTrap";
import ActivityCardModal from "../S06/ActivityCardModal";
import ReadNapActivityCard from "../S06/ReadNapActivityCard";

export const TRAP_H = 151;

const ToolBox = ({ fill = "#D95243" }: { fill?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10.5H2V2H11V6H12V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V10.5C1 10.7652 1.10536 11.0196 1.29289 11.2071C1.48043 11.3946 1.73478 11.5 2 11.5H6V10.5Z"
        fill={fill}
      />
      <path
        d="M15 14.29L13.445 12.735C13.8803 12.1217 14.0694 11.3674 13.9748 10.6213C13.8802 9.87521 13.5088 9.19188 12.9343 8.70664C12.3597 8.2214 11.6239 7.96964 10.8725 8.00124C10.1212 8.03285 9.40905 8.3455 8.87727 8.87727C8.3455 9.40905 8.03285 10.1212 8.00124 10.8725C7.96964 11.6239 8.2214 12.3597 8.70664 12.9343C9.19188 13.5088 9.87521 13.8802 10.6213 13.9748C11.3674 14.0694 12.1217 13.8803 12.735 13.445L14.29 15L15 14.29ZM11 13C10.6044 13 10.2178 12.8827 9.88886 12.6629C9.55996 12.4432 9.30362 12.1308 9.15224 11.7654C9.00087 11.3999 8.96126 10.9978 9.03843 10.6098C9.1156 10.2219 9.30608 9.86549 9.58579 9.58579C9.86549 9.30608 10.2219 9.1156 10.6098 9.03843C10.9978 8.96126 11.3999 9.00087 11.7654 9.15224C12.1308 9.30362 12.4432 9.55996 12.6629 9.88886C12.8827 10.2178 13 10.6044 13 11C13 11.5304 12.7893 12.0391 12.4142 12.4142C12.0391 12.7893 11.5304 13 11 13Z"
        fill={fill}
      />
    </svg>
  );
};

type SpaceTagItem = {
  label: string;
  highlight?: boolean;
};

const SpaceTag = ({
  label,
  highlight = false,
  onOpen,
}: SpaceTagItem & { onOpen?: () => void }) => {
  const isHeading = label === "กิจกรรม";
  const clickable = highlight && Boolean(onOpen);

  const Tag: ElementType = clickable ? "button" : "div";

  return (
    <Tag
      type={clickable ? "button" : undefined}
      onClick={clickable ? onOpen : undefined}
      className={`flex max-w-full items-center gap-2.5 border-b border-r px-2.5 py-1 ${
        isHeading ? "w-[182px] justify-start" : "justify-center"
      } ${
        isHeading || highlight
          ? "border-[#ffe150] hover:bg-[#ffe150]"
          : "border-neutral-dark-darker"
      } ${clickable ? "pointer-events-auto cursor-pointer" : ""}`}
    >
      <p
        className={`font-th ${
          isHeading
            ? "desktop-s7-th-700 text-[#ffe150]"
            : highlight
              ? "desktop-s7-th-400 text-white"
              : "desktop-s7-th-400 text-neutral-light-light"
        }`}
      >
        {label}
      </p>
      {highlight ? <ToolBox fill="#FFE150" /> : null}
    </Tag>
  );
};

const SpaceTypeBlock = ({
  number,
  title,
  english,
  accent,
  darkLabel = false,
  layer = 1,
  children,
  tags,
  image,
}: {
  number: string;
  title: string;
  english: string;
  accent: string;
  darkLabel?: boolean;
  layer?: number;
  children: ReactNode;
  tags: SpaceTagItem[];
  image: { src: string; alt: string; flip: "rotate" | "scaleY" };
}) => {
  const trapBottom = "calc(var(--red-h) + 2px)";
  const imgTop = "calc(var(--card-h) - 2px - var(--red-h))";
  const [activityLabel, setActivityLabel] = useState<string | null>(null);
  const closeActivity = useCallback(() => setActivityLabel(null), []);

  return (
    <div
      className="relative flex w-full flex-col items-stretch"
      style={{ zIndex: 50 - layer }}
    >
      <div
        className="mx-auto sticky z-30 flex w-[var(--card-w)] max-w-full flex-col border-2 border-white"
        style={{ top: "var(--stack-top)", height: "var(--card-h)" }}
      >
        <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-hidden bg-[#40B9E8] p-5 md:p-7">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-[5px] border border-white">
              <p className="font-th desktop-s5-th-700 text-tk-black">
                {number}
              </p>
            </div>
            <p className="font-th desktop-s5-th-700 text-tk-black">{title}</p>
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto font-th desktop-s6-th-400 text-tk-black">
            {children}
          </div>
        </div>
        <div
          className="flex min-h-[180px] flex-1 shrink-0 items-end p-5 md:p-7"
          style={{ backgroundColor: accent }}
        >
          <div
            className={`rounded-[5px] border px-6 py-2 ${
              darkLabel ? "border-tk-black" : "border-white"
            }`}
          >
            <p
              className={`font-th desktop-s6-th-400 ${
                darkLabel ? "text-tk-black" : "text-white"
              }`}
            >
              {english}
            </p>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none sticky z-40 mt-200 flex w-full justify-center"
        style={{ top: "var(--stack-top)", height: "var(--card-h)" }}
      >
        <div className="relative h-full w-[var(--cover-w)] max-w-full">
          <div
            className="absolute left-0 right-0"
            style={{ bottom: trapBottom }}
          >
            <CoverTrap height="auto" width="100%">
              <div
                className="relative flex flex-wrap content-center items-center justify-center gap-1 px-5 py-2.5 mx-2 md:px-7"
                style={{ minHeight: "var(--trap-h)" }}
              >
                {tags.map((tag) => (
                  <SpaceTag
                    key={tag.label}
                    {...tag}
                    onOpen={() => setActivityLabel(tag.label)}
                  />
                ))}
              </div>
            </CoverTrap>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none sticky z-[35] mt-200 flex w-full justify-center"
        style={{ top: "var(--stack-top)", height: "var(--card-h)" }}
      >
        <div className="relative h-full w-[var(--cover-w)] max-w-full">
          <div className="absolute left-0 right-0" style={{ top: imgTop }}>
            <CoverTrap
              height="var(--img-h)"
              src={image.src}
              alt={image.alt}
              flip={image.flip}
              width="100%"
            />
          </div>
        </div>
      </div>

      <div
        className="w-full shrink-0"
        style={{
          height: "max(8rem, calc(100dvh - var(--stack-top) - var(--card-h)))",
        }}
        aria-hidden="true"
      />

      {activityLabel ? (
        <ActivityCardModal label={activityLabel} onClose={closeActivity}>
          <ReadNapActivityCard id={`${number}-activity-modal`} />
        </ActivityCardModal>
      ) : null}
    </div>
  );
};

export default SpaceTypeBlock;
