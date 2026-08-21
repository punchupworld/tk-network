import type { ConsentLang } from "./consent";

export interface ConsentMessages {
  bannerTitle: string;
  bannerDescription: string;
  policyLink: string;
  acceptAll: string;
  rejectAll: string;
  settings: string;
  save: string;
  saved: string;
  close: string;
  settingsTitle: string;
  settingsDescription: string;
  alwaysOn: string;
  necessary: string;
  necessaryDescription: string;
  analytics: string;
  analyticsDescription: string;
  langSwitch: string;
}

export const COOKIE_POLICY_HREF = "/cookie-policy";

export const messages: Record<ConsentLang, ConsentMessages> = {
  th: {
    bannerTitle: "เว็บไซต์นี้ใช้คุกกี้",
    bannerDescription:
      "TK Park ใช้คุกกี้ที่จำเป็นเพื่อให้เว็บไซต์ทำงานได้ และใช้คุกกี้เพื่อการวิเคราะห์เมื่อคุณให้ความยินยอมเท่านั้น คุณเปลี่ยนการตั้งค่าได้ทุกเมื่อ",
    policyLink: "อ่านนโยบายคุกกี้",
    acceptAll: "ยอมรับทั้งหมด",
    rejectAll: "ปฏิเสธทั้งหมด",
    settings: "ตั้งค่าคุกกี้",
    save: "บันทึกการตั้งค่า",
    saved: "บันทึกการตั้งค่าคุกกี้แล้ว",
    close: "ปิด",
    settingsTitle: "ตั้งค่าคุกกี้",
    settingsDescription:
      "เลือกประเภทคุกกี้ที่อนุญาตให้เว็บไซต์นี้ใช้ได้ คุกกี้ที่จำเป็นปิดไม่ได้ เพราะเว็บไซต์ทำงานไม่ได้หากไม่มีคุกกี้เหล่านี้",
    alwaysOn: "เปิดใช้เสมอ",
    necessary: "คุกกี้ที่จำเป็น",
    necessaryDescription:
      "จดจำภาษา การตั้งค่าการแสดงผล สถานะการเข้าสู่ระบบ และการเลือกคุกกี้ของคุณ ปิดใช้งานไม่ได้",
    analytics: "คุกกี้เพื่อการวิเคราะห์",
    analyticsDescription:
      "ช่วยให้เราเข้าใจการใช้งานเว็บไซต์ผ่าน Google Analytics เพื่อนำไปปรับปรุง ข้อมูลเป็นภาพรวมและไม่ระบุตัวตนของคุณ",
    langSwitch: "EN",
  },
  en: {
    bannerTitle: "This website uses cookies",
    bannerDescription:
      "TK Park uses strictly necessary cookies to make the site work, and analytics cookies only with your consent. You can change your choice at any time.",
    policyLink: "Read our Cookie Policy",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    settings: "Cookie settings",
    save: "Save preferences",
    saved: "Cookie preferences saved",
    close: "Close",
    settingsTitle: "Cookie settings",
    settingsDescription:
      "Choose which cookies this website may use. Strictly necessary cookies cannot be turned off because the site does not work without them.",
    alwaysOn: "Always on",
    necessary: "Strictly necessary cookies",
    necessaryDescription:
      "Remember your language, display preferences, sign-in state, and cookie choices. Cannot be turned off.",
    analytics: "Analytics cookies",
    analyticsDescription:
      "Help us understand how the site is used via Google Analytics so we can improve it. Data is aggregated and does not identify you.",
    langSwitch: "ไทย",
  },
};
