import Image from "next/image";
import { T02 } from "@/src/components/icons/topics";
import SubSectionOne from "../subsecyions/S01/SubSectionOne";
import SubSectionTwo from "../subsecyions/S01/SubSectionTwo";
import CoverCap from "../CoverCap";

const SvgBack = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="288"
      height="101"
      viewBox="0 0 288 101"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M55.8926 99.1843C53.499 99.1843 52.1576 97.9933 51.5332 97.2186C49.1511 94.2583 50.8741 89.9105 51.4407 88.4882C55.7654 77.584 71.9425 63.1992 86.1885 52.0984C86.466 49.8089 86.1191 48.19 85.1478 47.4615C81.3319 44.6285 65.4901 48.7797 45.6706 63.9393C29.5975 76.2311 -0.98752 96.4207 -1.28817 96.6173L-5 90.9859C-4.69935 90.7893 25.6891 70.727 41.5771 58.5739C58.7025 45.4726 80.0715 35.2853 89.1719 42.0383C90.9064 43.3334 92.0627 45.0448 92.6293 47.184C96.9424 43.9694 100.828 41.2057 103.823 39.1359C129.667 21.178 156.043 6.8973 169.433 3.59019C180.777 0.780294 188.998 1.55504 194.549 5.92598C202.597 12.2743 202.527 24.3811 202.469 34.1058C202.446 38.6387 202.4 45.4957 203.892 46.5017C204.169 46.6868 205.245 46.7793 207.465 45.8658C230.661 36.4185 282.407 1.35846 282.927 1L286.72 6.58509C284.569 8.04207 233.852 42.3968 210.009 52.11C205.869 53.7982 202.631 53.7867 200.111 52.0868C195.636 49.0572 195.682 42.1192 195.728 34.0712C195.774 25.3871 195.832 15.5351 190.374 11.2336C186.616 8.27334 180.118 7.90331 171.052 10.1466C155.441 14.0088 119.699 35.0309 92.3402 55.9259C91.9933 57.3482 91.5308 58.8514 90.9295 60.4471C82.8467 82.0243 65.5711 97.7389 57.2339 99.0687C56.7598 99.1496 56.3204 99.1843 55.9041 99.1728L55.8926 99.1843ZM81.9795 64.1705C69.7108 74.4156 60.4485 84.0479 57.708 90.9628C57.523 91.4253 57.3958 91.8185 57.2917 92.1538C62.2062 90.3384 74.3245 79.9198 81.9795 64.1705Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function SectionCover() {
  return (
    <div className="flex w-full max-w-[602px] flex-col items-start">
      <CoverCap />
      <div className="flex w-full flex-col items-start gap-2.5 border-x-2 border-white bg-[#4d2f2f] p-10 text-white">
        <h2 className="font-th desktop-s3-th-700 leading-[1.35]">
          ทำความรู้จัก
        </h2>
        <p className="w-[150px] font-en desktop-s5-400 leading-normal">
          Get to Know
        </p>
        <div className="flex w-full items-end md:flex-row flex-col">
          <div className="border border-white px-3.5 py-1.5 font-th desktop-s6-th-400 leading-normal">
            <p>ประเมินความพร้อม</p>
            <p>ของหน่วยงานร่วมกัน</p>
          </div>
          <p className="min-w-0 flex-1 border border-white px-3.5 py-1.5 font-th desktop-s6-th-400 leading-normal">
            ตกลงร่วมกันเรียบร้อย จึงไปต่อที่ข้อตกลงบันทึกความร่วมมือ (MOU)
            ระหว่างกัน
          </p>
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
          การพัฒนา <br className="sm:hidden block" />
          “พื้นที่การเรียนรู้ท้องถิ่น”
          <br />
          เริ่มต้นจาก “เราทุกคน”
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
        <SvgBack className="pointer-events-none absolute left-0 top-[140px] z-0" />
        <div className="absolute bottom-[259px] left-[148px] z-10 flex size-[168px] items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#f5333f]" />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            แนวคิด
            <br />
            ห้องสมุดมีชีวิต
          </p>
        </div>
        <div className="absolute left-[56px] top-[calc(50%+78px)] z-10 flex size-[168px] -translate-y-1/2 items-center justify-center">
          <T02
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            ก้าวแรกสู่
            <br />
            ห้องสมุดมีชีวิต
          </p>
        </div>
        <div className="absolute left-[57px] top-[403px] h-[26px] w-[166px] border border-white" />
        <div className="absolute left-[28px] top-[430px] h-[26px] w-[166px] border border-white" />
        <div className="absolute left-[-18px] top-[457px] h-[26px] w-[166px] border border-white" />
      </div>
    </div>
  );
}

const SectionOne = () => {
  return (
    <section
      className="relative z-10 mx-auto min-h-screen w-full max-w-300"
      id="section1"
    >
      <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
      <div className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25">
        <SectionCover />
        <QuoteSection />
        <KnowledgeBox />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic1"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionOne />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic2"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionTwo />
      </div>
    </section>
  );
};

export default SectionOne;
