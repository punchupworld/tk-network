import React from "react";
import { T01 } from "@/src/components/icons/topics";
import CoverSub from "../../CoverSub";

const SubSectionTwo = () => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-25">
      <div className="relative flex items-center justify-center">
        <T01
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          แนวคิด
          <br />
          ห้องสมุดมีชีวิต
        </p>
      </div>
      <div
        id="subsubtopic2"
        className="flex w-full flex-col items-start justify-center gap-5 p-10 bg-[#FEE6A6] border-2 border-white"
      >
        <p className="text-tk-red desktop-s6-th-700">
          ห้องสมุดมีชีวิตในประเทศไทยคืออะไร
        </p>
        <p className="text-tk-black desktop-s6-th-400">
          ตั้งแต่ก่อตั้ง TK Park
          ตีโจทย์ความเป็นห้องสมุดอย่างต่อเนื่องโดยศึกษาจากบริบทไทยและโลก
          คิดค้นการสร้างต้นแบบพื้นที่การเรียนรู้ในรูปแบบ “ห้องสมุดมีชีวิต”
          ไปสู่การขยายบทบาทในการ “สร้างระบบนิเวศการเรียนรู้” ให้เกิดขึ้น
          <br />
          ทั่วประเทศ
        </p>
        <p className="text-tk-black desktop-s6-th-400">
          ภาพจำของห้องสมุดแบบดั้งเดิมคือการเป็นแหล่งเก็บหนังสือและให้บริการ
          <br />
          ยืม-คืนหนังสือ แต่ในยุคปัจจุบันห้องสมุดควรพัฒนาบริการที่ผสมผสาน
          <br />
          การเรียนรู้เข้าไปในพื้นที่สาธารณะทั้งในรูปแบบออฟไลน์และออนไลน์
          <br />
          เพื่อตอบโจทย์ความต้องการของผู้ใช้งานในพื้นที่เป็นหลัก
          ดังนั้นการเกิดขึ้นของห้องสมุดมีชีวิต
          คือการเปลี่ยนภาพของห้องสมุดที่มีแต่หนังสือให้เป็นพื้นที่ของการแลกเปลี่ยน
          เรียนรู้ รวมผู้คนมาร่วมงานสร้างสรรค์ (Co-working and Learning Spaces)
          และมอบแรงบันดาลใจให้เด็กและเยาวชน (Makerspace) เป็นคนสู้ฝัน (Dream
          Maker) ได้ทดลองลงมือทำผ่านกิจกรรมที่ออกแบบให้เหมาะสมกับพวกเขา
        </p>
        <p className="text-tk-black desktop-s6-th-400">
          ปัจจุบันประเทศไทยเริ่มออกแบบพื้นที่การเรียนรู้อย่างมีสีสันและตรงตามโจทย์
          การใช้งานให้ได้มากที่สุด TK Park
          ในฐานะผู้มีประสบการณ์ในการออกแบบพื้นที่การเรียนรู้เห็นว่า
          ห้องสมุดภายใต้การบริหารจัดการของเครือข่ายใน
          <br />
          หลายพื้นที่มีความโปร่งโล่ง นุ่มสบาย มีหมอนและโซฟาไว้สำหรับนั่งเล่น
          <br />
          หรือถึงขั้นมีบริการกาแฟและอาหารว่าง ทุกคนสามารถเข้าถึงอินเทอร์เน็ตได้
          <br />
          มีห้องประชุม ห้องเวิร์คช็อป ห้องที่สามารถใช้เสียงได้เต็มที่
          รวมถึงการจัดกิจกรรมต่างๆ ตามความเชี่ยวชาญของห้องสมุด
        </p>
        <p className="text-tk-black desktop-s6-th-400">
          การออกแบบที่หลากหลายและฟังก์ชันการใช้งานที่เพิ่มขึ้นมาบ่งบอกถึง <br />
          การให้ความสำคัญกับผู้ใช้งานเป็นหลัก ดังนั้นของบางอย่าง
          <br />
          แค่มีอยู่อย่างเดียวจึงไม่เพียงพอ เช่น เราอาจมีหนังสือล้นห้องสมุด
          <br /> แต่ไม่มีระบบหรือกิจกรรมที่ส่งเสริมให้เกิดการเรียนรู้ตลอดชีวิต
          <br />
          ภารกิจของการสร้างการเรียนรู้อย่างไม่มีที่สิ้นสุดก็อาจไม่ประสบผลสำเร็จ
        </p>
      </div>
      <div
        id="subsubtopic3"
        className="relative flex w-full flex-col items-start"
      >
        <CoverSub color="#FFBAA1" />
        <div className="absolute right-[54px] top-[48px]">
          <div className="px-5 py-1.5 border-2 border-tk-black rounded-full">
            <h2 className="font-th desktop-s6-th-700 text-tk-black">
              หัวใจสำคัญ
            </h2>
          </div>
        </div>

        <div className=" flex w-full flex-col items-center justify-center gap-2.5 border-x-2 border-b-2 border-white bg-[#FFBAA1] px-10 pb-10 text-white ">
          <div className="flex items-end mt-0.5">
            <div className="flex flex-col flex-1">
              <div className="border-l border-tk-black border-t px-[14px] py-[10px]">
                <p className="font-th desktop-s6-th-400 text-tk-black">
                  สร้างระบบนิเวศการเรียนรู้เพื่อ พัฒนาศักยภาพของทุกคนในพื้นที่
                </p>
              </div>
              <div className="border-l border-tk-black border-b border-t px-[14px] py-[10px]">
                <p className="font-th desktop-s6-th-400 text-tk-black">
                  ปรับเปลี่ยนให้เข้ากับยุคสมัยและ ความต้องการของผู้ใช้อยู่เสมอ
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="border-l border-tk-black border-t border-r px-[14px] py-[10px]">
                <p className="font-th desktop-s6-th-400 text-tk-black">
                  เข้าถึงการเรียนรู้อย่างเท่าเทียม
                </p>
              </div>
              <div className="border-l border-tk-black border-b border-t border-r px-[14px] py-[10px]">
                <p className="font-th desktop-s6-th-400 text-tk-black">
                  ก้าวไปกับสังคมดิจิทัลอย่างเท่าทัน
                </p>
              </div>
              <div className="border-l border-tk-black border-b  border-r px-[14px] py-[10px]">
                <p className="font-th desktop-s6-th-400 text-tk-black">
                  พร้อมพัฒนาเป็นศูนย์กลาง <br />
                  การเรียนรู้ของชุมชน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSectionTwo;
