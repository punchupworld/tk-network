"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  getConsentSnapshot,
  getLangSnapshot,
  parseConsent,
  subscribeConsent,
  writeConsent,
  writeLang,
  type ConsentLang,
  type CookieConsent,
} from "./consent";
import { messages, type ConsentMessages } from "./messages";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-DYP3587KZD";

interface CookieConsentContextValue {
  consent: CookieConsent | null;
  /** False until the cookie has been read in the browser. */
  isReady: boolean;
  isSettingsOpen: boolean;
  /** Timestamp of a choice made in this session; null on a restored choice. */
  savedAt: string | null;
  lang: ConsentLang;
  t: ConsentMessages;
  toggleLang: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (analytics: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

export const useCookieConsent = (): CookieConsentContextValue => {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider",
    );
  }
  return ctx;
};

// Google tags stay in memory for the rest of the SPA session, so a revoked
// choice has to be pushed to them. `ga-disable-*` is Google's official opt-out.
const syncGoogleConsent = (analytics: boolean) => {
  const w = window as Window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  // gtag() must push an `arguments` object; gtag.js ignores plain arrays.
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer?.push(arguments);
  }
  const call: (...args: unknown[]) => void = gtag;
  call("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
  });
  (w as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = !analytics;
};

const serverConsentSnapshot = () => null;
const serverLangSnapshot = (): ConsentLang => "th";

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  // Cookies only exist in the browser, so the server snapshot is empty and
  // React re-renders with the real value right after hydration.
  const rawConsent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    serverConsentSnapshot,
  );
  const lang = useSyncExternalStore(
    subscribeConsent,
    getLangSnapshot,
    serverLangSnapshot,
  );
  const isReady = useSyncExternalStore(
    subscribeConsent,
    () => true,
    () => false,
  );

  const consent = useMemo(() => parseConsent(rawConsent), [rawConsent]);

  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const openSettings = useCallback(() => setSettingsOpen(true), []);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  const save = useCallback((analytics: boolean) => {
    const next = writeConsent(analytics);
    syncGoogleConsent(analytics);
    setSavedAt(next.decidedAt);
    setSettingsOpen(false);
  }, []);
  const acceptAll = useCallback(() => save(true), [save]);
  const rejectAll = useCallback(() => save(false), [save]);

  const toggleLang = useCallback(
    () => writeLang(lang === "th" ? "en" : "th"),
    [lang],
  );

  const value = useMemo(
    () => ({
      consent,
      isReady,
      isSettingsOpen,
      savedAt,
      lang,
      t: messages[lang],
      toggleLang,
      openSettings,
      closeSettings,
      acceptAll,
      rejectAll,
      save,
    }),
    [
      consent,
      isReady,
      isSettingsOpen,
      savedAt,
      lang,
      toggleLang,
      openSettings,
      closeSettings,
      acceptAll,
      rejectAll,
      save,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {consent?.analytics && <GoogleAnalytics gaId={GA_ID} />}
      {children}
    </CookieConsentContext.Provider>
  );
};

export default CookieConsentProvider;
