"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
import StepIndicator from "./StepIndicator";

type TopicIcon = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { fill?: string; stroke?: string }
>;

type TopicItem = {
  id: string;
  label: string;
};

type TopicBubbleProps = {
  icon: TopicIcon;
  children: React.ReactNode;
  className?: string;
  items: TopicItem[];
  onNavigate?: () => void;
};

type StepColumnProps = {
  width: number;
  title: React.ReactNode;
  className: string;
  children: React.ReactNode;
  href?: string;
  onNavigate?: () => void;
};

const DESIGN_WIDTH = 1216;
const DESIGN_HEIGHT = 546;
const MAP_WIDTH = 1200;
const DESIGN_SCALE = MAP_WIDTH / DESIGN_WIDTH;
const MAP_HEIGHT = DESIGN_HEIGHT * DESIGN_SCALE;
const TOPIC_RED = "#F5333F";
const TOPIC_STROKE = "#F5333F";

const fireAsset = "/img/steps-overlay/fire.svg";
const groupAsset = "/img/steps-overlay/group.svg";
const ellipseAsset = "/img/steps-overlay/ellipse.svg";
const rotatedEllipseAsset = "/img/steps-overlay/ellipse-rotated.svg";
const MENU_BORDER = "#C6A760";

const TOPIC_ITEMS = {
  t01: [
    { id: "subsubtopic2", label: "นิยาม" },
    { id: "subsubtopic3", label: "หัวใจสำคัญ" },
  ],
  t02: [{ id: "subsubtopic1", label: "ทำความรู้จัก เครือข่าย TK Park" }],
  t03: [
    { id: "subsubtopic4", label: "เต็มรูปแบบ" },
    { id: "subsubtopic5", label: "พัฒนาและต่อยอด" },
    { id: "subsubtopic6", label: "พันธมิตรการเรียนรู้" },
  ],
  t04: [{ id: "subsubtopic7", label: "เครื่องมือสนับสนุนเครือข่าย" }],
  t05: [{ id: "subsubtopic8", label: "องค์ประกอบสำคัญ 4 ด้าน" }],
  t06: [
    { id: "subsubtopic9", label: "ประเภทของพื้นที่" },
    { id: "subsubtopic10", label: "ตัวอย่างหลากรูปแบบ" },
    { id: "subsubtopic11", label: "ข้อแนะนำในการออกแบบพื้นที่" },
  ],
  t07: [{ id: "subsubtopic12", label: "เพลย์สเปซ (Play Space)" }],
  t08: [{ id: "subsubtopic13", label: "ประเภทของงบประมาณ" }],
  t09: [
    { id: "subsubtopic14", label: "ผู้ใช้บริการ" },
    { id: "subsubtopic15", label: "ค่าบริการ" },
    { id: "subsubtopic16", label: "การใช้พื้นที่" },
    { id: "subsubtopic17", label: "ช่วงเวลาเปิดทำการ" },
  ],
  t10: [
    { id: "subsubtopic18", label: "คุณสมบัติบุคลากร" },
    { id: "subsubtopic19", label: "ขอบเขตงานและบทบาท" },
    { id: "subsubtopic20", label: "การกำหนดจำนวนบุคลากร" },
    { id: "subsubtopic21", label: "การทดสอบบริการ" },
  ],
  t11: [
    { id: "subsubtopic22", label: "กลุ่มครอบครัวพร้อมเด็กเล็ก" },
    { id: "subsubtopic23", label: "กลุ่มนักเรียน" },
    { id: "subsubtopic24", label: "กลุ่มวัยรุ่นและนักศึกษา" },
    { id: "subsubtopic25", label: "กลุ่มผู้ใหญ่" },
    { id: "subsubtopic26", label: "กลุ่มผู้สูงอายุ" },
  ],
  t12: [
    { id: "subsubtopic27", label: "อ่านไปงีบไป" },
    { id: "subsubtopic28", label: "เด็กเต้นเร็วสูงอายุเต้นช้า" },
    { id: "subsubtopic29", label: "จริงจังอนาคต" },
  ],
  t13: [
    { id: "subsubtopic30", label: "ยะลา" },
    { id: "subsubtopic31", label: "ปัตตานี" },
    { id: "subsubtopic32", label: "พะเยา" },
    { id: "subsubtopic33", label: "นครราชสีมา" },
  ],
} satisfies Record<string, TopicItem[]>;

function parentSubtopicId(id: string) {
  const n = Number(id.replace("subsubtopic", ""));
  if (n <= 1) return "subtopic1";
  if (n <= 3) return "subtopic2";
  if (n <= 6) return "subtopic3";
  if (n <= 7) return "subtopic4";
  if (n <= 8) return "subtopic5";
  if (n <= 11) return "subtopic6";
  if (n <= 12) return "subtopic7";
  if (n <= 13) return "subtopic8";
  if (n <= 17) return "subtopic9";
  if (n <= 21) return "subtopic10";
  if (n <= 26) return "subtopic11";
  if (n <= 29) return "subtopic12";
  return "subtopic13";
}

function scrollToId(id: string) {
  const el =
    document.getElementById(id) ??
    document.getElementById(parentSubtopicId(id));
  el?.scrollIntoView({ behavior: "smooth" });
}

function Chevron() {
  return (
    <svg
      width="15"
      height="8"
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#C0A765] group-hover:text-white"
    >
      <path
        d="M14.3536 4.03519C14.5488 3.83993 14.5488 3.52335 14.3536 3.32809L11.1716 0.146106C10.9763 -0.049156 10.6597 -0.0491559 10.4645 0.146106C10.2692 0.341368 10.2692 0.657951 10.4645 0.853213L13.2929 3.68164L10.4645 6.51007C10.2692 6.70533 10.2692 7.02191 10.4645 7.21717C10.6597 7.41244 10.9763 7.41244 11.1716 7.21717L14.3536 4.03519ZM0 3.68164L2.18557e-08 4.18164L14 4.18164L14 3.68164L14 3.18164L-2.18557e-08 3.18164L0 3.68164Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TopicBubble({
  icon: Icon,
  children,
  className = "",
  items,
  onNavigate,
}: TopicBubbleProps) {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number>(0);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ left: 0, top: 0 });
  const [placement, setPlacement] = useState<"top" | "bottom">("top");

  const updatePosition = () => {
    const bubble = bubbleRef.current;
    const menu = menuRef.current;
    if (!bubble) return;

    const rect = bubble.getBoundingClientRect();
    const menuWidth = menu?.offsetWidth ?? 220;
    const menuHeight = menu?.offsetHeight ?? 48;
    const gap = 8;
    const pad = 12;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let left = rect.left + rect.width / 2 - menuWidth / 2;
    left = Math.max(pad, Math.min(left, vw - menuWidth - pad));

    const aboveTop = rect.top - menuHeight - gap;
    const placeTop = aboveTop >= pad;
    const top = placeTop
      ? aboveTop
      : Math.min(rect.bottom + gap, vh - menuHeight - pad);

    setPlacement(placeTop ? "top" : "bottom");
    setCoords({ left, top });
  };

  const show = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const hide = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
  };

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const sync = () => updatePosition();
    window.addEventListener("resize", sync);
    window.addEventListener("scroll", sync, true);

    return () => {
      window.removeEventListener("resize", sync);
      window.removeEventListener("scroll", sync, true);
    };
  }, [open]);

  useEffect(() => {
    return () => window.clearTimeout(closeTimer.current);
  }, []);

  const goTo = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    onNavigate?.();
    window.setTimeout(() => scrollToId(id), onNavigate ? 50 : 0);
    setOpen(false);
  };

  const isList = items.length > 1;
  const single = items[0];

  return (
    <div
      ref={bubbleRef}
      className={`absolute flex size-[168px] items-center justify-center ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <Icon
        fill={TOPIC_RED}
        stroke={TOPIC_STROKE}
        className="absolute inset-0 size-full"
        aria-hidden="true"
      />
      <span className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-[normal] text-white">
        {children}
      </span>
      {open
        ? createPortal(
            <div
              ref={menuRef}
              role="menu"
              aria-label="หัวข้อย่อย"
              onMouseEnter={show}
              onMouseLeave={hide}
              className="fixed z-[80] min-w-[168px] max-w-[300px]"
              style={{
                left: coords.left + 80,
                top: coords.top + 50,
              }}
            >
              <div
                className="rounded-[10px] border-2 bg-white p-2.5 shadow-sm"
                style={{ borderColor: MENU_BORDER }}
              >
                {isList ? (
                  <div className="flex flex-col gap-2">
                    {items.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        role="menuitem"
                        onClick={goTo(item.id)}
                        className="group flex w-fit items-center justify-between gap-1.5 rounded-[5px] border px-2 py-0.5 text-left font-th desktop-s7-th-400 text-neutral-dark-darker hover:bg-yellow-700 hover:text-white"
                        style={{ borderColor: MENU_BORDER }}
                      >
                        <span>{item.label}</span>
                        <Chevron />
                      </button>
                    ))}
                  </div>
                ) : single ? (
                  <button
                    type="button"
                    role="menuitem"
                    onClick={goTo(single.id)}
                    className="w-full p-3.5 text-center font-th desktop-s7-th-400 text-nowrap text-yellow-700"
                  >
                    {single.label}
                  </button>
                ) : null}
              </div>
              {placement === "top" ? (
                <div
                  className="absolute inset-x-0 top-full h-3"
                  aria-hidden="true"
                />
              ) : (
                <div
                  className="absolute inset-x-0 bottom-full h-3"
                  aria-hidden="true"
                />
              )}
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

function StepColumn({
  width,
  title,
  className,
  children,
  href,
  onNavigate,
}: StepColumnProps) {
  const content = (
    <>
      <div className="absolute inset-x-0 top-[14px] z-10 flex flex-col items-center">
        <h2 className="whitespace-nowrap text-center font-th desktop-s6-th-700 leading-[normal] text-[#1D252C]">
          {title}
        </h2>
        <span className="mt-[9px] hidden rounded-full border-2 border-white bg-red-50 px-3.5 py-1 font-th desktop-s7-th-700 text-tk-red group-hover:inline-flex">
          สำรวจ
        </span>
      </div>
      {children}
    </>
  );

  const sharedClassName = `group relative h-[546px] shrink-0 overflow-hidden rounded-[20px] after:pointer-events-none after:absolute after:inset-0 after:z-20 after:rounded-[20px] after:border-2 after:border-transparent ${className}`;
  const sharedStyle = { width };

  if (!href) {
    return (
      <section className={sharedClassName} style={sharedStyle}>
        {content}
      </section>
    );
  }

  const sectionId = href.replace("#", "");

  return (
    <a
      href={href}
      className={`${sharedClassName} cursor-pointer`}
      style={sharedStyle}
      onClick={(event) => {
        event.preventDefault();
        onNavigate?.();
        if (onNavigate) {
          window.setTimeout(() => scrollToSection(sectionId), 50);
          return;
        }
        scrollToSection(sectionId);
      }}
    >
      {content}
    </a>
  );
}

const StepsOverlay = ({
  background = "white",
  className,
  onNavigate,
  fit = "scale",
  stickyIndicator = false,
}: {
  background: string;
  className?: string;
  onNavigate?: () => void;
  fit?: "scale" | "scroll";
  stickyIndicator?: boolean;
}) => {
  const [scale, setScale] = useState(1);
  const [stuck, setStuck] = useState(false);
  const [stickyTop, setStickyTop] = useState(0);
  const indicatorAnchorRef = useRef<HTMLDivElement>(null);
  const isScroll = fit === "scroll";

  useEffect(() => {
    if (isScroll) {
      setScale(1);
      return;
    }

    const updateScale = () => {
      setScale(
        Math.min(
          1,
          window.innerWidth / MAP_WIDTH,
          window.innerHeight / MAP_HEIGHT,
        ),
      );
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, [isScroll]);

  useEffect(() => {
    if (!stickyIndicator) return;

    const updateSticky = () => {
      const anchor = indicatorAnchorRef.current;
      const nav = document.querySelector("[data-site-navbar]");
      if (!anchor || !(nav instanceof HTMLElement)) {
        setStuck(false);
        return;
      }

      const navBottom = nav.getBoundingClientRect().bottom;
      setStickyTop(navBottom);
      setStuck(anchor.getBoundingClientRect().top <= navBottom);
    };

    updateSticky();
    window.addEventListener("scroll", updateSticky, { passive: true });
    window.addEventListener("resize", updateSticky);

    return () => {
      window.removeEventListener("scroll", updateSticky);
      window.removeEventListener("resize", updateSticky);
    };
  }, [stickyIndicator]);

  const indicator = (
    <div
      ref={stickyIndicator ? indicatorAnchorRef : undefined}
      className={`w-full max-w-[1200px] ${stuck ? "invisible" : ""}`}
    >
      <StepIndicator showStepsOverlay={true} />
    </div>
  );

  return (
    <div
      className={`${background === "white" ? "bg-white" : "bg-transparent"} ${isScroll ? "w-full" : ""} ${className ?? ""}`}
      role={isScroll ? undefined : "dialog"}
      aria-modal={isScroll ? undefined : true}
      aria-label="6 ขั้นตอนในการเข้าร่วมเครือข่าย"
    >
      <div
        className={`flex mt-2 flex-col items-center gap-5 ${isScroll ? "" : "size-full justify-center"}`}
      >
        {indicator}
        {stuck
          ? createPortal(
              <div
                className="pointer-events-none fixed left-1/2 z-[25] w-full max-w-[1200px] -translate-x-1/2 px-2.5 lg:px-0"
                style={{ top: stickyTop }}
              >
                <div className="pointer-events-auto">
                  <StepIndicator showStepsOverlay={false} />
                </div>
              </div>,
              document.body,
            )
          : null}
        <div className={isScroll ? "w-full overflow-x-auto" : ""}>
          <div
            className={`relative shrink-0 ${isScroll ? "mx-auto min-w-[1200px]" : ""}`}
            style={{
              width: MAP_WIDTH * scale,
              height: MAP_HEIGHT * scale,
            }}
          >
            <div
              className="absolute left-0 top-0 flex h-[546px] w-[1216px] origin-top-left"
              style={{ transform: `scale(${scale * DESIGN_SCALE})` }}
            >
              <StepColumn
                width={162}
                href="#section1"
                onNavigate={onNavigate}
                title={
                  <>
                    ทำความ
                    <br />
                    รู้จัก
                  </>
                }
                className="bg-[#FDF1BD] hover:after:border-white"
              >
                <div className="absolute inset-x-0 top-[210px] h-[336px]">
                  <TopicBubble
                    icon={T02}
                    className="left-[-3px] top-0"
                    items={TOPIC_ITEMS.t02}
                    onNavigate={onNavigate}
                  >
                    ก้าวแรกสู่
                    <br />
                    ห้องสมุดมีชีวิต
                  </TopicBubble>
                  <TopicBubble
                    icon={T01}
                    className="bottom-0 left-[-3px]"
                    items={TOPIC_ITEMS.t01}
                    onNavigate={onNavigate}
                  >
                    แนวคิด
                    <br />
                    ห้องสมุดมีชีวิต
                  </TopicBubble>
                </div>
              </StepColumn>

              <StepColumn
                width={168}
                href="#section2"
                onNavigate={onNavigate}
                title={
                  <>
                    ตกลงแนวทาง
                    <br />
                    ความร่วมมือ
                  </>
                }
                className="bg-[#FEE6A6] hover:after:border-white"
              >
                <div className="absolute inset-x-0 top-[210px] h-[336px]">
                  <TopicBubble
                    icon={T03}
                    className="left-1/2 top-0 -translate-x-1/2"
                    items={TOPIC_ITEMS.t03}
                    onNavigate={onNavigate}
                  >
                    รูปแบบของ
                    <br />
                    การเข้าร่วม
                  </TopicBubble>
                  <TopicBubble
                    icon={T04}
                    className="bottom-0 left-1/2 -translate-x-1/2"
                    items={TOPIC_ITEMS.t04}
                    onNavigate={onNavigate}
                  >
                    สิทธิประโยชน์
                    <br />
                    ของเครือข่าย
                  </TopicBubble>
                </div>
              </StepColumn>

              <StepColumn
                width={219}
                href="#section3"
                onNavigate={onNavigate}
                title="ออกแบบพื้นที่และบริการ"
                className="bg-[#FDF1BD] hover:after:border-white"
              >
                <div className="absolute inset-x-0 top-[42px] h-[504px]">
                  <TopicBubble
                    icon={T06}
                    className="left-[51px] top-[1px]"
                    items={TOPIC_ITEMS.t06}
                    onNavigate={onNavigate}
                  >
                    หลักการ
                    <br />
                    ออกแบบพื้นที่
                  </TopicBubble>
                  <TopicBubble
                    icon={T05}
                    className="left-[51px] top-[169px]"
                    items={TOPIC_ITEMS.t05}
                    onNavigate={onNavigate}
                  >
                    แนวทาง
                    <br />
                    การบริหาร
                    <br />
                    จัดการ
                    <br />
                    พื้นที่เรียนรู้
                  </TopicBubble>
                  <TopicBubble
                    icon={T07}
                    className="left-0 top-[336px]"
                    items={TOPIC_ITEMS.t07}
                    onNavigate={onNavigate}
                  >
                    ตัวอย่าง
                    <br />
                    สร้างแรงบันดาลใจ
                  </TopicBubble>
                </div>
              </StepColumn>

              <StepColumn
                width={86}
                href="#section4"
                onNavigate={onNavigate}
                title={
                  <>
                    ก่อสร้าง
                    <br />
                    พื้นที่
                  </>
                }
                className="bg-[#FEE6A6] hover:after:border-white"
              >
                <div className="absolute inset-x-0 top-[79px] h-[467px]">
                  <div className="absolute left-[-41px] top-[299px] h-[168px] w-[127px] overflow-hidden rounded-br-[20px]">
                    <TopicBubble
                      icon={T08}
                      className="bottom-0 left-0"
                      items={TOPIC_ITEMS.t08}
                      onNavigate={onNavigate}
                    >
                      แนวทาง
                      <br />
                      การจัดสรร
                      <br />
                      งบประมาณ
                    </TopicBubble>
                  </div>
                  <Image
                    src={fireAsset}
                    alt=""
                    width={73}
                    height={73}
                    className="absolute left-[6px] top-[218px]"
                    aria-hidden="true"
                  />
                </div>
              </StepColumn>

              <StepColumn
                width={235}
                href="#section5"
                onNavigate={onNavigate}
                title={
                  <>
                    เตรียม
                    <br />
                    ความพร้อม
                  </>
                }
                className="bg-[#FDF1BD] hover:after:border-white"
              >
                <div className="absolute inset-x-0 top-[209px] h-[337px]">
                  <TopicBubble
                    icon={T09}
                    className="left-[-25px] top-0"
                    items={TOPIC_ITEMS.t09}
                    onNavigate={onNavigate}
                  >
                    นโยบายและ
                    <br />
                    ข้อตกลง
                    <br />
                    การใช้พื้นที่
                  </TopicBubble>
                  <TopicBubble
                    icon={T10}
                    className="left-[calc(50%+0.5px)] top-[169px] -translate-x-1/2"
                    items={TOPIC_ITEMS.t10}
                    onNavigate={onNavigate}
                  >
                    หลักการบริหาร
                    <br />
                    บุคลากร
                  </TopicBubble>
                </div>
              </StepColumn>

              <StepColumn
                width={346}
                href="#section6"
                onNavigate={onNavigate}
                title={
                  <>
                    เปิด
                    <br />
                    บริการ
                  </>
                }
                className="bg-[#FEE6A6] hover:after:border-white"
              >
                <div className="absolute inset-x-0 top-[125px] h-[421px]">
                  <Image
                    src={groupAsset}
                    alt=""
                    width={81}
                    height={238}
                    className="absolute left-[230.52px] top-[190px] h-[237.999px] w-[80.9209px]"
                    aria-hidden="true"
                  />
                  <TopicBubble
                    icon={T11}
                    className="bottom-0 left-1/2 -translate-x-1/2"
                    items={TOPIC_ITEMS.t11}
                    onNavigate={onNavigate}
                  >
                    รูปแบบบริการ
                    <br />
                    ตามกลุ่มเป้าหมาย
                  </TopicBubble>
                  <TopicBubble
                    icon={T13}
                    className="left-[-19px] top-[87px]"
                    items={TOPIC_ITEMS.t13}
                    onNavigate={onNavigate}
                  >
                    ตัวอย่าง
                    <br />
                    พื้นที่การเรียนรู้
                  </TopicBubble>
                  <TopicBubble
                    icon={T12}
                    className="left-[178px] top-0"
                    items={TOPIC_ITEMS.t12}
                    onNavigate={onNavigate}
                  >
                    แนะนำ
                    <br />
                    กิจกรรม
                  </TopicBubble>
                  <Image
                    src={ellipseAsset}
                    alt=""
                    width={32}
                    height={32}
                    className="absolute left-[60px] top-[14px]"
                    aria-hidden="true"
                  />
                  <div className="absolute left-[53.77px] top-[10px] flex h-[39.727px] w-[47.313px] items-center justify-center">
                    <div className="flex-none rotate-[-36.61deg]">
                      <Image
                        src={rotatedEllipseAsset}
                        alt=""
                        width={50}
                        height={13}
                        className="block h-[12.733px] w-[49.48px]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </StepColumn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsOverlay;
