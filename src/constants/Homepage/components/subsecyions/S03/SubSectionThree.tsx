"use client";
import { T07 } from "@/src/components/icons/topics";
import { asset } from "@/src/lib/asset";
import Image from "next/image";
import React, { useState } from "react";

const IconBox = ({
  stroke,
  className,
}: {
  stroke: string;
  className: string;
}) => {
  return (
    <svg
      width="170"
      height="169"
      viewBox="0 0 170 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M168.672 146.618C168.672 158.427 131.064 168 84.6719 168C38.2799 168 0.671875 158.427 0.671875 146.618V0C0.671875 11.8089 38.2799 21.3818 84.6719 21.3818C131.064 21.3818 168.672 11.8089 168.672 0V146.618Z"
        stroke={stroke}
        strokeWidth="1.34545"
      />
    </svg>
  );
};

const MAP_BOX_PATH =
  "M7.00176 0H67.4922H124.545C127.974 0 130.899 2.48492 131.453 5.86959L138.467 48.7368C139.122 52.7405 138.128 56.8388 135.711 60.0969L132.49 64.4377C129.661 68.2514 125.192 70.5 120.444 70.5H79.4922V86.5C79.4922 89.8137 76.8059 92.5 73.4922 92.5H17.6099C14.1062 92.5 11.1421 89.9096 10.6729 86.4374L0.0648125 7.93743C-0.502799 3.7371 2.76325 0 7.00176 0Z";

const MAP_BOX_VIEWBOX = { w: 139, h: 93 };

const MapBox = ({
  children,
  width = MAP_BOX_VIEWBOX.w,
  height = MAP_BOX_VIEWBOX.h,
  className,
}: {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <div
      className={`relative flex w-full items-center justify-center ${
        className ?? ""
      }`}
      style={{ maxWidth: width, aspectRatio: `${width} / ${height}` }}
    >
      <svg
        className="absolute inset-0 size-full"
        viewBox={`0 0 ${MAP_BOX_VIEWBOX.w} ${MAP_BOX_VIEWBOX.h}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d={MAP_BOX_PATH} fill="#F5333F" />
      </svg>
      <div className="relative z-10 flex size-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export const SidePanel = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2H2C1.45 2 1 2.45 1 3V13C1 13.55 1.45 14 2 14H14C14.55 14 15 13.55 15 13V3C15 2.45 14.55 2 14 2ZM5 13H2V3H5V13ZM14 13H6V8.5H11.1L9.3 10.3L10 11L13 8L10 5L9.3 5.7L11.1 7.5H6V3H14V13Z"
        fill="#F5333F"
      />
    </svg>
  );
};

const PLAYSPACE_FRAME = { w: 760, h: 434 };
const PLAYSPACE_MAP_W = 600;
const PLAYSPACE_MAP_OVERLAY =
  "flex h-dvh flex-col items-center justify-center md:gap-80 gap-50";

const PlayspaceMapLabel = ({ hidden = false }: { hidden?: boolean }) => (
  <div
    className={`ml-[8%] mt-[15%] w-[28.333%] max-[400px]:mt-[48%] md:mt-[3%] ${
      hidden ? "invisible" : ""
    }`}
    aria-hidden={hidden}
  >
    <MapBox width={170} height={110}>
      <p className="text-balance text-center font-th desktop-s8-th-700 text-white md:desktop-s7-th-700">
        เพลย์สเปซ
        <br />
        (Play Space)
      </p>
    </MapBox>
  </div>
);

const PlayspaceMapBlurb = ({ hidden = false }: { hidden?: boolean }) => (
  <div
    className={`border-2 border-white bg-tk-red px-10 py-5 ${
      hidden ? "invisible" : ""
    }`}
    aria-hidden={hidden}
  >
    <p className="text-balance font-th desktop-s7-th-400 text-white">
      TK Park ไม่ได้เป็นเพียงอาคาร
      <br className="sm:hidden block" />
      ที่แบ่งเป็นหลายห้อง แต่เป็นพื้นที่
      <br className="sm:hidden block" />
      การเรียนรู้ที่ออกแบบให้รองรับ
      <br className="sm:hidden block" />
      ประสบการณ์การเรียนรู้หลายรูปแบบ <br className="sm:hidden block" />
      โดยแต่ละโซนมีบทบาทต่างกันและ
      <br className="sm:hidden block" />
      เชื่อมต่อกัน เพื่อให้ผู้ใช้สามารถเลือก
      <br className="sm:hidden block" />
      เรียนรู้ เล่น สร้างสรรค์ และพบปะผู้คน
      <br className="sm:hidden block" />
      ได้ตามความสนใจ
    </p>
  </div>
);

const PlayspaceFrame = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="relative mx-auto w-full max-w-190"
      style={{ aspectRatio: `${PLAYSPACE_FRAME.w} / ${PLAYSPACE_FRAME.h}` }}
    >
      {children}
    </div>
  );
};

type PlayZoneBox = { left: number; top: number; w: number; h: number };

const playZoneStyle = ({
  left,
  top,
  w,
  h,
}: PlayZoneBox): React.CSSProperties => ({
  left: `${(left / PLAYSPACE_FRAME.w) * 100}%`,
  top: `${(top / PLAYSPACE_FRAME.h) * 100}%`,
  width: `${(w / PLAYSPACE_FRAME.w) * 100}%`,
  height: `${(h / PLAYSPACE_FRAME.h) * 100}%`,
});

const PlayZoneCard = ({
  src,
  alt,
  title,
  className,
  style,
  children,
}: {
  src: string;
  alt: string;
  title: string;
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group pointer-events-auto overflow-hidden border-2 border-tk-black ${className}`}
      style={style}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute left-1.5 top-1.5 rounded-full bg-tk-red px-3.5 py-1.5">
        <p className="font-th desktop-s7-th-700 text-white text-nowrap">
          {title}
        </p>
      </div>
      <button
        type="button"
        className="absolute bottom-3 right-3 z-20 rounded-[10px] bg-white p-2.5 md:pointer-events-none md:group-hover:hidden"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={`${open ? "ปิด" : "เปิด"}รายละเอียด ${title}`}
      >
        <SidePanel />
      </button>
      <div
        className={`absolute inset-0 z-10 overflow-y-auto overscroll-contain bg-white px-2 py-4 md:group-hover:flex ${
          open ? "flex" : "hidden"
        }`}
      >
        <div className="m-auto w-full">{children}</div>
      </div>
    </div>
  );
};

const PLAY_ZONES: {
  src: string;
  title: string;
  box: PlayZoneBox;
  sticky: string;
  body: React.ReactNode;
}[] = [
  {
    src: "img/s03/playzone/playzone-1.png",
    title: "โซนการ์ตูนและสื่อสร้างสรรค์",
    box: { left: 40, top: 0, w: 268, h: 140 },
    sticky: "-top-10 z-10",
    body: (
      <p className="text-center font-th desktop-s7-th-400 leading-normal text-tk-black">
        การ์ตูนและสื่อสร้างสรรค์
        <br />
        มาคู่กับที่นั่งนุ่มไว้กลิ้ง <br />
        อ่านมังงะ หรือนอนสบาย
        <br />
        อ่านกราฟฟิกโนเวลบนบีนแบ็ก
      </p>
    ),
  },
  {
    src: "img/s03/playzone/playzone-2.png",
    title: "โซนเกมคอนโซล",
    box: { left: 353, top: 0, w: 282, h: 240 },
    sticky: "top-0 z-20",
    body: (
      <p className="text-center font-th desktop-s7-th-400 leading-normal text-tk-black text-balance">
        โซนเกมคอนโซลบริการ เครื่องเพลย์สเตชัน 5 <br />
        นินเทนโด สวิช (Nintendo Switch) <br className="sm:hidden block" />
        และเครื่องเล่น VR (Meta Quest) ให้เกมเมอร์
        <br className="sm:hidden block" />
        เข้ามา สนุกสนานได้ฟรี แค่เพียงจองคิว
        <br className="sm:hidden block" />
        ผ่านเว็บไซต์ หรือแอปพลิเคชัน <br />
        My TK เป็นรายชั่วโมง
      </p>
    ),
  },
  {
    src: "img/s03/playzone/playzone-3.png",
    title: "โซนดนตรี",
    box: { left: 0, top: 160, w: 273, h: 215 },
    sticky: "top-0 z-30",
    body: (
      <p className="text-center font-th desktop-s7-th-400 leading-normal text-tk-black">
        ที่นี่ไม่ใช่พื้นที่ดนตรีธรรมดา <br className="sm:hidden block" />
        เพราะมีบริการห้องเก็บเสียง
        <br />
        ส่วนตัว (Soundbox) พร้อมอุปกรณ์ <br className="sm:hidden block" />
        ใครอยากมาซ้อมดนตรี ร้องเพลง ทำเดโมก็ยังได้{" "}
        <br className="sm:hidden block" />
        และยังมีทรัพยากร เกี่ยวกับดนตรีหลายด้าน
        <br />
        ให้ค้นคว้าอีกด้วย
      </p>
    ),
  },
  {
    src: "img/s03/playzone/playzone-4.png",
    title: "โซนพื้นที่ส่วนกลาง",
    box: { left: 320, top: 280, w: 300, h: 165 },
    sticky: "top-0 z-40",
    body: (
      <p className="text-center font-th desktop-s7-th-400 leading-normal text-tk-black">
        พื้นที่ส่วนกลางสำหรับการพบปะ
        <br />
        พูดคุย ทำกิจกรรมร่วมกัน และ
        <br />
        เล่นบอร์ดเกมที่มีบอร์ดเกมฝีมือ
        <br className="sm:hidden block" />
        ของนักออกแบบไทยไว้บริการ ถึง
        <br /> 100 กว่าเกม
      </p>
    ),
  },
];

const SubSectionThree = () => {
  return (
    <div className="flex w-full max-w-[760px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center max-w-[600px]">
        <T07
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          ตัวอย่าง
          <br />
          สร้าง
          <br />
          แรงบันดาลใจ
        </p>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-50"
        id="subsubtopic12"
      >
        <div className="p-10 border-2 border-white bg-orange-300 max-w-[600px]">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            <b>
              ประสบการณ์ในการสร้าง
              <br className="sm:hidden block" />
              ห้องสมุดกว่า 10 ปีของ <br className="sm:hidden block" />
              TK Park
            </b>
            <br />
            ทำให้เราเข้าใจว่าการเรียนรู้
            <br className="sm:hidden block" />
            ในยุคปัจจุบันเปลี่ยนแปลงไปมาก
            <br />
            <br />
            การอ่านหนังสือหรือเรียนรู้
            <br className="sm:hidden block" />
            ในห้องสมุดแบบดั้งเดิมอาจ
            <br className="sm:hidden block" />
            ไม่เพียงพออีกต่อไป <br />
            TK Park จึงสร้างสรรค์
            <br className="sm:hidden block" />
            เพลย์สเปซ (Play Space) <br className="sm:hidden block" />
            พื้นที่การเรียนรู้ขนาด <br className="sm:hidden block" />
            330 ตารางเมตร ณ ชั้น 8 <br className="sm:hidden block" />
            ศูนย์การค้าเซ็นทรัลเวิลด์ขึ้นมา <br className="sm:hidden block" />
            เพื่อตอบโจทย์การเรียนรู้สมัยใหม่
            <br className="sm:hidden block" />
            ที่อยู่ภายใต้แนวคิดพื้นที่สนุกเชื่อมผู้คน (Your Community{" "}
            <br className="sm:hidden block" />
            Playground) และเป็นตัวอย่าง
            <br className="sm:hidden block" />
            ในการสร้างแรงบันดาลใจ
            <br className="sm:hidden block" />
            ให้หน่วยงานทั่วไทยที่ต้องการ
            <br className="sm:hidden block" />
            สร้างพื้นที่การเรียนรู้ในรูปแบบ
            <br className="sm:hidden block" />
            ของตนเอง
          </p>
        </div>

        <div className="relative w-full max-w-[600px]">
          <div className="sticky top-10 z-0 flex h-dvh w-full items-center justify-center">
            <div className="w-full">
              <Image
                src={asset("img/s03/map.jpg")}
                alt="SubSectionThree"
                width={1000}
                height={1000}
                className="h-auto w-full object-cover"
              />
              <div className="h-[128px] w-full bg-white"></div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="sticky top-10 z-10">
              <div className={PLAYSPACE_MAP_OVERLAY}>
                <PlayspaceMapLabel />
                <PlayspaceMapBlurb hidden />
              </div>
            </div>
            <div className="sticky top-10 z-20">
              <div className={PLAYSPACE_MAP_OVERLAY}>
                <PlayspaceMapLabel hidden />
                <PlayspaceMapBlurb />
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative aspect-[600/420] w-full max-w-[600px]"
          aria-label="คำกล่าวเกี่ยวกับการพัฒนาพื้นที่การเรียนรู้ท้องถิ่น"
        >
          <div className="absolute left-[21.2625%] top-0 h-[78.3333%] w-[78.4053%] border-2 border-white bg-[#ffbaa1]" />
          <blockquote className="absolute left-0 top-[18.0952%] flex h-[81.9048%] w-[87.0432%] items-center justify-center border-2 border-white bg-[#f5333f] p-2.5 text-center text-white">
            <span className="font-th desktop-s5-th-700 leading-normal">
              "ความสนุก
              <br />
              คือจุดเริ่มต้นของ
              <br className="sm:hidden block" />
              การเรียนรู้ที่มีความหมาย"
            </span>
          </blockquote>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 max-w-[600px]">
          <div className="flex items-start md:flex-row flex-col">
            <div className="p-5 md:border-y-2 border-l-2 border-t-2 md:border-r-0 border-r-2 border-white bg-yellow-700">
              <div className="relative flex items-center justify-center">
                <IconBox
                  stroke="#FFFFFF"
                  className="w-[168px] h-[168px]"
                  aria-hidden="true"
                />
                <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
                  เพลย์สเปซ
                  <br />
                  (Play Space)
                </p>
              </div>
            </div>
            <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
              <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
                พื้นที่การเรียนรู้รูปแบบใหม่
                <br className="sm:hidden block" />
                ที่ออกแบบ โดยยึดผู้ใช้เป็น
                <br className="sm:hidden block" />
                ศูนย์กลาง และเปิดโอกาสให้ผู้คน
                <br className="sm:hidden block" />
                ได้เรียนรู้ผ่านการเล่น พบปะ
                <br />
                แลกเปลี่ยน และต่อยอด
                <br className="sm:hidden block" />
                ความสนใจร่วมกัน <br />
                <b className="font-th desktop-s6-th-700 text-tk-red text-balance">
                  ภายใต้แนวคิดที่ว่า “ความสนุก
                  <br className="sm:hidden block" />
                  คือจุดเริ่มต้น ของการเรียนรู้
                  <br className="sm:hidden block" />
                  ที่มีความหมาย”
                </b>{" "}
                <br /> <br />
                โดยทำหน้าที่เป็นพื้นที่ทดลอง
                <br className="sm:hidden block" />
                เชื่อมโยงผู้คนหลากหลายกลุ่ม
                <br className="sm:hidden block" />
                ให้มาพบกัน จนกลายเป็นชุมชน
                <br className="sm:hidden block" />
                การเรียนรู้ที่มีชีวิต <br className="sm:hidden block" />
                และเป็นต้นแบบ
                <br />
                ของการพัฒนาพื้นที่เรียนรู้
                <br className="sm:hidden block" />
                ในอนาคต
              </p>
            </div>
          </div>

          <div className="p-10 border-2 border-white bg-orange-300">
            <p className="font-th desktop-s6-th-400 text-tk-black ">
              <b className="font-th desktop-s6-th-700 text-tk-red">
                {" "}
                หากจะบอกว่าเพลย์สเปซ
                <br className="sm:hidden block" />
                เป็นสนามเด็กเล่นของชุมชน <br className="sm:hidden block" />
                (Community Playground) <br className="sm:hidden block" />
                ก็คงจะไม่ผิดนัก
              </b>{" "}
              เพราะที่นี่
              <br className="sm:hidden block" />
              มีโซนการใช้งานที่ถูกออกแบบ
              <br className="sm:hidden block" />
              ให้รองรับกิจกรรมหลากหลาย
              <br className="sm:hidden block" />
              จนลืมเวลา
              <br />
              <br />
              หน่วยงานสามารถศึกษาพื้นที่
              <br className="sm:hidden block" />
              การทดลองรูปแบบใหม่ และนำไป
              <br className="sm:hidden block" />
              ปรับใช้ในการออกแบบพื้นที่
              <br className="sm:hidden block" />
              การเรียนรู้ของตนเอง โดยพื้นที่
              <br className="sm:hidden block" />
              ที่ดีจะต้องทำหน้าที่เป็นตัวกลาง
              <br className="sm:hidden block" />
              เชื่อมโยงผู้คนให้เข้ามาใช้งาน <br className="sm:hidden block" />
              และมีโซนต่างๆ ที่ตอบโจทย์
              <br className="sm:hidden block" />
              กลุ่มเป้าหมายอย่างแท้จริง
            </p>
          </div>

          <Image
            src={asset("img/s03/playzone.jpg")}
            alt="SubSectionThree"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="relative hidden w-full md:block">
          <div className="sticky top-0 z-0 flex h-dvh w-full items-center justify-center">
            <PlayspaceFrame>
              <Image
                src={asset("img/s03/playspace.svg")}
                alt="เพลย์สเปซ"
                width={600}
                height={434}
                className="absolute inset-y-0 left-1/2 h-full -translate-x-1/2 object-contain"
                style={{
                  width: `${(PLAYSPACE_MAP_W / PLAYSPACE_FRAME.w) * 100}%`,
                }}
              />
            </PlayspaceFrame>
          </div>

          <div className="relative z-10">
            {PLAY_ZONES.map((zone) => (
              <div
                key={zone.title}
                className={`pointer-events-none sticky flex h-dvh w-full items-center justify-center ${zone.sticky}`}
              >
                <PlayspaceFrame>
                  <PlayZoneCard
                    src={asset(zone.src)}
                    alt={zone.title}
                    title={zone.title}
                    className="absolute"
                    style={playZoneStyle(zone.box)}
                  >
                    {zone.body}
                  </PlayZoneCard>
                </PlayspaceFrame>
              </div>
            ))}

            <div className="h-dvh" aria-hidden="true" />
          </div>
        </div>

        <div className="flex w-full max-w-[600px] flex-col gap-10 md:hidden">
          <Image
            src={asset("img/s03/playspace.svg")}
            alt="เพลย์สเปซ"
            width={600}
            height={434}
            className="h-auto w-full object-contain"
          />
          {PLAY_ZONES.map((zone) => (
            <PlayZoneCard
              key={zone.title}
              src={asset(zone.src)}
              alt={zone.title}
              title={zone.title}
              className="relative w-full"
              style={{ aspectRatio: `${zone.box.w} / ${zone.box.h}` }}
            >
              {zone.body}
            </PlayZoneCard>
          ))}
        </div>

        <div
          className="relative w-full max-w-[600px] pt-10"
          aria-label="คำกล่าวเกี่ยวกับการพัฒนาพื้นที่การเรียนรู้ท้องถิ่น"
        >
          <div className="absolute left-0 top-0 h-[78.3333%] w-[78.4053%] border-2 border-white bg-[#ffbaa1]" />
          <blockquote className="relative ml-[13.6%] flex w-[87.0432%] items-center justify-center border-2 border-white bg-[#f5333f] px-4 py-5 text-center text-white md:px-6 md:py-8">
            <span className="min-w-0 w-full text-pretty font-th mobile-s5-th-400 leading-normal md:desktop-s5-th-700">
              "การเปิดเพลย์สเปซในต้นปี
              <br className="sm:hidden block" />
              พ.ศ. 2569 คือความตั้งใจมอบ
              <br className="sm:hidden block" />
              เป็นของขวัญปีใหม่แก่
              <br className="sm:hidden block" />
              พี่น้องชาวไทย เราอยากเห็นพื้นที่นี้
              <br className="sm:hidden block" />
              เป็นจุดเริ่มต้นของชุมชนคนรุ่นใหม่
              <br className="sm:hidden block" />
              ที่จะช่วยกันขับเคลื่อนกรุงเทพฯ
              <br className="sm:hidden block" />
              ให้เป็นเมืองแห่งการเรียนรู้ที่
              <br className="sm:hidden block" />
              สนุกสนาน และเข้าถึงได้สำหรับ
              <br className="sm:hidden block" />
              ทุกคนอย่างแท้จริง"
              <br />
              <br />
              <b className="font-th desktop-s7-th-400">
                นายวัฒนชัย วินิจจะกูล <br className="sm:hidden block" />
                รักษาการผู้อำนวยการ
                <br className="sm:hidden block" />
                สถาบันอุทยานการเรียนรู้ TK Park
              </b>
            </span>
          </blockquote>
        </div>

        <Image
          src={asset("img/s03/endsection3.jpg")}
          alt="SubSectionThree"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover max-w-[600px] mx-auto"
        />
      </div>
    </div>
  );
};

export default SubSectionThree;
