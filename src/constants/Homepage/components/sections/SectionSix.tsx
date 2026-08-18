import Image from "next/image";
import { T11, T12, T13 } from "@/src/components/icons/topics";
import CoverCap from "../CoverCap";
import SubSectionOne from "../subsecyions/S06/SubSectionOne";
import SubSectionTwo from "../subsecyions/S06/SubSectionTwo";
import SubSectionThree from "../subsecyions/S06/SubSectionThree";

function SectionCover() {
  return (
    <div className="flex w-full max-w-[602px] flex-col items-start">
      <CoverCap />
      <div className="flex w-full flex-col items-start gap-2.5 border-x-2 border-white bg-[#4d2f2f] p-10 text-white">
        <h2 className="font-th desktop-s3-th-700 leading-[1.35]">เปิดบริการ</h2>
        <p className="w-[124px] font-en desktop-s5-400 leading-normal">
          The Opening
        </p>
        <div className="flex w-full flex-col items-stretch md:flex-row md:items-end">
          <div className="flex w-full flex-col md:w-auto">
            <div className="border-x border-t border-white px-[14px] py-[10px] md:border-b md:border-r-0">
              <p className="font-th desktop-s6-th-400 text-white">
                ทดลองเปิดบริการ
                <br className="hidden md:inline" />
                เพื่อทดสอบระบบ
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col md:w-auto">
            <div className="border-x border-t border-white px-[14px] py-[10px] md:border-b md:border-r-0">
              <p className="font-th desktop-s6-th-400 text-white">
                นำข้อเสนอแนะ
                <br className="hidden md:inline" />
                จากผู้ใช้บริการ
                <br className="hidden md:inline" />
                และเจ้าหน้าที่
                <br className="hidden md:inline" />
                มาปรับปรุง
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col md:w-auto">
            <div className="border-x border-t border-white px-[14px] py-[10px] md:border-b md:border-r-0">
              <p className="font-th desktop-s6-th-400 text-white">
                เปิด
                <br className="hidden md:inline" />
                ให้บริการ
                <br className="hidden md:inline" />
                อย่าง
                <br className="hidden md:inline" />
                เป็นทางการ
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col md:w-auto md:flex-1">
            <div className="border border-white px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                ประชาสัมพันธ์และจัด กิจกรรม เปิดตัว
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
          การเปิดบริการ
          <br />
          คือการส่งมอบพื้นที่แห่งการเรียนรู้ให้ชุมชน <br />
          และเปิดโอกาสให้การเรียนรู้เติบโตไปพร้อมกับผู้คน
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
        <div className="absolute bottom-[259px] right-0 flex size-[168px] items-center justify-center">
          <T12
            fill="#f5333f"
            stroke="white"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            แนะนำ
            <br />
            กิจกรรม
          </p>
        </div>
        <div className="absolute top-[145px] left-0 flex size-[168px] items-center justify-center">
          <T13
            fill="#f5333f"
            stroke="white"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            ตัวอย่าง
            <br />
            พื้นที่การเรียนรู้
          </p>
        </div>
        <div className="absolute left-1/2 bottom-0 flex size-[168px] -translate-x-1/2 items-center justify-center">
          <T11
            fill="#f5333f"
            stroke="white"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            รูปแบบบริการ
            <br />
            ตามกลุ่มเป้าหมาย
          </p>
        </div>
      </div>
    </div>
  );
}

const SectionSix = () => {
  return (
    <section
      className="relative z-10 mx-auto min-h-screen w-full max-w-300"
      id="section6"
    >
      <div className="h-screen" />
      <div className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25">
        <SectionCover />
        <QuoteSection />
        <KnowledgeBox />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic11"
      >
        <div className="h-screen" />
        <SubSectionOne />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic12"
      >
        <div className="h-screen" />
        <SubSectionTwo />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic13"
      >
        <div className="h-screen" />
        <SubSectionThree />
      </div>
    </section>
  );
};

export default SectionSix;
