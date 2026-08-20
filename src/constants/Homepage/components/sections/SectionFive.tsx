import Image from "next/image";
import { T09, T10 } from "@/src/components/icons/topics";
import CoverCap from "../CoverCap";
import SubSectionOne from "../subsecyions/S05/SubSectionOne";
import SubSectionTwo from "../subsecyions/S05/SubSectionTwo";

function SectionCover() {
  return (
    <div className="flex w-full max-w-[602px] flex-col items-start">
      <CoverCap />
      <div className="flex w-full flex-col items-start gap-2.5 border-x-2 border-white bg-[#4d2f2f] p-10 text-white">
        <h2 className="font-th desktop-s3-th-700 leading-[1.35]">
          เตรียมความพร้อม
        </h2>
        <p className="font-en desktop-s5-400 leading-normal">
          Get
          <br />
          Ready
        </p>
        <div className="flex flex-col justify-end items-end w-full">
          <div className="flex flex-col">
            <div className="border-x border-white border-t px-[14px] py-[6px]">
              <p className="font-th desktop-s6-th-400 text-white">
                กำหนดวัน
                <br />
                เปิดให้บริการ
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border-x border-white border-t px-[14px] py-[6px]">
              <p className="font-th desktop-s6-th-400 text-white">
                หารือเชิงนโยบาย
                <br />
                ด้านการให้บริการ
                <br />
                ร่วมกัน
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border border-white px-[14px] py-[6px]">
              <p className="font-th desktop-s6-th-400 text-white">
                จัดอบรมกระบวนการพัฒนาศักยภาพบุคลากรผ่านการฝึกปฏิบัติงาน
                <br />
                (On-the-Job Training) ให้บุคลากรประจำพื้นที่การเรียนรู้
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
          นโยบายที่ชัดเจนคือก้าวแรก
          <br />
          สู่การสร้างพื้นที่การเรียนรู้ที่ตอบโจทย์ชุมชน
          <br />
          อย่างแท้จริง
        </p>
      </blockquote>
    </div>
  );
}

function KnowledgeBox() {
  return (
    <div className="relative flex h-auto w-full max-w-[602px] flex-col items-stretch md:h-[484px] md:flex-row md:items-end">
      <div className="flex h-auto w-fit shrink-0 items-center justify-center border-t-2 border-x-2 border-white bg-[#c0a765] px-10 py-10 text-center text-[#1d252c] md:h-[382px] md:w-[39.535%] md:border-r-0 md:border-b-2 md:py-0">
        <p className="font-th desktop-s5-th-700 leading-normal">
          ขั้นตอนนี้
          <br />
          ต้องรู้อะไรบ้าง
        </p>
      </div>
      <div className="relative h-[484px] w-full min-w-0 overflow-clip border-2 border-white bg-[#fdf1bd] md:flex-1">
        <div className="absolute bottom-[259px] left-[148px] flex size-[168px] items-center justify-center">
          <T10
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            หลักการบริหาร
            <br />
            บุคลากร
          </p>
        </div>
        <div className="absolute left-[56px] top-[calc(50%+78px)] flex size-[168px] -translate-y-1/2 items-center justify-center">
          <T09
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            นโยบายและ
            <br />
            ข้อตกลง
            <br />
            การใช้พื้นที่
          </p>
        </div>
        <div className="absolute left-[57px] top-[403px] h-[26px] w-[166px] border border-white" />
        <div className="absolute left-[28px] top-[430px] h-[26px] w-[166px] border border-white" />
        <div className="absolute left-[-18px] top-[457px] h-[26px] w-[166px] border border-white" />
      </div>
    </div>
  );
}

const SectionFour = () => {
  return (
    <section
      className="relative z-10 mx-auto min-h-screen w-full max-w-300"
      id="section5"
    >
      <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
      <div className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25">
        <SectionCover />
        <QuoteSection />
        <KnowledgeBox />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic9"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionOne />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic10"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionTwo />
      </div>
    </section>
  );
};

export default SectionFour;
