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
          ลองจินตนาการห้องสมุดที่มีโต๊ะ
          <br className="sm:hidden block" />
          ทำงานตัวใหญ่สำหรับระดมสมอง <br className="sm:hidden block" />
          ประดิษฐ์สิ่งของต่างๆ มีมุมเล่า
          <br className="sm:hidden block" />
          นิทานดีๆ หนังสือหลากหลาย
          <br className="sm:hidden block" />
          ประเภทให้เลือก มีบอร์ดเกม
          <br className="sm:hidden block" />
          มากมายให้เล่น มีนิทรรศการ
          <br className="sm:hidden block" />
          ให้เดินชม หรือจะมีเสียงดนตรี
          <br className="sm:hidden block" />
          คลอให้รู้สึก
          <br className="hidden md:inline" />
          ผ่อนคลาย
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          เมื่อเปิดประตูแหล่งเรียนรู้ <br className="sm:hidden block" />
          กลุ่มผู้ปกครองอาจจะอยากนั่งรอ
          <br className="sm:hidden block" />
          ลูก บรรดาแม่ๆ
          <br className="hidden sm:inline" />
          ได้โอกาสคุยกัน
          <br className="sm:hidden block" />
          ระหว่างที่ลูกกำลังใช้พื้นที่ <br className="sm:hidden block" />
          กลุ่มเด็กเล็กอยากเข้ากิจกรรม
          <br />
          เล่านิทานเด็ก กลุ่มนักเรียน
          <br className="sm:hidden block" />
          นักศึกษาอาจจะอยากใช้ห้องประชุม
          <br className="sm:hidden block" />
          ทำงาน คุยเล่นเรื่องซีรีส์ดัง <br className="sm:hidden block" />
          อ่านไปงีบไป ติวหนังสือสอบ <br className="sm:hidden block" />
          กลุ่มผู้ใหญ่และผู้สูงอายุอาจจะ
          <br className="sm:hidden block" />
          อยากคุยเข้มสภากาแฟ หรือ
          <br className="sm:hidden block" />
          ออกกำลังกาย
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          การศึกษาข้อมูลภาคสนามของ <br className="sm:hidden block" />
          TK Park พบว่า <br className="sm:hidden block" />
          ผู้ใช้บริการทุกเพศทุกวัยที่
          <br />
          เข้ามาใช้พื้นที่การเรียนรู้ในแต่ละ
          <br className="sm:hidden block" />
          ช่วงเวลาของวันและสัปดาห์
          <br className="sm:hidden block" />
          มีความแตกต่างกันอย่างมี
          <br className="sm:hidden block" />
          นัยยะสำคัญ ขึ้นอยู่กับสถานที่ตั้ง
          <br className="sm:hidden block" />
          และรูปแบบการให้บริการ เช่น <br className="sm:hidden block" />
          นักเรียน นักศึกษาจะใช้งาน
          <br className="sm:hidden block" />
          แหล่งเรียนรู้เวลาเย็นเป็นหลัก <br className="sm:hidden block" />
          ผู้สูงอายุมักจะใช้เวลาช่วงสายของ
          <br className="sm:hidden block" />
          วันธรรมดาในหลายพื้นที่ และ
          <br className="sm:hidden block" />
          เพิ่มมากขึ้นในวันหยุด ส่วนช่วง
          <br className="sm:hidden block" />
          บ่ายวันหยุด พื้นที่จะเต็มไปด้วย
          <br className="sm:hidden block" />
          กลุ่มคนหลากหลาย เช่น นักเรียนที่
          <br className="sm:hidden block" />
          เข้ามาทำรายงาน ซ้อมการแสดง <br className="sm:hidden block" />
          ผู้ปกครองและเด็กเล็กอ่านหนังสือ
          <br className="sm:hidden block" />
          นิทาน ส่วนวัยทำงานอาจ
          <br />
          นั่งทำงานกับโน้ตบุ้คสักตัว
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          ตำแหน่งที่ตั้งของแหล่งเรียนรู้เอง
          <br className="sm:hidden block" />
          ก็มีผลกับการเข้าใช้งานของกลุ่ม
          <br className="sm:hidden block" />
          ต่างๆ
          <br className="hidden sm:block" />
          เป็นอย่างมาก เช่น พื้นที่
          <br className="sm:hidden block" />
          การเรียนรู้ที่อยู่ใกล้โรงเรียนจะมี
          <br className="sm:hidden block" />
          นักเรียน นักศึกษา
          <br className="hidden sm:block" />
          เข้ามาใช้งาน
          <br className="sm:hidden block" />
          มากเป็นพิเศษ หรือผู้ปกครอง
          <br className="sm:hidden block" />
          จะเข้ามาใช้งานก่อนเวลาลูกหลาน
          <br className="sm:hidden block" />
          เลิกเรียน ส่วนพื้นที่การเรียนรู้
          <br className="sm:hidden block" />
          ที่อยู่ใกล้กับพื้นที่ชุมชน ขาประจำ
          <br className="sm:hidden block" />
          คือกลุ่มผู้สูงอายุที่เข้ามาใช้งาน
          <br className="sm:hidden block" />
          ช่วงสายจนถึงเที่ยงในวันธรรมดา <br className="sm:hidden block" />
          และมีผู้ใช้บริการทั่วไปจำนวนมาก
          <br className="sm:hidden block" />
          ในวันหยุด
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
              เด็กเล็กคือตัวละครหลัก <br className="sm:hidden block" />
              ไม่ว่าพวกเขาจะอยากทำกิจกรรม
              <br className="sm:hidden block" />
              อะไร เช่น วาดรูประบายสี <br className="sm:hidden block" />
              อ่านนิทาน คลาน เล่นของเล่น
              <br className="sm:hidden block" />
              เสริมทักษะ ปีนป่ายในพื้นที่ที่
              <br />
              ถูกออกแบบไว้ พ่อแม่อาจจะร่วมทำ
              <br className="sm:hidden block" />
              กิจกรรมด้วยหรืออ่านหนังสือ <br className="sm:hidden block" />
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
              ชุดการเรียนรู้ Toy Library <br className="sm:hidden block" />
              ในห้องเด็ก ประกอบไปด้วย
              <br className="sm:hidden block" />
              หนังสือ 1 เล่มที่
              <br className="hidden sm:block" />
              คัดสรรโดย
              <br className="sm:hidden block" />
              บรรณารักษ์ของห้องสมุดเด็ก <br className="sm:hidden block" />
              TK Park และของเล่นไม้
              <br />
              เสริมทักษะ 1 ชุดจากบริษัท
              <br className="sm:hidden block" />
              แปลนทอยส์
            </p>
            <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border border-[#D9D9D9]">
              ชุดการเรียนรู้ Sort&Count <br className="sm:hidden block" />
              Trees จากหนังสือเรื่อง <br className="sm:hidden block" />
              “แตะต้นไม้วิเศษ” และชุด
              <br className="sm:hidden block" />
              ของเล่นที่ประกอบด้วยฐาน
              <br className="sm:hidden block" />
              พร้อมเสา 4 ต้น พุ่มไม้ 10 พุ่ม <br className="sm:hidden block" />
              เพื่อ
              <br className="hidden sm:block" />
              ฝึกนับเลขและ
              <br className="sm:hidden block" />
              จำแนกสีผ่านต้นไม้ในฤดูกาล
              <br className="sm:hidden block" />
              ต่างๆ และช่วยเสริมสร้าง
              <br />
              กล้ามเนื้อมัดเล็ก ความ
              <br className="sm:hidden block" />
              สัมพันธ์ของมือและสายตา
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
              ถ้านึกถึงห้องสมุดก็มักจะนึกถึง
              <br className="sm:hidden block" />
              กลุ่มนักเรียน ก่อนเป็นอันดับแรก <br className="sm:hidden block" />
              พวกเขามักจะพากันมาใช้พื้นที่
              <br className="sm:hidden block" />
              ห้องสมุดแบบเป็นแก๊งเพื่อ
              <br className="sm:hidden block" />
              อ่านหนังสือ ทำรายงาน พักผ่อน <br className="sm:hidden block" />
              หรือใช้คอมพิวเตอร์เพื่อทำงาน
              <br className="sm:hidden block" />
              หรือรอผู้ปกครองมารับในช่วง
              <br className="sm:hidden block" />
              เวลา
              <br className="hidden sm:block" />
              หลังเลิกเรียน หรือวันหยุด
              <br className="sm:hidden block" />
              โดยไม่ต้อง
              <br className="hidden sm:block" />
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
              <b>
                สร้างฝันสร้างคิดส์ อุทยาน
                <br className="sm:hidden block" />
                การเรียนรู้แม่ฮ่องสอน
              </b>{" "}
              จังหวัดแม่ฮ่องสอนมีชาว
              <br className="sm:hidden block" />
              ชาติพันธุ์หลายกลุ่มอาศัยอยู่ <br className="sm:hidden block" />
              อุทยานจึงจัดกิจกรรมน่ารู้
              <br className="sm:hidden block" />
              ด้านภาษา เช่น ภาษาไทใหญ่ <br className="sm:hidden block" />
              ภาษากะเหรี่ยง เด็กๆ จะได้
              <br className="sm:hidden block" />
              เรียนรู้ว่าจังหวัดของตัวเอง
              <br className="sm:hidden block" />
              มีความหลากหลายทางภาษา
              <br className="sm:hidden block" />
              และเรียนรู้มนุษย์ไปด้วย
            </p>
            <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border-x border-t border-[#D9D9D9]">
              <b>
                มุมบันไดนักอ่าน อุทยาน
                <br className="sm:hidden block" />
                การเรียนรู้เมืองนครราชสีมา
              </b>{" "}
              หนังสือและนิยายจำนวนมาก
              <br className="sm:hidden block" />
              ทำให้มุมนี้กลายเป็นมุม
              <br className="sm:hidden block" />
              ยอดฮิตของกลุ่มเด็ก และ
              <br className="sm:hidden block" />
              วัยรุ่น แถม
              <br className="hidden sm:block" />
              ยังมีบริการโต๊ะพับ
              <br className="sm:hidden block" />
              และเบาะที่เด็กๆ สามารถหยิบ
              <br className="sm:hidden block" />
              ไปใช้เองได้หากที่นั่งไม่
              <br className="sm:hidden block" />
              เพียงพออีกด้วย
            </p>
            <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border border-[#D9D9D9]">
              <b>
                ศูนย์วิทยาศาสตร์พื้นฐาน <br className="sm:hidden block" />
                อุทยานการเรียนรู้ปัตตานี
              </b>{" "}
              เด็กๆ ใน 3 จังหวัดชายแดน
              <br className="sm:hidden block" />
              ภาคใต้ได้เข้าถึงสื่อการเรียนรู้
              <br className="sm:hidden block" />
              วิทยาศาสตร์ ทดลองเล่น <br className="sm:hidden block" />
              ทดลองทำโดยใช้อุปกรณ์
              <br className="sm:hidden block" />
              ทางวิทยาศาสตร์ที่เตรียม
              <br className="sm:hidden block" />
              ไว้ให้เล่นสนุก
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
              กลุ่มนี้มีความต้องการในการ
              <br className="sm:hidden block" />
              ใช้งานที่ <br className="hidden sm:block" />
              หลากหลาย ไม่ว่าจะ
              <br className="sm:hidden block" />
              เป็นการอ่านหนังสือวิชาการ <br className="sm:hidden block" />
              ทำรายงาน ใช้คอมพิวเตอร์
              <br className="sm:hidden block" />
              เพื่อเรียน เล่น หรือใช้ห้องสมุด
              <br className="sm:hidden block" />
              เพื่อพักใจ นอนเล่น
              <br className="hidden sm:block" />
              คุยแลก
              <br className="sm:hidden block" />
              เปลี่ยน หรือซ้อมการแสดง <br className="sm:hidden block" />
              จึงต้องการลักษณะของพื้นที่
              <br className="sm:hidden block" />
              หลายระดับ ตั้งแต่ระดับที่เงียบ
              <br className="sm:hidden block" />
              สงบไปจนถึงพื้นที่ที่อนุญาต
              <br className="sm:hidden block" />
              ให้ใช้เสียง <br className="hidden sm:block" />
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
                  เด็กๆ เรียนรู้และเล่นสนุก <br className="sm:hidden block" />
                  ผ่านบอร์ดเกม ซึ่งเป็นสื่อ
                  <br className="sm:hidden block" />
                  การเรียนรู้ เพื่อพัฒนาทักษะ
                  <br className="sm:hidden block" />
                  ชีวิตผ่านการสร้างเรื่องราว
                  <br className="sm:hidden block" />
                  และประสบการณ์ต่างๆ <br className="sm:hidden block" />
                  พวกเขาจะได้คิดวิเคราะห์ <br className="sm:hidden block" />
                  สวมบทบาทเป็นตัวละคร <br className="sm:hidden block" />
                  และได้โอกาสสร้างมนุษย
                  <br className="sm:hidden block" />
                  สัมพันธ์
                  <br className="hidden sm:block" />
                  กับผู้อื่น
                </p>
              </div>
              <div>
                <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
                  เครือข่าย TK Park
                </p>
                <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border-y border-r border-[#D9D9D9]">
                  ห้องสมุดดนตรี (Sound <br className="sm:hidden block" />
                  Studio) ศูนย์การเรียนรู้เมือง
                  <br className="sm:hidden block" />
                  ฉะเชิงเทรา เดิมทีห้องสมุดนี้
                  <br className="sm:hidden block" />
                  เป็นห้องสมุดดนตรีเดิม
                  <br className="sm:hidden block" />
                  อยู่แล้ว แต่ปรับปรุงกระจกเงา
                  <br className="sm:hidden block" />
                  ให้ใหญ่ขึ้นจนเหมือนห้อง
                  <br className="sm:hidden block" />
                  ซ้อมเต้น ใครอยากมาฝึกเต้น
                  <br className="sm:hidden block" />
                  คัฟเวอร์ เต้นลีลาศ
                  <br className="sm:hidden block" />
                  เพื่อสุขภาพ หรืออัดวิดิโอ
                  <br className="sm:hidden block" />
                  เพื่อส่งประกวดก็ได้
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
              อีกหนึ่งกลุ่มที่ใช้งานพื้นที่ทั้งแบบ
              <br className="sm:hidden block" />
              เดี่ยวและกลุ่ม พวกเขาอาจจะเข้า
              <br className="sm:hidden block" />
              มาทำกิจกรรมจริงจัง เช่น ทำงาน
              <br className="sm:hidden block" />
              เงียบๆ ประชุมงานออนไลน์ <br /> ฝึกทักษะบางอย่าง หรือแค่มานั่ง
              <br className="sm:hidden block" />
              อ่านหนังสือเฉยๆ รอรับบุตรหลาน <br className="sm:hidden block" />
              พูดคุยสัพเพเหระ ซึ่งโดยมากแล้ว
              <br className="sm:hidden block" />
              จะมาแช่ตัวอยู่ในพื้นที่ค่อนข้าง
              <br className="sm:hidden block" />
              นานและต่อเนื่อง ในช่วงวันหยุด
              <br className="sm:hidden block" />
              สุดสัปดาห์
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
                  พื้นที่นั่งทำงานเป็นพื้นที่
                  <br className="sm:hidden block" />
                  ที่ดู
                  <br className="hidden sm:block" />
                  พื้นฐานที่สุด แต่ต้อง
                  <br className="sm:hidden block" />
                  อาศัยความละเอียดใน
                  <br className="sm:hidden block" />
                  การออกแบบ เพราะปัจจุบัน
                  <br className="sm:hidden block" />
                  พฤติกรรมในการทำงาน
                  <br className="sm:hidden block" />
                  นอกสถานที่ของผู้ใช้บริการ
                  <br className="sm:hidden block" />
                  เติบโตไปตามยุคสมัย เช่น <br className="sm:hidden block" />
                  บางกลุ่มอาจพกคอมพิวเตอร์
                  <br className="sm:hidden block" />
                  ของตัวเองมา <br className="hidden sm:block" />
                  ดังนั้นแทนที่
                  <br className="sm:hidden block" />
                  จะจัดเตรียมอุปกรณ์
                  <br className="sm:hidden block" />
                  อิเล็กทรอนิกส์ไว้บริการ <br className="sm:hidden block" />
                  หน่วยงานควรจัดพื้นที่และ
                  <br className="sm:hidden block" />
                  บรรยากาศให้เหมาะสม
                  <br className="sm:hidden block" />
                  มากกว่า ตั้งแต่บรรยากาศ
                  <br className="sm:hidden block" />
                  สบายๆ แบบห้องสมุด
                  <br className="hidden sm:block" />
                  มีชีวิต ไปจนถึงห้องเงียบซึ่งเป็น
                  <br className="sm:hidden block" />
                  พื้นที่ทำงานจริงจังของ
                  <br className="sm:hidden block" />
                  ผู้ที่ต้องการความสงบ
                  <br className="sm:hidden block" />
                  และใช้สมาธิในการทำงาน <br className="sm:hidden block" />
                  หรือการอ่านอย่าง
                  <br className="hidden sm:block" />
                  เต็มที่
                </p>
              </div>
              <div className="flex-1">
                <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
                  เครือข่าย TK Park
                </p>
                <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border-y border-r border-[#D9D9D9]">
                  โครงการนี้เกิดจากการ
                  <br className="sm:hidden block" />
                  แก้ปัญหา ของวิถีชีวิตของ
                  <br className="sm:hidden block" />
                  คนระยอง เพราะ
                  <br className="hidden sm:block" />
                  ที่นี่มีนิคม
                  <br className="sm:hidden block" />
                  อุตสาหกรรมและพนักงาน
                  <br className="sm:hidden block" />
                  จำนวนมาก ซึ่งทำงานเป็นกะ <br className="sm:hidden block" />
                  ดังนั้นจึงไม่สะดวกที่จะ <br />
                  เดินทางเข้าห้องสมุดในเวลา
                  <br className="sm:hidden block" />
                  ทำการ โครงการหนังสือ
                  <br className="sm:hidden block" />
                  มือถือจึงเป็นโครงการที่นำ
                  <br className="sm:hidden block" />
                  หนังสือเดินทางไปสู่มือของ
                  <br className="sm:hidden block" />
                  คนทำงานอย่างทั่วถึงมากขึ้น
                  <br className="sm:hidden block" />
                  ผ่านการยืม-คืน โดยห้องสมุด
                  <br className="sm:hidden block" />
                  จะจัดกล่องหนังสือไปตั้งไว้ที่
                  <br className="sm:hidden block" />
                  บริษัทครั้งละ 30-60 เล่ม/
                  <br className="sm:hidden block" />2 เดือน
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
              พวกเขาพูดคุยพบปะสื่อสารกัน
              <br className="sm:hidden block" />
              ที่ไหน ที่นั่นคือห้องสมุดใกล้บ้าน
              <br className="sm:hidden block" />
              ที่แทบจะเป็นบ้านหลังที่สอง <br className="sm:hidden block" />
              หรือสโมสรสูงวัยของคนบางคน
              <br />
              <br />
              กลุ่มที่มาใช้บริการเป็นประจำ
              <br className="sm:hidden block" />
              จะรู้สึกเสมือนเป็น เจ้าของพื้นที่{" "}
              <br className="sm:hidden block" />
              พวกเขามักจะมาใช้บริการใน
              <br />
              ช่วงสายจนถึงเที่ยงในช่วง
              <br className="sm:hidden block" />
              วันธรรมดาและ
              <br className="hidden sm:block" />
              วันหยุด <br className="sm:hidden block" />
              เราอาจจะเห็นคุณตาคุณยาย
              <br className="sm:hidden block" />
              ที่ชอบอ่านหนังสือพิมพ์ นิตยสาร <br className="sm:hidden block" />
              หรือทำกิจกรรม
              <br className="hidden sm:block" />
              เพื่อฝึกทักษะ <br className="sm:hidden block" />
              เช่น เล่นหมากกระดาน เต้นรำ
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
                  ดิจิทัล ไกด์ (Digital Guide){" "}
                  <br className="sm:hidden block" />
                  กิจกรรมฝึกทักษะดิจิทัล
                  <br className="sm:hidden block" />
                  พื้นฐาน เพื่อชีวิตประจำวัน
                  <br className="sm:hidden block" />
                  หรือกิจกรรมยามว่างที่ใช้
                  <br className="sm:hidden block" />
                  วิธีการสอนผ่านไลน์กลุ่ม
                </p>
              </div>
              <div className="flex-1">
                <p className="font-th desktop-s6-th-700 text-white py-1 px-2.5 bg-tk-red w-fit">
                  เครือข่าย TK Park
                </p>
                <p className="font-th desktop-s6-th-400 text-tk-black py-2.5 px-3.5 bg-yellow-700 border-y border-r border-[#D9D9D9]">
                  กิจกรรมส่งเสริมการเรียนรู้
                  <br className="sm:hidden block" />
                  ของ
                  <br className="hidden sm:block" />
                  ผู้สูงอายุ ศูนย์การเรียนรู้ <br className="sm:hidden block" />
                  ฉะเชิงเทรา ผู้สูงวัยจะได้
                  <br className="sm:hidden block" />
                  ทั้งเรียนรู้และเสริมสุขภาพ <br className="sm:hidden block" />
                  เช่น เต้นลีลาศ KCC สูงวัย
                  <br className="sm:hidden block" />
                  โอเกะ หรือโรงเรียน
                  <br className="hidden sm:block" />
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
