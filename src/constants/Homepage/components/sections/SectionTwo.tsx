import Image from "next/image";
import { T03, T04 } from "@/src/components/icons/topics";
import CoverCap from "../CoverCap";
import SubSectionOne from "../subsecyions/S02/SubSectionOne";
import SubSectionTwo from "../subsecyions/S02/SubSectionTwo";

const IconBook = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="99"
      height="116"
      viewBox="0 0 99 116"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M56.13 11.9004H1V76.6304H56.13V11.9004Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 54.5H48.38"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 63.0898H48.38"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.08008 42.9392C9.08008 42.9392 19.6501 29.0692 24.2701 31.7092C28.8901 34.3492 17.3301 46.5692 21.9601 43.9292C26.5901 41.2892 30.1401 39.0192 32.8601 37.6492C38.8001 34.6792 30.5501 44.5892 33.1901 44.2592C41.1201 43.2692 48.0501 37.9792 48.0501 37.9792"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.57 24.12C34.9544 24.12 40.13 18.9444 40.13 12.56C40.13 6.17559 34.9544 1 28.57 1C22.1856 1 17.01 6.17559 17.01 12.56C17.01 18.9444 22.1856 24.12 28.57 24.12Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M97.4801 49.5801H42.3501V114.31H97.4801V49.5801Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.1001 92.1797H89.7301"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.1001 84.9199H89.7301"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M69.91 61.8C71.9259 61.8 73.56 60.1658 73.56 58.15C73.56 56.1342 71.9259 54.5 69.91 54.5C67.8942 54.5 66.26 56.1342 66.26 58.15C66.26 60.1658 67.8942 61.8 69.91 61.8Z"
        fill="#FFFAEA"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74.7401 68.2207H53.9801C52.1189 68.2207 50.6101 69.7295 50.6101 71.5907V74.6107C50.6101 76.4719 52.1189 77.9807 53.9801 77.9807H74.7401C76.6013 77.9807 78.1101 76.4719 78.1101 74.6107V71.5907C78.1101 69.7295 76.6013 68.2207 74.7401 68.2207Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M85.0502 97L86.5402 100.18L89.9502 99.36L88.3902 102.51L91.1702 104.67L87.7302 105.41L87.7702 108.93L85.0502 106.7L82.3302 108.93L82.3702 105.41L78.9302 104.67L81.7002 102.51L80.1402 99.36L83.5602 100.18L85.0502 97Z"
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
      <div className=" flex w-full flex-col items-start gap-2.5 border-x-2 border-white bg-[#4d2f2f] p-10 text-white">
        <h2 className="font-th desktop-s3-th-700 leading-[1.35]">
          ตกลงแนวทาง
          <br />
          ความร่วมมือ
        </h2>
        <p className="w-[144px] font-en desktop-s5-400 leading-normal">
          Make a Deal
        </p>
        <div className="flex items-end md:flex-row flex-col w-full">
          <div className="flex flex-col ">
            <div className="border-l border-white border-t border-b md:border-r-0 border-r px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                หารือก่อนลงพื้นที่
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="border-l border-white md:border-t md:border-b md:border-r-0 border-r px-[14px] py-[10px]">
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
                เลือกรูปแบบที่เครือข่าย <br />
                อยากเข้าร่วมก่อนทำ MOU
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
          เครือข่าย TK Park <br /> พัฒนาพื้นที่การเรียนรู้
          <br className="sm:hidden block" />
          ทั่วประเทศ
          <br className="hidden sm:block" />
          เพื่อสร้าง
          <br className="sm:hidden block" />
          พื้นที่แห่งโอกาสและ
          <br />
          การเรียนรู้ตลอดชีวิต
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
        <IconBook className="pointer-events-none absolute left-[60px] top-[30px] z-0" />
        <div className="absolute top-[60px] left-[148px] z-10 flex size-[168px] items-center justify-center">
          <T04
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            สิทธิประโยชน์ <br />
            ของเครือข่าย
          </p>
        </div>
        <div className="absolute left-[56px] top-[calc(50%+78px)] z-10 flex size-[168px] -translate-y-1/2 items-center justify-center">
          <T03
            fill="#f5333f"
            stroke="none"
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

const SectionTwo = () => {
  return (
    <section
      className="relative z-10 mx-auto min-h-screen w-full max-w-300"
      id="section2"
    >
      <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
      <div className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25">
        <SectionCover />
        <QuoteSection />
        <KnowledgeBox />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic3"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionOne />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic4"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionTwo />
      </div>
    </section>
  );
};

export default SectionTwo;
