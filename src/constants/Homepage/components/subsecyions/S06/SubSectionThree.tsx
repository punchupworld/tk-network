import { T13 } from "@/src/components/icons/topics";
import ParkCard from "./ParkCard";
import { PARK_CARDS } from "./parkData";

const SubSectionThree = () => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center">
        <T13
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          ตัวอย่างพื้นที่
          <br />
          บันดาลใจ
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2.5 p-10 border-2 border-white bg-[#FEE6A6]">
        <p className="font-th desktop-s6-th-400 text-tk-black">
          แต่ละพื้นที่มีบริบท ความต้องการ และแนวทางการพัฒนาที่แตกต่างกัน
          แต่มีเป้าหมายร่วมกัน
          คือการสร้างพื้นที่การเรียนรู้ที่ตอบโจทย์ผู้คนในชุมชน
          ลองสำรวจตัวอย่างจากเครือข่าย TK Park ทั่วประเทศ เพื่อเรียนรู้แนวคิด
          และบทเรียนจากการพัฒนาพื้นที่จริง
        </p>
      </div>

      {PARK_CARDS.map((park) => (
        <ParkCard key={park.id} {...park} />
      ))}
    </div>
  );
};

export default SubSectionThree;
