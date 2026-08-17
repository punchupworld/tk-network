"use client";
import type { CSSProperties } from "react";
import { T06 } from "@/src/components/icons/topics";
import SpaceTypeBlock, { TRAP_H } from "./SpaceTypeBlock";
import HoverSpaceGrid, { SidePanel } from "./HoverSpaceGrid";

const IconBox = ({
  stroke,
  className,
}: {
  stroke: string;
  className: string;
}) => {
  return (
    <svg
      width="170"
      height="170"
      viewBox="0 0 170 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M164.626 74.4416L95.5579 5.37336C89.7271 -0.457785 80.273 -0.457785 74.4415 5.37336L5.37336 74.4416C-0.457786 80.273 -0.457786 89.7272 5.37336 95.5579L74.4415 164.626C80.273 170.458 89.7271 170.458 95.5579 164.626L164.626 95.5579C170.458 89.7272 170.458 80.273 164.626 74.4416Z"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
};

const ToolBox = ({ fill = "#D95243" }: { fill?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10.5H2V2H11V6H12V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V10.5C1 10.7652 1.10536 11.0196 1.29289 11.2071C1.48043 11.3946 1.73478 11.5 2 11.5H6V10.5Z"
        fill={fill}
      />
      <path
        d="M15 14.29L13.445 12.735C13.8803 12.1217 14.0694 11.3674 13.9748 10.6213C13.8802 9.87521 13.5088 9.19188 12.9343 8.70664C12.3597 8.2214 11.6239 7.96964 10.8725 8.00124C10.1212 8.03285 9.40905 8.3455 8.87727 8.87727C8.3455 9.40905 8.03285 10.1212 8.00124 10.8725C7.96964 11.6239 8.2214 12.3597 8.70664 12.9343C9.19188 13.5088 9.87521 13.8802 10.6213 13.9748C11.3674 14.0694 12.1217 13.8803 12.735 13.445L14.29 15L15 14.29ZM11 13C10.6044 13 10.2178 12.8827 9.88886 12.6629C9.55996 12.4432 9.30362 12.1308 9.15224 11.7654C9.00087 11.3999 8.96126 10.9978 9.03843 10.6098C9.1156 10.2219 9.30608 9.86549 9.58579 9.58579C9.86549 9.30608 10.2219 9.1156 10.6098 9.03843C10.9978 8.96126 11.3999 9.00087 11.7654 9.15224C12.1308 9.30362 12.4432 9.55996 12.6629 9.88886C12.8827 10.2178 13 10.6044 13 11C13 11.5304 12.7893 12.0391 12.4142 12.4142C12.0391 12.7893 11.5304 13 11 13Z"
        fill={fill}
      />
    </svg>
  );
};

const ShapeBoxOne = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.0006 31.3606H29.0006C28.8016 31.3606 28.6406 31.1996 28.6406 31.0006V30.3606H3.36062V31.0006C3.36062 31.1996 3.19963 31.3606 3.00063 31.3606H1.00063C0.801625 31.3606 0.640625 31.1996 0.640625 31.0006V29.0006C0.640625 28.8016 0.801625 28.6406 1.00063 28.6406H1.64062V3.36062H1.00063C0.801625 3.36062 0.640625 3.19963 0.640625 3.00063V1.00063C0.640625 0.801625 0.801625 0.640625 1.00063 0.640625H3.00063C3.19963 0.640625 3.36062 0.801625 3.36062 1.00063V1.64062H28.6406V1.00063C28.6406 0.801625 28.8016 0.640625 29.0006 0.640625H31.0006C31.1996 0.640625 31.3606 0.801625 31.3606 1.00063V3.00063C31.3606 3.19963 31.1996 3.36062 31.0006 3.36062H30.3606V28.6406H31.0006C31.1996 28.6406 31.3606 28.8016 31.3606 29.0006V31.0006C31.3606 31.1996 31.1996 31.3606 31.0006 31.3606ZM29.3606 30.6406H30.6396V29.3606H29.3606V30.6406ZM1.36063 30.6406H2.64062V29.3606H1.36063V30.6406ZM3.36062 29.6406H28.6406V29.0006C28.6406 28.8016 28.8016 28.6406 29.0006 28.6406H29.6406V3.36062H29.0006C28.8016 3.36062 28.6406 3.19963 28.6406 3.00063V2.36062H3.36062V3.00063C3.36062 3.19963 3.19963 3.36062 3.00063 3.36062H2.36062V28.6406H3.00063C3.19963 28.6406 3.36062 28.8016 3.36062 29.0006V29.6406ZM29.3606 2.64062H30.6396V1.36063H29.3606V2.64062ZM1.36063 2.64062H2.64062V1.36063H1.36063V2.64062ZM19.0006 27.3606H13.0006C12.8016 27.3606 12.6406 27.1996 12.6406 27.0006V25.0596L9.65963 16.1146C9.62963 16.0246 9.63662 15.9256 9.67962 15.8396L15.6776 3.84363C15.7236 3.74863 15.8106 3.67663 15.9186 3.65063C16.0796 3.61163 16.2486 3.69062 16.3226 3.83962L22.3226 15.8396C22.3646 15.9246 22.3726 16.0246 22.3426 16.1146L19.3616 25.0596V27.0006C19.3606 27.1996 19.1996 27.3606 19.0006 27.3606ZM13.3606 26.6406H18.6406V25.3606H13.3606V26.6406ZM13.2596 24.6406H18.7406L21.6116 16.0286L16.3606 5.52563V14.6836C16.9396 14.8426 17.3656 15.3726 17.3656 16.0006C17.3656 16.7526 16.7526 17.3656 16.0006 17.3656C15.2486 17.3656 14.6356 16.7526 14.6356 16.0006C14.6356 15.3726 15.0616 14.8426 15.6406 14.6836V5.52563L10.3896 16.0286L13.2596 24.6406ZM16.0006 15.3556C15.6456 15.3556 15.3556 15.6456 15.3556 16.0006C15.3556 16.3556 15.6456 16.6456 16.0006 16.6456C16.3556 16.6456 16.6456 16.3556 16.6456 16.0006C16.6456 15.6456 16.3556 15.3556 16.0006 15.3556Z"
        fill="#D95243"
      />
    </svg>
  );
};

const ShapeBoxTwo = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0006 31.3606H5.00063C4.80163 31.3606 4.64062 31.1996 4.64062 31.0006V1.00063C4.64062 0.801625 4.80163 0.640625 5.00063 0.640625H15.0006C15.1996 0.640625 15.3606 0.801625 15.3606 1.00063V4.55963L27.3116 24.8186C27.3596 24.9006 27.3736 24.9996 27.3496 25.0916C27.3256 25.1836 27.2656 25.2626 27.1836 25.3116L21.3106 28.7566L21.3496 28.9116C21.3986 29.1036 21.2836 29.2996 21.0906 29.3496L15.3606 30.8226V31.0006C15.3606 31.1996 15.1996 31.3606 15.0006 31.3606ZM5.36063 30.6406H14.6406V25.3606H5.36063V30.6406ZM15.3606 8.21962V30.0786L20.5636 28.7406L15.3606 8.21962ZM15.6656 6.49363L21.1256 28.0286L26.5076 24.8726L15.6656 6.49363ZM5.36063 24.6406H14.6406V19.3606H5.36063V24.6406ZM5.36063 18.6406H14.6406V13.3606H5.36063V18.6406ZM5.36063 12.6406H14.6406V1.36063H5.36063V12.6406ZM10.0006 8.36062C9.25063 8.36062 8.64063 7.75063 8.64063 7.00063C8.64063 6.25063 9.25063 5.64062 10.0006 5.64062C10.7506 5.64062 11.3606 6.25063 11.3606 7.00063C11.3606 7.75063 10.7506 8.36062 10.0006 8.36062ZM10.0006 6.36063C9.64762 6.36063 9.36062 6.64762 9.36062 7.00063C9.36062 7.35363 9.64762 7.64062 10.0006 7.64062C10.3536 7.64062 10.6406 7.35363 10.6406 7.00063C10.6406 6.64762 10.3536 6.36063 10.0006 6.36063Z"
        fill="#D95243"
      />
    </svg>
  );
};

const ShapeBoxThree = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" fill="white" fillOpacity="0.01" />
      <path
        d="M6.00062 30.3606C4.69962 30.3606 3.64062 29.3016 3.64062 28.0006C3.64062 26.8216 4.50962 25.8416 5.64062 25.6676V18.3606H4.00062C3.80162 18.3606 3.64062 18.1996 3.64062 18.0006V14.0006C3.64062 13.8016 3.80162 13.6406 4.00062 13.6406H5.64062V6.33363C4.50962 6.15963 3.64062 5.17963 3.64062 4.00063C3.64062 2.69963 4.69962 1.64062 6.00062 1.64062C7.30162 1.64062 8.36062 2.69963 8.36062 4.00063C8.36062 5.17963 7.49163 6.15963 6.36063 6.33363V11.6736C8.18463 6.39162 13.2626 2.64063 19.0006 2.64063C20.7596 2.64063 22.4646 2.97563 24.0746 3.63763C24.5026 3.03463 25.2066 2.64063 26.0006 2.64063C27.3026 2.64063 28.3606 3.69963 28.3606 5.00063C28.3606 6.30163 27.3026 7.36063 26.0006 7.36063C24.6986 7.36063 23.6406 6.30163 23.6406 5.00063C23.6406 4.75063 23.6796 4.50963 23.7516 4.28363C22.2426 3.67063 20.6466 3.36062 19.0006 3.36062C12.9616 3.36062 7.69662 7.75163 6.58062 13.6406H8.00062C8.19962 13.6406 8.36062 13.8016 8.36062 14.0006V18.0006C8.36062 18.1996 8.19962 18.3606 8.00062 18.3606H6.58062C7.69562 24.2496 12.9616 28.6406 19.0006 28.6406C20.6466 28.6406 22.2436 28.3296 23.7516 27.7176C23.6796 27.4906 23.6406 27.2506 23.6406 27.0006C23.6406 25.6986 24.6996 24.6406 26.0006 24.6406C27.3016 24.6406 28.3606 25.6996 28.3606 27.0006C28.3606 28.3016 27.3016 29.3606 26.0006 29.3606C25.2066 29.3606 24.5026 28.9656 24.0746 28.3626C22.4656 29.0246 20.7606 29.3606 19.0006 29.3606C13.2616 29.3606 8.18463 25.6096 6.36063 20.3276V25.6676C7.49163 25.8416 8.36062 26.8216 8.36062 28.0006C8.36062 29.3026 7.30162 30.3606 6.00062 30.3606ZM6.00062 26.3606C5.09662 26.3606 4.36063 27.0956 4.36063 28.0006C4.36063 28.9056 5.09662 29.6406 6.00062 29.6406C6.90462 29.6406 7.64062 28.9046 7.64062 28.0006C7.64062 27.0966 6.90462 26.3606 6.00062 26.3606ZM26.0006 25.3606C25.0966 25.3606 24.3606 26.0956 24.3606 27.0006C24.3606 27.9056 25.0956 28.6406 26.0006 28.6406C26.9056 28.6406 27.6406 27.9056 27.6406 27.0006C27.6406 26.0956 26.9046 25.3606 26.0006 25.3606ZM4.36063 17.6406H7.64062V14.3606H4.36063V17.6406ZM26.0006 3.36062C25.0966 3.36062 24.3606 4.09663 24.3606 5.00063C24.3606 5.90462 25.0966 6.64062 26.0006 6.64062C26.9046 6.64062 27.6406 5.90462 27.6406 5.00063C27.6406 4.09663 26.9046 3.36062 26.0006 3.36062ZM6.00062 2.36062C5.09662 2.36062 4.36063 3.09663 4.36063 4.00063C4.36063 4.90463 5.09662 5.64062 6.00062 5.64062C6.90462 5.64062 7.64062 4.90463 7.64062 4.00063C7.64062 3.09663 6.90462 2.36062 6.00062 2.36062Z"
        fill="#D95243"
      />
    </svg>
  );
};

const SubSectionTwo = () => {
  return (
    <div className="flex w-full max-w-[730px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center max-w-[600px]">
        <T06
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          แนวทาง
          <br />
          การบริหาร
          <br />
          จัดการ
          <br />
          พื้นที่เรียนรู้
        </p>
      </div>

      <div
        className="flex items-start md:flex-row flex-col max-w-[600px]"
        id="subsubtopic9"
      >
        <div className=" p-5 md:border-y-2 border-l-2 border-t-2 md:border-r-0 border-r-2 border-white bg-red-300">
          <div className="flex items-center justify-center">
            <p className="font-th desktop-s6-th-400 text-tk-black">
              <b>
                พื้นที่การเรียนรู้ ที่มีผู้ใช้งานหลากหลาย ไม่ว่าจะเป็นเด็ก
                เยาวชน นักเรียน นักศึกษา ผู้สูงอายุ
              </b>
              <br />
              ควรคำนึงถึง 3 องค์ประกอบหลัก ในการออกแบบ ดังนี้
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-50 flex flex-col items-start justify-start gap-2.5 md:w-100 shrink-0 w-full">
          <div className="flex gap-2.5 items-center justify-center">
            <div className="p-3 rounded-[10px] bg-white">
              <ShapeBoxOne />
            </div>
            <div className="px-3.5 py-0.5 rounded-[5px] bg-white">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                <b>ยึดผู้ใช้เป็นศูนย์กลาง</b>
                <br />
                (User-centered Design)
              </p>
            </div>
            <ToolBox />
          </div>
          <div className="flex gap-2.5 items-center justify-center">
            <div className="p-3 rounded-[10px] bg-white">
              <ShapeBoxTwo />
            </div>
            <div className="px-3.5 py-0.5 rounded-[5px] bg-white">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                <b>รองรับการเรียนรู้ที่หลากหลาย</b>
                <br />
                (Learning Diversity)
              </p>
            </div>
            <ToolBox />
          </div>
          <div className="flex gap-2.5 items-center justify-center">
            <div className="p-3 rounded-[10px] bg-white">
              <ShapeBoxThree />
            </div>
            <div className="px-3.5 py-0.5 rounded-[5px] bg-white">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                <b>ปรับเปลี่ยนอย่างยืดหยุ่น</b>
                <br />
                (Flexible Space)
              </p>
            </div>
            <ToolBox />
          </div>
        </div>
      </div>

      <div className="flex items-start md:flex-row flex-col max-w-[600px]">
        <div className="p-5 md:border-y-2 border-l-2 border-t-2 md:border-r-0 border-r-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              หน่วยงาน <br />
              เจ้าภาพ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            บรรยากาศและสภาพแวดล้อมที่ดีสามารถ
            ส่งเสริมการเรียนรู้ได้อย่างเป็นธรรมชาติ
          </p>
        </div>
      </div>

      <div className="@container relative w-full" id="subsubtopic10">
        <div className="sticky top-0 z-0 flex h-dvh w-full items-center">
          <div className="mx-auto relative flex w-[442px] h-[459px] items-center justify-center overflow-hidden border-2 border-[#f5333f] bg-white">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f5f5f5 2px, transparent 2px), linear-gradient(to bottom, #f5f5f5 2px, transparent 2px)",
                backgroundSize: "9.09% 8.33%",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center p-5 text-center text-[#f5333f]">
              <p className="font-th desktop-s5-th-400">
                พื้นที่การเรียนรู้
                <br />
                สามารถจัดแบ่งออกเป็น
              </p>
              <p className="font-th desktop-s4-th-700">5 ประเภท</p>
            </div>
          </div>
        </div>

        <div
          className="relative z-10 flex w-full flex-col items-center gap-50"
          style={
            {
              "--card-h": "459px",
              "--trap-h": `${TRAP_H}px`,
              "--img-h": "151px",
              "--red-h": "max(180px, calc((var(--card-h) - 4px) / 2))",
              "--stack-top": "calc((100dvh - var(--card-h)) / 2)",
            } as CSSProperties
          }
        >
          <SpaceTypeBlock
            number="1"
            layer={1}
            title="พื้นที่สตูดิโอ"
            english="Studio Area"
            accent="#F5333F"
            tags={[
              { label: "กิจกรรม" },
              { label: "อ่านหนังสือเป็นกลุ่มเพื่อติวสอบ" },
              { label: "ห้องประชุมออนไลน์" },
              { label: "เสวนาสมาคม" },
              { label: "กิจกรรมเข้าจังหวะ" },
              { label: "ฝึกดนตรี" },
            ]}
            image={{
              src: "/img/s03/space/cover-1.png",
              alt: "พื้นที่สตูดิโอ",
              flip: "rotate",
            }}
          >
            <p>
              หน่วยงานสามารถออกแบบให้พื้นที่เป็นห้องปิดสำหรับทำกิจกรรม
              กลุ่มส่วนตัว และเป็นสัดส่วนอย่างชัดเจน
            </p>
            <p>
              ผู้ใช้บริการจึงสามารถใช้งานได้โดยไม่รบกวนคนที่อยู่ในบริเวณใกล้เคียง
              (เนื่องจากมีการใช้งานร่วมกับพื้นที่อื่นค่อนข้างน้อย)
              และออกแบบให้มีความยืดหยุ่นต่อการใช้งานสำหรับกิจกรรมต่างๆ
              โดยสามารถปรับผังเฟอร์นิเจอร์ ติดตั้งและจัดเก็บอุปกรณ์ได้สะดวก
            </p>
          </SpaceTypeBlock>

          <SpaceTypeBlock
            number="2"
            layer={2}
            title="พื้นที่แบ่งปันนั่งทำงาน"
            english="Co-working Area"
            accent="#5B73ED"
            tags={[
              { label: "กิจกรรม" },
              { label: "อ่านไปงีบไป", highlight: true },
              { label: "กักตัวอ่านคนเดียว" },
              { label: "นั่งเครียดทำการบ้าน" },
              { label: "อินนิยายการ์ตูน" },
            ]}
            image={{
              src: "/img/s03/space/cover-2.png",
              alt: "พื้นที่แบ่งปันนั่งทำงาน",
              flip: "scaleY",
            }}
          >
            <p className="font-th desktop-s7-th-700">
              หัวใจสำคัญคือการใช้งานพื้นที่ร่วมกันของผู้ใช้บริการ
              ส่วนใหญ่แล้วกิจกรรมในพื้นที่นี้เป็นกิจกรรมที่ต้องใช้สมาธิ
              มีระยะเวลานานและต่อเนื่อง
            </p>
            <p>
              หน่วยงานสามารถออกแบบให้พื้นที่อยู่ห่างจากเส้นทางสัญจรหลัก
              หรือพื้นที่กิจกรรมที่ส่งเสียงรบกวน ควรใช้ผังแบบเปิด (opened plan)
              ซึ่งเป็นพื้นที่ในลักษณะเปิดโล่ง ไม่มีผนังทั่วทั้งพื้นที่
              หากมีพื้นที่ค่อนข้างใหญ่
              ควรแบ่งเป็นพื้นที่ย่อยเพื่อความสะดวกในการใช้งานและบริหารจัดการ
            </p>
          </SpaceTypeBlock>

          <SpaceTypeBlock
            number="3"
            layer={3}
            title="พื้นที่ผ่อนคลายเป็นกันเอง"
            english="Friendly comfort Area"
            accent="#FF7CAE"
            tags={[
              { label: "กิจกรรม" },
              { label: "เรียนออนไลน์" },
              { label: "คิดงานสร้างสรรค์" },
              { label: "เล่นบอร์ดเกม" },
              { label: "คุยเข้มสภากาแฟ" },
              { label: "เด็กน้อยนั่งเล่น" },
            ]}
            image={{
              src: "/img/s03/space/cover-3.png",
              alt: "พื้นที่ผ่อนคลายเป็นกันเอง",
              flip: "rotate",
            }}
          >
            <p>
              พื้นที่นี้รับรองการใช้งานที่หลากหลายจากผู้ใช้บริการทุกกลุ่ม
              ดังนั้นการจัดพื้นที่ควรเป็นพื้นที่ย่อยหลายรูปแบบ เช่น
              จัดมุมหนังสือ มุมเด็กเล็ก มุมพูดคุยผ่อนคลาย
              และเข้าถึงง่ายทั้งจากภายนอก และพื้นที่อื่น
              บรรยากาศโดยรวมควรมีความคึกคักและมีชีวิตชีวา
              เห็นการเรียนรู้ที่หลากหลาย และความเคลื่อนไหวของผู้ใช้บริการ
              ไม่ว่าจะเป็นกลุ่มครอบครัว เด็กเล็ก หรือผู้สูงอายุ
            </p>
          </SpaceTypeBlock>

          <SpaceTypeBlock
            number="4"
            layer={4}
            title="พื้นที่สะดวก กิจกรรมสบาย"
            english="Chilling out Area"
            accent="#FFE150"
            darkLabel
            tags={[
              { label: "กิจกรรม" },
              { label: "อ่านไปงีบไป", highlight: true },
              { label: "คุยง่ายเคล้าเสียงดนตรี" },
              { label: "คิดงานสร้างสรรค์สบายๆ" },
              { label: "เวิร์กช็อปหลากหลาย" },
              { label: "ฝึกดนตรี" },
              { label: "ชมนิทรรศการ" },
              { label: "เล่นมือถือรอคนมารับ" },
              { label: "อุดหนุนร้านค้าสวัสดิการ" },
              { label: "ร่วมกิจกรรมกับชุมชน" },
            ]}
            image={{
              src: "/img/s03/space/cover-4.png",
              alt: "พื้นที่สะดวก กิจกรรมสบาย",
              flip: "scaleY",
            }}
          >
            <p>
              พื้นที่ต้อนรับที่ควรออกแบบให้มีบรรยากาศที่เป็นมิตร
              สร้างความรู้สึกเป็นกันเองให้ผู้ใช้บริการ
              อยู่ในตำแหน่งที่เข้าถึงง่ายจากภายนอก
              โดยให้พื้นที่บางส่วนอยู่บริเวณกึ่งภายนอกอาคาร
              ผู้ใช้บริการที่ไม่ได้เป็นสมาชิกของห้องสมุดอาจเข้ามาใช้บริการบางส่วนได้
            </p>
          </SpaceTypeBlock>

          <div className="relative w-full" style={{ zIndex: 45 }}>
            <div className="mx-auto sticky z-30 flex h-[459px] w-[442px] flex-col gap-5 overflow-y-auto border-2 border-white bg-[#5B73ED] p-7">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[5px] border border-white">
                  <p className="font-th desktop-s5-th-700 text-white">5</p>
                </div>
                <p className="font-th desktop-s5-th-700 text-white">
                  พื้นที่สำนักงาน
                </p>
              </div>
              <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto font-th desktop-s7-th-400 text-white">
                <p className="font-th desktop-s7-th-700">
                  หน่วยงานสามารถออกแบบพื้นที่สำนักงานให้มีเพียงพื้นที่เดียว
                  หรือกระจายเป็น 2-3 พื้นที่ย่อย โดยสามารถแบ่งประเภทหลักๆ
                  ได้เป็น พื้นที่สำนักงานต้อนรับและพื้นที่บริหาร
                </p>
                <p>
                  <b>การออกแบบพื้นที่สำนักงานต้อนรับ</b>
                  ควรให้ความสำคัญกับตำแหน่งและความครอบคลุมของพื้นที่บริการให้ข้อมูลประชาสัมพันธ์
                  การสมัครและบริหารงานสมาชิก การติดต่อกับพันธมิตรและผู้สนใจ
                  ทำกิจกรรมในพื้นที่
                  โดยรวมคือให้เน้นบริการอำนวยความสะดวกให้พื้นที่ในรูปแบบต่างๆ
                </p>
                <p>
                  <b>การออกแบบพื้นที่สำนักงานบริหาร</b>
                  ควรให้ความสำคัญกับสภาพแวดล้อม
                  ที่ส่งเสริมประสิทธิภาพของการทำงานของเจ้าหน้าที่ฝ่ายสนับสนุน
                  เช่น ฝ่ายบริหาร ฝ่ายธุรการ โดยอาจแยกเส้นทางออกมา
                  เพื่อประสิทธิภาพในการดูแลรักษาและความปลอดภัย
                </p>
                <p>
                  พื้นที่นี้ควรออกแบบให้มีพื้นที่เก็บอุปกรณ์สำหรับการทำกิจกรรม
                  ในพื้นที่สตูดิโอ และพื้นที่นั่งทำงานด้วย เช่น อุปกรณ์เวที
                  เครื่องเสียง เฟอร์นิเจอร์
                </p>
              </div>
            </div>
            <div
              className="w-full shrink-0"
              style={{
                height:
                  "max(8rem, calc(100dvh - var(--stack-top) - var(--card-h)))",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div
        className="flex items-start md:flex-row flex-col max-w-[600px]"
        id="subsubtopic11"
      >
        <div className="p-5 md:border-y-2 border-l-2 border-t-2 md:border-r-0 border-r-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              ตัวอย่าง
              <br />
              หลากหลายรูปแบบ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            พื้นที่การเรียนรู้สามารถออกแบบให้มีฟังก์ชัน
            และบริการที่หลากหลายตามความต้องการของผู้ใช้งานและบริบทของแต่ละพื้นที่
            โดยหน่วยงานสามารถเลือกประยุกต์ใช้หรือเพิ่มเติมองค์ประกอบต่าง ๆ
            ให้เหมาะสมกับขนาดพื้นที่ งบประมาณ และเป้าหมายการให้บริการของตนเอง
          </p>
        </div>
      </div>

      <HoverSpaceGrid />

      <div className="flex w-full flex-col items-start max-w-[600px] border-2 border-white bg-blue-700">
        <div className="py-3.5 px-5 bg-blue-700 flex flex-col gap-2.5 border-b-2 border-white">
          <p className="font-th desktop-s5-th-700 text-tk-black">
            สิ่งอำนวยความสะดวก
          </p>
          <div className="flex items-start">
            <p className="text-nowrap font-th desktop-s7-th-700 text-white py-1 px-2.5 border border-white bg-tk-black">
              คำแนะนำ
            </p>
            <p className="font-th desktop-s7-th-400 text-tk-black py-2.5 px-3.5 bg-white">
              ควรเตรียมจัดซื้อสิ่งอำนวยความสะดวกให้พร้อมเพื่อช่วยให้การจัดซื้อจัดจ้าง
              ง่ายขึ้น เนื่องจากสามารถตั้งงบประมาณรวมในงบลงทุนได้
            </p>
          </div>
        </div>
        <div className="group relative flex justify-between items-center border-b-2 border-white p-7 h-[116px] w-full bg-blue-200">
          <div />
          <p className="font-th desktop-s6-th-700 text-white">ชั้นวางรองเท้า</p>
          <div className="absolute inset-0 z-10 hidden overflow-y-auto overscroll-contain bg-blue-700 p-7 group-hover:block">
            <div className="flex justify-between items-center">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                คำนึงถึงจุดถอดรองเท้าที่เพียงพอ ไม่เกะกะบริเวณทางเข้าหลัก
              </p>
            </div>
          </div>
          <div className="p-2.5 bg-blue-700 rounded-[10px] group-hover:hidden">
            <SidePanel />
          </div>
        </div>
        <div className="group relative flex justify-between items-center border-b-2 border-white p-7 h-[116px] w-full bg-blue-200">
          <div />
          <p className="font-th desktop-s6-th-700 text-white">
            จุดบริการฝากสัมภาระ
          </p>
          <div className="absolute inset-0 z-10 hidden overflow-y-auto overscroll-contain bg-blue-700 p-7 group-hover:block">
            <div className="flex justify-between items-start gap-2.5">
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                คำนึงถึงจุดฝากของ หรือตู้ล็อกเกอร์ที่มีพื้นที่
                เพียงพอสำหรับพื้นที่การ เรียนรู้ที่ตั้งกฎว่า
                ไม่อนุญาตให้นำสัมภาระ เข้าไปเพื่อปกป้อง ทรัพย์สินของพื้นที่
              </p>
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                อาจจัดหาเจ้าหน้าที่ เพื่อช่วยอำนวยสะดวก
              </p>
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                คำนึงถึงผู้ใช้บริการ ที่มีสัมภาระปริมาณมาก
                สำหรับพื้นที่การเรียนรู้ ที่อนุญาตให้นำสัมภาระเข้าพื้นที่ได้
              </p>
            </div>
          </div>
          <div className="p-2.5 bg-blue-700 rounded-[10px] group-hover:hidden">
            <SidePanel />
          </div>
        </div>
        <div className="group relative flex justify-between items-center border-b-2 border-white p-7 h-[116px] w-full bg-blue-200">
          <div />
          <p className="font-th desktop-s6-th-700 text-white">
            จุดวางคืนหนังสือ
          </p>
          <div className="absolute inset-0 z-10 hidden overflow-y-auto overscroll-contain bg-blue-700 p-7 group-hover:block">
            <div className="flex justify-between items-start gap-2.5">
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                ควรมีจุดวางคืนหนังสืออย่างเป็นที่เป็นทางและเป็นระเบียบ
                เพื่อที่เจ้าหน้าที่จะได้นำหนังสือไปจัดเข้าชั้นวางได้ง่าย
              </p>
            </div>
          </div>
          <div className="p-2.5 bg-blue-700 rounded-[10px] group-hover:hidden">
            <SidePanel />
          </div>
        </div>
        <div className="group relative flex justify-between items-center border-b-2 border-white p-7 h-[116px] w-full bg-blue-200">
          <div />
          <p className="font-th desktop-s6-th-700 text-white">
            เครื่องยืม-คืนหนังสืออัตโนมัติ
          </p>
          <div className="absolute inset-0 z-10 hidden overflow-y-auto overscroll-contain bg-blue-700 p-7 group-hover:block">
            <div className="flex justify-between items-start gap-2.5">
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                ลดการสัมผัสระหว่าง บุคคล
              </p>
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                ผู้ใช้บริการไม่ต้องรอ เจ้าหน้าที่
              </p>
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                แบ่งเบาภาระงานของ บรรณารักษ์หรือผู้ดูแล ห้องสมุด
              </p>
            </div>
          </div>
          <div className="p-2.5 bg-blue-700 rounded-[10px] group-hover:hidden">
            <SidePanel />
          </div>
        </div>
        <div className="group relative flex justify-between items-center border-b-2 border-white p-7 h-[116px] w-full bg-blue-200">
          <div />
          <p className="font-th desktop-s6-th-700 text-white">
            ตู้บริการน้ำดื่มอัตโนมัติ
          </p>
          <div className="absolute inset-0 z-10 hidden overflow-y-auto overscroll-contain bg-blue-700 p-7 group-hover:block">
            <div className="flex justify-between items-start gap-2.5">
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                ส่งเสริมให้ผู้บริการอยู่ในห้องสมุดในระยะเวลานานขึ้น
              </p>
            </div>
          </div>
          <div className="p-2.5 bg-blue-700 rounded-[10px] group-hover:hidden">
            <SidePanel />
          </div>
        </div>
        <div className="group relative flex justify-between items-center border-b-2 border-white p-7 h-[116px] w-full bg-blue-200">
          <div />
          <p className="font-th desktop-s6-th-700 text-white">
            เครื่องบริการอัตโนมัติ
          </p>
          <div className="absolute inset-0 z-10 hidden overflow-y-auto overscroll-contain bg-blue-700 p-7 group-hover:block">
            <div className="flex justify-between items-start gap-2.5">
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                ให้บริการสมัครและต่ออายุสมาชิกผ่านแอปพลิเคชัน My TK
              </p>
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                สามารถชำระ บริการหรือเติมเงินเข้าบัญชีสมาชิกได้
              </p>
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                สามารถออกบัตร เข้าใช้บริการรายวันโดยไม่ต้องติดต่อ เจ้าหน้าที่
              </p>
              <p className="font-th desktop-s6-th-400 text-tk-black flex-1">
                ลดภาระเจ้าหน้าที่ เคาน์เตอร์บริการ
              </p>
            </div>
          </div>
          <div className="p-2.5 bg-blue-700 rounded-[10px] group-hover:hidden">
            <SidePanel />
          </div>
        </div>
      </div>

      <div className="flex items-start md:flex-row flex-col max-w-[600px]">
        <div className="p-5 md:border-y-2 border-l-2 border-t-2 md:border-r-0 border-r-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              ข้อ
              <br />
              แนะนำใน
              <br />
              การออกแบบ
              <br />
              พื้นที่
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance mb-20">
            นอกจากการกำหนดประเภทของพื้นที่แล้ว
            รายละเอียดด้านการออกแบบและมาตรฐานการใช้งานยังเป็นองค์ประกอบสำคัญที่ช่วยให้พื้นที่การเรียนรู้ใช้งานได้อย่างมีประสิทธิภาพ
            ปลอดภัย และรองรับผู้ใช้บริการทุกกลุ่ม
            โดยหน่วยงานสามารถนำแนวทางต่อไปนี้ไป
            ปรับใช้ให้เหมาะสมกับบริบทของพื้นที่
          </p>
          <div className="flex justify-end items-end gap-2.5">
            <ShapeBoxOne />
            <ShapeBoxTwo />
            <ShapeBoxThree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSectionTwo;
