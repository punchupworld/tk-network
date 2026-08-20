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
import { asset } from "@/src/lib/asset";
import { TOPIC_ITEMS, type TopicItem } from "@/src/constants/topicItems";

type TopicIcon = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { fill?: string; stroke?: string }
>;

type TopicBubbleProps = {
  icon: TopicIcon;
  children: React.ReactNode;
  className?: string;
  items: TopicItem[];
  onNavigate?: () => void;
  menuStyle?: "button" | "plain";
};

type StepColumnProps = {
  width: number;
  title: React.ReactNode;
  className: string;
  children: React.ReactNode;
  href?: string;
  onNavigate?: () => void;
  overflowVisible?: boolean;
};

const DESIGN_WIDTH = 1216;
const DESIGN_HEIGHT = 546;
const MAP_WIDTH = 1200;
const DESIGN_SCALE = MAP_WIDTH / DESIGN_WIDTH;
const MAP_HEIGHT = DESIGN_HEIGHT * DESIGN_SCALE;
const TOPIC_RED = "#F5333F";
const TOPIC_STROKE = "#F5333F";

const groupAsset = asset("/img/steps-overlay/group.svg");
const ellipseAsset = asset("/img/steps-overlay/ellipse.svg");
const rotatedEllipseAsset = asset("/img/steps-overlay/ellipse-rotated.svg");
const MENU_BORDER = "#C6A760";

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
  const exact = document.getElementById(id);
  const el = exact ?? document.getElementById(parentSubtopicId(id));
  el?.scrollIntoView({
    behavior: "smooth",
    block: exact && id.startsWith("subsubtopic") ? "center" : "start",
  });
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

function BudgetTabShape({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="78"
      height="91"
      viewBox="0 0 78 91"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M44.0475 9.08203H0.5V60.0461H44.0475V9.08203Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.62109 42.623H37.9251"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.62109 49.3848H37.9251"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.88281 33.5209C6.88281 33.5209 15.2321 22.6005 18.8815 24.6791C22.5308 26.7577 13.3995 36.3789 17.0568 34.3003C20.7141 32.2218 23.5182 30.4345 25.6668 29.3559C30.3588 27.0175 23.8421 34.82 25.9274 34.5601C32.1914 33.7807 37.6654 29.6157 37.6654 29.6157"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2778 18.7031C27.3209 18.7031 31.4091 14.6282 31.4091 9.60157C31.4091 4.57491 27.3209 0.5 22.2778 0.5C17.2347 0.5 13.1465 4.57491 13.1465 9.60157C13.1465 14.6282 17.2347 18.7031 22.2778 18.7031Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M76.7096 38.748H33.1621V89.7121H76.7096V38.748Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.2832 72.2891H70.5872"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.2832 66.5723H70.5872"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.932 48.3686C56.5243 48.3686 57.8151 47.082 57.8151 45.4949C57.8151 43.9077 56.5243 42.6211 54.932 42.6211C53.3397 42.6211 52.0488 43.9077 52.0488 45.4949C52.0488 47.082 53.3397 48.3686 54.932 48.3686Z"
        fill="#FFFAEA"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.7479 53.4238H42.3495C40.8793 53.4238 39.6875 54.6118 39.6875 56.0771V58.4549C39.6875 59.9203 40.8793 61.1082 42.3495 61.1082H58.7479C60.2181 61.1082 61.4099 59.9203 61.4099 58.4549V56.0771C61.4099 54.6118 60.2181 53.4238 58.7479 53.4238Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.8909 76.084L68.0678 78.5877L70.7614 77.9421L69.5291 80.4222L71.7251 82.1228L69.0078 82.7055L69.0394 85.4769L66.8909 83.7211L64.7423 85.4769L64.7739 82.7055L62.0566 82.1228L64.2447 80.4222L63.0124 77.9421L65.7139 78.5877L66.8909 76.084Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WaveShape({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="293"
      height="100"
      viewBox="0 0 293 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M61.3926 98.5482C58.999 98.5482 57.6576 97.3588 57.0332 96.5851C54.6511 93.629 56.3741 89.2872 56.9407 87.8669C61.2654 76.9778 77.4425 62.613 91.6885 51.5275C91.966 49.2412 91.6191 47.6245 90.6478 46.8971C86.8319 44.068 70.9901 48.2135 51.1706 63.352C35.0975 75.6268 4.51248 95.7884 4.21183 95.9847L0.5 90.3611C0.800647 90.1648 31.1891 70.1302 47.0771 57.994C64.2025 44.9109 85.5715 34.7378 94.6719 41.4814C96.4064 42.7747 97.5627 44.4837 98.1293 46.6199C102.442 43.4098 106.328 40.65 109.323 38.583C135.167 20.6501 161.543 6.38912 174.933 3.08659C186.277 0.280599 194.498 1.05427 200.049 5.41915C208.097 11.7586 208.027 23.8486 207.969 33.5599C207.946 38.0865 207.9 44.934 209.392 45.9386C209.669 46.1234 210.745 46.2158 212.965 45.3035C236.161 35.8694 287.907 0.857966 288.427 0.5L292.22 6.07735C290.069 7.53231 239.352 41.8393 215.509 51.5391C211.369 53.225 208.131 53.2134 205.611 51.516C201.136 48.4906 201.182 41.5622 201.228 33.5253C201.274 24.8533 201.332 15.015 195.874 10.7194C192.116 7.76325 185.618 7.39374 176.552 9.63392C160.941 13.4907 125.199 34.4837 97.8402 55.3497C97.4933 56.77 97.0308 58.2712 96.4295 59.8647C88.3467 81.412 71.0711 97.1047 62.7339 98.4327C62.2598 98.5135 61.8204 98.5482 61.4041 98.5366L61.3926 98.5482ZM87.4795 63.5829C75.2108 73.8138 65.9485 83.4327 63.208 90.338C63.023 90.7999 62.8958 91.1925 62.7917 91.5274C67.7062 89.7145 79.8245 79.3103 87.4795 63.5829Z"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TreeShape({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="123"
      height="102"
      viewBox="0 0 123 102"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M30.5494 101.025C30.5494 101.025 27.2485 85.6462 54.7609 76.3019C67.2417 72.0657 70.6381 65.977 70.4335 61.6318C70.0789 54.3988 60.2715 53.459 47.6134 49.3726C30.5631 43.8832 32.7591 33.9941 32.7591 33.9941L34.9552 33.4492C34.9552 33.4492 35.3644 43.0659 51.1871 46.4985C60.3534 48.4872 66.8734 49.1138 70.3107 49.931C84.3329 53.2955 86.0925 62.4627 84.4829 69.7092C82.0686 80.5518 62.4812 83.998 69.9697 101.025H30.5631H30.5494Z"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M79.5176 60.3656C79.5176 60.3656 91.7529 67.367 98.3548 50.6127L99.8689 49.9316C99.8689 49.9316 102.351 63.049 81.9183 68.1979"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M98.8327 52.9286C98.8327 52.9286 102.475 58.2137 108.49 52.6426H109.24C109.24 52.6426 107.672 58.527 98.2734 56.62"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.3008 41.4049C37.3008 41.4049 46.7262 45.287 52.7961 36.5012L53.7373 36.3105C53.7373 36.3105 53.2598 44.2382 41.1064 44.4152"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.9941 83.8469C45.4033 76.0147 41.2841 76.0147 27.2482 74.7751C13.2124 73.5356 15.6949 63.6465 15.6949 63.6465H18.5866C18.5866 63.6465 13.6353 72.296 35.0914 72.296C52.8373 72.296 56.9567 74.3529 57.3795 80.1283"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M67.5963 12.0237H67.5554C65.5367 12.0237 63.5861 11.111 62.413 9.46284C58.5937 4.08241 51.7463 0.5 43.9168 0.5C35.3098 0.5 27.8895 4.83159 24.384 11.0974C23.6065 12.4868 22.1879 13.3994 20.6056 13.3994C20.6056 13.3994 20.6056 13.3994 20.592 13.3994C11.5758 13.3994 5.51953 19.6788 5.51953 27.4703C5.51953 35.2617 12.8307 41.582 21.8333 41.582C25.2706 41.582 28.4488 40.6557 31.0814 39.0893C33.5094 37.6318 36.4147 37.0461 39.1973 37.5909C40.7113 37.8906 42.2936 38.0404 43.9168 38.0404C46.222 38.0404 48.4454 37.7271 50.5323 37.1414C53.4923 36.3105 56.6159 36.9098 59.344 38.2992C61.7583 39.5251 64.5818 40.2334 67.5826 40.2334C76.5989 40.2334 83.8964 33.9131 83.8964 26.1217C83.8964 18.3303 76.5852 12.01 67.5826 12.01L67.5963 12.0237Z"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.4369 53.5118H34.4233C33.3184 53.5118 32.2545 53.0078 31.6134 52.1088C29.5264 49.1665 25.7754 47.2051 21.4923 47.2051C16.7864 47.2051 12.7217 49.5752 10.812 53.0078C10.3892 53.7706 9.61166 54.2609 8.73868 54.2609C3.81455 54.2609 0.5 57.6935 0.5 61.957C0.5 66.2205 4.49656 69.6803 9.4207 69.6803C11.3031 69.6803 13.0354 69.1763 14.4813 68.3181C15.818 67.5281 17.4003 67.2012 18.9143 67.5009C19.7464 67.6643 20.6057 67.7461 21.4923 67.7461C22.7609 67.7461 23.9749 67.569 25.107 67.2557C26.7302 66.8062 28.4352 67.1195 29.922 67.8823C31.2451 68.5497 32.7864 68.9447 34.4369 68.9447C39.361 68.9447 43.3577 65.4849 43.3577 61.2214C43.3577 56.958 39.361 53.4981 34.4369 53.4981V53.5118Z"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M113.195 38.7227H113.181C112.076 38.7227 111.012 38.2187 110.371 37.3197C108.284 34.3775 104.533 32.416 100.25 32.416C95.5443 32.416 91.4795 34.7861 89.5698 38.2187C89.147 38.9815 88.3696 39.4719 87.4966 39.4719C82.5724 39.4719 79.2578 42.9044 79.2578 47.1679C79.2578 51.4314 83.2545 54.8912 88.1786 54.8912C90.0609 54.8912 91.7932 54.3872 93.2391 53.5291C94.5758 52.739 96.1581 52.4121 97.6722 52.7118C98.5042 52.8753 99.3636 52.957 100.25 52.957C101.519 52.957 102.733 52.7799 103.865 52.4666C105.488 52.0171 107.193 52.3304 108.68 53.0932C110.003 53.7606 111.544 54.1557 113.195 54.1557C118.119 54.1557 122.116 50.6958 122.116 46.4324C122.116 42.1689 118.119 38.7091 113.195 38.7091V38.7227Z"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3516 70.0359C19.3516 70.0359 28.8452 71.7113 32.7054 62.694L33.5375 62.3398C33.5375 62.3398 34.6696 69.5183 23.4709 71.9974"
        stroke="#FFFAEA"
        strokeLinecap="round"
        strokeLinejoin="round"
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
  menuStyle = "button",
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

  const isSingle = items.length === 1;
  const isPlain = menuStyle === "plain";

  return (
    <div
      ref={bubbleRef}
      className={`absolute z-10 flex size-[168px] items-center justify-center ${className}`}
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
                <div
                  className={`flex flex-col gap-2 ${isSingle ? "items-center" : ""}`}
                >
                  {items.map((item) =>
                    isPlain ? (
                      <button
                        key={item.id}
                        type="button"
                        role="menuitem"
                        onClick={goTo(item.id)}
                        className="w-full p-3.5 text-center font-th desktop-s7-th-400 text-nowrap text-yellow-700"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <button
                        key={item.id}
                        type="button"
                        role="menuitem"
                        onClick={goTo(item.id)}
                        className="group flex w-fit items-center justify-between gap-1.5 rounded-[5px] border px-2 py-0.5 text-left font-th desktop-s7-th-400 text-nowrap text-neutral-dark-darker hover:bg-yellow-700 hover:text-white"
                        style={{ borderColor: MENU_BORDER }}
                      >
                        <span>{item.label}</span>
                        <Chevron />
                      </button>
                    ),
                  )}
                </div>
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
  overflowVisible = false,
}: StepColumnProps) {
  const content = (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-[14px] z-40 flex flex-col items-center">
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

  const sharedClassName = `group relative h-[546px] shrink-0 ${overflowVisible ? "overflow-visible" : "overflow-hidden"} rounded-[20px] after:pointer-events-none after:absolute after:inset-0 after:z-20 after:rounded-[20px] after:border-2 after:border-transparent ${className}`;
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
                <BudgetTabShape className="pointer-events-none absolute left-[26px] top-[64px]" />
                <div className="absolute inset-x-0 top-[210px] h-[336px]">
                  <TopicBubble
                    icon={T02}
                    className="left-[-3px] top-0"
                    items={TOPIC_ITEMS.t02}
                    onNavigate={onNavigate}
                    menuStyle="plain"
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
                    menuStyle="plain"
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
                overflowVisible
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
                  <div className="absolute left-[-41px] top-[299px] z-30 h-[168px] w-[127px] overflow-hidden rounded-br-[20px]">
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
                <TreeShape className="pointer-events-none absolute left-[15px] top-[106px]" />
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

              <WaveShape className="pointer-events-none absolute left-[118px] top-[81px] z-[5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsOverlay;
