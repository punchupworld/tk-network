import { T09 } from "@/src/components/icons/topics";
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
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M92.7561 74.5122C102.832 74.5122 111 82.6801 111 92.7561C111 102.832 102.832 111 92.7561 111H19.2439C9.16806 111 1 102.832 1 92.7561C1 82.6801 9.16806 74.5122 19.2439 74.5122H19.5122C9.2882 74.5122 1 66.2241 1 56C1 45.776 9.2882 37.4878 19.5122 37.4878H19.2439C9.16806 37.4878 1 29.3197 1 19.2439C1 9.16806 9.16806 1 19.2439 1H92.7561C102.832 1 111 9.16806 111 19.2439C111 29.3197 102.832 37.4878 92.7561 37.4878H92.4878C102.712 37.4878 111 45.776 111 56C111 66.2241 102.712 74.5122 92.4878 74.5122H92.7561Z"
        stroke={stroke}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const SubSectionOne = () => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center">
        <T09
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          นโยบายและ
          <br />
          ข้อตกลง
          <br />
          การใช้พื้นที่
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-10 border-2 border-white bg-[#FEE6A6]">
        <p className="font-th desktop-s6-th-400 text-tk-black">
          การวางนโยบายและการบริการ
          <br className="sm:hidden block" />
          อย่างชัดเจนคือกระดูกสันหลัง
          <br className="sm:hidden block" />
          ของการพัฒนา พื้นที่การเรียนรู้
          <br className="sm:hidden block" />
          ให้ยั่งยืนอย่างระยะยาวก่อนเปิดบริการ
        </p>
        <div className="flex flex-col gap-2.5 justify-end items-end w-full">
          <div className="flex px-2.5 py-1 bg-yellow-700 md:flex-row flex-col">
            <p className="font-th desktop-s6-th-400 text-tk-black ">
              โดยนโยบายและ
              <br className="sm:hidden block" />
              ข้อตกลงที่ควรกำหนด
            </p>
            <p className="font-th desktop-s6-th-700 text-tk-black ">
              มีอยู่ 4 ด้าน ประกอบด้วย
            </p>
          </div>

          <div className="flex gap-2.5 flex-wrap">
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                ประเภท
                <br />
                ของ
                <br />
                ผู้ใช้บริการ
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                ค่าบริการ
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                ข้อตกลง
                <br />
                การใช้
                <br />
                พื้นที่
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                ช่วงเวลา
                <br />
                เปิด
                <br />
                ทำการ
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start md:flex-row flex-col" id="subsubtopic14">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              ผู้ใช้บริการ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-5">
          <span className="font-th desktop-s6-th-400 text-tk-black text-balance">
            ประเภทของผู้ใช้บริการ:
            <ul className="list-disc list-inside pl-5">
              <li>สมาชิกรายวัน (One-day Pass)</li>
              <li>สมาชิกรายปี (Yearly Member)</li>
              <li>
                สมาชิกห้องสมุดออนไลน์:
                <br />
                สมัครฟรีผ่านเว็บไซต์
                <br />
                ใช้บริการได้แค่ห้องสมุดออนไลน์เท่านั้น
              </li>
            </ul>
          </span>
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            ออกแบบให้เหมาะสมกับบริบท
            <br className="sm:hidden block" />
            ของพื้นที่ และกลุ่มเป้าหมาย เช่น <br className="sm:hidden block" />
            พื้นที่การเรียนรู้ที่อยู่ในค่ายทหาร
            <br className="sm:hidden block" />
            กำหนดประเภทสมาชิกเป็น
            <br className="sm:hidden block" />
            กำลังพลและครอบครัวและบุคคล
            <br className="sm:hidden block" />
            ทั่วไป หรือพื้นที่การเรียนรู้ใน
            <br className="sm:hidden block" />
            จังหวัดระยองกำหนดประเภท
            <br className="sm:hidden block" />
            สมาชิกที่เป็นองค์กรขึ้นมาใหม่ <br className="sm:hidden block" />
            เนื่องจากจังหวัดระยองมีโรงงาน
            <br className="sm:hidden block" />
            เป็นจำนวนมาก
          </p>
          <div>
            <div className="py-1 px-2.5 bg-tk-black w-fit">
              <p className="font-th desktop-s7-th-700 text-white">คำแนะนำ</p>
            </div>
            <div className="py-2.5 px-[14px] border-x border-t border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                กำหนดกลุ่มเป้าหมาย
              </p>
            </div>
            <div className="py-2.5 px-[14px] border-x border-t border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                กำหนดกลุ่มที่จะได้รับ
                <br className="sm:hidden block" />
                การยกเว้นค่าสมาชิก
              </p>
            </div>
            <div className="py-2.5 px-[14px] border-x border-t border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                คำนึงถึงค่าเฉลี่ยรายได้ของคนท้องถิ่น
              </p>
            </div>
            <div className="py-2.5 px-[14px] border border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                สำรวจอัตราค่าสมาชิก
                <br className="sm:hidden block" />
                ของเครือข่าย
                <br className="hidden sm:block" />
                ในพื้นที่
                <br className="sm:hidden block" />
                ใกล้เคียง
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start md:flex-row flex-col" id="subsubtopic15">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              ค่าบริการ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-50 flex flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <span className="font-th desktop-s6-th-400 text-tk-black">
              <b className="font-th desktop-s6-th-700 text-tk-black ">
                ค่าประกัน:
              </b>{" "}
              เงินประกันความ
              <br className="sm:hidden block" />
              เสียหายสำหรับ การยืมหนังสือ
              <br className="sm:hidden block" />
              และสื่อการเรียนรู้ออกไป <br />
              ข้างนอก
            </span>
            <span className="font-th desktop-s6-th-400 text-tk-black">
              <b className="font-th desktop-s6-th-700 text-tk-black ">
                ค่าปรับ:
              </b>{" "}
              สมาชิกต้องจ่าย
              <br className="sm:hidden block" />
              หากละเมิดเงื่อนไข การบริการ <br className="sm:hidden block" />
              หรือก่อความเสียหาย
            </span>
            <span className="font-th desktop-s6-th-400 text-tk-black">
              <b className="font-th desktop-s6-th-700 text-tk-black ">
                ค่าบริการอื่นๆ :
              </b>{" "}
              ตามบริบท
              <br className="sm:hidden block" />
              และความเหมาะสม
            </span>
          </div>
          <div>
            <div className="py-1 px-2.5 bg-tk-black w-fit">
              <p className="font-th desktop-s7-th-700 text-white">คำแนะนำ</p>
            </div>

            <div className="py-2.5 px-[14px] border-x border-t border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                คำนึงถึงค่าเฉลี่ยรายได้
                <br className="sm:hidden block" />
                ของคนท้องถิ่น
              </p>
            </div>
            <div className="py-2.5 px-[14px] border border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                สำรวจอัตราค่าสมาชิก
                <br className="sm:hidden block" />
                ของเครือข่ายในพื้นที่
                <br className="sm:hidden block" />
                ใกล้เคียง
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start md:flex-row flex-col" id="subsubtopic16">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              การใช้พื้นที่
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <span className="font-th desktop-s6-th-400 text-tk-black text-balance">
            <b className="font-th desktop-s6-th-700 text-tk-black ">
              ข้อบังคับพื้นฐาน:
            </b>{" "}
            เพื่อป้องกัน
            <br className="sm:hidden block" />
            ความเสียหาย ความเป็นระเบียบ
            <br className="sm:hidden block" />
            เรียบร้อยของทรัพย์สินภายใน
            <br className="sm:hidden block" />
            และอำนวยความสะดวกให้
            <br className="sm:hidden block" />
            เจ้าหน้าที่บริหารจัดการง่ายขึ้น <br className="sm:hidden block" />
            เช่น การถอดรองเท้า การนำ
            <br className="sm:hidden block" />
            อาหารเครื่องดื่มเข้ามารับประทาน
          </span>
          <span className="font-th desktop-s6-th-400 text-tk-black text-balance">
            <b className="font-th desktop-s6-th-700 text-tk-black ">
              ข้อบังคับเฉพาะบริการ:
            </b>{" "}
            <br className="sm:hidden block" />
            เกิดขึ้นจากการเจอปัญหา
            <br className="sm:hidden block" />
            ในการใช้งาน เช่น ห้ามเสียบ
            <br className="sm:hidden block" />
            แฟลชไดร์ฟที่คอมพิวเตอร์
            <br className="sm:hidden block" />
            เพื่อป้องกันไวรัส
          </span>
        </div>
      </div>
      <div className="flex items-start md:flex-row flex-col" id="subsubtopic17">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              ช่วงเวลา
              <br />
              เปิดทำการ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-50 flex flex-col gap-2.5">
          <span className="font-th desktop-s6-th-400 text-tk-black text-balance py-2.5 px-[14px]">
            คำนึงถึงกลุ่มเป้าหมาย และคาดการณ์ <br />
            ช่วงเวลาในการใช้บริการของ <br />
            กลุ่มเป้าหมาย
          </span>
          <span className="font-th desktop-s6-th-400 text-tk-black text-balance py-2.5 px-[14px]">
            ปัจจัยภายนอกที่ส่งผลต่อ
            <br className="sm:hidden block" />
            การเปิด-ปิดทำการ เช่น <br className="sm:hidden block" />
            พื้นที่บริการเมื่อการเรียนรู้
            <br className="sm:hidden block" />
            อยู่ในอาคารของสถานที่อื่น <br className="sm:hidden block" />
            จึงต้องอิงเวลาปิดตาม
            <br className="sm:hidden block" />
            อาคารนั้นๆ
          </span>
          <span className="font-th desktop-s6-th-400 text-tk-black text-balance py-2.5 px-[14px]">
            ปรับเปลี่ยนเวลาทำการ
            <br className="sm:hidden block" />
            ได้ตามความต้องการและ
            <br className="sm:hidden block" />
            บริบทของกลุ่มเป้าหมาย <br className="sm:hidden block" />
            เช่น หากเปิดเช้าเกินไป <br className="sm:hidden block" />
            คนในชุมชนจะติดภารกิจ
            <br className="sm:hidden block" />
            ในการเรียน หรือทำงาน
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubSectionOne;
