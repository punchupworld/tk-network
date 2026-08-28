"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import StepsOverlay from "@/src/components/StepsOverlay";
import HoverPanel from "@/src/components/HoverPanel";
import Image from "next/image";
import { asset } from "@/src/lib/asset";

type NavItem = {
  id: string;
  label?: string;
  mobileLabel?: string;
  icon?: React.ReactNode;
  grow?: boolean;
  href?: string;
};

const navItems: NavItem[] = [
  {
    id: "community",
    href: "#intro-section",
    icon: (
      <Image
        src={asset("/img/tkpark-logo.svg")}
        alt="TKPark"
        width={89}
        height={34}
        className="h-6 w-auto md:h-8.5 transition-[filter] duration-200 brightness-0 invert"
      />
    ),
  },
  {
    id: "steps",
    label: "6 ขั้นตอนในการเข้าร่วมเครือข่าย",
    mobileLabel: "6 ขั้นตอนในการเข้าร่วมเครือข่าย",
    grow: true,
  },
];

const Navbar = () => {
  const [active, setActive] = useState<string>(navItems[0].id);
  const [showStepsOverlay, setShowStepsOverlay] = useState(false);
  const [overlayTop, setOverlayTop] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = showStepsOverlay ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showStepsOverlay]);

  useLayoutEffect(() => {
    if (!showStepsOverlay) return;

    const updateOverlayTop = () => {
      const nav = navRef.current;
      if (!nav) return;
      setOverlayTop(nav.getBoundingClientRect().bottom);
    };

    updateOverlayTop();
    window.addEventListener("resize", updateOverlayTop);
    return () => window.removeEventListener("resize", updateOverlayTop);
  }, [showStepsOverlay]);

  const navClassName = (item: NavItem, isActive: boolean) =>
    [
      "flex items-center gap-1.5 md:gap-2 rounded-full px-2.5 md:px-4 md:py-px py-1 self-stretch",
      item.grow ? "min-w-0 flex-1 w-full" : "w-auto",
      "text-sm leading-5 whitespace-nowrap",
      "group transition-colors duration-200",
      "border hover:text-white",
      isActive
        ? "bg-tk-red  text-white border-transparent"
        : "bg-tk-red text-red-100 border-transparent",
    ].join(" ");

  const handleNavClick = (itemId: string) => {
    if (itemId === "steps") {
      if (showStepsOverlay) {
        setShowStepsOverlay(false);
        return;
      }
      setActive(itemId);
      setShowStepsOverlay(true);
      return;
    }
    setActive(itemId);
    setShowStepsOverlay(false);
  };

  const closeStepsOverlay = () => {
    setShowStepsOverlay(false);
  };

  return (
    <div
      data-site-navbar
      className="sticky top-10 z-30 max-w-[1200px] mx-auto w-full lg:px-0 px-2.5"
    >
      <nav ref={navRef} className="relative z-40 flex items-center font-th">
        {navItems.map((item) => {
          const isActive = active === item.id;
          const isStepsOpen = item.id === "steps" && showStepsOverlay;
          const content = (
            <>
              {item.icon ? <span className="shrink-0">{item.icon}</span> : null}
              {item.mobileLabel ? (
                <>
                  <span className="md:hidden mobile-s6-th-700">
                    {item.mobileLabel}
                  </span>
                  <span className="hidden md:inline desktop-s6-th-700">
                    {item.label}
                  </span>
                </>
              ) : item.label ? (
                <span className="desktop-s6-th-700">{item.label}</span>
              ) : null}
              {isStepsOpen ? (
                <span
                  className="ml-auto flex shrink-0 items-center justify-center rounded-full p-0.5"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </span>
              ) : null}
            </>
          );

          if (item.href) {
            return (
              <div
                key={item.id}
                className="group/nav relative flex self-stretch"
              >
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={navClassName(item, isActive)}
                >
                  {content}
                </a>
                {item.id === "community" ? (
                  <HoverPanel
                    description="รู้จัก TK Park และการเข้าร่วมเป็นเครือข่าย"
                    ctaLabel="กลับหน้าแรก"
                    ctaHref="#intro-section"
                  />
                ) : null}
              </div>
            );
          }

          return (
            <div
              key={item.id}
              className="group/nav relative flex flex-1 self-stretch"
            >
              <button
                type="button"
                onClick={() => handleNavClick(item.id)}
                aria-pressed={isActive}
                aria-expanded={
                  item.id === "steps" ? showStepsOverlay : undefined
                }
                className={navClassName(item, isActive)}
              >
                {content}
              </button>
              {item.id === "steps" && !showStepsOverlay ? (
                <HoverPanel
                  description="หลักการ ตัวอย่าง และประสบการณ์จริงที่จำเป็นในการสร้างห้องสมุดมีชีวิต"
                  ctaLabel="ไปที่องค์ความรู้ทั้งหมด"
                  onCtaClick={() => handleNavClick(item.id)}
                />
              ) : null}
            </div>
          );
        })}
      </nav>

      {showStepsOverlay ? (
        <div className="fixed inset-0 z-20 overflow-hidden bg-white">
          <div
            className="h-full overflow-hidden"
            style={{ paddingTop: overlayTop }}
          >
            <StepsOverlay
              background="transparent"
              className="h-full overflow-hidden"
              onNavigate={closeStepsOverlay}
              fit="scroll"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
