import { T11 } from "@/src/components/icons/topics";
import React from "react";

const IconBox = ({
  stroke,
  className,
}: {
  stroke: string;
  className: string;
}) => {
  return (
    <svg
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="110"
        height="110"
        rx="28.878"
        stroke={stroke}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const SubSectionOne = () => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center">
        <T11
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          รูปแบบ <br />
          บริการตาม <br />
          กลุ่มเป้าหมาย
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-10 border-2 border-white bg-[#FEE6A6]">
        <p className="font-th desktop-s6-th-400 text-tk-black">
          ลองจินตนาการห้องสมุดที่มีโต๊ะทำงานตัวใหญ่สำหรับระดมสมอง
          ประดิษฐ์สิ่งของต่างๆ มีมุมเล่านิทานดีๆ หนังสือหลากหลายประเภทให้เลือก
          มีบอร์ดเกมมากมายให้เล่น มีนิทรรศการให้เดินชม
          หรือจะมีเสียงดนตรีคลอให้รู้สึก
          <br className="hidden md:inline" />
          ผ่อนคลาย
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          เมื่อเปิดประตูแหล่งเรียนรู้ กลุ่มผู้ปกครองอาจจะอยากนั่งรอลูก บรรดาแม่ๆ
          <br />
          ได้โอกาสคุยกันระหว่างที่ลูกกำลังใช้พื้นที่
          กลุ่มเด็กเล็กอยากเข้ากิจกรรม
          <br />
          เล่านิทานเด็ก กลุ่มนักเรียนนักศึกษาอาจจะอยากใช้ห้องประชุมทำงาน
          คุยเล่นเรื่องซีรีส์ดัง อ่านไปงีบไป ติวหนังสือสอบ
          กลุ่มผู้ใหญ่และผู้สูงอายุอาจจะอยากคุยเข้มสภากาแฟ หรือออกกำลังกาย
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          การศึกษาข้อมูลภาคสนามของ TK Park พบว่า ผู้ใช้บริการทุกเพศทุกวัยที่
          <br />
          เข้ามาใช้พื้นที่การเรียนรู้ในแต่ละช่วงเวลาของวันและสัปดาห์มีความแตกต่างกันอย่างมีนัยยะสำคัญ
          ขึ้นอยู่กับสถานที่ตั้งและรูปแบบการให้บริการ เช่น นักเรียน
          นักศึกษาจะใช้งานแหล่งเรียนรู้เวลาเย็นเป็นหลัก
          ผู้สูงอายุมักจะใช้เวลาช่วงสายของวันธรรมดาในหลายพื้นที่
          และเพิ่มมากขึ้นในวันหยุด ส่วนช่วงบ่ายวันหยุด
          พื้นที่จะเต็มไปด้วยกลุ่มคนหลากหลาย เช่น นักเรียนที่เข้ามาทำรายงาน
          ซ้อมการแสดง ผู้ปกครองและเด็กเล็กอ่านหนังสือนิทาน ส่วนวัยทำงานอาจ
          <br />
          นั่งทำงานกับโน้ตบุ้คสักตัว
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          ตำแหน่งที่ตั้งของแหล่งเรียนรู้เองก็มีผลกับการเข้าใช้งานของกลุ่มต่างๆ
          <br />
          เป็นอย่างมาก เช่น พื้นที่การเรียนรู้ที่อยู่ใกล้โรงเรียนจะมีนักเรียน
          นักศึกษา
          <br />
          เข้ามาใช้งานมากเป็นพิเศษ
          หรือผู้ปกครองจะเข้ามาใช้งานก่อนเวลาลูกหลานเลิกเรียน
          ส่วนพื้นที่การเรียนรู้ที่อยู่ใกล้กับพื้นที่ชุมชน
          ขาประจำคือกลุ่มผู้สูงอายุที่เข้ามาใช้งานช่วงสายจนถึงเที่ยงในวันธรรมดา
          และมีผู้ใช้บริการทั่วไปจำนวนมากในวันหยุด
        </p>
        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
          <div className="flex flex-col ">
            <p className="font-th desktop-s6-th-700 text-tk-black px-2.5 py-1 bg-yellow-700 w-fit">
              ลองสำรวจกลุ่มผู้ใช้งาน 5 กลุ่ม
            </p>
            <p className="font-th desktop-s6-th-400 text-tk-black px-2.5 py-1 bg-yellow-700">
              พร้อมตัวอย่างจริงจากผลงานของเครือข่าย TK Park ในประเทศไทย
            </p>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-wrap">
              <div className="relative flex items-center justify-center">
                <IconBox
                  stroke="#C0A765"
                  className="w-[110px] h-[110px] "
                  aria-hidden="true"
                />
                <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                  กลุ่ม <br />
                  ครอบครัว
                  <br />
                  พร้อม
                  <br />
                  เด็กเล็ก
                </p>
              </div>
              <div className="relative flex items-center justify-center mx-[-1.5px]">
                <IconBox
                  stroke="#C0A765"
                  className="w-[110px] h-[110px] "
                  aria-hidden="true"
                />
                <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                  กลุ่ม <br />
                  นักเรียน
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <IconBox
                  stroke="#C0A765"
                  className="w-[110px] h-[110px] "
                  aria-hidden="true"
                />
                <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                  กลุ่ม <br />
                  ผู้ใหญ่
                </p>
              </div>
            </div>
            <div className="flex mt-[-1.5px]">
              <div className="relative flex items-center justify-center mr-[-1.5px]">
                <IconBox
                  stroke="#C0A765"
                  className="w-[110px] h-[110px] "
                  aria-hidden="true"
                />
                <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                  กลุ่มวัยรุ่น
                  <br />
                  และนักศึกษา
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <IconBox
                  stroke="#C0A765"
                  className="w-[110px] h-[110px] "
                  aria-hidden="true"
                />
                <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                  กลุ่ม
                  <br />
                  ผู้สูงอายุ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-start justify-start w-full gap-8"
        id="subsubtopic22"
      >
        <div className="flex items-start md:flex-row flex-col ">
          <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#FFFFFF"
                className="w-[168px] h-[168px]"
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
                กลุ่ม
                <br />
                ครอบครัว
                <br />
                พร้อม
                <br />
                เด็กเล็ก
              </p>
            </div>
          </div>
          <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-5">
            <span className="font-th desktop-s6-th-400 text-tk-black text-balance">
              เด็กเล็กคือตัวละครหลัก ไม่ว่าพวกเขาจะอยากทำกิจกรรมอะไร เช่น
              วาดรูประบายสี อ่านนิทาน คลาน เล่นของเล่นเสริมทักษะ
              ปีนป่ายในพื้นที่ที่
              <br />
              ถูกออกแบบไว้ พ่อแม่อาจจะร่วมทำกิจกรรมด้วยหรืออ่านหนังสือ
              เล่นโทรศัพท์อยู่ใกล้ๆ
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="relative z-10 mb-[-2px] w-fit border-x-2 border-t-2 border-white bg-yellow-100 p-10">
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              กิจกรรมต้นแบบ
            </p>
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              เน้นกิจกรรมสร้างพัฒนาการ
            </p>
          </div>
          <div className="flex w-full flex-col border-2 border-white bg-yellow-100 px-10 pt-5 pb-10">
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              TK Park อุทยานการเรียนรู้
            </p>
            <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border-x border-t border-[#D9D9D9]">
              ชุดการเรียนรู้ Toy Library ในห้องเด็ก ประกอบไปด้วยหนังสือ 1
              เล่มที่
              <br />
              คัดสรรโดยบรรณารักษ์ของห้องสมุดเด็ก TK Park และของเล่นไม้
              <br />
              เสริมทักษะ 1 ชุดจากบริษัทแปลนทอยส์
            </p>
            <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border border-[#D9D9D9]">
              ชุดการเรียนรู้ Sort&Count Trees จากหนังสือเรื่อง “แตะต้นไม้วิเศษ”
              และชุดของเล่นที่ประกอบด้วยฐานพร้อมเสา 4 ต้น พุ่มไม้ 10 พุ่ม เพื่อ
              <br />
              ฝึกนับเลขและจำแนกสีผ่านต้นไม้ในฤดูกาลต่างๆ และช่วยเสริมสร้าง
              <br />
              กล้ามเนื้อมัดเล็ก ความสัมพันธ์ของมือและสายตา
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-start justify-start w-full gap-8"
        id="subsubtopic23"
      >
        <div className="flex items-start md:flex-row flex-col">
          <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#FFFFFF"
                className="w-[168px] h-[168px]"
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
                กลุ่ม
                <br />
                นักเรียน
              </p>
            </div>
          </div>
          <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-5">
            <span className="font-th desktop-s6-th-400 text-tk-black text-balance">
              ถ้านึกถึงห้องสมุดก็มักจะนึกถึงกลุ่มนักเรียน ก่อนเป็นอันดับแรก
              พวกเขามักจะพากันมาใช้พื้นที่ห้องสมุดแบบเป็นแก๊งเพื่ออ่านหนังสือ
              ทำรายงาน พักผ่อน
              หรือใช้คอมพิวเตอร์เพื่อทำงานหรือรอผู้ปกครองมารับในช่วงเวลา
              <br />
              หลังเลิกเรียน หรือวันหยุดโดยไม่ต้อง
              <br />
              เสียค่าใช้จ่ายเพิ่มเติม
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="relative z-10 mb-[-2px] w-fit border-x-2 border-t-2 border-white bg-yellow-100 p-10">
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              กิจกรรมต้นแบบ
            </p>
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              เน้นพื้นที่เพื่อทำการบ้าน ทำงานกลุ่ม
            </p>
          </div>
          <div className="flex w-full flex-col border-2 border-white bg-yellow-100 px-10 pt-5 pb-10">
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              เครือข่าย TK Park
            </p>
            <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border-x border-t border-[#D9D9D9]">
              <b>สร้างฝันสร้างคิดส์ อุทยานการเรียนรู้แม่ฮ่องสอน</b>{" "}
              จังหวัดแม่ฮ่องสอนมีชาวชาติพันธุ์หลายกลุ่มอาศัยอยู่
              อุทยานจึงจัดกิจกรรมน่ารู้ด้านภาษา เช่น ภาษาไทใหญ่ ภาษากะเหรี่ยง
              เด็กๆ
              จะได้เรียนรู้ว่าจังหวัดของตัวเองมีความหลากหลายทางภาษาและเรียนรู้มนุษย์ไปด้วย
            </p>
            <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border-x border-t border-[#D9D9D9]">
              <b>มุมบันไดนักอ่าน อุทยานการเรียนรู้เมืองนครราชสีมา</b>{" "}
              หนังสือและนิยายจำนวนมากทำให้มุมนี้กลายเป็นมุมยอดฮิตของกลุ่มเด็ก
              และวัยรุ่น แถม
              <br />
              ยังมีบริการโต๊ะพับและเบาะที่เด็กๆ
              สามารถหยิบไปใช้เองได้หากที่นั่งไม่เพียงพออีกด้วย
            </p>
            <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border border-[#D9D9D9]">
              <b>ศูนย์วิทยาศาสตร์พื้นฐาน อุทยานการเรียนรู้ปัตตานี</b> เด็กๆ ใน 3
              จังหวัดชายแดนภาคใต้ได้เข้าถึงสื่อการเรียนรู้วิทยาศาสตร์ ทดลองเล่น
              ทดลองทำโดยใช้อุปกรณ์ทางวิทยาศาสตร์ที่เตรียมไว้ให้เล่นสนุก
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-start justify-start w-full gap-8"
        id="subsubtopic24"
      >
        <div className="flex items-start md:flex-row flex-col">
          <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#FFFFFF"
                className="w-[168px] h-[168px]"
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
                กลุ่มวัยรุ่น
                <br />
                และนักศึกษา
              </p>
            </div>
          </div>
          <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-5">
            <span className="font-th desktop-s6-th-400 text-tk-black text-balance">
              กลุ่มนี้มีความต้องการในการใช้งานที่ <br />
              หลากหลาย ไม่ว่าจะเป็นการอ่านหนังสือวิชาการ ทำรายงาน
              ใช้คอมพิวเตอร์เพื่อเรียน เล่น หรือใช้ห้องสมุดเพื่อพักใจ นอนเล่น
              <br />
              คุยแลกเปลี่ยน หรือซ้อมการแสดง จึงต้องการลักษณะของพื้นที่หลายระดับ
              ตั้งแต่ระดับที่เงียบสงบไปจนถึงพื้นที่ที่อนุญาตให้ใช้เสียง <br />
              ได้เต็มที่
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="relative z-10 mb-[-2px] w-fit border-x-2 border-t-2 border-white bg-yellow-100 p-10">
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              กิจกรรมต้นแบบ
            </p>
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              เน้นพื้นที่การใช้งานหลากหลาย
            </p>
          </div>
          <div className="flex w-full flex-col border-2 border-white bg-yellow-100 px-10 pt-5 pb-10">
            <div className="flex md:flex-row flex-col">
              <div>
                <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
                  TK Park อุทยานการเรียนรู้
                </p>
                <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border border-[#D9D9D9]">
                  เด็กๆ เรียนรู้และเล่นสนุก ผ่านบอร์ดเกม ซึ่งเป็นสื่อการเรียนรู้
                  เพื่อพัฒนาทักษะชีวิตผ่านการสร้างเรื่องราวและประสบการณ์ต่างๆ
                  พวกเขาจะได้คิดวิเคราะห์ สวมบทบาทเป็นตัวละคร
                  และได้โอกาสสร้างมนุษยสัมพันธ์
                  <br />
                  กับผู้อื่น
                </p>
              </div>
              <div>
                <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
                  เครือข่าย TK Park
                </p>
                <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border-y border-r border-[#D9D9D9]">
                  ห้องสมุดดนตรี (Sound Studio) ศูนย์การเรียนรู้เมืองฉะเชิงเทรา
                  เดิมทีห้องสมุดนี้เป็นห้องสมุดดนตรีเดิมอยู่แล้ว
                  แต่ปรับปรุงกระจกเงาให้ใหญ่ขึ้นจนเหมือนห้องซ้อมเต้น
                  ใครอยากมาฝึกเต้นคัฟเวอร์ เต้นลีลาศเพื่อสุขภาพ
                  หรืออัดวิดิโอเพื่อส่งประกวดก็ได้
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-start justify-start w-full gap-8"
        id="subsubtopic25"
      >
        <div className="flex items-start md:flex-row flex-col">
          <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#FFFFFF"
                className="w-[168px] h-[168px]"
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
                กลุ่มผู้ใหญ่
              </p>
            </div>
          </div>
          <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-5">
            <span className="font-th desktop-s6-th-400 text-tk-black text-balance">
              อีกหนึ่งกลุ่มที่ใช้งานพื้นที่ทั้งแบบเดี่ยวและกลุ่ม
              พวกเขาอาจจะเข้ามาทำกิจกรรมจริงจัง เช่น ทำงานเงียบๆ
              ประชุมงานออนไลน์ <br /> ฝึกทักษะบางอย่าง
              หรือแค่มานั่งอ่านหนังสือเฉยๆ รอรับบุตรหลาน พูดคุยสัพเพเหระ
              ซึ่งโดยมากแล้วจะมาแช่ตัวอยู่ในพื้นที่ค่อนข้างนานและต่อเนื่องในช่วงวันหยุดสุดสัปดาห์
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="relative z-10 mb-[-2px] w-fit border-x-2 border-t-2 border-white bg-yellow-100 p-10">
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              กิจกรรมต้นแบบ
            </p>
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              เน้นพื้นที่พักผ่อนและทำงาน
            </p>
          </div>
          <div className="flex w-full flex-col border-2 border-white bg-yellow-100 px-10 pt-5 pb-10">
            <div className="flex md:flex-row flex-col">
              <div className="flex-1">
                <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
                  TK Park อุทยานการเรียนรู้
                </p>
                <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border border-[#D9D9D9]">
                  พื้นที่นั่งทำงานเป็นพื้นที่ที่ดู <br />
                  พื้นฐานที่สุด แต่ต้องอาศัยความละเอียดในการออกแบบ
                  เพราะปัจจุบันพฤติกรรมในการทำงานนอกสถานที่ของผู้ใช้บริการเติบโตไปตามยุคสมัย
                  เช่น บางกลุ่มอาจพกคอมพิวเตอร์ของตัวเองมา <br />
                  ดังนั้นแทนที่จะจัดเตรียมอุปกรณ์อิเล็กทรอนิกส์ไว้บริการ
                  หน่วยงานควรจัดพื้นที่และบรรยากาศให้เหมาะสมมากกว่า
                  ตั้งแต่บรรยากาศสบายๆ แบบห้องสมุด <br />
                  มีชีวิต
                  ไปจนถึงห้องเงียบซึ่งเป็นพื้นที่ทำงานจริงจังของผู้ที่ต้องการความสงบ
                  และใช้สมาธิในการทำงาน หรือการอ่านอย่าง <br />
                  เต็มที่
                </p>
              </div>
              <div className="flex-1">
                <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
                  เครือข่าย TK Park
                </p>
                <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border-y border-r border-[#D9D9D9]">
                  โครงการนี้เกิดจากการแก้ปัญหา ของวิถีชีวิตของคนระยอง เพราะ{" "}
                  <br />
                  ที่นี่มีนิคมอุตสาหกรรมและพนักงานจำนวนมาก ซึ่งทำงานเป็นกะ
                  ดังนั้นจึงไม่สะดวกที่จะ <br />
                  เดินทางเข้าห้องสมุดในเวลาทำการ
                  โครงการหนังสือมือถือจึงเป็นโครงการที่นำหนังสือเดินทางไปสู่มือของคนทำงานอย่างทั่วถึงมากขึ้นผ่านการยืม-คืน
                  โดยห้องสมุดจะจัดกล่องหนังสือไปตั้งไว้ที่บริษัทครั้งละ 30-60
                  เล่ม/2 เดือน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-start justify-start w-full gap-8"
        id="subsubtopic26"
      >
        <div className="flex items-start md:flex-row flex-col">
          <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#FFFFFF"
                className="w-[168px] h-[168px]"
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
                กลุ่มผู้สูงอายุ
              </p>
            </div>
          </div>
          <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-5">
            <span className="font-th desktop-s6-th-400 text-tk-black text-balance">
              มีชุมชนที่ไหน มีผู้สูงอายุที่นั่น
              <br />
              <br />
              พวกเขาพูดคุยพบปะสื่อสารกันที่ไหน
              ที่นั่นคือห้องสมุดใกล้บ้านที่แทบจะเป็นบ้านหลังที่สอง
              หรือสโมสรสูงวัยของคนบางคน
              <br />
              <br />
              กลุ่มที่มาใช้บริการเป็นประจำจะรู้สึกเสมือนเป็น เจ้าของพื้นที่
              พวกเขามักจะมาใช้บริการใน
              <br />
              ช่วงสายจนถึงเที่ยงในช่วงวันธรรมดาและ
              <br />
              วันหยุด เราอาจจะเห็นคุณตาคุณยายที่ชอบอ่านหนังสือพิมพ์ นิตยสาร
              หรือทำกิจกรรม
              <br />
              เพื่อฝึกทักษะ เช่น เล่นหมากกระดาน เต้นรำ
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="relative z-10 mb-[-2px] w-fit border-x-2 border-t-2 border-white bg-yellow-100 p-10">
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              กิจกรรมต้นแบบ
            </p>
            <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
              เน้นพื้นที่พบปะสังสรรค์และกิจกรรมเสริมทักษะ
            </p>
          </div>
          <div className="flex w-full flex-col border-2 border-white bg-yellow-100 px-10 pt-5 pb-10">
            <div className="flex md:flex-row flex-col">
              <div className="flex-1">
                <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
                  TK Park อุทยานการเรียนรู้
                </p>
                <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border border-[#D9D9D9]">
                  ดิจิทัล ไกด์ (Digital Guide) กิจกรรมฝึกทักษะดิจิทัลพื้นฐาน
                  เพื่อชีวิตประจำวันหรือกิจกรรมยามว่างที่ใช้วิธีการสอนผ่านไลน์กลุ่ม
                </p>
              </div>
              <div className="flex-1">
                <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
                  เครือข่าย TK Park
                </p>
                <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border-y border-r border-[#D9D9D9]">
                  กิจกรรมส่งเสริมการเรียนรู้ของ <br />
                  ผู้สูงอายุ ศูนย์การเรียนรู้ ฉะเชิงเทรา
                  ผู้สูงวัยจะได้ทั้งเรียนรู้และเสริมสุขภาพ เช่น เต้นลีลาศ KCC
                  สูงวัยโอเกะ หรือโรงเรียน <br />
                  ผู้สูงอายุ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSectionOne;
