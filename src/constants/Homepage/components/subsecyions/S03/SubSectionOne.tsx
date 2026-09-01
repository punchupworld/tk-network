"use client";
import { T05 } from "@/src/components/icons/topics";
import React, { useState } from "react";
import CoverSub from "../../CoverSub";
import Image from "next/image";
import { ImageModal } from "../S06/ParkCard";
import CoverCap from "../../CoverCap";
import { asset } from "@/src/lib/asset";

const IconBox = ({
  stroke,
  className,
}: {
  stroke: string;
  className: string;
}) => {
  return (
    <svg
      width="113"
      height="112"
      viewBox="0 0 113 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.6236 1H111.16L94.6967 111H1.16016L17.6236 1Z"
        stroke={stroke}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const ToolBox = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10.5H2V2H11V6H12V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V10.5C1 10.7652 1.10536 11.0196 1.29289 11.2071C1.48043 11.3946 1.73478 11.5 2 11.5H6V10.5Z"
        fill="#D9D9D9"
      />
      <path
        d="M15 14.29L13.445 12.735C13.8803 12.1217 14.0694 11.3674 13.9748 10.6213C13.8802 9.87521 13.5088 9.19188 12.9343 8.70664C12.3597 8.2214 11.6239 7.96964 10.8725 8.00124C10.1212 8.03285 9.40905 8.3455 8.87727 8.87727C8.3455 9.40905 8.03285 10.1212 8.00124 10.8725C7.96964 11.6239 8.2214 12.3597 8.70664 12.9343C9.19188 13.5088 9.87521 13.8802 10.6213 13.9748C11.3674 14.0694 12.1217 13.8803 12.735 13.445L14.29 15L15 14.29ZM11 13C10.6044 13 10.2178 12.8827 9.88886 12.6629C9.55996 12.4432 9.30362 12.1308 9.15224 11.7654C9.00087 11.3999 8.96126 10.9978 9.03843 10.6098C9.1156 10.2219 9.30608 9.86549 9.58579 9.58579C9.86549 9.30608 10.2219 9.1156 10.6098 9.03843C10.9978 8.96126 11.3999 9.00087 11.7654 9.15224C12.1308 9.30362 12.4432 9.55996 12.6629 9.88886C12.8827 10.2178 13 10.6044 13 11C13 11.5304 12.7893 12.0391 12.4142 12.4142C12.0391 12.7893 11.5304 13 11 13Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};

type ParkImage = {
  src: string;
  alt: string;
  height: number;
};

const SubSectionOne = () => {
  const [openImage, setOpenImage] = useState<ParkImage | null>(null);

  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center">
        <T05
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          แนวทาง
          <br />
          การบริหาร
          <br />
          จัดการ
          <br />
          พื้นที่เรียนรู้
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-10 border-2 border-white bg-[#FEE6A6]">
        <p className="font-th desktop-s6-th-400 text-tk-black">
          การพัฒนาพื้นที่การเรียนรู้
          <br className="sm:hidden block" />
          อย่างยั่งยืนจำเป็นต้องผสาน
          <br className="sm:hidden block" />
          การออกแบบพื้นที่
          <br className="hidden sm:block" />
          ที่ยืดหยุ่นและ
          <br className="sm:hidden block" />
          หลากหลาย เครือข่ายต้องเข้าใจ
          <br className="sm:hidden block" />
          ผู้ใช้อย่างถ่องแท้ และจัด
          <br className="hidden sm:block" />
          ระบบ
          <br className="sm:hidden block" />
          การบริหารที่มีประสิทธิภาพ ควบคู่
          <br className="sm:hidden block" />
          ไปกับการเลือกสรรแนวทาง
          <br className="sm:hidden block" />
          ที่เหมาะสมกับศักยภาพของตน
        </p>

        <div className="flex flex-col gap-2.5 justify-end items-end w-full">
          <div>
            <p className="font-th desktop-s6-th-400 text-tk-black px-2.5 py-1 bg-yellow-700 w-fit">
              โดยองค์ประกอบที่สำคัญ
              <br className="sm:hidden block" />
              ในการวางแผนเพื่อพัฒนา
              <br className="sm:hidden block" />
              พื้นที่การเรียนรู้
            </p>
            <p className="font-th desktop-s6-th-700 text-tk-black px-2.5 py-1 bg-yellow-700 w-fit">
              มีอยู่ 4 ด้าน ประกอบด้วย
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="relative flex items-center justify-center mr-[-19px]">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                หน่วยงาน <br />
                เจ้าภาพ
              </p>
            </div>
            <div className="relative flex items-center justify-center mr-[-19px]">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                ทำเลที่ตั้ง
              </p>
            </div>
            <div className="relative flex items-center justify-center mr-[-19px]">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                หนังสือ
                <br />
                และสื่อ
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                งบประมาณ
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start md:flex-row flex-col" id="subsubtopic8">
        <div className="p-5 md:border-y-2 border-l-2 border-t-2 md:border-r-0 border-r-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              หน่วยงาน <br />
              เจ้าภาพ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-700 text-tk-red text-balance">
            เป็นใครได้บ้าง
          </p>
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            ไม่ว่าหน่วยงานลักษณะไหน
            <br className="sm:hidden block" />
            ก็สามารถเข้าร่วมเครือข่าย <br className="sm:hidden block" />
            TK Park ได้ ตราบใดที่สนใจและ
            <br className="sm:hidden block" />
            ต้องการสร้างพื้นที่การเรียนรู้
            <br className="sm:hidden block" />
            ในชุมชน
            <br className="hidden sm:block" />
            ของตัวเอง และอยากให้
            <br className="sm:hidden block" />
            คนในพื้นที่ได้เข้าถึงความรู้ <br className="sm:hidden block" />
            ทรัพยากร เพื่อพัฒนาตัวเอง
            <br className="sm:hidden block" />
            อย่างไม่มีที่สิ้นสุด
          </p>
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            ตลอดระยะเวลาที่ผ่านมา <br className="sm:hidden block" />
            TK Park <br className="hidden sm:block" />
            ร่วมงานกับทั้ง
            <br className="sm:hidden block" />
            หน่วยงานรัฐและ <br className="hidden sm:block" />
            องค์กรไม่แสวง
            <br className="sm:hidden block" />
            ผลกำไร ตั้งแต่ <br className="hidden sm:block" />
            องค์การบริหาร
            <br className="sm:hidden block" />
            ส่วนจังหวัด องค์การบริหาร
            <br className="sm:hidden block" />
            ส่วนตำบล เทศบาลตำบล <br className="sm:hidden block" />
            เมือง นคร กระทรวง กรม <br className="sm:hidden block" />
            หน่วยงานด้านการศึกษา <br className="sm:hidden block" />
            มูลนิธิ สหกรณ์ และสมาคม
          </p>
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            หน่วยงานเอกชน มักจะร่วมงาน
            <br className="sm:hidden block" />
            กับ <br className="hidden sm:block" />
            TK Park ในหลายรูปแบบ เช่น <br className="sm:hidden block" />
            สร้างพื้นที่
            <br className="hidden sm:block" />
            การเรียนรู้ซึ่งเป็น
            <br className="sm:hidden block" />
            เป้าหมายหลัก สนับสนุน
            <br className="sm:hidden block" />
            การเรียนรู้นอกห้องเรียน
            <br className="sm:hidden block" />
            ในรูปแบบต่างๆ <br className="hidden sm:block" />
            หรือนำข้อมูล
            <br className="sm:hidden block" />
            ของพื้นที่การเรียนรู้ไป
            <br className="hidden sm:block" />
            เป็น
            <br className="sm:hidden block" />
            ส่วนหนึ่งของแผนการทำ CSR
            <br className="sm:hidden block" /> ของบริษัท
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex items-start md:flex-row flex-col">
          <div className="p-5 md:border-y-2 border-l-2 border-t-2 md:border-r-0 border-r-2 border-white bg-yellow-700">
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#FFFFFF"
                className="w-[168px] h-[168px]"
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
                ทำเลที่ตั้ง
              </p>
            </div>
          </div>
          <div className="p-10 border-2 border-white bg-orange-50 flex flex-col gap-2.5">
            <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
              หากจะสร้างพื้นที่การเรียนรู้
              <br className="sm:hidden block" />
              สักที่ <br className="hidden sm:block" />
              ทำเลที่ตั้งต้องมีคุณสมบัติ
              <br className="sm:hidden block" />
              พื้นฐานที่เหมาะกับ <br className="hidden sm:block" />
              จุดประสงค์
              <br className="sm:hidden block" />
              ของการสร้าง ไม่ว่าจะเป็นการเป็น
              <br className="sm:hidden block" />
              พื้นที่สาธารณะ (Public Space) <br className="sm:hidden block" />
              ที่สร้าง
              <br className="hidden sm:block" />
              การมีส่วนร่วมของคน
              <br className="sm:hidden block" />
              ในชุมชน จุดนัดพบปะสังสรรค์
              <br className="sm:hidden block" />
              พื้นที่อบรมพัฒนาทักษะ <br className="hidden sm:block" />
              หรือ
              <br className="sm:hidden block" />
              เมกเกอร์สเปซ (Makerspace) <br />
              ดังนั้นพื้นที่การเรียนรู้ควรคิดถึง
              <br className="hidden sm:block" />
              <br className="sm:hidden block" />
              กลุ่มเป้าหมายก่อน และควร
              <br className="sm:hidden block" />
              ตั้งอยู่บริเวณใจกลางเมือง <br className="sm:hidden block" />
              และอยู่ใกล้กับชุมชน <br className="hidden sm:block" />
              ผู้ใช้บริการ
              <br className="sm:hidden block" />
              จะได้เข้าถึงง่ายและเดินทางสะดวก
            </p>
          </div>
        </div>
        <div className="border-2 border-white">
          <div className="p-10 bg-orange-300 border-b-2 border-white">
            <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
              <b>
                ทำเลที่ตั้งสำคัญขนาดไหน
                <br className="sm:hidden block" /> ส่งผลดีแค่ไหน
              </b>
              <br />
              คำตอบอาจอยู่ที่เป้าหมายและ
              <br className="sm:hidden block" />
              วิสัยทัศน์ของผู้สร้าง พื้นที่
              <br className="sm:hidden block" />
              การเรียนรู้สามารถสร้างอนาคต
              <br className="sm:hidden block" />
              ของผู้ประกอบการหน้าใหม่ <br className="sm:hidden block" />
              นวัตกร หรือครีเอทีฟได้ไหม <br />
              บริการของภาครัฐสามารถมัดรวม
              <br className="sm:hidden block" />
              กันไว้ในนี้จนกลายเป็นการให้
              <br className="sm:hidden block" />
              บริการแบบเบ็ดเสร็จ <br className="sm:hidden block" />
              (One-stop Service) แบบที่
              <br className="sm:hidden block" />
              ประชาชนได้รับความสะดวกสบาย
              <br className="sm:hidden block" />
              ในการเข้าถึงบริการพื้นฐาน
              <br className="sm:hidden block" />
              หรือเปล่า?
            </p>
          </div>
          <div className="flex gap-2.5 p-10 bg-yellow-100 border-b-2 border-white md:flex-row flex-col">
            <p className="font-th desktop-s6-th-400 text-tk-black text-balance md:w-1/2 w-full">
              <b>เมืองอาร์ฮุส เดนมาร์ก</b> <br className="sm:hidden block" />
              มีห้องสมุดประชาชน <b>Dokk1</b> <br className="sm:hidden block" />
              ซึ่งได้รับการออกแบบในฐานะ
              <br className="sm:hidden block" />
              ศูนย์กลางขนาดใหญ่ของชุมชน
              <br className="sm:hidden block" />
              ตรงใจกลางเมือง <br className="hidden sm:block" />
              แถมยังตั้งอยู่
              <br className="sm:hidden block" />
              ริมน้ำ มีขนาดกว้างขวางและ
              <br className="sm:hidden block" />
              สวยงาม เข้าถึงง่าย เหมาะกับ <br className="hidden sm:block" />
              การ
              <br className="sm:hidden block" />
              จัดกิจกรรมหลากหลายรูปแบบ <br />
              เพราะอาร์ฮุสให้ความสำคัญกับ
              <br className="sm:hidden block" />
              ความรู้ วัฒนธรรม และการรวม
              <br className="sm:hidden block" />
              กลุ่มชุมชน
            </p>
            <div className="flex justify-end items-end ">
              <button
                type="button"
                className="w-fit cursor-pointer border border-white text-left"
                onClick={() =>
                  setOpenImage({
                    src: asset("/img/tthree-one.png"),
                    alt: "tthree-one",
                    height: 138,
                  })
                }
                aria-label={`ดูรูป 1`}
              >
                <div className="relative">
                  <Image
                    src={asset("/img/tthree-one.png")}
                    alt="tthree-one"
                    width={100}
                    height={138}
                    className="w-[100px] object-cover"
                  />
                  <div className="absolute bottom-2 right-2">
                    <ToolBox />
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="w-fit cursor-pointer border border-white text-left"
                onClick={() =>
                  setOpenImage({
                    src: asset("/img/tthree-two.png"),
                    alt: "tthree-two",
                    height: 187,
                  })
                }
                aria-label={`ดูรูป 2`}
              >
                <div className="relative">
                  <Image
                    src={asset("/img/tthree-two.png")}
                    alt="tthree-one"
                    width={137}
                    height={187}
                    className="w-[137px] object-cover"
                  />
                  <div className="absolute bottom-2 right-2">
                    <ToolBox />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex gap-2.5 p-10 bg-orange-50 border-b-2 border-white md:flex-row flex-col">
            <p className="font-th desktop-s6-th-400 text-tk-black text-balance md:w-1/2 w-full">
              ห้องสมุด <b>Oodi</b> ของประเทศ
              <br className="sm:hidden block" />
              <b>ฟินแลนด์</b>ก็เช่นกัน นี่คือพื้นที่
              <br className="sm:hidden block" />
              สาธารณะที่มีบริการผสมผสาน
              <br className="sm:hidden block" />
              อย่างครอบคลุม คือมีทั้งห้องสมุด
              <br className="sm:hidden block" />
              แบบดั้งเดิมพร้อม <br className="hidden sm:block" />
              บริการใหม่ๆ <br className="sm:hidden block" />
              ที่ก้าวไปพร้อมกับยุคสมัย เช่น <br className="sm:hidden block" />
              ห้องนิทาน (Children&apos;s story{" "}
              <br className="sm:hidden block" />
              room) หรือสนามเด็กเล่น <br className="sm:hidden block" />
              สาธารณะบนระเบียงชั้น 3 <br className="sm:hidden block" />
              ของห้องสมุด พื้นที่สำหรับเด็ก
              <br className="sm:hidden block" />
              และครอบครัว ซึ่งตอบโจทย์
              <br className="sm:hidden block" />
              ความต้องการของชุมชน
              <br className="sm:hidden block" />
              ที่ต้องการพื้นที่ สาธารณะสำหรับ
              <br className="sm:hidden block" />
              เด็กและครอบครัว <br /> (Services for Families){" "}
              <br className="sm:hidden block" />
              ที่เข้าถึงได้
            </p>
            <div className="flex justify-end items-end ">
              <button
                type="button"
                className="w-fit cursor-pointer border border-white text-left"
                onClick={() =>
                  setOpenImage({
                    src: asset("/img/tthree-three.png"),
                    alt: "tthree-three",
                    height: 138,
                  })
                }
                aria-label={`ดูรูป 1`}
              >
                <div className="relative">
                  <Image
                    src={asset("/img/tthree-three.png")}
                    alt="tthree-three"
                    width={100}
                    height={138}
                    className="w-[100px] object-cover"
                  />
                  <div className="absolute bottom-2 right-2">
                    <ToolBox />
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="w-fit cursor-pointer border border-white text-left"
                onClick={() =>
                  setOpenImage({
                    src: asset("/img/tthree-four.png"),
                    alt: "tthree-four",
                    height: 187,
                  })
                }
                aria-label={`ดูรูป 2`}
              >
                <div className="relative">
                  <Image
                    src={asset("/img/tthree-four.png")}
                    alt="tthree-four"
                    width={137}
                    height={187}
                    className="w-[137px] object-cover"
                  />
                  <div className="absolute bottom-2 right-2">
                    <ToolBox />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="p-10 bg-yellow-700">
            <p className="font-th desktop-s6-th-700 text-tk-black text-balance">
              ห้องสมุดกลายเป็นสิ่งที่เรา
              <br className="sm:hidden block" />
              เรียกว่า Third Place หรือพื้นที่
              <br className="sm:hidden block" />
              ที่เป็นส่วนหนึ่งของวิถีชีวิต
              <br className="sm:hidden block" />
              คนในเมือง สองโครงการนี้
              <br className="sm:hidden block" />
              จึงเกิดขึ้นโดยมีทำเลที่ตั้ง
              <br className="sm:hidden block" />
              เป็นหัวใจ
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start">
        <CoverCap color="#91C5F4" />
        <div className="flex w-full flex-col items-start gap-10 border-x-2 border-b-2 border-white bg-[#91C5F4] md:px-10 px-5 pt-5 pb-10 text-white">
          <div className="w-full md:w-fit">
            <h2 className=" text-center md:text-left font-th desktop-s6-th-700 px-2.5 py-1.5 text-tk-black border-2 border-tk-black rounded-full">
              เกณฑ์การพิจารณาทำเลที่ตั้ง
              <br className="sm:hidden block" />
              ที่เหมาะสม สอดคล้องกับการ
              <br className="sm:hidden block" />
              พัฒนาเมือง
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <p className="border-x border-t border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black">
                เข้าถึงง่าย ปลอดภัย ไม่เปลี่ยว
              </p>
              <p className="border-x border-t border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black">
                เดินทางสะดวก รองรับทั้ง <br />
                รถส่วนตัวและสาธารณะ
              </p>
              <p className="border-x border-t border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black">
                อยู่ใกล้ระบบขนส่งสาธารณะและ <br className="sm:hidden block" />
                พื้นที่การเรียนรู้อื่นๆ เดินด้วยเท้า
                <br className="sm:hidden block" />
                ไม่เกิน 400-500 เมตรจาก
                <br />
                จุดจอดรถ
              </p>
              <p className="border-x border-t md:border-b border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black">
                อยู่ในย่านชุมชน ย่านค้าขาย <br className="sm:hidden block" />
                หรือริมถนนสายหลัก
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <p className="border-x border-t md:border-l-0 border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black">
                อยู่ใกล้กับโรงเรียนหรือสถาบัน <br className="sm:hidden block" />
                การศึกษา
              </p>
              <p className="border-x border-t md:border-l-0 border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black">
                หากอยู่ในอาคารหลายชั้น <br />
                ควรตั้งอยู่ชั้นล่างสุด
              </p>
              <p className="border-x border-t md:border-l-0 border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black">
                มีพื้นที่สำหรับทำกิจกรรม <br />
                ทั้งภายในและภายนอก
              </p>
              <p className="border-x border-t border-b md:border-l-0 border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black">
                มีศักยภาพในการขยายพื้นที่ <br />
                ในระยะยาว
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:justify-end justify-start w-full">
            <h2 className="w-fit font-th desktop-s6-th-700 px-5 py-1.5 text-tk-black border-2 border-tk-black rounded-full">
              ตัวอย่าง
            </h2>
            <div className="flex items-end md:flex-row flex-col">
              <div className="px-2.5 py-1 bg-tk-black">
                <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                  อุทยาน
                  <br className="sm:hidden block" />
                  การเรียนรู้
                  <br className="hidden sm:block" />
                  ยะลา
                </p>
              </div>
              <div className="bg-white border border-tk-black">
                <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-black ">
                  ตั้งอยู่ใจกลางเมือง บริเวณลาน
                  <br className="sm:hidden block" />
                  กีฬา ศูนย์เยาวชน ศูนย์ผู้สูงอายุ
                  <br className="sm:hidden block" />
                  รายล้อมไปด้วยร้านค้าและ
                  <br className="sm:hidden block" />
                  ที่อยู่อาศัย
                </div>
              </div>
            </div>
            <div className="flex items-end md:flex-row flex-col">
              <div className="px-2.5 py-1 bg-tk-black">
                <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                  อุทยาน
                  <br className="sm:hidden block" />
                  การเรียนรู้
                  <br className="hidden sm:block" />
                  ศรีสะเกษ
                </p>
              </div>
              <div className="bg-white border border-tk-black">
                <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-black">
                  ตั้งอยู่บนถนนสายหลักของเมือง{" "}
                  <br className="sm:hidden block" />
                  รายล้อมด้วยสถาบันการศึกษา
                  <br className="sm:hidden block" />
                  ตั้งแต่โรงเรียนอนุบาลจนถึง
                  <br className="sm:hidden block" />
                  สถาบันอุดมศึกษา
                </div>
              </div>
            </div>
            <div className="flex items-end md:flex-row flex-col ">
              <div className="px-2.5 py-1 bg-tk-black">
                <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                  อุทยาน
                  <br className="sm:hidden block" />
                  การเรียนรู้
                  <br />
                  แม่ฮ่องสอน
                </p>
              </div>
              <div className="bg-white border border-tk-black">
                <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-black">
                  ตั้งอยู่ใจกลางเมือง ย่านธุรกิจ{" "}
                  <br className="sm:hidden block" />
                  ย่านค้าขาย ที่อยู่อาศัย และภายใน
                  <br className="sm:hidden block" />
                  ยังเป็นศูนย์ไอซีที และพื้นที่เรียนรู้
                  <br className="sm:hidden block" />
                  ของวิทยาลัยชุมชนแม่ฮ่องสอน
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex items-start md:flex-row flex-col">
          <div className="p-5 md:border-y-2 border-l-2 border-t-2 md:border-r-0 border-r-2 border-white bg-yellow-700">
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#FFFFFF"
                className="w-[168px] h-[168px]"
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
                หนังสือ
                <br />
                และสื่อ
              </p>
            </div>
          </div>
          <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
            <p className="font-th desktop-s6-th-400 text-tk-black">
              หนังสือและสื่อที่หลากหลายทำให้
              <br className="sm:hidden block" />
              เกิด
              <br className="hidden sm:block" />
              การเรียนรู้ที่หลายหลาก
              <br className="sm:hidden block" />
              ตามความสนใจของ
              <br className="hidden sm:block" />
              ผู้ใช้บริการ <br className="sm:hidden block" />
              เนื่องจากหนังสือและสื่อ
              <br className="sm:hidden block" />
              เป็นตัวกลางสำคัญที่หน่วยงาน
              <br className="sm:hidden block" />
              สามารถจัดหมวดหมู่เพื่อสร้าง
              <br className="sm:hidden block" />
              การเรียนรู้โดยไม่ตั้งใจและ <br />
              สอดแทรกไปกับการทำกิจกรรม
              <br className="sm:hidden block" />
              รูปแบบ
              <br className="hidden sm:block" />
              ต่างๆ ได้
            </p>
          </div>
        </div>
        <div className="relative flex w-full flex-col items-start">
          <CoverSub color="#91C5F4" />
          <div className="absolute right-[40px] top-[33px]">
            <h2 className="w-fit font-th desktop-s6-th-700 px-5 py-1.5 text-tk-black border-2 border-tk-black rounded-full">
              หลักการคัดเลือก
            </h2>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-10 border-x-2 border-b-2 border-white bg-[#91C5F4] px-10 pb-10 text-white ">
            <div className="mt-px grid w-full grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-end">
                <p className="md:border-l md:border-r-0 border-x border-t border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black bg-white">
                  จัดหาหนังสือตามแนวทาง
                  <br className="sm:hidden block" />
                  การ
                  <br className="hidden sm:block" />
                  คัดเลือก หนังสือสำหรับ
                  <br className="sm:hidden block" />
                  เด็ก
                  <br className="hidden sm:block" />
                  แต่ละช่วงวัย
                </p>
                <p className="md:border-l md:border-r-0 border-x md:border-y border-t border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black bg-white">
                  จัดหาประเภทของหนังสือ
                  <br className="sm:hidden block" />
                  ให้มีความหลากหลาย <br className="sm:hidden block" />
                  ทันสมัย และเพียงพอ เช่น <br className="sm:hidden block" />
                  วารสาร สื่อมัลติมีเดีย
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <p className="border-x border-t  border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black bg-white">
                  คำนึงถึงความสนใจของ <br />
                  กลุ่มผู้ใช้งานและ
                  <br className="sm:hidden block" />
                  สภาพแวดล้อมเป็นหลัก
                </p>
                <p className="border-x border-t  border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black bg-white">
                  จัดชั้นหนังสือให้ดึงดูด <br />
                  ความสนใจเด็ก เช่น <br className="sm:hidden block" />
                  วางหนังสือหันหน้าปกออก <br className="sm:hidden block" />
                  หมั่นเปลี่ยนหนังสือ
                  <br className="sm:hidden block" />
                  เป็นหนังสือออกใหม่
                  <br className="sm:hidden block" />
                  หรือหนังสือแนะนำ
                </p>
                <p className="border-x border-t border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black bg-white">
                  จัดเก็บหนังสือ สื่อการเรียนรู้{" "}
                  <br className="sm:hidden block" />
                  และวัสดุอุปกรณ์ต่างๆ <br className="sm:hidden block" />
                  ในสถานที่ <br className="hidden sm:block" />
                  ที่เหมาะสม
                </p>
                <p className="border-x border-t border-b border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black bg-white">
                  ดูแลบำรุงรักษาทรัพยากร <br />
                  ให้ดีพร้อมใช้งานอยู่เสมอ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-start">
        <div className="p-5 md:border-y-2 border-l-2 border-t-2 md:border-r-0 border-r-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              งบประมาณ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-50 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            งบประมาณมักจะเป็นประเด็น
            <br className="sm:hidden block" />
            แรกๆ ที่
            <br className="hidden sm:block" />
            เครือข่ายต้องการทราบ
            <br className="sm:hidden block" />
            ข้อมูล โดยหน่วยงาน
            <br className="hidden sm:block" />
            ต้องวางแผน
            <br className="sm:hidden block" />
            เรื่องการจัดสรรงบประมาณ <br />
            อย่างเหมาะสม เพราะนอกจาก
            <br className="sm:hidden block" />
            งบประมาณ
            <br className="hidden sm:block" />
            ด้านการก่อสร้าง <br className="sm:hidden block" />
            พื้นที่การเรียนรู้ซึ่งเป็น
            <br className="hidden sm:block" />
            งบประมาณ
            <br className="sm:hidden block" />
            หลัก ยังต้องคำนึงถึงงบประมาณ
            <br className="sm:hidden block" />
            ดำเนินการในแต่ละปีด้วย
          </p>
        </div>
      </div>

      {openImage ? (
        <ImageModal image={openImage} onClose={() => setOpenImage(null)} />
      ) : null}
    </div>
  );
};

export default SubSectionOne;
