"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import StepsOverlay from "@/src/components/StepsOverlay";
import Image from "next/image";
import { asset } from "@/src/lib/asset";

type NavItem = {
  id: string;
  label?: string;
  icon?: React.ReactNode;
  grow?: boolean;
};

const navItems: NavItem[] = [
  {
    id: "community",
    icon: (
      <Image
        src={asset("/img/tkpark-logo.svg")}
        alt="TKPark"
        width={100}
        height={34}
        className="w-auto h-[34px] transition-[filter] duration-200 group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    id: "steps",
    label: "6 ขั้นตอนในการเข้าร่วมเครือข่าย",
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

  const handleNavClick = (itemId: string) => {
    setActive(itemId);
    if (itemId === "steps") {
      setShowStepsOverlay(true);
    } else {
      setShowStepsOverlay(false);
    }
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

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              aria-pressed={isActive}
              aria-expanded={item.id === "steps" ? showStepsOverlay : undefined}
              className={[
                "flex items-center gap-2 rounded-full px-4 py-[3px] self-stretch",
                item.grow ? "flex-1 w-full" : "w-auto",
                "text-sm leading-5 whitespace-nowrap",
                "group transition-colors duration-200",
                "border hover:text-white",
                isActive
                  ? "bg-tk-red  text-white border-transparent"
                  : "bg-tk-red text-red-100 border-transparent",
              ].join(" ")}
            >
              {item.icon ? <span className="shrink-0">{item.icon}</span> : null}
              <span className="desktop-s6-700">{item.label}</span>
              {isStepsOpen ? (
                <span
                  role="button"
                  tabIndex={0}
                  aria-label="ปิดเมนู 6 ขั้นตอน"
                  onClick={(event) => {
                    event.stopPropagation();
                    closeStepsOverlay();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      event.stopPropagation();
                      closeStepsOverlay();
                    }
                  }}
                  className="ml-auto flex shrink-0 items-center justify-center rounded-full p-0.5 hover:bg-white/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </span>
              ) : null}
            </button>
          );
        })}
      </nav>

      {showStepsOverlay ? (
        <div className="fixed inset-0 z-20 overflow-hidden bg-white">
          <div className="h-full overflow-hidden" style={{ paddingTop: overlayTop }}>
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
