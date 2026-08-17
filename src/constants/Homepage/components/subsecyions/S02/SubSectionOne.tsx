import { T03 } from "@/src/components/icons/topics";
import React from "react";
import CoverSub from "../../CoverSub";

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
      />
    </svg>
  );
};

const SubSectionOne = () => {
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
        <p className="font-th desktop-s6-th-400 text-tk-black">
          ถึงแม้แต่ละเครือข่ายจะพัฒนาแหล่งเรียนรู้ตามบริบทของตนเอง
          แต่ก็ไม่ได้ทำงานเพียงลำพัง เนื่องจากทุกๆ
          เครือข่ายสามารถแลกเปลี่ยนประสบการณ์
          เรียนรู้จากตัวอย่างที่ประสบความสำเร็จ
          และเข้าถึงองค์ความรู้ของเครือข่ายทั่วประเทศได้ โดยมี TK Park
          เป็นผู้สนับสนุนและเชื่อมโยงการเรียนรู้ร่วมกัน
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
          <div className="flex">
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
      <div className="flex items-start" id="subsubtopic4">
        <div className="p-5 border-y-2 border-l-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
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
            แผนนี้เหมาะกับเครือข่ายที่ต้องการนำระบบเต็มรูปแบบของ TK Park ไปใช้
            และใช้คำว่า TK Park นำหน้าชื่อจังหวัดของตนเอง เช่น TK Park ยะลา
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
        <div className="absolute right-[40px] top-[33px]">
          <div className="flex flex-col justify-end w-full items-end">
            <div className="px-2.5 py-1.5 bg-tk-black w-fit">
              <h2 className="font-th desktop-s6-th-400 text-white ">
                เพื่อให้เห็นภาพของรูปแบบนี้ชัดเจนยิ่งขึ้น
              </h2>
            </div>
            <div className="px-2.5 py-1.5 bg-tk-black">
              <h2 className="font-th desktop-s6-th-700 text-white">
                สิ่งที่หน่วยงานและ TK Park ต้องเตรียมมีดังนี้
              </h2>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-10 border-x-2 border-b-2 border-white bg-[#91C5F4] px-10 pb-10 text-white ">
          <div className="flex items-start">
            <div className="flex flex-col flex-1">
              <div className="px-2.5 py-1.5 bg-tk-black w-fit">
                <h2 className="font-th desktop-s6-th-700 text-white ">
                  หน่วยงาน
                </h2>
              </div>
              <div className="border-l border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-tk-black">1</p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    ที่ดิน อาคาร
                  </p>
                </div>
              </div>
              <div className="border-l border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-tk-black">2</p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    การก่อสร้าง ตกแต่ง
                  </p>
                </div>
              </div>
              <div className="border-l border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-tk-black">3</p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    ครุภัณฑ์สำนักงาน ครุภัณฑ์เกี่ยวกับระบบ ห้องสมุดอัตโนมัติ
                  </p>
                </div>
              </div>
              <div className="border-l border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-tk-black">4</p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    บุคลากรเพื่อบริหารจัดการ
                  </p>
                </div>
              </div>
              <div className="border-l border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-tk-black">5</p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    หนังสือและสื่อรายปี
                  </p>
                </div>
              </div>
              <div className="border-l border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-tk-black">6</p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    ทรัพยากรสำหรับการบริการ
                  </p>
                </div>
              </div>
              <div className="border-l border-[#D9D9D9] border-b border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-tk-black">7</p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    งบประมาณในด้านต่างๆ
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="px-2.5 py-1.5 bg-tk-red w-fit">
                <h2 className="font-th desktop-s6-th-700 text-white ">
                  TK Park
                </h2>
              </div>
              <div className="border-x  border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-tk-black">1</p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    กิจกรรมสำรวจความต้องการและระดมความเห็น
                  </p>
                </div>
              </div>
              <div className="border-x border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-neutral-dark-darker">
                      2
                    </p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    ถ่ายทอดองค์ความรู้ให้ บุคลากร
                  </p>
                </div>
              </div>
              <div className="border-x border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-neutral-dark-darker">
                      3
                    </p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    ครุภัณฑ์สำนักงาน ครุภัณฑ์เกี่ยวกับระบบ ห้องสมุดอัตโนมัติ
                  </p>
                </div>
              </div>
              <div className="border-x border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-neutral-dark-darker">
                      4
                    </p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    หนังสือและสื่อการเรียนรู้ตามงบประมาณรายปี
                  </p>
                </div>
              </div>
              <div className="border-x border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-neutral-dark-darker">
                      5
                    </p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    ระบบบริหารห้องสมุด อัตโนมัติและระบบสมาชิก
                  </p>
                </div>
              </div>
              <div className="border-x border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-neutral-dark-darker">
                      6
                    </p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    กิจกรรมส่งเสริมการอ่าน กิจกรรมร่วมกับ TK Park ที่กรุงเทพฯ
                    และเครือข่าย
                  </p>
                </div>
              </div>
              <div className="border-x border-[#D9D9D9] border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-neutral-dark-darker">
                      7
                    </p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    ประชาสัมพันธ์กิจกรรมทั้ง ทางช่องทางออนไลน์และ ออฟไลน์
                  </p>
                </div>
              </div>
              <div className="border-x border-[#D9D9D9] border-b border-t px-[14px] py-[10px] bg-white">
                <div className="flex gap-2.5">
                  <div className="w-6.25 h-6.25 shrink-0 border border-[#D9D9D9] rounded-full flex items-center justify-center">
                    <p className="font-th desktop-s6-th-400 text-neutral-dark-darker">
                      8
                    </p>
                  </div>
                  <p className="font-th desktop-s6-th-400 text-tk-black">
                    ติดตามประเมินผลเครือข่าย
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 flex-wrap justify-end">
            <div className="px-2.5 py-1 bg-tk-red w-fit border-b border-r border-tk-black">
              <p className="font-th desktop-s7-th-700 text-white">ตัวอย่าง</p>
            </div>
            <button className="px-2.5 py-1 hover:bg-tk-red w-fit border-b border-r border-tk-black group">
              <p className="font-th desktop-s7-th-400 group-hover:text-white text-tk-black">
                TK Park ยะลา
              </p>
            </button>
            <button className="px-2.5 py-1 hover:bg-tk-red w-fit border-b border-r border-tk-black group">
              <p className="font-th desktop-s7-th-400 group-hover:text-white text-tk-black">
                TK Park ปัตตานี
              </p>
            </button>
            <button className="px-2.5 py-1 hover:bg-tk-red w-fit border-b border-r border-tk-black group">
              <p className="font-th desktop-s7-th-400 group-hover:text-white text-tk-black">
                TK Park พะเยา
              </p>
            </button>
            <button className="px-2.5 py-1 hover:bg-tk-red w-fit border-b border-r border-tk-black group">
              <p className="font-th desktop-s7-th-400 group-hover:text-white text-tk-black">
                TK Park นครราชสีมา
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start" id="subsubtopic5">
        <div className="p-5 border-y-2 border-l-2 border-white bg-yellow-700">
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
            ไปใช้กับพื้นที่การเรียนรู้เดิมให้หลากหลายและ ทันสมัยมากขึ้น
            อาจนำจุดเด่นบางด้านไปใช้ร่วมกับการบริหาร จัดการเดิม
            หรือเติมฟังก์ชันให้พื้นที่การเรียนรู้สนุกขึ้น
            แผนนี้เหมาะกับเครือข่ายที่ต้องการยกระดับ
            ห้องสมุดหรือพื้นที่การเรียนรู้ในชุมชน และต้องการให้ TK Park
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
      <div className="flex items-start" id="subsubtopic6">
        <div className="p-5 border-y-2 border-l-2 border-white bg-yellow-700">
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
            สำหรับหน่วยงานที่ต้องการนำแนวคิดห้องสมุดมีชีวิตไปใช้
            เน้นกิจกรรมสร้างสรรค์ แลกเปลี่ยนองค์ความรู้
            แผนนี้เหมาะกับเครือข่ายที่อาจจะมีพื้นที่การ เรียนรู้เดิม
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
    </div>
  );
};

export default SubSectionOne;
