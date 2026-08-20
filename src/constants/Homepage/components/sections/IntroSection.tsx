import React from "react";
import CoverCap from "../CoverCap";
import CoverSub from "../CoverSub";
import StepsOverlay from "@/src/components/StepsOverlay";

const IntroSection = () => {
  return (
    <div className="relative z-10 max-w-[1200px] mx-auto w-full">
      <section className="relative mx-auto w-full h-screen" id="intro-section">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="h-40"></div>
          <h1 className="desktop-s4-th-700 text-tk-black text-center">
            ร่วมสร้างพื้นที่การเรียนรู้ที่ใช่...สำหรับทุกชุมชน
          </h1>
          <div className="flex flex-col items-center justify-center gap-5 mb-10">
            <div className="flex flex-col items-center justify-center text-balance">
              <p className="text-tk-red desktop-s6-th-700 font-th">
                คู่มือการออกแบบพื้นที่การเรียนรู้สำหรับชุมชน
              </p>
              <p className="text-tk-black desktop-s6-th-400 font-th text-center">
                TK Park พร้อมเป็นพันธมิตรในการออกแบบ พัฒนา
                <br />
                และยกระดับแหล่งเรียนรู้ให้เป็นพื้นที่ที่ผู้คนทุกวัยอยากเข้ามาเรียนรู้
                <br />
                สร้างสรรค์ และเติบโตไปด้วยกัน
              </p>
            </div>
            <button className="bg-[#9B9B9B] text-white desktop-s6-th-700 font-th py-1.5 px-5 rounded-full">
              <span className="text-white desktop-s6-th-400 font-th text-center">
                สำรวจเลย
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center max-w-[600px] mx-auto w-full gap-25 mt-25">
        <div className="flex w-full flex-col items-start justify-center gap-5 p-10 bg-[#FFE150] border-2 border-white">
          <span className="text-tk-black desktop-s6-th-400 text-balance">
            หน่วยงานที่ต้องการออกแบบและสร้างพื้นที่การเรียนรู้ที่มีชีวิตในจังหวัดของตนเอง
            สามารถใช้คู่มือนี้เป็นแนวทางในการสร้างสรรค์พื้นที่การเรียนรู้สำหรับคนทุกเพศทุกวัย
            โดยเฉพาะเด็กและเยาวชน ให้พวกเขาได้เข้ามาเรียนรู้ เล่นสนุก
            และทดลองนวัตกรรมใหม่ๆ โดยมี TK Park
            ซึ่งเป็นองค์กรที่มีประสบการณ์ในการพัฒนาพื้นที่เรียนรู้เป็นพันธมิตรในการออกแบบ
          </span>
        </div>
        <div className="flex w-full flex-col items-start">
          <CoverCap color="#F5333F" />
          <div className="flex w-full flex-col items-center justify-center gap-2.5 border-x-2 border-white bg-[#F5333F] p-10 text-white h-[272px]">
            <h2 className="font-th desktop-s4-th-700 leading-[1.35]">
              เครือข่าย TK คือใคร
            </h2>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="w-full rotate-180">
              <CoverCap color="#F5333F" />
            </div>
          </div>
        </div>
        <div
          className="relative aspect-[602/420] w-full max-w-[602px]"
          aria-label="คำกล่าวเกี่ยวกับการพัฒนาพื้นที่การเรียนรู้ท้องถิ่น"
        >
          <div className="absolute left-[21.2625%] top-0 h-[78.3333%] w-[78.4053%] border-2 border-white bg-[#ffbaa1]" />
          <blockquote className="absolute left-0 top-[18.0952%] flex h-[81.9048%] w-[87.0432%] items-center justify-center border-2 border-white bg-[#f5333f] p-2.5 text-center text-white">
            <p className="font-th desktop-s5-th-700 leading-normal">
              เราไม่ได้สร้างเพียงพื้นที่การเรียนรู้ <br />
              แต่ร่วมสร้างโอกาสในการเรียนรู้ตลอดชีวิต <br />
              ให้เกิดขึ้นในทุกพื้นที่
            </p>
          </blockquote>
        </div>
        <div className="relative flex w-full min-w-0 flex-col items-start">
          <CoverSub color="#FEDFCA" />
          <div className="flex w-full min-w-0 flex-col items-start gap-6 border-x-2 border-b-2 border-white bg-[#FEDFCA] px-6 pb-6 md:px-10 md:pb-10">
            <p className=" relative z-10 -mt-5 w-full text-wrap text-start font-th mobile-s6-th-700 text-tk-red md:-mt-5.25 md:pl-16.75 md:desktop-s6-th-700">
              TK Park เป็นองค์กรที่ทำงานร่วมกับหน่วยงานท้องถิ่น ภาครัฐ
              ภาคการศึกษา และภาคเอกชน
              เพื่อพัฒนาแหล่งเรียนรู้ให้เป็นพื้นที่สร้างสรรค์ที่ตอบโจทย์คนทุกวัย
              พร้อมส่งเสริมการเรียนรู้ตลอดชีวิตในแต่ละชุมชน
            </p>
            <h2 className="text-start font-th mobile-s6-th-400 text-tk-black md:desktop-s6-th-400">
              เราเป็นหน่วยงานภายใต้สำนักงานบริหารและพัฒนาองค์ความรู้
              (องค์การมหาชน)
              ที่เชื่อมั่นในการสร้างพื้นที่แห่งการเรียนรู้ที่ทุกคนสามารถเข้าถึงได้
              และเชื่อมั่นว่าการสร้างพื้นที่การเรียนรู้หรือระบบนิเวศที่ดีจะสามารถสนับสนุนให้ผู้ใช้บริการเห็นภาพว่า
              ตัวเองจะส่งต่อความสร้างสรรค์ต่อสังคมได้อย่างไร
              โดยเฉพาะเด็กและเยาวชนรุ่นใหม่ ผู้ต้องเติบโตไปพร้อมๆ กับโลก ดิจิทัล
              ไร้พรมแดน
            </h2>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-5 p-10 bg-[#FEE6A6] border-2 border-white">
          <span className="text-tk-black desktop-s6-th-400">
            <span className="font-th desktop-s6-th-700">เครือข่าย TK Park</span>{" "}
            คือกลุ่มหน่วยงานที่ร่วมกันพัฒนาแหล่งเรียนรู้ของตนเอง
            ให้เป็นพื้นที่ที่ผู้คนทุกวัยเข้ามาเรียนรู้ พบปะ แลกเปลี่ยน
            และสร้างสรรค์ร่วมกัน มุ่งมั่นพัฒนาพื้นที่การเรียนรู้ของตนให้เป็น
            “ห้องสมุดมีชีวิต” หรือ Living Library พื้นที่ซึ่งความรู้ แรงบันดาลใจ
            ความคิดสร้างสรรค์ การทดลองและลงมือทำ
            สามารถเกิดขึ้นได้ในที่เดียวกันทั่วภูมิภาคในประเทศไทยโดยสามารถศึกษาแนวทางในการออกแบบพื้นที่การเรียนรู้
            เพื่อประเมินความพร้อมในด้านพื้นที่ การบริการ
            และวิธีการบริหารจัดการทรัพยากรของชุมชนตนเอง
            รวมถึงสำรวจกิจกรรมและตัวอย่างของพื้นที่การเรียนรู้ที่ดีได้ที่เว็บไซต์แห่งนี้
          </span>

          <p className="text-tk-black desktop-s6-th-400">
            เมื่อการสร้างพื้นที่การเรียนรู้มีชีวิตต้องเกิดจากบุคลากรคนเก่งในพื้นที่
            และสร้างโดยใช้หลักคิด “ผู้ใช้เป็นศูนย์กลาง” (User-centered)
            ให้ท้องถิ่นมีส่วนร่วมให้มากที่สุด
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-5 p-10 bg-blue-200 border-2 border-white">
          <span className="text-white desktop-s6-th-400">
            ไม่ว่าหน่วยงานของคุณจะเพิ่งเริ่มต้น
            หรืออยู่ในระหว่างการพัฒนาแหล่งเรียนรู้ TK Park
            พร้อมสนับสนุนทั้งองค์ความรู้ เครื่องมือ มาตรฐาน และประสบการณ์
            จากเครือข่ายทั่วประเทศ
            เพื่อให้หน่วยงานสามารถพัฒนาแหล่งเรียนรู้ที่เหมาะ กับบริบทของพื้นที่
            และเติบโตเป็นศูนย์กลางการเรียนรู้ของชุมชนได้อย่างยั่งยืน
          </span>
        </div>
        <div className="bg-red-50 rounded-[40px] border-2 border-white h-[432px] mt-25 w-full flex items-center justify-center">
          <p className="font-th desktop-s4-th-700 text-tk-red text-center">
            6 ขั้นตอน
            <br />
            ในการเข้าร่วมเครือข่าย
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mb-10">
          <div className="flex flex-col items-center justify-center text-balance">
            <p className="text-tk-black desktop-s6-th-400 font-th text-center">
              หลักการ ตัวอย่าง
              และประสบการณ์จริงที่จำเป็นในการสร้างห้องสมุดมีชีวิต
            </p>
          </div>
          <button className="bg-[#9B9B9B] text-white desktop-s6-th-700 font-th py-1.5 px-5 rounded-full">
            <span className="text-white desktop-s6-th-400 font-th text-center">
              สำรวจองค์ความรู้ทั้งหมด
            </span>
          </button>
        </div>
      </section>

      <StepsOverlay background="transparent" fit="scroll" stickyIndicator />
    </div>
  );
};

export default IntroSection;
