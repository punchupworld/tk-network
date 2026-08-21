"use client";

import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

const ActivityCardModal = ({
  label,
  onClose,
  children,
}: {
  label: string;
  onClose: () => void;
  children: ReactNode;
}) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-white/50 p-5 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-[860px] rounded-[20px] border border-white bg-tk-black shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="ปิด"
          className="absolute top-5 right-5 z-10 flex size-8 cursor-pointer items-center justify-center rounded-full bg-tk-red md:top-8 md:right-8"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 1L11 11M11 1L1 11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="max-h-[85vh] overflow-y-auto p-5 pt-15 md:p-10 md:pt-20 bg-yellow-200 rounded-[20px]">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ActivityCardModal;
