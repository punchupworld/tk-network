"use client";
import { T07 } from "@/src/components/icons/topics";
import { asset } from "@/src/lib/asset";
import Image from "next/image";
import React from "react";

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
}: {
  children?: React.ReactNode;
  width?: number;
  height?: number;
}) => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width, height }}
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

const PlayspaceFrame = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative mx-auto w-full max-w-190">
      <div className="mx-auto aspect-600/434 w-full max-w-150" aria-hidden />
      {children}
    </div>
  );
};

const PlayZoneCard = ({
  src,
  alt,
  title,
  className,
  children,
}: {
  src: string;
  alt: string;
  title: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`group pointer-events-auto overflow-hidden border-2 border-tk-black ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute left-4 top-4 rounded-full bg-tk-red px-5 py-1.5">
        <p className="font-th desktop-s7-th-700 text-white">{title}</p>
      </div>
      <div className="absolute bottom-3 right-3 rounded-[10px] bg-white p-2.5">
        <SidePanel />
      </div>
      <div className="absolute inset-0 z-10 hidden items-center justify-center bg-white px-5 group-hover:flex">
        {children}
      </div>
    </div>
  );
};

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
            <b>ประสบการณ์ในการสร้างห้องสมุดกว่า 10 ปีของ TK Park</b>
            <br />
            ทำให้เราเข้าใจว่าการเรียนรู้ในยุคปัจจุบันเปลี่ยนแปลงไปมาก
            <br />
            <br />
            การอ่านหนังสือหรือเรียนรู้ในห้องสมุดแบบดั้งเดิมอาจไม่เพียงพออีกต่อไป
            TK Park จึงสร้างสรรค์เพลย์สเปซ (Play Space) พื้นที่การเรียนรู้ ขนาด
            330 ตารางเมตร ณ ชั้น 8 ศูนย์การค้าเซ็นทรัลเวิลด์ขึ้นมา
            เพื่อตอบโจทย์การเรียนรู้สมัยใหม่
            ที่อยู่ภายใต้แนวคิดพื้นที่สนุกเชื่อมผู้คน (Your Community
            Playground) และเป็นตัวอย่างในการสร้างแรงบันดาลใจ
            ให้หน่วยงานทั่วไทยที่ต้องการสร้างพื้นที่การเรียนรู้ในรูปแบบของตนเอง
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

          <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center gap-80">
            <div className="ml-12 mt-4">
              <MapBox width={170} height={110}>
                <p className="font-th desktop-s7-th-700 text-center text-white">
                  เพลย์สเปซ
                  <br />
                  (Play Space)
                </p>
              </MapBox>
            </div>

            <div className="border-2 border-white bg-tk-red px-10 py-5">
              <p className="text-balance font-th desktop-s7-th-400 text-white">
                TK Park ไม่ได้เป็นเพียงอาคารที่แบ่งเป็นหลายห้อง
                แต่เป็นพื้นที่การเรียนรู้ที่ออกแบบให้รองรับประสบการณ์การเรียนรู้หลายรูปแบบ
                โดยแต่ละโซนมีบทบาทต่างกันและเชื่อมต่อกัน
                เพื่อให้ผู้ใช้สามารถเลือกเรียนรู้ เล่น สร้างสรรค์
                และพบปะผู้คนได้ตามความสนใจ
              </p>
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
              ความสนุก
              <br />
              คือจุดเริ่มต้นของการเรียนรู้ที่มีความหมาย
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
                พื้นที่การเรียนรู้รูปแบบใหม่ที่ออกแบบ โดยยึดผู้ใช้เป็นศูนย์กลาง
                และเปิดโอกาสให้ผู้คนได้เรียนรู้ผ่านการเล่น พบปะแลกเปลี่ยน
                และต่อยอดความสนใจร่วมกัน <br />
                <b className="font-th desktop-s6-th-700 text-tk-red text-balance">
                  ภายใต้แนวคิดที่ว่า “ความสนุกคือจุดเริ่มต้น
                  ของการเรียนรู้ที่มีความหมาย”
                </b>{" "}
                <br /> <br />
                โดยทำหน้าที่เป็นพื้นที่ทดลองเชื่อมโยงผู้คน
                หลากหลายกลุ่มให้มาพบกัน จนกลายเป็น ชุมชนการเรียนรู้ที่มีชีวิต
                และเป็นต้นแบบของ การพัฒนาพื้นที่เรียนรู้ในอนาคต
              </p>
            </div>
          </div>

          <div className="p-10 border-2 border-white bg-orange-300">
            <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
              <b className="font-th desktop-s6-th-700 text-tk-red text-balance">
                {" "}
                หากจะบอกว่าเพลย์สเปซเป็นสนามเด็กเล่นของชุมชน (Community
                Playground) ก็คงจะไม่ผิดนัก
              </b>
              <br />
              เพราะที่นี่มีโซนการใช้งานที่ถูกออกแบบให้รองรับกิจกรรมหลากหลาย
              จนลืมเวลา
              <br />
              <br />
              หน่วยงานสามารถศึกษาพื้นที่การทดลองรูปแบบใหม่
              และนำไปปรับใช้ในการออกแบบพื้นที่การเรียนรู้ของตนเอง
              โดยพื้นที่ที่ดีจะต้องทำหน้าที่เป็นตัวกลางเชื่อมโยงผู้คนให้เข้ามาใช้งาน
              และมีโซนต่างๆ ที่ตอบโจทย์กับกลุ่มเป้าหมายอย่างแท้จริง
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

        <div className="relative w-full">
          <div className="sticky top-0 z-0 flex h-dvh w-full items-center justify-center">
            <PlayspaceFrame>
              <Image
                src={asset("img/s03/playspace.svg")}
                alt="เพลย์สเปซ"
                width={600}
                height={434}
                className="absolute inset-x-0 top-0 mx-auto h-auto w-full max-w-150 object-contain"
              />
            </PlayspaceFrame>
          </div>

          <div className="relative z-10">
            <div className="pointer-events-none sticky -top-10 z-10 flex h-dvh w-full items-center justify-center">
              <PlayspaceFrame>
                <PlayZoneCard
                  src={asset("img/s03/playzone/playzone-1.png")}
                  alt="โซนการ์ตูนและสื่อสร้างสรรค์"
                  title="โซนการ์ตูนและสื่อสร้างสรรค์"
                  className="absolute left-10 top-0 h-35 w-67"
                >
                  <p className="text-center font-th desktop-s7-th-400 text-tk-black">
                    การ์ตูนและสื่อสร้างสรรค์
                    <br />
                    มาคู่กับที่นั่งนุ่มไว้กลิ้งอ่านมังงะ
                    <br />
                    หรือนอนสบายอ่านกราฟฟิกโนเวล
                    <br />
                    บนบีนแบ็ก
                  </p>
                </PlayZoneCard>
              </PlayspaceFrame>
            </div>

            <div className="pointer-events-none sticky top-0 z-20 flex h-dvh w-full items-center justify-center">
              <PlayspaceFrame>
                <PlayZoneCard
                  src={asset("img/s03/playzone/playzone-2.png")}
                  alt="โซนเกมคอนโซล"
                  title="โซนเกมคอนโซล"
                  className="absolute left-88.25 top-0 h-60 w-70.5"
                >
                  <p className="text-center font-th desktop-s7-th-400 text-tk-black text-balance">
                    โซนเกมคอนโซลบริการ เครื่องเพลย์สเตชัน 5 นินเทนโด สวิช
                    (Nintendo Switch) และเครื่องเล่น VR (Meta Quest)
                    ให้เกมเมอร์เข้ามา สนุกสนานได้ฟรี แค่เพียงจองคิวผ่านเว็บไซต์
                    หรือแอปพลิเคชัน My TK เป็นรายชั่วโมง
                  </p>
                </PlayZoneCard>
              </PlayspaceFrame>
            </div>

            <div className="pointer-events-none sticky top-0 z-30 flex h-dvh w-full items-center justify-center">
              <PlayspaceFrame>
                <PlayZoneCard
                  src={asset("img/s03/playzone/playzone-3.png")}
                  alt="โซนดนตรี"
                  title="โซนดนตรี"
                  className="absolute left-0 top-40 h-53.75 w-68.25"
                >
                  <p className="text-center font-th desktop-s7-th-400 text-tk-black">
                    ที่นี่ไม่ใช่พื้นที่ดนตรีธรรมดา
                    เพราะมีบริการห้องเก็บเสียงส่วนตัว (Soundbox) พร้อมอุปกรณ์
                    ใครอยากมาซ้อมดนตรี ร้องเพลง ทำเดโมก็ยังได้ และยังมีทรัพยากร
                    เกี่ยวกับดนตรีหลายด้านให้ค้นคว้า อีกด้วย
                  </p>
                </PlayZoneCard>
              </PlayspaceFrame>
            </div>

            <div className="pointer-events-none sticky top-0 z-40 flex h-dvh w-full items-center justify-center">
              <PlayspaceFrame>
                <PlayZoneCard
                  src={asset("img/s03/playzone/playzone-4.png")}
                  alt="โซนพื้นที่ส่วนกลาง"
                  title="โซนพื้นที่ส่วนกลาง"
                  className="absolute left-80 top-70 h-41.25 w-75"
                >
                  <p className="text-center font-th desktop-s7-th-400 text-tk-black">
                    พื้นที่ส่วนกลางสำหรับ การพบปะพูดคุย ทำกิจกรรมร่วมกัน
                    และเล่นบอร์ดเกมที่มีบอร์ดเกมฝีมือ ของนักออกแบบไทยไว้บริการ
                    ถึง 100 กว่าเกม
                  </p>
                </PlayZoneCard>
              </PlayspaceFrame>
            </div>

            <div className="h-dvh" aria-hidden="true" />
          </div>
        </div>

        <div
          className="relative aspect-[600/420] w-full max-w-[600px]"
          aria-label="คำกล่าวเกี่ยวกับการพัฒนาพื้นที่การเรียนรู้ท้องถิ่น"
        >
          <div className="absolute left-0 top-0 h-[78.3333%] w-[78.4053%] border-2 border-white bg-[#ffbaa1]" />
          <blockquote className="absolute left-[13.6%] top-[18.0952%] flex h-[81.9048%] w-[87.0432%] items-center justify-center border-2 border-white bg-[#f5333f] p-2.5 text-center text-white">
            <span className="font-th desktop-s5-th-700 leading-normal text-balance">
              การเปิดเพลย์สเปซในต้นปีพ.ศ. 2569 คือความตั้งใจมอบเป็นของขวัญปีใหม่
              แก่พี่น้องชาวไทย เราอยากเห็นพื้นที่นี้เป็นจุดเริ่มต้น
              ของชุมชนคนรุ่นใหม่ที่จะช่วยกันขับเคลื่อนกรุงเทพฯ
              ให้เป็นเมืองแห่งการเรียนรู้ที่สนุกสนาน
              และเข้าถึงได้สำหรับทุกคนอย่างแท้จริง
              <br />
              <br />
              <b className="font-th desktop-s7-th-400 ">
                นายวัฒนชัย วินิจจะกูล รักษาการผู้อำนวยการสถาบันอุทยานการเรียนรู้
                TK Park
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
