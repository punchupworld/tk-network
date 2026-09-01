import { T12 } from "@/src/components/icons/topics";
import ActivityCard, { ActivityCell } from "./ActivityCard";
import ReadNapActivityCard from "./ReadNapActivityCard";

const SubSectionTwo = () => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center">
        <T12
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          แนะนำกิจกรรม
        </p>
      </div>
      <div className="flex w-full flex-col justify-center gap-2.5 p-10 border-2 border-white bg-[#FEE6A6]">
        <p className="font-th desktop-s6-th-400 text-tk-black">
          ลองสำรวจกิจกรรมต้นแบบ
          <br className="sm:hidden block" />
          และกลุ่มเป้าหมายที่เหมาะ
          <br className="sm:hidden block" />
          กับผู้ใช้งานแต่ละกลุ่ม
          <br className="hidden sm:block" />
          ที่สามารถ
          <br className="sm:hidden block" />
          สร้างการเรียนรู้ทั้งแบบรู้ตัวและ
          <br className="sm:hidden block" />
          ไม่รู้ตัว เพราะแม้แต่กิจกรรมที่ดู <br />
          เรียบง่ายที่สุดก็ต้องการการจัดการอย่างละเอียด
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          บรรยากาศที่ดีสามารถกระตุ้น
          <br className="sm:hidden block" />
          ให้ผู้ใช้บริการอยากแบ่งปันและ
          <br className="sm:hidden block" />
          สร้างสรรค์งาน ร่วมกับผู้อื่น <br className="sm:hidden block" />
          สิ่งอำนวยความสะดวกที่
          <br className="sm:hidden block" />
          เหมาะเจาะก็จะช่วยสร้าง
          <br className="sm:hidden block" />
          ประสบการณ์ที่ดีในการแบ่งปัน <br className="sm:hidden block" />
          สร้างปฏิสัมพันธ์ร่วมกันกับคน
          <br className="sm:hidden block" />
          ในชุมชน แต่ที่สำคัญที่สุดคือ
          <br className="sm:hidden block" />
          ความรู้สึกเป็นอิสระที่จะเรียนรู้
          <br className="sm:hidden block" />
          อะไรก็ได้ด้วยตนเอง
        </p>
      </div>
      <ReadNapActivityCard />
      <ActivityCard
        id="subsubtopic28"
        color="#74CFC8"
        title={
          <>
            กิจกรรม
            <br />
            เด็กเต้นเร็ว
            <br />
            สูงอายุเต้นช้า
            <br />
          </>
        }
        textClassName="text-tk-black"
        descriptions={[
          <>
            พื้นที่สำหรับการฝึกฝนการแสดงออก เช่น การเต้นคัฟเวอร์ <br />
            การซ้อมเชียร์ลีดเดอร์ การเต้นลีลาศ การออกกำลังกาย
          </>,
        ]}
        targets={["กลุ่มนักเรียนนักศึกษา", "กลุ่มผู้สูงอายุ"]}
        areas={["พื้นที่สะดวกกิจกรรมสบาย", "พื้นที่สตูดิโอ"]}
        principles={
          <div className="col-span-3">
            <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5">
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center md:h-[110px] justify-center py-2"
              >
                เตรียมปลั๊กไฟให้เพียงพอ
              </ActivityCell>
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center md:h-[110px] justify-center py-2"
              >
                เตรียมสัญญาณ อินเตอร์เน็ต
                <br className="sm:hidden block" />
                ที่มีความเร็วและเสถียร
              </ActivityCell>
            </div>
            <div className="mt-4 flex flex-col gap-4 md:mt-5 md:grid md:grid-cols-3 md:gap-5">
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full"
              >
                บริหารจัดการพื้นที่กึ่งภายนอกอาคาร{" "}
                <br className="sm:hidden block" />
                ติดตั้งสิ่งอำนวยความสะดวก <br />
                เพิ่มเติมเพื่อเป็นพื้นที่ฝึกฝน
              </ActivityCell>
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full"
              >
                ควรเป็นพื้นที่
                <br className="hidden sm:block" />
                ที่คนนอก
                <br className="sm:hidden block" />
                สามารถมองเห็นกิจกรรมที่เกิดขึ้นด้านใน
                <br className="sm:hidden block" />
                เพื่อกระตุ้นความสนใจ
                <br className="sm:hidden block" />
                ในการเรียนรู้การ แสดงออก
              </ActivityCell>
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full"
              >
                ใช้วัสดุพื้นที่ไม่ก่อให้เกิดเสียงดัง
                <br className="sm:hidden block" />
                และวัสดุป้องกันเสียง บริเวณประตู{" "}
                <br className="sm:hidden block" />
                หรือรอยต่อผนัง
              </ActivityCell>
            </div>
            <div className="mt-4 flex flex-col gap-4 md:mt-5 md:grid md:grid-cols-3 md:gap-5">
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full"
              >
                พิจารณาติดตั้งผนังกระจกเงาบานใหญ่
                <br className="sm:hidden block" />
                เพื่อตรวจสอบความถูกต้องของท่าทาง
              </ActivityCell>
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full"
              >
                ให้บริการอุปกรณ์ <br />
                อิเล็กทรอนิกส์เคลื่อนที่ เช่น ลำโพงขนาดเล็ก
              </ActivityCell>
            </div>
          </div>
        }
      />
      <ActivityCard
        id="subsubtopic29"
        color="#5B73ED"
        title={
          <>
            กิจกรรม
            <br />
            จริงจังอนาคต
            <br />
            E-Sport
            <br />
            Player
          </>
        }
        textClassName="text-white"
        descriptions={[
          <>
            ผู้ใช้งานจะได้มีพื้นที่ที่เหมาะสม
            <br className="sm:hidden block" />
            ในการพัฒนาทักษะเพื่อแข่งอีสปอร์ต
          </>,
          <>
            สนับสนุนการใช้งานอย่างหลากหลาย
            <br className="sm:hidden block" />
            และทันสมัย
          </>,
          <>
            กระตุ้นให้ผู้ใช้งานได้ทดลอง
            <br className="sm:hidden block" />
            ฝึกฝนทักษะใหม่ๆ
          </>,
        ]}
        targets={[
          "เหมาะสำหรับผู้ที่ต้องการฝึกฝนทักษะเกมออนไลน์แบบอีสปอร์ตอย่างเป็นทางการ",
          <>
            กลุ่มเป้าหมาย <br />
            โดยมากคือกลุ่มนักเรียนที่สนใจ <br />
            รวมกลุ่มฝึกฝน
          </>,
        ]}
        areas={["พื้นที่สะดวกกิจกรรมสบาย", "พื้นที่สตูดิโอ"]}
        principles={
          <div className="col-span-3">
            <div className="mt-4 flex flex-col gap-4 md:mt-5 md:grid md:grid-cols-3 md:gap-5">
              <ActivityCell
                textClassName="text-white"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full justify-center"
              >
                ควรจัดพื้นที่ไม่ให้เสียงไปรบกวนพื้นที่อื่น
              </ActivityCell>
              <ActivityCell
                textClassName="text-white"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full justify-center"
              >
                อาจสนับสนุน จอภาพแสดงผล
                <br className="sm:hidden block" />
                ขนาดใหญ่ หรือชุดเฟอร์นิเจอร์
                <br className="sm:hidden block" />
                สำหรับ อีสปอร์ตโดยเฉพาะ
              </ActivityCell>
              <ActivityCell
                textClassName="text-white"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full justify-center"
              >
                ควรกำหนดเวลา
                <br className="sm:hidden block" />
                ในการใช้งานต่อรอบ <br className="sm:hidden block" />
                อย่างเหมาะสม
              </ActivityCell>
            </div>
            <div className="mt-4 flex flex-col gap-4 md:mt-5 md:grid md:grid-cols-3 md:gap-5">
              <ActivityCell
                textClassName="text-white"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full justify-center"
              >
                เตรียมปลั๊กไฟ <br />
                ให้เพียงพอ
              </ActivityCell>
              <ActivityCell
                textClassName="text-white"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full justify-center"
              >
                เตรียมสัญญาณ อินเตอร์เน็ต
                <br className="sm:hidden block" />
                ที่มีความเร็วและเสถียร
              </ActivityCell>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default SubSectionTwo;
