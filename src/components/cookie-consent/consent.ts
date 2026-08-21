export const CONSENT_COOKIE = "tk_cookie_consent";
export const LANG_COOKIE = "tk_cookie_consent_lang";

// Bump when the cookie policy changes so every visitor is asked again.
export const CONSENT_VERSION = 1;

const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export type ConsentLang = "th" | "en";

export interface CookieConsent {
  version: number;
  necessary: true;
  analytics: boolean;
  decidedAt: string;
}

// Cookie value is `<version>:<analytics 0|1>:<ISO timestamp>` — free of
// characters that need encoding, so the raw value round-trips unchanged.
export const parseConsent = (raw?: string | null): CookieConsent | null => {
  if (!raw) return null;
  const sep1 = raw.indexOf(":");
  const sep2 = raw.indexOf(":", sep1 + 1);
  if (sep1 < 0 || sep2 < 0) return null;
  if (Number(raw.slice(0, sep1)) !== CONSENT_VERSION) return null;
  return {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: raw.slice(sep1 + 1, sep2) === "1",
    decidedAt: raw.slice(sep2 + 1),
  };
};

const readCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));
  return match ? match.slice(name.length + 1) : null;
};

const writeCookie = (name: string, value: string) => {
  const secure = window.location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${name}=${value}; max-age=${MAX_AGE_SECONDS}; path=/; samesite=lax${secure}`;
};

// The cookies are an external store: components read them through
// `useSyncExternalStore`, so writes here have to notify subscribers.
const listeners = new Set<() => void>();

export const subscribeConsent = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const emit = () => {
  listeners.forEach((listener) => listener());
};

/** Raw cookie value — a stable primitive, safe as a store snapshot. */
export const getConsentSnapshot = (): string | null =>
  readCookie(CONSENT_COOKIE);

export const getLangSnapshot = (): ConsentLang =>
  readCookie(LANG_COOKIE) === "en" ? "en" : "th";

export const writeConsent = (analytics: boolean): CookieConsent => {
  const consent: CookieConsent = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics,
    decidedAt: new Date().toISOString(),
  };
  writeCookie(
    CONSENT_COOKIE,
    `${consent.version}:${analytics ? 1 : 0}:${consent.decidedAt}`,
  );
  emit();
  return consent;
};

export const writeLang = (lang: ConsentLang) => {
  writeCookie(LANG_COOKIE, lang);
  emit();
};
