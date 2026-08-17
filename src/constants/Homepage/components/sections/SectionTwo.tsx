import Image from "next/image";
import { T03, T04 } from "@/src/components/icons/topics";
import CoverCap from "../CoverCap";
import SubSectionOne from "../subsecyions/S02/SubSectionOne";
import SubSectionTwo from "../subsecyions/S02/SubSectionTwo";

function SectionCover() {
  return (
    <div className="flex w-full max-w-[602px] flex-col items-start">
      <CoverCap />
      <div className="flex w-full flex-col items-start gap-2.5 border-x-2 border-white bg-[#4d2f2f] p-10 text-white">
        <h2 className="font-th desktop-s3-th-700 leading-[1.35]">
          ตกลงแนวทาง
          <br />
          ความร่วมมือ
        </h2>
        <p className="w-[124px] font-en desktop-s5-400 leading-normal">
          Make a deal
        </p>
        <div className="flex items-end">
          <div className="flex flex-col ">
            <div className="border-l border-white border-t border-b px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                หารือก่อนลงพื้นที่
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="border-l border-white border-t border-b px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                สำรวจ
                <br />
                ทำเลที่ตั้ง
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="border-l border-white border-t border-r border-b px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                เลือกรูปแบบที่เครือข่าย อยากเข้าร่วมก่อนทำ MOU
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
          เครือข่าย TK Park <br /> พัฒนาพื้นที่การเรียนรู้ทั่วประเทศเพื่อสร้าง{" "}
          <br />
          พื้นที่แห่งโอกาสและการเรียนรู้ตลอดชีวิต
        </p>
      </blockquote>
    </div>
  );
}

function KnowledgeBox() {
  return (
    <div className="relative flex h-[484px] w-full max-w-[602px] items-end">
      <div className="flex h-[382px] w-[39.535%] shrink-0 items-center justify-center border-t-2 border-l-2 border-b-2 border-white bg-[#c0a765] px-10 text-center text-[#1d252c]">
        <p className="font-th desktop-s5-th-700 leading-normal">
          ขั้นตอนนี้
          <br />
          ต้องรู้อะไรบ้าง
        </p>
      </div>
      <div className="relative h-[484px] min-w-0 flex-1 overflow-clip border-2 border-white bg-[#fdf1bd]">
        <div className="absolute bottom-[259px] left-[148px] flex size-[168px] items-center justify-center">
          <T04
            fill="#f5333f"
            stroke="white"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            สิทธิประโยชน์ <br />
            ของเครือข่าย
          </p>
        </div>
        <div className="absolute left-[56px] top-[calc(50%+78px)] flex size-[168px] -translate-y-1/2 items-center justify-center">
          <T03
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
        <div className="absolute left-[57px] top-[403px] h-[26px] w-[166px] border border-white" />
        <div className="absolute left-[28px] top-[430px] h-[26px] w-[166px] border border-white" />
        <div className="absolute left-[-18px] top-[457px] h-[26px] w-[166px] border border-white" />
      </div>
    </div>
  );
}

const SectionTwo = () => {
  return (
    <section
      className="relative z-10 mx-auto min-h-screen w-full max-w-300"
      id="section2"
    >
      <div className="h-screen" />
      <div className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25">
        <SectionCover />
        <QuoteSection />
        <KnowledgeBox />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic3"
      >
        <div className="h-screen" />
        <SubSectionOne />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic4"
      >
        <div className="h-screen" />
        <SubSectionTwo />
      </div>
    </section>
  );
};

export default SectionTwo;
