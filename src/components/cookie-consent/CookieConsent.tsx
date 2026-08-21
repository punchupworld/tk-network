"use client";

import { useEffect, useRef, useState } from "react";
import { COOKIE_POLICY_HREF } from "./messages";
import { useCookieConsent } from "./CookieConsentProvider";

const buttonBase =
  "rounded-full px-5 py-1.5 font-th mobile-s6-th-700 whitespace-nowrap transition-colors md:desktop-s6-th-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tk-red";
const primaryButton = `${buttonBase} bg-tk-red text-white hover:bg-tk-black`;
const secondaryButton = `${buttonBase} border border-tk-black/20 bg-white text-tk-black hover:border-tk-red hover:text-tk-red`;
const linkClass =
  "underline underline-offset-2 hover:text-tk-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tk-red";

const LangButton = () => {
  const { t, toggleLang } = useCookieConsent();
  return (
    <button
      type="button"
      onClick={toggleLang}
      className="font-th mobile-s7-s8-th-700 text-tk-black/60 underline underline-offset-2 hover:text-tk-red md:desktop-s7-th-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tk-red"
    >
      {t.langSwitch}
    </button>
  );
};

const AnalyticsSwitch = ({
  checked,
  onChange,
  labelId,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  labelId: string;
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-labelledby={labelId}
    onClick={() => onChange(!checked)}
    className={`relative h-6 w-11 shrink-0 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tk-red ${
      checked ? "bg-tk-red" : "bg-tk-black/25"
    }`}
  >
    <span
      className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white transition-transform ${
        checked ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </button>
);

const CookieBanner = () => {
  const { t, openSettings, acceptAll, rejectAll } = useCookieConsent();
  return (
    <section
      role="region"
      aria-label={t.bannerTitle}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-tk-black/10 bg-white shadow-[0_-8px_24px_rgba(3,9,32,0.12)]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex flex-col gap-1 text-tk-black">
          <div className="flex items-center justify-between gap-3">
            <p className="font-th mobile-s6-th-700 md:desktop-s6-th-700">
              {t.bannerTitle}
            </p>
            <span className="lg:hidden">
              <LangButton />
            </span>
          </div>
          <p className="font-th mobile-s7-s8-th-400 md:desktop-s7-th-400">
            {t.bannerDescription}{" "}
            <a href={COOKIE_POLICY_HREF} className={linkClass}>
              {t.policyLink}
            </a>
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={openSettings}
            className={secondaryButton}
          >
            {t.settings}
          </button>
          <button type="button" onClick={rejectAll} className={secondaryButton}>
            {t.rejectAll}
          </button>
          <button type="button" onClick={acceptAll} className={primaryButton}>
            {t.acceptAll}
          </button>
          <span className="hidden lg:inline-flex lg:pl-2">
            <LangButton />
          </span>
        </div>
      </div>
    </section>
  );
};

// Mounted only while open, so the draft toggle always starts from the saved
// choice and no state has to be reset on open.
const CookieSettingsPanel = () => {
  const { t, consent, closeSettings, acceptAll, rejectAll, save } =
    useCookieConsent();
  const [analytics, setAnalytics] = useState(consent?.analytics ?? false);
  const panelRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    openerRef.current = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSettings();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [closeSettings]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-tk-black/50 p-4 sm:items-center"
      onClick={closeSettings}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] w-full max-w-[600px] overflow-y-auto rounded-2xl bg-white p-6 text-tk-black shadow-xl focus:outline-none"
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="cookie-settings-title"
            className="font-th mobile-s6-th-700 md:desktop-s6-th-700"
          >
            {t.settingsTitle}
          </h2>
          <div className="flex items-center gap-3">
            <LangButton />
            <button
              type="button"
              onClick={closeSettings}
              aria-label={t.close}
              className="rounded-full px-2 text-tk-black/60 hover:text-tk-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tk-red"
            >
              ✕
            </button>
          </div>
        </div>

        <p className="mt-2 font-th mobile-s7-s8-th-400 text-tk-black/70 md:desktop-s7-th-400">
          {t.settingsDescription}{" "}
          <a
            href={COOKIE_POLICY_HREF}
            className={linkClass}
            onClick={closeSettings}
          >
            {t.policyLink}
          </a>
        </p>

        <ul className="my-6 flex list-none flex-col gap-4 p-0">
          <li className="flex items-start justify-between gap-4 rounded-xl border border-tk-black/10 p-4">
            <div className="flex flex-col gap-1">
              <p className="font-th mobile-s6-th-700 md:desktop-s6-th-700">
                {t.necessary}
              </p>
              <p className="font-th mobile-s7-s8-th-400 text-tk-black/70 md:desktop-s7-th-400">
                {t.necessaryDescription}
              </p>
            </div>
            <span className="shrink-0 font-th mobile-s7-s8-th-400 whitespace-nowrap text-tk-black/60 md:desktop-s7-th-400">
              {t.alwaysOn}
            </span>
          </li>
          <li className="flex items-start justify-between gap-4 rounded-xl border border-tk-black/10 p-4">
            <div className="flex flex-col gap-1">
              <p
                id="cookie-category-analytics"
                className="font-th mobile-s6-th-700 md:desktop-s6-th-700"
              >
                {t.analytics}
              </p>
              <p className="font-th mobile-s7-s8-th-400 text-tk-black/70 md:desktop-s7-th-400">
                {t.analyticsDescription}
              </p>
            </div>
            <AnalyticsSwitch
              checked={analytics}
              onChange={setAnalytics}
              labelId="cookie-category-analytics"
            />
          </li>
        </ul>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          <button type="button" onClick={rejectAll} className={secondaryButton}>
            {t.rejectAll}
          </button>
          <button
            type="button"
            onClick={() => save(analytics)}
            className={secondaryButton}
          >
            {t.save}
          </button>
          <button type="button" onClick={acceptAll} className={primaryButton}>
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
};

/** Text button that reopens the settings modal (footer, cookie policy page). */
export const CookieSettingsButton = ({
  className = "",
}: {
  className?: string;
}) => {
  const { t, openSettings } = useCookieConsent();
  return (
    <button
      type="button"
      onClick={openSettings}
      className={`font-th hover:text-tk-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tk-red ${className}`}
    >
      {t.settings}
    </button>
  );
};

const CookieConsent = () => {
  const { t, consent, isReady, isSettingsOpen, savedAt } = useCookieConsent();

  return (
    <>
      {isReady && !consent && <CookieBanner />}
      {isSettingsOpen && <CookieSettingsPanel />}
      {/* Announces choices made in this session only, never one restored from
          the cookie on load (WCAG 4.1.3). Keyed so a repeat save re-announces. */}
      <div key={savedAt ?? ""} aria-live="polite" role="status" className="sr-only">
        {savedAt ? t.saved : ""}
      </div>
    </>
  );
};

export default CookieConsent;
