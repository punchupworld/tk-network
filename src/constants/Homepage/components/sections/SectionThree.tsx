import Image from "next/image";
import { T05, T06, T07 } from "@/src/components/icons/topics";
import { asset } from "@/src/lib/asset";
import CoverCap from "../CoverCap";
import SubSectionOne from "../subsecyions/S03/SubSectionOne";
import SubSectionTwo from "../subsecyions/S03/SubSectionTwo";
import SubSectionThree from "../subsecyions/S03/SubSectionThree";

function SectionCover() {
  return (
    <div className="flex w-full max-w-[602px] flex-col items-start">
      <CoverCap />
      <div className="flex w-full flex-col items-start gap-2.5 border-x-2 border-white bg-[#4d2f2f] p-10 text-white">
        <h2 className="font-th desktop-s3-th-700 leading-[1.35]">
          ออกแบบพื้นที่ <br />
          และบริการ
        </h2>
        <p className="font-en desktop-s5-400 leading-normal">
          Design Your Space
        </p>
        <div className="flex items-end flex-col md:flex-row">
          <div className="flex flex-col border-white md:border-r-0 border-r flex-1">
            <div className="border-l border-white border-t  px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                จัดการสนทนากลุ่ม
                <br />
                (Focus group) ของผู้มีส่วนได้ส่วนเสีย เช่น ชุมชน
                หน่วยงานรัฐและเอกชน เพื่อทำความเข้าใจลักษณะของพื้นที่
                และสร้างความรู้สึกเป็นเจ้าของในพื้นที่ การเรียนรู้
              </p>
            </div>
            <div className="border-l border-white border-t md:border-b px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                จัดทำแผนภูมิเพื่อระบุผู้มีส่วนได้ส่วนเสีย (Stakeholders Map)
                เพื่อเชิญชวนให้เข้ามามีส่วนร่วมตั้งแต่แรก
              </p>
            </div>
          </div>
          <div className="flex flex-col border-r border-white flex-1">
            <div className="border-l border-white border-t  px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                วิเคราะห์ข้อมูลพื้นฐานชุมชน
                <br />
                เป็นสารตั้งต้นเพื่อ แตกย่อย
                <br />
                รายละเอียดที่ต้องพัฒนา เช่น ปัญหาสิ่งแวดล้อมใน พื้นที่
                <br />
                แหล่งทรัพยากร สัดส่วนของครัวเรือน ที่มีเด็กอายุ 0-6 ปี
              </p>
            </div>
            <div className="border-l border-white border-t  px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                ศึกษาข้อมูลรอบด้าน เกี่ยวกับพื้นที่ เช่น ยุทธศาสตร์จังหวัด
                แผนพัฒนาภาค หรือแผนพัฒนาท้องถิ่น ในระยะ 3-5 ปี
              </p>
            </div>
            <div className="border-l border-white border-t  px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                ออกไปศึกษาดูงานพื้นที่
                <br />
                การเรียนรู้ที่เกี่ยวข้อง
              </p>
            </div>
            <div className="border-l border-white border-t border-b px-[14px] py-[10px]">
              <p className="font-th desktop-s6-th-400 text-white">
                สรุปรูปแบบของพื้นที่ บริการและแนวทางการ ออกแบบ
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
      className="relative w-full max-w-[602px] pt-10 md:pt-0 md:aspect-[602/420]"
      aria-label="คำกล่าวเกี่ยวกับการพัฒนาพื้นที่การเรียนรู้ท้องถิ่น"
    >
      <div className="absolute left-[21.2625%] top-0 h-[78.3333%] w-[78.4053%] border-2 border-white bg-[#ffbaa1]" />
      <blockquote className="relative flex w-[87.0432%] items-center justify-center border-2 border-white bg-[#f5333f] p-4 text-center text-white md:absolute md:left-0 md:top-[18.0952%] md:h-[81.9048%] md:p-2.5">
        <span className="font-th mobile-s5-th-700 md:desktop-s5-th-700 leading-normal">
          หัวใจของการออกแบบพื้นที่การเรียนรู้ คือ <br />
          พื้นที่ (Space){" "}
          <b className="font-th mobile-s5-th-700 md:desktop-s5-th-700 text-tk-black">
            ที่ยืดหยุ่น
          </b>
          <br />
          บริการ (Service) ที่
          <b className="font-th mobile-s5-th-700 md:desktop-s5-th-700 text-tk-black">
            ตอบโจทย์
          </b>
          ผู้ใช้
          <br />
          และการบริหาร (Management) <br />
          และบุคลากรที่พร้อม
          <b className="font-th mobile-s5-th-700 md:desktop-s5-th-700 text-tk-black">
            ขับเคลื่อน
          </b>
          <br />
          ซึ่งเป็นหัวใจของห้องสมุดมีชีวิต
        </span>
      </blockquote>
    </div>
  );
}

function KnowledgeBox() {
  return (
    <div className="relative flex h-auto w-full max-w-[602px] flex-col items-stretch md:h-[457px] md:flex-row md:items-end">
      <div className="flex h-auto w-fit shrink-0 items-center justify-center border-t-2 border-x-2 border-white bg-[#c0a765] px-10 py-10 text-center text-[#1d252c] md:h-[382px] md:w-[39.535%] md:border-r-0 md:border-b-2 md:py-0">
        <p className="font-th desktop-s5-th-700 leading-normal">
          ขั้นตอนนี้
          <br />
          ต้องรู้อะไรบ้าง
        </p>
      </div>
      <div className="relative h-[457px] w-full min-w-0 overflow-clip border-2 border-white bg-[#fdf1bd] md:flex-1">
        <Image
          src={asset("/img/s03/folder-6.svg")}
          alt=""
          width={185}
          height={195}
          className="absolute left-[47.15%] top-[57.43%] h-[42.17%] w-[50.37%]"
          aria-hidden="true"
        />
        <Image
          src={asset("/img/s03/folder-1.svg")}
          alt=""
          width={177}
          height={187}
          className="absolute left-[64.43%] top-[59.18%] h-[40.42%] w-[48.21%]"
          aria-hidden="true"
        />
        <Image
          src={asset("/img/s03/folder-3.svg")}
          alt=""
          width={146}
          height={155}
          className="absolute left-[37.91%] top-[66.02%] h-[33.58%] w-[39.69%]"
          aria-hidden="true"
        />
        <Image
          src={asset("/img/s03/folder-5.svg")}
          alt=""
          width={2}
          height={169}
          className="absolute left-[94.82%] top-[62.41%] h-[36.64%] w-px"
          aria-hidden="true"
        />
        <Image
          src={asset("/img/s03/folder-2.svg")}
          alt=""
          width={2}
          height={138}
          className="absolute left-[72.37%] top-[69.78%] h-[29.27%] w-px"
          aria-hidden="true"
        />
        <div className="absolute left-[5px] top-[120px] flex size-[168px] items-center justify-center">
          <T06
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            หลักการ
            <br />
            ออกแบบพื้นที่
          </p>
        </div>
        <div className="absolute left-[176px] top-[48px] flex size-[168px] items-center justify-center">
          <T07
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[131px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            ตัวอย่าง
            <br />
            สร้างแรงบันดาลใจ
          </p>
        </div>
        <div className="absolute left-[19px] top-[288px] flex size-[168px] items-center justify-center">
          <T05
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            แนวทาง
            <br />
            การบริหาร
            <br />
            จัดการ
            <br />
            พื้นที่เรียนรู้
          </p>
        </div>
        <Image
          src={asset("/img/s03/lamp.svg")}
          alt=""
          width={95}
          height={98}
          className="absolute left-[10.99%] top-[-2.84%] h-[20.91%] w-[25.61%]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

const SectionThree = () => {
  return (
    <section
      className="relative z-10 mx-auto min-h-screen w-full max-w-300"
      id="section3"
    >
      <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
      <div className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25">
        <SectionCover />
        <QuoteSection />
        <KnowledgeBox />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic5"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionOne />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic6"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionTwo />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic7"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionThree />
      </div>
    </section>
  );
};

export default SectionThree;
