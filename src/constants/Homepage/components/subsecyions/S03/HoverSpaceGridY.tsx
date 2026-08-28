"use client";

import { useState, type ReactNode } from "react";
import CoverTri from "../../CoverTri";

export const SidePanel = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2H2C1.45 2 1 2.45 1 3V13C1 13.55 1.45 14 2 14H14C14.55 14 15 13.55 15 13V3C15 2.45 14.55 2 14 2ZM5 13H2V3H5V13ZM14 13H6V8.5H11.1L9.3 10.3L10 11L13 8L10 5L9.3 5.7L11.1 7.5H6V3H14V13Z"
        fill="#C0A765"
      />
    </svg>
  );
};

const ChevronDown = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.295 8.295L8.5 12.085V2H7.5V12.085L3.705 8.295L3 9L8 14L13 9L12.295 8.295Z"
        fill="#1D252C"
      />
    </svg>
  );
};

const ColTwoIcon = () => {
  return (
    <svg
      width="236"
      height="243"
      viewBox="0 0 236 243"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3/4 w-auto"
    >
      <g clipPath="url(#clip0_2518_4732)">
        <path
          d="M195.147 146.172L195.715 242.436H185.736L168.4 146.172H195.147Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M189.381 0.5625H-181.053C-186.916 0.5625 -191.668 5.29557 -191.668 11.1341V118.139C-191.668 123.978 -186.916 128.711 -181.053 128.711H189.381C195.243 128.711 199.996 123.978 199.996 118.139V11.1341C199.996 5.29557 195.243 0.5625 189.381 0.5625Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M189.381 0.5625H-181.053C-186.916 0.5625 -191.668 5.29557 -191.668 11.1341V118.139C-191.668 123.978 -186.916 128.711 -181.053 128.711H189.381C195.243 128.711 199.996 123.978 199.996 118.139V11.1341C199.996 5.29557 195.243 0.5625 189.381 0.5625Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M189.381 118.707H-181.053C-186.916 118.707 -191.668 123.44 -191.668 129.279V185.178C-191.668 191.017 -186.916 195.75 -181.053 195.75H189.381C195.243 195.75 199.996 191.017 199.996 185.178V129.279C199.996 123.44 195.243 118.707 189.381 118.707Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M-156.305 138.141H164.621"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M228.752 64.9219H186.327C182.697 64.9219 179.754 67.8528 179.754 71.4684V189.203C179.754 192.819 182.697 195.75 186.327 195.75H228.752C232.382 195.75 235.325 192.819 235.325 189.203V71.4684C235.325 67.8528 232.382 64.9219 228.752 64.9219Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2518_4732">
          <rect width="236" height="243" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ColFourIcon = () => {
  return (
    <svg
      width="160"
      height="166"
      viewBox="0 0 160 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2518_23211)">
        <path
          d="M131.98 59.0195H129.25V66.8095H131.98V59.0195Z"
          fill="#FFFAEA"
        />
        <path
          d="M130.619 78.7802C134.121 78.7802 136.959 75.0596 136.959 70.4702C136.959 65.8807 134.121 62.1602 130.619 62.1602C127.118 62.1602 124.279 65.8807 124.279 70.4702C124.279 75.0596 127.118 78.7802 130.619 78.7802Z"
          fill="#FFFAEA"
        />
        <path
          d="M130.619 59.49V0"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M130.619 47.8203C108.549 47.8203 102.129 69.1403 102.129 69.1403H159.099C159.099 69.1403 152.679 47.8203 130.609 47.8203H130.619Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M32.1893 82.3203H29.2793V90.6303H32.1893V82.3203Z"
          fill="#FFFAEA"
        />
        <path
          d="M30.7288 103.392C34.4622 103.392 37.4887 99.4251 37.4887 94.5319C37.4887 89.6386 34.4622 85.6719 30.7288 85.6719C26.9953 85.6719 23.9688 89.6386 23.9688 94.5319C23.9688 99.4251 26.9953 103.392 30.7288 103.392Z"
          fill="#FFFAEA"
        />
        <path
          d="M30.7285 82.83V0"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M30.7291 70.3828C7.20914 70.3828 0.369141 93.1128 0.369141 93.1128H61.0991C61.0991 93.1128 54.2591 70.3828 30.7391 70.3828H30.7291Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2518_23211">
          <rect width="160" height="166" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ColFiveIcon = () => {
  return (
    <svg
      width="84"
      height="39"
      viewBox="0 0 84 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2518_23254)">
        <path
          d="M0.5 17.7906L0.5 37.8906L77.03 37.8906V17.7906L0.5 17.7906Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M25.1992 22.8608V32.8008H52.3192V22.8608H25.1992Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M17.6797 0.499062V17.7891L83.4897 17.7891V0.499062L17.6797 0.499062Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M24.1504 0.499063V17.7891H27.9004V0.499063H24.1504Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M77.0293 17.79V0.5L73.2793 0.5V17.79H77.0293Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M50.5895 13.9603C53.2515 13.9603 55.4095 11.8023 55.4095 9.14031C55.4095 6.4783 53.2515 4.32031 50.5895 4.32031C47.9275 4.32031 45.7695 6.4783 45.7695 9.14031C45.7695 11.8023 47.9275 13.9603 50.5895 13.9603Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2518_23254">
          <rect width="84" height="38.39" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ColSixOneIcon = () => {
  return (
    <svg
      width="108"
      height="113"
      viewBox="0 0 108 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2518_3675)">
        <path d="M50 1V52.3604H1V1H50Z" stroke="#FFFAEA" strokeWidth="2" />
        <path
          d="M106.9 1V52.3604H57.9004V1H106.9Z"
          stroke="#FFFAEA"
          strokeWidth="2"
        />
        <path
          d="M50 60.3008V111.661H1V60.3008H50Z"
          stroke="#FFFAEA"
          strokeWidth="2"
        />
        <path
          d="M106.9 60.3008V111.661H57.9004V60.3008H106.9Z"
          stroke="#FFFAEA"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_2518_3675">
          <rect width="107.9" height="112.66" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ColSixTwoIcon = () => {
  return (
    <svg
      width="79"
      height="149"
      viewBox="0 0 79 149"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2518_3670)">
        <path
          d="M77.6 0.5H0.5V147.95H77.6V0.5Z"
          fill="#FFE150"
          stroke="#FFFAEA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M71.7002 6.39844V142.049H6.40039V6.39844H71.7002Z"
          stroke="#FFFAEA"
          strokeWidth="2"
        />
        <path
          d="M61.2402 99.543L71.7002 89.083V142.049H6.40039V91.3916L29.7402 68.043L61.2402 99.543Z"
          stroke="#FFFAEA"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_2518_3670">
          <rect width="78.1" height="148.45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const HoverCell = ({
  title,
  tips,
  className,
  icon,
  iconClassName = "flex items-end justify-start",
}: {
  title: ReactNode;
  tips: ReactNode[];
  className: string;
  icon?: ReactNode;
  iconClassName?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group relative flex items-center justify-center h-[300px] overflow-hidden bg-[#FFE150] p-10 ${className}`}
    >
      {icon ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${iconClassName}`}
        >
          {icon}
        </div>
      ) : null}
      <p className="relative z-[1] font-th desktop-s5-th-700 text-tk-black text-center">
        {title}
      </p>
      {open ? null : (
        <button
          type="button"
          className="absolute inset-0 z-30 md:hidden"
          onClick={() => setOpen(true)}
          aria-label={`เปิดรายละเอียด ${title}`}
        />
      )}
      <div
        className={`absolute inset-0 z-10 overflow-y-auto overscroll-contain bg-yellow-300 p-10 md:hidden md:group-hover:block ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-5">
          <p className="font-th desktop-s6-th-700 text-tk-black">{title}</p>
          <div className="flex flex-col">
            <p className="py-1 px-2.5 bg-tk-black text-white font-th desktop-s7-th-700 w-fit">
              คำแนะนำ
            </p>
            <div className="border border-tk-black bg-white">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className={`${
                    index < tips.length - 1 ? "border-b border-tk-black " : ""
                  }px-3.5 py-2.5`}
                >
                  <p className="font-th desktop-s7-th-400 text-tk-black">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className={`absolute right-10 bottom-10 z-20 rounded-[10px] p-2.5 md:pointer-events-none group-hover:bg-[#D9D9D9] ${
          open ? "bg-[#D9D9D9]" : "bg-[#FEE6A6]"
        }`}
        onClick={() => setOpen(false)}
        aria-label={`ปิดรายละเอียด ${title}`}
      >
        <span className={`group-hover:hidden ${open ? "hidden" : "block"}`}>
          <SidePanel />
        </span>
        <span className={`group-hover:block ${open ? "block" : "hidden"}`}>
          <ChevronDown />
        </span>
      </button>
    </div>
  );
};

const SpaceGroup = ({
  title,
  className,
  children,
}: {
  title: string;
  className: string;
  children: ReactNode;
}) => {
  return (
    <div className={className}>
      <CoverTri color="#FFE150">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ">
          <h2 className="w-fit whitespace-nowrap font-th desktop-s6-th-700 px-5 py-1.5 text-tk-black border-2 border-tk-black rounded-full">
            {title}
          </h2>
        </div>
      </CoverTri>
      <div className="mt-px border-2 border-white w-full">{children}</div>
    </div>
  );
};

const SpaceRow = ({
  bordered = false,
  children,
}: {
  bordered?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={`grid grid-cols-6 w-full h-auto md:h-[344px]${
        bordered ? " border-t-2 border-white" : ""
      }`}
    >
      {children}
    </div>
  );
};

const HoverSpaceGridY = () => {
  return (
    <>
      <SpaceGroup
        title="คำแนะนำ"
        className="flex w-full flex-col items-end max-w-[600px]"
      >
        <SpaceRow>
          <HoverCell
            title="สัดส่วนพื้นที่"
            tips={[
              "พื้นที่อ่านและค้นคว้า 30%",
              "พื้นที่กิจกรรม 20%",
              "พื้นที่เด็กและครอบครัว 15%",
              "พื้นที่ทำงานกลุ่ม 15%",
              "พื้นที่ชุมชน 10%",
              "พื้นที่สนับสนุน 10%",
            ]}
            className="col-span-6 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 border-white"
          />
          <HoverCell
            title="มาตรฐานเฟอร์นิเจอร์"
            tips={[
              <>
                โต๊ะอ่านหนังสือ:
                <br />
                <b className="ml-3 font-th desktop-s7-th-400">
                  กว้าง 120-150 ซม.
                </b>
                <br />
                <b className="ml-3 font-th desktop-s7-th-400">ลึก 60-75 ซม.</b>
                <br />
                <b className="ml-3 font-th desktop-s7-th-400">สูง 75 ซม.</b>
              </>,
              <>
                โต๊ะทำงานกลุ่ม:
                <br />
                <b className="ml-3 font-th desktop-s7-th-400">
                  กว้าง 180-240 ซม.
                </b>
                <br />
                <b className="ml-3 font-th desktop-s7-th-400">รองรับ 6-8 คน</b>
              </>,
              <>
                ความสูงของชั้นหนังสือ:
                <br />
                <b className="ml-3 font-th desktop-s7-th-400">
                  ผู้ใหญ่ 180-200 ซม.
                </b>
                <br />
                <b className="ml-3 font-th desktop-s7-th-400">
                  เด็ก 90-120 ซม.
                </b>
              </>,
              <>
                ที่นั่งอ่าน:
                <br />
                ควรมีหลายรูปแบบ เช่น เก้าอี้ <br className="sm:hidden block" />
                โซฟา บีนแบ็ก เก้าอี้เลาจน์
              </>,
            ]}
            className="col-span-6 md:col-span-3"
            icon={<ColTwoIcon />}
            iconClassName="flex items-end justify-start"
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title={
              <>
                ระบบไฟฟ้า
                <br />
                และเทคโนโลยี
              </>
            }
            tips={[
              <>
                ควรมีปลั๊กไฟทุกโต๊ะอ่านหนังสือ{" "}
                <br className="sm:hidden block" />
                โดยเฉลี่ย 1 ปลั๊กต่อ 2 <br className="sm:hidden block" />
                ที่นั่งในพื้นที่ทำงาน พื้นที่กิจกรรม
              </>,
              <>
                จอและอุปกรณ์นำเสนอควร
                <br />
                มีในพื้นที่ทำกิจกรรมหรือทำงาน
                <br />
                ร่วมกัน
              </>,
            ]}
            className="col-span-6 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 border-white"
          />
          <HoverCell
            title={
              <>
                มาตรฐาน
                <br />
                ระบบแสงสว่าง
              </>
            }
            tips={[
              "พื้นที่อ่าน: 500 lux",
              "พื้นที่ทั่วไป: 300 lux",
              "พื้นที่กิจกรรม: 300-500 lux",
              <>
                ควรใช้แสงธรรมชาติร่วมกับ
                <br />
                แสงไฟ
              </>,
            ]}
            className="col-span-6 md:col-span-3"
            icon={<ColFourIcon />}
            iconClassName="flex items-start justify-center"
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title={
              <>
                การควบคุมเสียง
                <br />
                ในพื้นที่อ่าน
              </>
            }
            tips={[
              <>
                จัดระดับเสียงให้เหมาะสมกับพื้นที่ที่ต้องใช้สมาธิโดยเลือก
                <br />
                ใช้วัสดุที่ลดเสียงสะท้อนและ
                <br />
                ดูดซับเสียง เช่น การใช้พรม
                วัสดุซับเสียงหรือผนังที่ออกแบบมาเพื่อลดเสียง
                <br />
                โดยเฉพาะ
              </>,
              <>
                ควรจัดผังพื้นที่ให้ชัดเจน
                <br />
                แยกโซนสำหรับการใช้งานที่ต้องการความเงียบออกจาก
                <br />
                โซนกิจกรรมหรือพื้นที่ที่มี
                <br />
                การเคลื่อนไหวและพูดคุย
              </>,
            ]}
            className="col-span-6 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 border-white"
            icon={<ColFiveIcon />}
            iconClassName="flex items-start justify-center mt-12"
          />
          <HoverCell
            title="การออกแบบเพื่อทุกคน (Universal Design)"
            tips={[
              <>
                พื้นที่การเรียนรู้ที่ดีและ
                <br />
                มีศักยภาพต้องออกแบบ
                <br />
                ให้ทุกคนสามารถเข้าถึงและ
                <br />
                ใช้งานได้อย่างเท่าเทียมโดยต้องใส่ใจในรายละเอียดเพื่อลดอุปสรรคในการใช้งาน
              </>,
              "ทางลาดเพื่อรองรับผู้ใช้รถเข็น",
              <>
                จัดทางเดินให้กว้างเพียงพอ
                <br />
                ไม่น้อยกว่า 120 ซม.
              </>,
              <>
                มีโต๊ะหรือพื้นที่ใช้งาน
                <br />
                ที่เหมาะสำหรับผู้ใช้รถเข็น
              </>,
              <>
                ใช้ป้ายสัญลักษณ์ที่ชัดเจน
                <br />
                เข้าใจง่าย
              </>,
            ]}
            className="col-span-6 md:col-span-3"
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title="การสร้างบรรยากาศ"
            tips={[
              "ใช้สีสันที่เหมาะสม สร้างความรู้สึกสดใส มีชีวิตชีวา",
              "จัดให้มีมุมพักผ่อน ที่นั่งนุ่ม พื้นที่นั่งเล่น",
              <>
                จัดนิทรรศการ งานออกแบบ <br className="sm:hidden block" />
                งานสร้างสรรค์เพื่อเติมเต็ม
                <br className="sm:hidden block" />
                องค์ประกอบทางศิลปะ
              </>,
            ]}
            className="col-span-6"
            icon={
              <>
                <ColSixOneIcon />
                <ColSixTwoIcon />
              </>
            }
            iconClassName="flex items-start justify-between p-10"
          />
        </SpaceRow>
      </SpaceGroup>
    </>
  );
};

export default HoverSpaceGridY;
