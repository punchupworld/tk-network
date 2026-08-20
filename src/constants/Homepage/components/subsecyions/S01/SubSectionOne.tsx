import { T02 } from "@/src/components/icons/topics";
import React from "react";
import CoverCap from "../../CoverCap";

const SubSectionOne = () => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-25">
      <div className="relative flex items-center justify-center">
        <T02
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          ก้าวแรก
          <br />
          สู่ห้องสมุด
          <br />
          มีชีวิต
        </p>
      </div>
      <div
        className="flex w-full flex-col items-center justify-center gap-5 p-10 bg-[#FEE6A6] border-2 border-white"
        id="subsubtopic1"
      >
        <p className="text-tk-black desktop-s6-th-400">
          เมื่อหน่วยงานสนใจที่จะสร้างพื้นที่การเรียนรู้ร่วมกันกับ TK Park
          นี่คือภาพคร่าวๆ ของกระบวนการเบื้องต้น
        </p>
        <p className="text-tk-black desktop-s6-th-400 text-balance">
          เครือข่ายอาจเริ่มทำงานโดยการศึกษาเป้าหมายก่อนเป็นอันดับแรก
          เมื่อเราเข้าใจกลุ่มเป้าหมายและพื้นที่
          ก็จะเข้าสู่กระบวนการคิดเชิงออกแบบ เช่น การบริการต้องเป็นแบบไหน
          พื้นที่มีขนาดเท่าไหร่ ลักษณะใดจึงจะตอบโจทย์ แล้วโปรแกรมกิจกรรมล่ะ
          จะออกแบบอย่างไรดีให้สอดคล้องกับบริบทของพื้นที่และกลุ่มเป้าหมายหลัก
          ทรัพยากรสารสนเทศของเราจะเข้าไปช่วยสนับสนุนผู้ใช้งานอย่างไรได้บ้าง
        </p>
        <p className="text-tk-black desktop-s6-th-400">
          การพัฒนาพื้นที่การเรียนรู้ให้มีชีวิตชีวาและตอบโจทย์ผู้ใช้บริการอย่างต่อเนื่อง
          จำเป็นต้องอาศัยการวางแผนที่เหมาะสมกับบริบทของแต่ละพื้นที่
          ทั้งด้านทรัพยากร พื้นที่กายภาพ การบริหารจัดการ งบประมาณ
          และความต้องการของชุมชน
          เพราะพื้นที่การเรียนรู้ที่ดีไม่ได้มีรูปแบบตายตัว
          แต่คือพื้นที่ที่สอดคล้องกับวิถีชีวิตของผู้คน
          และสามารถสร้างการเรียนรู้ได้อย่างยั่งยืน
        </p>
      </div>
      <div className="flex w-full max-w-[600px] flex-col items-start">
        <CoverCap color="#FFBAA1" colorStroke="white" strokeWidth={2} />
        <div className="flex w-full flex-col items-start gap-10 border-x-2 border-b-2 border-white bg-orange-300 pt-5 pb-10 px-10 text-white">
          <div className="px-5 py-1.5 border-2 border-tk-black rounded-full">
            <h2 className="font-th desktop-s6-th-700 text-tk-black">
              ประโยชน์ของการเข้าร่วม
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 border border-tk-black text-tk-black sm:grid-cols-2">
            <div className="flex flex-col">
              <p className="border-b border-tk-black p-5 font-th desktop-s6-th-400 leading-normal last:border-b-0">
                หน่วยงานมีความเข้าใจในการออกแบบและพัฒนาพื้นที่การเรียนรู้ให้เหมาะสมกับบริบทและความต้องการของพื้นที่
              </p>
              <p className="border-b border-tk-black p-5 font-th desktop-s6-th-400 leading-normal last:border-b-0">
                ยกระดับสร้างอนาคตของคนในพื้นที่ให้เข้าถึงการเรียนรู้ที่ออกแบบมาให้สอดคล้องกับความต้องการของพื้นที่
              </p>
              <p className="p-5 font-th desktop-s6-th-400 leading-normal">
                ขยายโอกาสการเรียนรู้ให้ทุกคนเข้าถึงได้
              </p>
            </div>
            <div className="flex flex-col border-t border-tk-black sm:border-l sm:border-t-0">
              <p className="border-b border-tk-black p-5 font-th desktop-s6-th-400 leading-normal">
                พัฒนาทักษะแห่งอนาคตให้เด็กและเยาวชนในพื้นที่
              </p>
              <p className="border-b border-tk-black p-5 font-th desktop-s6-th-400 leading-normal">
                ชุมชนมีชีวิตชีวาเพราะมีพื้นที่การเรียนรู้เชิงสร้างสรรค์ของตัวเอง
              </p>
              <p className="border-b border-tk-black p-5 font-th desktop-s6-th-400 leading-normal">
                พัฒนาจากห้องสมุด <br />
                ในความหมายเดิม สู่ศูนย์กลางการเรียนรู้ของชุมชน
              </p>
              <p className="p-5 font-th desktop-s6-th-400 leading-normal">
                เชื่อมโยงความรู้ เทคโนโลยี และวิถีชีวิตเข้าด้วยกัน
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSectionOne;
