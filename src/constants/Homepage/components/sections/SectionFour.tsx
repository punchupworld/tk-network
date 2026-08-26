import { T08 } from "@/src/components/icons/topics";
import CoverCap from "../CoverCap";
import SubSectionOne from "../subsecyions/S04/SubSectionOne";

const IconOne = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="109"
      height="124"
      viewBox="0 0 109 124"
      fill="none"
    >
      <path
        d="M67.8514 18.2826V7.43825C67.8514 5.38712 71.5738 1 71.5738 1H36.4768C36.4768 1 40.1993 5.38712 40.1993 7.43825V18.2826C17.6179 24.36 1 44.9852 1 69.4848C1 98.7702 24.7398 122.529 54.0443 122.529C83.3488 122.529 107.089 98.7892 107.089 69.4848C107.089 44.9852 90.4708 24.36 67.8894 18.2826H67.8514ZM54.0254 87.8309C43.9217 87.8309 35.6981 79.6074 35.6981 69.5037C35.6981 59.4001 43.9217 51.1766 54.0254 51.1766C64.129 51.1766 72.3525 59.4001 72.3525 69.5037C72.3525 79.6074 64.129 87.8309 54.0254 87.8309Z"
        fill="#FDF1BD"
        stroke="white"
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
          ก่อสร้างพื้นที่
        </h2>
        <p className=" font-en desktop-s5-400 leading-normal">
          Construction Process
        </p>
        <div className="flex items-end w-full flex-col md:flex-row">
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
            <div className="border-l md:border-l-0 border-white md:border-t border-r border-b px-[14px] py-[10px]">
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
          "การก่อสร้างไม่ใช่เพียงการสร้างอาคาร <br /> แต่คือการสร้างพื้นที่
          <br />
          ที่พร้อมรองรับการเรียนรู้ของชุมชน"
        </p>
      </blockquote>
    </div>
  );
}

function KnowledgeBox() {
  return (
    <div className="relative flex h-auto w-full max-w-[602px] flex-col items-stretch md:h-[484px] md:flex-row md:items-end">
      <div className="flex h-auto w-fit shrink-0 items-center justify-center border-t-2 border-x-2 border-white bg-[#c0a765] px-10 py-10 text-center text-[#1d252c] md:h-[382px] md:w-[65%] md:border-r-0 md:border-b-2 md:py-0">
        <p className="font-th desktop-s5-th-700 leading-normal">
          ขั้นตอนนี้
          <br />
          ต้องรู้อะไรบ้าง
        </p>
      </div>
      <div className="relative h-[484px] w-full min-w-0 overflow-clip border-2 border-white bg-[#fdf1bd] md:flex-1">
        <div className="absolute right-[10px] bottom-[184px]">
          <IconOne />
        </div>
        <div className="absolute right-[-20px] bottom-0 flex size-[168px] items-center justify-center">
          <T08
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            แนวทาง
            <br />
            การจัดสรร
            <br />
            งบประมาณ
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
      <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
      <div className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25">
        <SectionCover />
        <QuoteSection />
        <div className="flex w-full flex-col items-start justify-start gap-5 p-10 border-2 border-white bg-pink-400 max-w-[602px] mx-auto">
          <p className="font-th desktop-s6-th-400 text-tk-black">
            ส่วนนี้จะเป็นบทบาทหน้าที่ของหน่วยงานเจ้าภาพในการดำเนินการก่อสร้างพื้นที่การเรียนรู้
            โดยหลังจากที่ได้หารือและทำความเข้าใจพื้นที่
            ศักยภาพและเงื่อนไขของตนเองอย่างละเอียด
            หน่วยงานจะเริ่มประสานงานกับสถาปนิกและผู้รับเหมาเพื่อก่อสร้างพื้นที่การเรียนรู้หรือห้องสมุดมีชีวิตให้เป็นรูปเป็นร่าง{" "}
            <br />
            ขึ้นมา
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
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionOne />
      </div>
    </section>
  );
};

export default SectionFour;
