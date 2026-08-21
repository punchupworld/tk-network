import React from "react";

const hoverArrow = (
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

const hoverCtaClassName =
  "flex items-center gap-1.5 rounded-[5px] border border-yellow-700 px-3 py-1 font-th desktop-s7-th-400 whitespace-nowrap text-neutral-dark-darker";

type HoverPanelProps = {
  description: React.ReactNode;
  ctaLabel: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  placement?: "top" | "bottom";
  align?: "left" | "right";
  nowrap?: boolean;
  className?: string;
};

function HoverPanel({
  description,
  ctaLabel,
  ctaHref,
  onCtaClick,
  placement = "bottom",
  align = "left",
  nowrap = true,
  className = "",
}: HoverPanelProps) {
  const cta = ctaHref ? (
    <a href={ctaHref} onClick={onCtaClick} className={hoverCtaClassName}>
      {ctaLabel}
      {hoverArrow}
    </a>
  ) : (
    <button type="button" onClick={onCtaClick} className={hoverCtaClassName}>
      {ctaLabel}
      {hoverArrow}
    </button>
  );

  return (
    <div
      className={[
        "pointer-events-none invisible absolute z-50 opacity-0 transition-opacity duration-200 md:block hidden",
        "group-hover/nav:pointer-events-auto group-hover/nav:visible group-hover/nav:opacity-100",
        "group-focus-within/nav:pointer-events-auto group-focus-within/nav:visible group-focus-within/nav:opacity-100",
        placement === "top" ? "bottom-full pb-2" : "top-full pt-2",
        align === "right" ? "right-0" : "left-0",
      ].join(" ")}
    >
      <div
        className={[
          "flex flex-col items-end gap-2.5 rounded-[10px] bg-[#D9D9D9] p-5",
          className,
        ].join(" ")}
      >
        <p
          className={[
            "font-th desktop-s6-th-400 text-left text-tk-black",
            nowrap ? "whitespace-nowrap" : "",
          ].join(" ")}
        >
          {description}
        </p>
        {cta}
      </div>
    </div>
  );
}

export default HoverPanel;
