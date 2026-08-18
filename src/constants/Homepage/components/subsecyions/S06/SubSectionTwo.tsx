import { T12 } from "@/src/components/icons/topics";
import ActivityCard, { ActivityCell } from "./ActivityCard";

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
      <div className="flex w-full flex-col items-center justify-center gap-2.5 p-10 border-2 border-white bg-[#FEE6A6]">
        <p className="font-th desktop-s6-th-400 text-tk-black">
          ลองสำรวจกิจกรรมต้นแบบและกลุ่มเป้าหมายที่เหมาะกับผู้ใช้งานแต่ละกลุ่ม
          ที่สามารถสร้างการเรียนรู้ทั้งแบบรู้ตัวและไม่รู้ตัว
          เพราะแม้แต่กิจกรรมที่ดูเรียบง่ายที่สุดก็ต้องการการจัดการอย่างละเอียด
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          บรรยากาศที่ดีสามารถกระตุ้นให้ผู้ใช้บริการอยากแบ่งปันและสร้างสรรค์งาน
          ร่วมกับผู้อื่น
          สิ่งอำนวยความสะดวกที่เหมาะเจาะก็จะช่วยสร้างประสบการณ์ที่ดีในการแบ่งปัน
          สร้างปฏิสัมพันธ์ร่วมกันกับคนในชุมชน
          แต่ที่สำคัญที่สุดคือความรู้สึกเป็นอิสระที่จะเรียนรู้อะไรก็ได้ด้วยตนเอง
        </p>
      </div>
      <ActivityCard
        id="subsubtopic27"
        color="#5B73ED"
        title={
          <>
            กิจกรรม
            <br />
            อ่านไป
            <br />
            งีบไป
          </>
        }
        textClassName="text-white"
        descriptions={[
          <>
            ผู้ใช้งานไม่เกรงกลัวที่จะเข้ามาเรียนรู้สื่อต่างๆ ในระยะเวลานาน
            <br />
            จึงออกแบบให้บรรยากาศมีความเป็นกันเอง
          </>,
          <>
            ผู้ใช้งานสามารถพักเปลี่ยนอิริยาบถ <br />
            เพื่อบรรเทาความเหนื่อยล้า และกลับมาเรียนรู้สื่อต่างๆ อย่างสดใส
          </>,
        ]}
        targets={[
          "กลุ่มผู้สูงอายุ",
          <>
            กลุ่มผู้ใหญ่ <br />
            วัยทำงานที่มี <br />
            ความเหนื่อยล้า
          </>,
        ]}
        areas={["พื้นที่สะดวกกิจกรรมสบาย", "พื้นที่ผ่อนคลายเป็นกันเอง"]}
        principles={
          <>
            <ActivityCell
              textClassName="text-white"
              boxClassName="border-y border-white flex flex-col items-center h-full py-2"
            >
              จำกัดจำนวน ที่นั่งในบริเวณ โต๊ะเดียวกัน เพื่อเปิดโอกาส
              ให้ผู้ใช้งานจัด ท่าทางที่ตนเองรู้สึกสบาย
            </ActivityCell>
            <ActivityCell
              textClassName="text-white"
              boxClassName="border-y border-white flex flex-col items-center h-full py-2"
            >
              หลีกเลี่ยงใช้ เฟอร์นิเจอร์ ประเภทโต๊ะเก้าอี้ที่มีขนาดเกิน 4
              ที่นั่งขึ้นไปหรือ โซฟา เพื่อไม่ให้การงีบหลับรบกวนกิจกรรมของผู้อื่น
              ในโต๊ะเดียวกัน
            </ActivityCell>
            <ActivityCell
              textClassName="text-white"
              boxClassName="border-y border-white flex flex-col items-center h-full py-2"
            >
              กำหนดสัญญาณเสียงตาม เวลาที่เหมาะสมเพื่อป้องกันการงีบหลับจนนาน
              เกินไป
            </ActivityCell>
          </>
        }
      />
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
          "พื้นที่สำหรับการฝึกฝนการแสดงออก เช่น การเต้นคัฟเวอร์ การซ้อมเชียร์ลีดเดอร์ การเต้นลีลาศ การออกกำลังกาย",
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
                เตรียมปลั๊กไฟ ให้เพียงพอ
              </ActivityCell>
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center md:h-[110px] justify-center py-2"
              >
                เตรียมสัญญาณ อินเตอร์เน็ต ที่มีความเร็ว และเสถียร
              </ActivityCell>
            </div>
            <div className="mt-4 flex flex-col gap-4 md:mt-5 md:grid md:grid-cols-3 md:gap-5">
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full"
              >
                บริหารจัดการ พื้นที่กึ่งภาย นอกอาคาร ติดตั้งสิ่ง อำนวย ความสะดวก
                เพิ่มเติมเพื่อ เป็นพื้นที่ฝึกฝน
              </ActivityCell>
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full"
              >
                ควรเป็นพื้นที่ ที่คนนอก สามารถมอง เห็นกิจกรรม
                ที่เกิดขึ้นด้านในเพื่อกระตุ้น ความสนใจใน การเรียนรู้การ แสดงออก
              </ActivityCell>
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full"
              >
                ใช้วัสดุพื้นที่ไม่ ก่อให้เกิดเสียงดัง และวัสดุ ป้องกันเสียง
                บริเวณประตู หรือรอยต่อ ผนัง
              </ActivityCell>
            </div>
            <div className="mt-4 flex flex-col gap-4 md:mt-5 md:grid md:grid-cols-3 md:gap-5">
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full"
              >
                พิจารณาติดตั้งผนังกระจกเงา บานใหญ่เพื่อ
                ตรวจสอบความถูกต้องของท่าทาง
              </ActivityCell>
              <ActivityCell
                textClassName="text-tk-black"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full"
              >
                ให้บริการ อุปกรณ์อิเล็ก-ทรอนิกส์เคลื่อนที่ เช่น ลำโพง ขนาดเล็ก
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
          "ผู้ใช้งานจะได้มีพื้นที่ที่เหมาะสมในการพัฒนาทักษะเพื่อแข่งอีสปอร์ต",
          "สนับสนุนการใช้งานอย่างหลากหลายและทันสมัย",
          "กระตุ้นให้ผู้ใช้งานได้ทดลองฝึกฝนทักษะใหม่ๆ",
        ]}
        targets={[
          "เหมาะสำหรับ ผู้ที่ต้องการฝึกฝนทักษะเกม ออนไลน์แบบ อีสปอร์ตอย่าง เป็นทางการ",
          "กลุ่มเป้าหมาย โดยมากคือกลุ่มนักเรียนที่สนใจรวมกลุ่มฝึกฝน",
        ]}
        areas={["พื้นที่สะดวกกิจกรรมสบาย", "พื้นที่สตูดิโอ"]}
        principles={
          <div className="col-span-3">
            <div className="mt-4 flex flex-col gap-4 md:mt-5 md:grid md:grid-cols-3 md:gap-5">
              <ActivityCell
                textClassName="text-white"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full justify-center"
              >
                ควรจัดพื้นที่ ไม่ให้เสียงไปรบกวนพื้นที่อื่น
              </ActivityCell>
              <ActivityCell
                textClassName="text-white"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full justify-center"
              >
                อาจสนับสนุน จอภาพแสดง ผลขนาดใหญ่ หรือชุดเฟอร์นิ-เจอร์สำหรับ
                อีสปอร์ต โดยเฉพาะ
              </ActivityCell>
              <ActivityCell
                textClassName="text-white"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full justify-center"
              >
                ควรกำหนด เวลาในการใช้ งานต่อรอบ อย่างเหมาะสม
              </ActivityCell>
            </div>
            <div className="mt-4 flex flex-col gap-4 md:mt-5 md:grid md:grid-cols-3 md:gap-5">
              <ActivityCell
                textClassName="text-white"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full justify-center"
              >
                เตรียมปลั๊กไฟ ให้เพียงพอ
              </ActivityCell>
              <ActivityCell
                textClassName="text-white"
                boxClassName="border-y border-white flex flex-col items-center py-2 h-full justify-center"
              >
                เตรียมสัญญาณ อินเตอร์เน็ต ที่มีความเร็ว และเสถียร
              </ActivityCell>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default SubSectionTwo;
