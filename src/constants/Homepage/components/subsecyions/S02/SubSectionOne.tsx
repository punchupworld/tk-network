"use client";

import { T03 } from "@/src/components/icons/topics";
import React, { useState } from "react";
import CoverSub from "../../CoverSub";
import ParkCardModal from "../S06/ParkCardModal";
import { PARK_CARDS } from "../S06/parkData";

const IconBox = ({
  stroke,
  className,
}: {
  stroke: string;
  className: string;
}) => {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M74.5122 35.3415H111V111H1V1H37.4878V18.1707H74.5122V35.3415Z"
        stroke={stroke}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const ToolBoxIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6 10.5H2V2H11V6H12V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V10.5C1 10.7652 1.10536 11.0196 1.29289 11.2071C1.48043 11.3946 1.73478 11.5 2 11.5H6V10.5Z"
        fill="#F5333F"
      />
      <path
        d="M15 14.29L13.445 12.735C13.8803 12.1217 14.0694 11.3674 13.9748 10.6213C13.8802 9.87521 13.5088 9.19188 12.9343 8.70664C12.3597 8.2214 11.6239 7.96964 10.8725 8.00124C10.1212 8.03285 9.40905 8.3455 8.87727 8.87727C8.3455 9.40905 8.03285 10.1212 8.00124 10.8725C7.96964 11.6239 8.2214 12.3597 8.70664 12.9343C9.19188 13.5088 9.87521 13.8802 10.6213 13.9748C11.3674 14.0694 12.1217 13.8803 12.735 13.445L14.29 15L15 14.29ZM11 13C10.6044 13 10.2178 12.8827 9.88886 12.6629C9.55996 12.4432 9.30362 12.1308 9.15224 11.7654C9.00087 11.3999 8.96126 10.9978 9.03843 10.6098C9.1156 10.2219 9.30608 9.86549 9.58579 9.58579C9.86549 9.30608 10.2219 9.1156 10.6098 9.03843C10.9978 8.96126 11.3999 9.00087 11.7654 9.15224C12.1308 9.30362 12.4432 9.55996 12.6629 9.88886C12.8827 10.2178 13 10.6044 13 11C13 11.5304 12.7893 12.0391 12.4142 12.4142C12.0391 12.7893 11.5304 13 11 13Z"
        fill="#F5333F"
      />
    </svg>
  );
};

const AGENCY_ITEMS = [
  "ที่ดิน อาคาร",
  "การก่อสร้าง ตกแต่ง",
  "ครุภัณฑ์สำนักงาน ครุภัณฑ์เกี่ยวกับระบบ ห้องสมุดอัตโนมัติ",
  "บุคลากรเพื่อบริหารจัดการ",
  "หนังสือและสื่อรายปี",
  "ทรัพยากรสำหรับการบริการ",
  "งบประมาณในด้านต่างๆ",
];

const TK_PARK_ITEMS = [
  "กิจกรรมสำรวจความต้องการและระดมความเห็น",
  "ถ่ายทอดองค์ความรู้ให้ บุคลากร",
  "ครุภัณฑ์สำนักงาน ครุภัณฑ์เกี่ยวกับระบบ ห้องสมุดอัตโนมัติ",
  "หนังสือและสื่อการเรียนรู้ตามงบประมาณรายปี",
  "ระบบบริหารห้องสมุด อัตโนมัติและระบบสมาชิก",
  "กิจกรรมส่งเสริมการอ่าน กิจกรรมร่วมกับ TK Park ที่กรุงเทพฯ และเครือข่าย",
  "ประชาสัมพันธ์กิจกรรมทั้ง ทางช่องทางออนไลน์และ ออฟไลน์",
  "ติดตามประเมินผลเครือข่าย",
];

const ChecklistRow = ({
  index,
  label,
  className = "",
}: {
  index: number;
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={`border-t border-[#D9D9D9] bg-white px-2.5 py-2 md:px-3.5 md:py-2.5 ${className}`}
    >
      <div className="flex gap-2.5">
        <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-[#D9D9D9] md:size-6.25">
          <p className="font-th mobile-s6-th-400 text-tk-black md:desktop-s6-th-400">
            {index}
          </p>
        </div>
        <p className="font-th mobile-s6-th-400 text-tk-black md:desktop-s6-th-400">
          {label}
        </p>
      </div>
    </div>
  );
};

const SubSectionOne = () => {
  const [openParkId, setOpenParkId] = useState<string | null>(null);
  const openPark = PARK_CARDS.find((park) => park.id === openParkId) ?? null;

  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center">
        <T03
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          รูปแบบของการเข้าร่วม
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-10 border-2 border-white bg-[#FEE6A6]">
        <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
          ถึงแม้แต่ละเครือข่ายจะพัฒนาแหล่งเรียนรู้ตามบริบทของตนเอง
          แต่ก็ไม่ได้ทำงานเพียงลำพัง เนื่องจากทุกๆ
          เครือข่ายสามารถแลกเปลี่ยนประสบการณ์
          เรียนรู้จากตัวอย่างที่ประสบความสำเร็จ
          และเข้าถึงองค์ความรู้ของเครือข่ายทั่ว
          <br />
          ประเทศได้ โดยมี TK Park เป็นผู้สนับสนุนและเชื่อมโยงการเรียนรู้ร่วมกัน
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          เครือข่ายสามารถเลือกรูปแบบของการเข้าร่วมได้ตามความเหมาะสม
          เพื่อความสอดคล้องกับความพร้อมและศักยภาพของพื้นที่การเรียนรู้ในจังหวัดของตน
          โดย TK Park
          มีรูปแบบการเข้าร่วมที่สามารถยืดหยุ่นได้ตามลักษณะเฉพาะของหน่วยงาน
        </p>
        <div className="flex flex-col gap-2.5 justify-end items-end w-full">
          <p className="font-th desktop-s6-th-700 text-tk-black px-2.5 py-1 bg-yellow-700">
            โดยมีทั้งหมด 3 รูปแบบ ดังนี้
          </p>
          <div className="flex flex-wrap">
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                เต็มรูปแบบ
              </p>
            </div>
            <div className="relative flex items-center justify-center ml-[-2px] mr-[-2px]">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                พัฒนา
                <br />
                และต่อยอด
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                พันธมิตร
                <br />
                การเรียนรู้
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col md:flex-row" id="subsubtopic4">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px] "
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              เต็มรูปแบบ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance pb-20">
            สำหรับหน่วยงานที่ต้องการเดินตามรอย TK Park ทั้งในด้านพื้นที่ บริการ
            การบริหารจัดการแบบครบจบทุกองค์ประกอบ
            แผนนี้เหมาะกับเครือข่ายที่ต้องการนำระบบเต็ม
            <br />
            รูปแบบของ TK Park ไปใช้ และใช้คำว่า TK Park
            นำหน้าชื่อจังหวัดของตนเอง เช่น TK Park ยะลา
          </p>
          <div className="flex items-center justify-end">
            <div className="rounded-[5px] border border-[#6F6F6F] px-2.5 py-1 w-fit">
              <p className="font-th desktop-s6-th-400 text-neutral-dark-darker">
                Absolute Plan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-start">
        <CoverSub color="#91C5F4" />
        <div className="absolute top-8.25 right-1 left-5 md:top-8.25 md:right-10 md:left-auto md:max-w-[70%]">
          <div className="flex flex-col justify-end w-full items-end">
            <div className="px-2.5 py-1.5 bg-tk-black w-fit">
              <h2 className="font-th mobile-s6-th-400 text-white md:desktop-s6-th-400">
                เพื่อให้เห็นภาพของรูปแบบนี้ชัดเจนยิ่งขึ้น
              </h2>
            </div>
            <div className="px-2.5 py-1.5 bg-tk-black w-fit">
              <h2 className="font-th mobile-s6-th-700 text-white md:desktop-s6-th-700">
                สิ่งที่หน่วยงานและ TK Park ต้องเตรียมมีดังนี้
              </h2>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 border-x-2 border-b-2 border-white bg-[#91C5F4] px-5 pb-5 text-white md:gap-10 md:px-10 md:pb-10">
          <div className="flex w-full flex-col items-stretch gap-5 md:flex-row md:items-start md:gap-0">
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="px-2.5 py-1.5 bg-tk-black w-fit">
                <h2 className="font-th mobile-s6-th-700 text-white md:desktop-s6-th-700">
                  หน่วยงาน
                </h2>
              </div>
              {AGENCY_ITEMS.map((label, index) => (
                <ChecklistRow
                  key={label}
                  index={index + 1}
                  label={label}
                  className={`border-x md:border-r-0 ${
                    index === AGENCY_ITEMS.length - 1 ? "border-b" : ""
                  }`}
                />
              ))}
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="px-2.5 py-1.5 bg-tk-red w-fit">
                <h2 className="font-th mobile-s6-th-700 text-white md:desktop-s6-th-700">
                  TK Park
                </h2>
              </div>
              {TK_PARK_ITEMS.map((label, index) => (
                <ChecklistRow
                  key={label}
                  index={index + 1}
                  label={label}
                  className={`border-x ${
                    index === TK_PARK_ITEMS.length - 1 ? "border-b" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex w-full gap-1.5 flex-wrap justify-start md:justify-end">
            <div className="px-2.5 py-1 bg-tk-red w-fit border-b border-r border-tk-black">
              <p className="font-th mobile-s7-s8-th-700 text-white md:desktop-s7-th-700">
                ตัวอย่าง
              </p>
            </div>
            {PARK_CARDS.map((park) => (
              <button
                key={park.id}
                type="button"
                onClick={() => setOpenParkId(park.id)}
                className="flex gap-2.5 justify-center items-center px-2.5 py-1 hover:bg-tk-red w-fit border-b border-r border-tk-black group cursor-pointer"
              >
                <p className="font-th mobile-s7-s8-th-400 group-hover:text-white text-tk-black md:desktop-s7-th-400">
                  {park.host}
                </p>
                <ToolBoxIcon />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col md:flex-row" id="subsubtopic5">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              พัฒนา <br />
              และต่อยอด
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            สำหรับหน่วยงานที่ต้องการนำองค์ประกอบของ TK Park
            ไปใช้กับพื้นที่การเรียนรู้เดิมให้หลากหลายและทันสมัยมากขึ้น
            อาจนำจุดเด่นบางด้านไปใช้ร่วมกับการบริหารจัดการเดิม
            หรือเติมฟังก์ชันให้พื้นที่การเรียนรู้สนุกขึ้น
            แผนนี้เหมาะกับเครือข่ายที่ต้องการยกระดับ
            ห้องสมุดหรือพื้นที่การเรียนรู้ในชุมชนและต้องการให้ TK Park
            เข้ามาร่วมออกแบบและพัฒนาพื้นที่การเรียนรู้ ให้ตอบโจทย์ผู้คนในพื้นที่
          </p>
          <div className="flex items-center justify-end">
            <div className="rounded-[5px] border border-[#6F6F6F] px-2.5 py-1 w-fit">
              <p className="font-th desktop-s6-th-400 text-neutral-dark-darker">
                Basic Plan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col md:flex-row" id="subsubtopic6">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              พันธมิตร <br />
              การเรียนรู้
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            สำหรับหน่วยงานที่ต้องการนำแนวคิด
            <br />
            ห้องสมุดมีชีวิตไปใช้ เน้นกิจกรรมสร้างสรรค์ แลกเปลี่ยนองค์ความรู้
            แผนนี้เหมาะกับเครือข่ายที่อาจจะมีพื้นที่การเรียนรู้เดิม
            (หรืออยู่ภายใต้หน่วยงานอื่น) ไม่ได้ใช้ระบบของ TK Park
            แต่ต้องการนำกิจกรรมรายปี หรือนวัตกรรมบางอย่างของ TK Park ไปปรับใช้
          </p>
          <div className="flex items-center justify-end">
            <div className="rounded-[5px] border border-[#6F6F6F] px-2.5 py-1 w-fit">
              <p className="font-th desktop-s6-th-400 text-neutral-dark-darker">
                Conceptual Plan
              </p>
            </div>
          </div>
        </div>
      </div>
      {openPark ? (
        <ParkCardModal park={openPark} onClose={() => setOpenParkId(null)} />
      ) : null}
    </div>
  );
};

export default SubSectionOne;
