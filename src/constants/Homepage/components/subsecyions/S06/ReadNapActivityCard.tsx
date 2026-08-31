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
          ผู้ใช้งานไม่เกรงกลัวที่จะเข้ามาเรียนรู้
          <br className="sm:hidden block" />
          สื่อต่างๆ ในระยะเวลานาน
          <br className="hidden sm:block" />
          จึงออกแบบ
          <br className="sm:hidden block" />
          ให้บรรยากาศมีความเป็นกันเอง
        </>,
        <>
          ผู้ใช้งานสามารถพักเปลี่ยนอิริยาบถ <br />
          เพื่อบรรเทาความเหนื่อยล้า และกลับมา
          <br className="sm:hidden block" />
          เรียนรู้สื่อต่างๆ อย่างสดใส
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
            จำกัดจำนวนที่นั่งในบริเวณโต๊ะเดียวกัน{" "}
            <br className="sm:hidden block" />
            เพื่อเปิดโอกาสให้ผู้ใช้งาน
            <br className="sm:hidden block" />
            จัดท่าทางที่ตนเองรู้สึกสบาย
          </ActivityCell>
          <ActivityCell
            textClassName="text-white"
            boxClassName="border-y border-white flex flex-col items-center h-full py-2"
          >
            หลีกเลี่ยงใช้ เฟอร์นิเจอร์ ประเภทโต๊ะเก้าอี้
            <br className="sm:hidden block" />
            ที่มีขนาดเกิน 4 ที่นั่งขึ้นไปหรือโซฟา{" "}
            <br className="sm:hidden block" />
            เพื่อไม่ให้การ <br className="hidden sm:block" />
            งีบหลับรบกวน
            <br className="sm:hidden block" />
            กิจกรรมของผู้อื่น ในโต๊ะเดียวกัน
          </ActivityCell>
          <ActivityCell
            textClassName="text-white"
            boxClassName="border-y border-white flex flex-col items-center h-full py-2"
          >
            กำหนดสัญญาณเสียงตามเวลาที่เหมาะสม
            <br className="sm:hidden block" />
            เพื่อป้องกันการงีบหลับจนนานเกินไป
          </ActivityCell>
        </>
      }
    />
  );
};

export default ReadNapActivityCard;
