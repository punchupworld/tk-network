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
            ร่วมสร้าง
            <br className="md:hidden block" />
            พื้นที่การเรียนรู้ที่ใช่ <br className="md:hidden block" />
            ...สำหรับทุกชุมชน
          </h1>
          <div className="flex flex-col items-center justify-center gap-5 mb-10">
            <div className="flex flex-col items-center justify-center text-balance">
              <p className="text-tk-red desktop-s6-th-700 font-th">
                คู่มือการออกแบบพื้นที่การเรียนรู้สำหรับชุมชน
              </p>
              <p className="text-tk-black desktop-s6-th-400 font-th text-center">
                TK Park พร้อมเป็นพันธมิตรในการออกแบบ{" "}
                <br className="md:hidden block" />
                พัฒนา
                <br className="hidden md:block" />
                และยกระดับแหล่งเรียนรู้ <br className="md:hidden block" />
                ให้เป็นพื้นที่ที่ผู้คนทุกวัยอยากเข้ามาเรียนรู้
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
          <span className="text-tk-black desktop-s6-th-400 ">
            หน่วยงานที่ต้องการออกแบบและสร้าง
            <br className="sm:hidden block" />
            พื้นที่การเรียนรู้ที่มีชีวิตในจังหวัด
            <br className="sm:hidden block" />
            ของตนเอง สามารถใช้คู่มือนี้ <br className="sm:hidden block" />
            เป็นแนวทางในการสร้างสรรค์ <br className="sm:hidden block" />
            พื้นที่การเรียนรู้สำหรับคนทุกเพศ <br className="sm:hidden block" />
            ทุกวัย โดยเฉพาะเด็กและเยาวชน <br className="sm:hidden block" />{" "}
            ให้พวกเขาได้เข้ามาเรียนรู้ <br className="hidden sm:block" />
            เล่นสนุก <br className="sm:hidden block" />
            และทดลองนวัตกรรมใหม่ๆ โดยมี <br className="sm:hidden block" />
            TK Park ซึ่งเป็นองค์กรที่มี
            <br className="sm:hidden block" />
            ประสบการณ์ในการพัฒนาพื้นที่เรียนรู้
            <br className="sm:hidden block" />
            เป็นพันธมิตรในการออกแบบ
          </span>
        </div>
        <div className="flex w-full flex-col items-start">
          <CoverCap color="#F5333F" />
          <div className="flex w-full flex-col items-center justify-center gap-2.5 border-x-2 border-white bg-[#F5333F] p-10 text-white h-[272px]">
            <h2 className="font-th desktop-s4-th-700 leading-[1.35]">
              เครือข่าย TK <br className="sm:hidden block" />
              คือใคร
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
              เราไม่ได้สร้างเพียง
              <br className="md:hidden block" />
              พื้นที่การเรียนรู้ <br />
              แต่ร่วมสร้างโอกาส
              <br className="md:hidden block" />
              ในการเรียนรู้ตลอดชีวิต <br />
              ให้เกิดขึ้นในทุกพื้นที่
            </p>
          </blockquote>
        </div>
        <div className="relative flex w-full min-w-0 flex-col items-start">
          <CoverSub color="#FEDFCA" />
          <div className="flex w-full min-w-0 flex-col items-center gap-6 border-x-2 border-b-2 border-white bg-[#FEDFCA] px-6 pb-6 md:items-start md:px-10 md:pb-10">
            <p className="relative z-10 -mt-5 w-fit max-w-full text-wrap text-start font-th mobile-s6-th-700 text-tk-red md:-mt-5.25 md:w-full md:pl-16.75 md:desktop-s6-th-700">
              TK Park เป็นองค์กรที่ทำงานร่วมกับ
              <br className="sm:hidden block" />
              หน่วยงานท้องถิ่น ภาครัฐ ภาคการศึกษา
              <br className="sm:hidden block" /> และภาคเอกชน
              เพื่อพัฒนาแหล่งเรียนรู้
              <br className="sm:hidden block" />
              ให้เป็น
              <br className="hidden sm:block" />
              พื้นที่สร้างสรรค์ที่ตอบโจทย์
              <br className="sm:hidden block" />
              คนทุกวัย พร้อมส่งเสริมการเรียนรู้
              <br className="sm:hidden block" />
              ตลอดชีวิตในแต่ละชุมชน
            </p>
            <p className="w-fit max-w-full text-start font-th mobile-s6-th-400 text-tk-black md:w-full md:desktop-s6-th-400">
              เราเป็นหน่วยงานภายใต้สำนักงานบริหาร
              <br className="sm:hidden block" />
              และพัฒนาองค์ความรู้ (องค์การมหาชน){" "}
              <br className="sm:hidden block" />
              ที่เชื่อมั่นในการสร้างพื้นที่แห่งการเรียนรู้
              <br className="sm:hidden block" />
              ที่ทุกคนสามารถเข้าถึงได้และเชื่อมั่น
              <br className="sm:hidden block" />
              ว่าการสร้างพื้นที่การเรียนรู้หรือระบบนิเวศ
              <br className="sm:hidden block" />
              ที่ดีจะสามารถสนับสนุนให้
              <br className="hidden sm:block" />
              ผู้ใช้บริการ
              <br className="sm:hidden block" />
              เห็นภาพว่า ตัวเองจะส่งต่อความสร้างสรรค์
              <br className="sm:hidden block" />
              ต่อสังคมได้อย่างไร <br className="hidden sm:block" />
              โดยเฉพาะเด็กและ
              <br className="sm:hidden block" />
              เยาวชนรุ่นใหม่ ผู้ต้องเติบโตไปพร้อมๆ
              <br className="sm:hidden block" /> กับโลกดิจิทัล
              <br className="hidden sm:block" /> ไร้พรมแดน
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-start  justify-center gap-5 p-10 bg-[#FEE6A6] border-2 border-white">
          <span className="text-tk-black desktop-s6-th-400">
            <span className="font-th desktop-s6-th-700">เครือข่าย TK Park</span>{" "}
            คือกลุ่มหน่วยงาน
            <br className="sm:hidden block" />
            ที่ร่วมกันพัฒนาแหล่งเรียนรู้
            <br className="sm:hidden block" />
            ของตนเองให้เป็นพื้นที่ที่ผู้คนทุกวัย
            <br className="sm:hidden block" />
            เข้ามาเรียนรู้ พบปะ แลกเปลี่ยน <br className="sm:hidden block" />
            และสร้างสรรค์ร่วมกัน มุ่งมั่นพัฒนา
            <br className="sm:hidden block" />
            พื้นที่การเรียนรู้ของตนให้เป็น <br className="sm:hidden block" />{" "}
            “ห้องสมุดมีชีวิต” หรือ Living <br className="sm:hidden block" />{" "}
            Library พื้นที่ซึ่งความรู้ แรงบันดาลใจ{" "}
            <br className="sm:hidden block" />
            ความคิดสร้างสรรค์ การทดลองและ
            <br className="sm:hidden block" />
            ลงมือทำ สามารถเกิดขึ้นได้ <br className="sm:hidden block" />
            ในที่เดียวกันทั่วภูมิภาคในประเทศไทย{" "}
            <br className="sm:hidden block" />
            โดยสามารถศึกษาแนวทาง <br className="sm:hidden block" />
            ในการออกแบบพื้นที่การเรียนรู้ <br className="sm:hidden block" />
            เพื่อประเมินความพร้อมในด้านพื้นที่{" "}
            <br className="sm:hidden block" />
            การบริการ และวิธีการบริหารจัดการ <br className="sm:hidden block" />
            ทรัพยากรของชุมชนตนเอง รวมถึง
            <br className="sm:hidden block" />
            สำรวจกิจกรรมและตัวอย่างของ
            <br className="sm:hidden block" />
            พื้นที่การเรียนรู้ที่ดีได้ที่เว็บไซต์แห่งนี้
          </span>

          <p className="text-tk-black desktop-s6-th-400">
            การสร้างพื้นที่การเรียนรู้มีชีวิต
            <br className="sm:hidden block" />
            ต้องเกิดจากบุคลากรคนเก่งในพื้นที่ <br className="sm:hidden block" />
            และสร้างโดยใช้หลักคิด “ผู้ใช้
            <br className="sm:hidden block" />
            เป็นศูนย์กลาง” (User-centered) <br />
            ให้ท้องถิ่นมีส่วนร่วมให้มากที่สุด
          </p>
        </div>
        <div className="flex w-full flex-col sm:items-start items-center justify-center gap-5 p-10 bg-blue-200 border-2 border-white">
          <span className="text-white desktop-s6-th-400">
            ไม่ว่าหน่วยงานของคุณจะเพิ่งเริ่มต้น{" "}
            <br className="sm:hidden block" />
            หรืออยู่ในระหว่างการพัฒนา
            <br className="sm:hidden block" />
            แหล่งเรียนรู้ TK Park พร้อมสนับสนุน
            <br className="sm:hidden block" />
            ทั้งองค์ความรู้ เครื่องมือ มาตรฐาน{" "}
            <br className="sm:hidden block" /> และประสบการณ์จากเครือข่าย
            <br className="sm:hidden block" />
            ทั่วประเทศ เพื่อให้หน่วยงานสามารถ
            <br className="sm:hidden block" />
            พัฒนาแหล่งเรียนรู้
            <br className="hidden sm:block" />
            ที่เหมาะกับบริบท
            <br className="sm:hidden block" />
            ของพื้นที่ และเติบโตเป็นศูนย์กลาง
            <br className="sm:hidden block" />
            การเรียนรู้
            <br className="hidden sm:block" />
            ของชุมชนได้อย่างยั่งยืน
          </span>
        </div>
        <div className="bg-red-50 rounded-[40px] border-2 border-white h-[432px] mt-25 w-full flex items-center justify-center">
          <p className="font-th desktop-s4-th-700 text-tk-red text-center">
            6 ขั้นตอน
            <br />
            ในการเข้าร่วม
            <br className="sm:hidden block" />
            เครือข่าย
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mb-10">
          <div className="flex flex-col items-center justify-center text-balance">
            <p className="text-tk-black desktop-s6-th-400 font-th text-center">
              หลักการ ตัวอย่าง และประสบการณ์จริง
              <br className="sm:hidden block" />
              ที่จำเป็นในการสร้างห้องสมุดมีชีวิต
            </p>
          </div>
          {/* <button className="bg-[#9B9B9B] text-white desktop-s6-th-700 font-th py-1.5 px-5 rounded-full">
            <span className="text-white desktop-s6-th-400 font-th text-center">
              สำรวจองค์ความรู้ทั้งหมด
            </span>
          </button> */}
        </div>
      </section>

      <StepsOverlay background="transparent" fit="scroll" stickyIndicator />
    </div>
  );
};

export default IntroSection;
