import Image from "next/image";
import { T08 } from "@/src/components/icons/topics";
import CoverCap from "../CoverCap";
import SubSectionOne from "../subsecyions/S04/SubSectionOne";

function SectionCover() {
  return (
    <div className="flex w-full max-w-[602px] flex-col items-start">
      <CoverCap />
      <div className="flex w-full flex-col items-start gap-2.5 border-x-2 border-white bg-[#4d2f2f] p-10 text-white">
        <h2 className="font-th desktop-s3-th-700 leading-[1.35]">
          ก่อสร้างพื้นที่
        </h2>
        <p className=" font-en desktop-s5-400 leading-normal">
          Construction process
        </p>
        <div className="flex items-end w-full">
          <div className="flex flex-col flex-1">
            <div className="border-l border-white border-t border-b border-r px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                หน่วยงานดำเนินการจัดซื้อจัดจ้าง
                <br /> สถาปนิกและผู้รับเหมาเพื่อ <br /> 1) ก่อสร้างอาคาร
                <br /> 2) พัฒนาปรับปรุงจากพื้นที่เดิม
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className=" border-white border-t border-r border-b px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                ดำเนินการก่อสร้าง
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="w-full rotate-180">
          <CoverCap />
        </div>
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div
      className="relative aspect-[602/420] w-full max-w-[602px]"
      aria-label="คำกล่าวเกี่ยวกับการพัฒนาพื้นที่การเรียนรู้ท้องถิ่น"
    >
      <div className="absolute left-[21.2625%] top-0 h-[78.3333%] w-[78.4053%] border-2 border-white bg-[#ffbaa1]" />
      <blockquote className="absolute left-0 top-[18.0952%] flex h-[81.9048%] w-[87.0432%] items-center justify-center border-2 border-white bg-[#f5333f] p-2.5 text-center text-white">
        <p className="font-th desktop-s5-th-700 leading-normal">
          การก่อสร้างไม่ใช่เพียงการสร้างอาคาร <br />{" "}
          แต่คือการสร้างพื้นที่ที่พร้อม <br />
          รองรับการเรียนรู้ของชุมชน
        </p>
      </blockquote>
    </div>
  );
}

function KnowledgeBox() {
  return (
    <div className="relative flex h-[484px] w-full max-w-[602px] items-end">
      <div className="flex h-[382px] w-[65%] shrink-0 items-center justify-center border-t-2 border-l-2 border-b-2 border-white bg-[#c0a765] px-10 text-center text-[#1d252c]">
        <p className="font-th desktop-s5-th-700 leading-normal">
          ขั้นตอนนี้
          <br />
          ต้องรู้อะไรบ้าง
        </p>
      </div>
      <div className="relative h-[484px] min-w-0 flex-1 overflow-clip border-2 border-white bg-[#fdf1bd]">
        <div className="absolute right-0 bottom-0 flex size-[168px] items-center justify-center">
          <T08
            fill="#f5333f"
            stroke="white"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            รูปแบบของ
            <br />
            การเข้าร่วม
          </p>
        </div>
      </div>
    </div>
  );
}

const SectionFour = () => {
  return (
    <section
      className="relative z-10 mx-auto min-h-screen w-full max-w-300"
      id="section4"
    >
      <div className="h-screen" />
      <div className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25">
        <SectionCover />
        <QuoteSection />
        <div className="flex w-full flex-col items-start justify-start gap-5 p-10 border-2 border-white bg-pink-400 max-w-[602px] mx-auto">
          <p className="font-th desktop-s6-th-400 text-tk-black">
            ส่วนนี้จะเป็นบทบาทหน้าที่ของหน่วยงานเจ้าภาพในการดำเนินการก่อสร้างพื้นที่การเรียนรู้
            โดยหลังจากที่ได้หารือและทำความเข้าใจพื้นที่
            ศักยภาพและเงื่อนไขของตนเองอย่างละเอียด
            หน่วยงานจะเริ่มประสานงานกับสถาปนิกและผู้รับเหมาเพื่อก่อสร้างพื้นที่
            การเรียนรู้หรือห้องสมุดมีชีวิตให้เป็นรูปเป็นร่างขึ้นมา
          </p>
          <p className="font-th desktop-s7-th-400 text-neutral-dark-darkest">
            *ระยะเวลาและรายละเอียดในการก่อสร้างขึ้นอยู่กับบริบทของพื้นที่นั้นๆ
          </p>
        </div>
        <KnowledgeBox />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic8"
      >
        <div className="h-screen" />
        <SubSectionOne />
      </div>
    </section>
  );
};

export default SectionFour;
