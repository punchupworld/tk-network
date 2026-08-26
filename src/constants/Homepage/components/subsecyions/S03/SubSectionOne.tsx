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
          การพัฒนาพื้นที่การเรียนรู้อย่างยั่งยืน จำเป็นต้องผสานการออกแบบพื้นที่
          <br />
          ที่ยืดหยุ่นและหลากหลาย เครือข่ายต้องเข้าใจผู้ใช้อย่างถ่องแท้ และจัด
          <br />
          ระบบการบริหารที่มีประสิทธิภาพ
          ควบคู่ไปกับการเลือกสรรแนวทางที่เหมาะสมกับศักยภาพของตน
        </p>

        <div className="flex flex-col gap-2.5 justify-end items-end w-full">
          <div>
            <p className="font-th desktop-s6-th-400 text-tk-black px-2.5 py-1 bg-yellow-700 w-fit">
              โดยองค์ประกอบที่สำคัญในการวางแผนเพื่อพัฒนาพื้นที่การเรียนรู้
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
            ไม่ว่าหน่วยงานลักษณะไหนก็สามารถเข้าร่วม เครือข่าย TK Park ได้
            ตราบใดที่สนใจและต้องการสร้างพื้นที่การเรียนรู้ในชุมชน
            <br />
            ของตัวเอง และอยากให้คนในพื้นที่ได้เข้าถึงความรู้ ทรัพยากร
            เพื่อพัฒนาตัวเองอย่างไม่มีที่สิ้นสุด
          </p>
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            ตลอดระยะเวลาที่ผ่านมา TK Park <br />
            ร่วมงานกับทั้งหน่วยงานรัฐและ <br />
            องค์กรไม่แสวงผลกำไร ตั้งแต่ <br />
            องค์การบริหารส่วนจังหวัด องค์การบริหารส่วนตำบล เทศบาลตำบล เมือง นคร
            กระทรวง กรม หน่วยงานด้านการศึกษา มูลนิธิ สหกรณ์ และสมาคม
          </p>
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            หน่วยงานเอกชน มักจะร่วมงานกับ <br />
            TK Park ในหลายรูปแบบ เช่น สร้างพื้นที่ <br />
            การเรียนรู้ซึ่งเป็นเป้าหมายหลัก สนับสนุนการเรียนรู้นอกห้องเรียนใน
            <br />
            รูปแบบต่างๆ
            หรือนำข้อมูลของพื้นที่การเรียนรู้ไปเป็นส่วนหนึ่งของแผนการทำ CSR
            <br /> ของบริษัท
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
              หากจะสร้างพื้นที่การเรียนรู้สักที่ <br />
              ทำเลที่ตั้งต้องมีคุณสมบัติพื้นฐานที่เหมาะกับ <br />
              จุดประสงค์ของการสร้าง ไม่ว่าจะเป็นการเป็นพื้นที่สาธารณะ (Public
              Space) ที่สร้าง <br />
              การมี ส่วนร่วมของคนในชุมชน จุดนัดพบปะสังสรรค์
              พื้นที่อบรมพัฒนาทักษะ <br />
              หรือเมกเกอร์สเปซ (Makerspace) <br />
              ดังนั้นพื้นที่การเรียนรู้ <br />
              ควรคิดถึงกลุ่มเป้าหมายก่อน และควรตั้งอยู่บริเวณใจกลางเมือง
              และอยู่ใกล้กับชุมชน <br />
              ผู้ใช้บริการจะได้เข้าถึงง่ายและเดินทางสะดวก
            </p>
          </div>
        </div>
        <div className="border-2 border-white">
          <div className="p-10 bg-orange-300 border-b-2 border-white">
            <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
              <b> ทำเลที่ตั้งสำคัญขนาดไหน ส่งผลดีแค่ไหน</b>
              <br />
              คำตอบอาจอยู่ที่เป้าหมายและวิสัยทัศน์ของผู้สร้าง
              พื้นที่การเรียนรู้สามารถสร้างอนาคตของผู้ประกอบการหน้าใหม่ นวัตกร
              หรือครีเอทีฟได้ไหม <br />
              บริการของภาครัฐสามารถมัดรวมกันไว้ในนี้จนกลายเป็นการให้บริการแบบเบ็ดเสร็จ
              (One-stop Service)
              แบบที่ประชาชนได้รับความสะดวกสบายในการเข้าถึงบริการพื้นฐานหรือเปล่า?
            </p>
          </div>
          <div className="flex gap-2.5 p-10 bg-yellow-100 border-b-2 border-white md:flex-row flex-col">
            <p className="font-th desktop-s6-th-400 text-tk-black text-balance md:w-1/2 w-full">
              <b>เมืองอาร์ฮุส เดนมาร์ก</b> มีห้องสมุดประชาชน <b>Dokk1</b>{" "}
              ซึ่งได้รับการออกแบบในฐานะศูนย์กลางขนาดใหญ่ของชุมชนตรงใจกลางเมือง{" "}
              <br />
              แถมยังตั้งอยู่ริมน้ำ มีขนาดกว้างขวางและสวยงาม เข้าถึงง่าย เหมาะกับ{" "}
              <br />
              การจัดกิจกรรมหลากหลายรูปแบบ <br />
              เพราะอาร์ฮุสให้ความสำคัญกับความรู้ วัฒนธรรม และการรวมกลุ่มชุมชน
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
              ห้องสมุด <b>Oodi</b> ของประเทศ<b>ฟินแลนด์</b>ก็เช่นกัน
              นี่คือพื้นที่สาธารณะที่มีบริการผสมผสานอย่างครอบคลุม
              คือมีทั้งห้องสมุดแบบดั้งเดิมพร้อม <br />
              บริการใหม่ๆ ที่ก้าวไปพร้อมกับยุคสมัย เช่น ห้องนิทาน <br />
              (Children&apos;s story room) หรือสนามเด็กเล่น สาธารณะบนระเบียงชั้น
              3 ของห้องสมุด พื้นที่สำหรับเด็กและครอบครัว
              ซึ่งตอบโจทย์ความต้องการของชุมชนที่ต้องการพื้นที่
              สาธารณะสำหรับเด็กและครอบครัว <br /> (Services for Families)
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
              ห้องสมุดกลายเป็นสิ่งที่เราเรียกว่า Third Place
              หรือพื้นที่ที่เป็นส่วนหนึ่งของวิถีชีวิตคนในเมือง
              สองโครงการนี้จึงเกิดขึ้นโดยมีทำเลที่ตั้งเป็นหัวใจ
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start">
        <CoverCap color="#91C5F4" />
        <div className="flex w-full flex-col items-start gap-10 border-x-2 border-b-2 border-white bg-[#91C5F4] md:px-10 px-5 pt-5 pb-10 text-white">
          <div>
            <h2 className="text-center md:text-left font-th desktop-s6-th-700 px-2.5 py-1.5 text-tk-black border-2 border-tk-black rounded-full">
              เกณฑ์การพิจารณาทำเลที่ตั้งที่เหมาะสม สอดคล้องกับการพัฒนาเมือง
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
                อยู่ใกล้ระบบขนส่งสาธารณะและ พื้นที่การเรียนรู้อื่นๆ
                เดินด้วยเท้าไม่เกิน 400-500 เมตรจาก <br />
                จุดจอดรถ
              </p>
              <p className="border-x border-t md:border-b border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black">
                อยู่ในย่านชุมชน ย่านค้าขาย หรือริมถนนสายหลัก
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <p className="border-x border-t md:border-l-0 border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black">
                อยู่ใกล้กับโรงเรียนหรือสถาบัน การศึกษา
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
          <div className="flex flex-col gap-5">
            <h2 className="w-fit font-th desktop-s6-th-700 px-5 py-1.5 text-tk-black border-2 border-tk-black rounded-full">
              ตัวอย่าง
            </h2>
            <div className="flex items-end md:flex-row flex-col">
              <div className="px-2.5 py-1 bg-tk-black">
                <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                  อุทยานการเรียนรู้ <br />
                  ยะลา
                </p>
              </div>
              <div className="bg-white border border-tk-black">
                <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-black ">
                  ตั้งอยู่ใจกลางเมือง บริเวณลานกีฬา ศูนย์เยาวชน ศูนย์ผู้สูงอายุ
                  รายล้อมไปด้วยร้านค้าและที่อยู่อาศัย
                </div>
              </div>
            </div>
            <div className="flex items-end md:flex-row flex-col">
              <div className="px-2.5 py-1 bg-tk-black">
                <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                  อุทยานการเรียนรู้ <br />
                  ศรีสะเกษ
                </p>
              </div>
              <div className="bg-white border border-tk-black">
                <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-black">
                  ตั้งอยู่บนถนนสายหลักของเมือง รายล้อมด้วยสถาบันการศึกษา
                  ตั้งแต่โรงเรียนอนุบาลจนถึงสถาบันอุดมศึกษา
                </div>
              </div>
            </div>
            <div className="flex items-end md:flex-row flex-col ">
              <div className="px-2.5 py-1 bg-tk-black">
                <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                  อุทยานการเรียนรู้
                  <br />
                  แม่ฮ่องสอน
                </p>
              </div>
              <div className="bg-white border border-tk-black">
                <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-black">
                  ตั้งอยู่ใจกลางเมือง ย่านธุรกิจ ย่านค้าขาย ที่อยู่อาศัย
                  และภายในยังเป็นศูนย์ไอซีที
                  และพื้นที่เรียนรู้ของวิทยาลัยชุมชนแม่ฮ่องสอน
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
              หนังสือและสื่อที่หลากหลาย ทำให้เกิด <br />
              การเรียนรู้ที่หลายหลากตามความสนใจของ <br />
              ผู้ใช้บริการ
              เนื่องจากหนังสือและสื่อเป็นตัวกลางสำคัญที่หน่วยงานสามารถจัดหมวดหมู่เพื่อสร้างการเรียนรู้โดยไม่ตั้งใจ
              และ <br />
              สอดแทรกไปกับการทำกิจกรรมรูปแบบต่างๆ ได้
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
                  จัดหาหนังสือตามแนวทางการ
                  <br />
                  คัดเลือก หนังสือสำหรับเด็ก <br />
                  แต่ละช่วงวัย
                </p>
                <p className="md:border-l md:border-r-0 border-x md:border-y border-t border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black bg-white">
                  จัดหาประเภทของหนังสือให้มีความหลากหลาย ทันสมัย และเพียงพอ เช่น
                  วารสาร สื่อมัลติมีเดีย
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <p className="border-x border-t  border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black bg-white">
                  คำนึงถึงความสนใจของ <br />
                  กลุ่มผู้ใช้งาน และสภาพแวดล้อมเป็นหลัก
                </p>
                <p className="border-x border-t  border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black bg-white">
                  จัดชั้นหนังสือให้ดึงดูด <br />
                  ความสนใจเด็ก เช่น วางหนังสือหันหน้าปกออก
                  หมั่นเปลี่ยนหนังสือเป็นหนังสือออกใหม่หรือหนังสือแนะนำ
                </p>
                <p className="border-x border-t border-tk-black px-[14px] py-[10px] font-th desktop-s6-th-400 text-tk-black bg-white">
                  จัดเก็บหนังสือ สื่อการเรียนรู้ และวัสดุอุปกรณ์ต่างๆ ในสถานที่{" "}
                  <br />
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
            งบประมาณมักจะเป็นประเด็นแรกๆ ที่เครือข่ายต้องการทราบข้อมูล
            โดยหน่วยงาน <br />
            ต้องวางแผนเรื่องการจัดสรรงบประมาณ <br />
            อย่างเหมาะสม เพราะนอกจากงบประมาณ <br />
            ด้านการก่อสร้าง พื้นที่การเรียนรู้ซึ่งเป็น <br />
            งบประมาณหลัก ยังต้องคำนึงถึงงบประมาณดำเนินการ ในแต่ละปีด้วย
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
