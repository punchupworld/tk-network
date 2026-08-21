import ActivityCard, { ActivityCell } from "./ActivityCard";

const ReadNapActivityCard = ({ id = "subsubtopic27" }: { id?: string }) => {
  return (
    <ActivityCard
      id={id}
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
            จำกัดจำนวนที่นั่งในบริเวณโต๊ะเดียวกัน
            เพื่อเปิดโอกาสให้ผู้ใช้งานจัดท่าทางที่ตนเองรู้สึกสบาย
          </ActivityCell>
          <ActivityCell
            textClassName="text-white"
            boxClassName="border-y border-white flex flex-col items-center h-full py-2"
          >
            หลีกเลี่ยงใช้ เฟอร์นิเจอร์ ประเภทโต๊ะเก้าอี้ที่มีขนาดเกิน 4
            ที่นั่งขึ้นไปหรือโซฟา เพื่อไม่ให้การงีบหลับรบกวนกิจกรรมของผู้อื่น
            ในโต๊ะเดียวกัน
          </ActivityCell>
          <ActivityCell
            textClassName="text-white"
            boxClassName="border-y border-white flex flex-col items-center h-full py-2"
          >
            กำหนดสัญญาณเสียงตามเวลาที่เหมาะสมเพื่อป้องกันการงีบหลับจนนานเกินไป
          </ActivityCell>
        </>
      }
    />
  );
};

export default ReadNapActivityCard;
