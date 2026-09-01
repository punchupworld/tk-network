import { T10 } from "@/src/components/icons/topics";
import React, { type ReactNode } from "react";

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
        d="M79.7355 4.32681C81.8488 -0.108937 88.1511 -0.108937 90.2643 4.32681C92.0942 8.1677 97.2778 8.82367 100.003 5.55937C103.151 1.78949 109.256 3.35974 110.202 8.18265C111.021 12.3588 115.878 14.2855 119.328 11.8029C123.313 8.93573 128.836 11.9775 128.555 16.8846C128.312 21.1335 132.539 24.21 136.497 22.665C141.068 20.8808 145.662 25.2031 144.172 29.8858C142.881 33.9407 146.211 37.9734 150.429 37.4632C155.3 36.874 158.677 42.2052 156.071 46.3695C153.814 49.9755 156.039 54.7112 160.25 55.2678C165.115 55.9106 167.062 61.9157 163.504 65.2999C160.424 68.2304 161.403 73.3715 165.343 74.9599C169.895 76.7944 170.291 83.0957 166.005 85.4877C162.293 87.5582 161.965 92.7816 165.388 95.302C169.341 98.2135 168.16 104.415 163.415 105.664C159.306 106.745 157.692 111.723 160.382 115.016C163.488 118.821 160.805 124.534 155.899 124.562C151.651 124.585 148.851 129.004 150.639 132.864C152.704 137.323 148.686 142.188 143.927 140.992C139.807 139.957 135.998 143.539 136.772 147.724C137.665 152.557 132.566 156.269 128.253 153.924C124.52 151.895 119.942 154.416 119.652 158.662C119.317 163.566 113.457 165.89 109.862 162.545C106.749 159.649 101.689 160.951 100.354 164.991C98.8121 169.657 92.5597 170.448 89.9083 166.313C87.6121 162.732 82.3879 162.732 80.0919 166.313C77.4403 170.448 71.1876 169.657 69.6458 164.991C68.3109 160.951 63.2507 159.649 60.1381 162.545C56.5432 165.89 50.6833 163.566 50.3484 158.662C50.0583 154.416 45.4803 151.895 41.7464 153.924C37.4342 156.269 32.3354 152.557 33.2281 147.724C34.0012 143.539 30.1929 139.957 26.0725 140.992C21.3139 142.188 17.2965 137.323 19.361 132.864C21.1486 129.004 18.3493 124.585 14.1012 124.562C9.19517 124.534 6.51169 118.821 9.61815 115.016C12.308 111.723 10.6936 106.745 6.58475 105.664C1.83957 104.415 0.658591 98.2135 4.6118 95.302C8.03487 92.7816 7.70683 87.5582 3.99544 85.4877C-0.290757 83.0957 0.104983 76.7944 4.65656 74.9599C8.59776 73.3715 9.57667 68.2304 6.49594 65.2999C2.93805 61.9157 4.88564 55.9106 9.74962 55.2678C13.9613 54.7112 16.1857 49.9755 13.9291 46.3695C11.3231 42.2052 14.7002 36.874 19.5709 37.4632C23.7884 37.9734 27.1185 33.9407 25.828 29.8858C24.3376 25.2031 28.9319 20.8808 33.5034 22.665C37.4618 24.21 41.6882 21.1335 41.4448 16.8846C41.1637 11.9775 46.6867 8.93573 50.6715 11.8029C54.122 14.2855 58.9795 12.3588 59.7984 8.18264C60.7442 3.35974 66.8487 1.78949 69.9967 5.55936C72.7226 8.82367 77.9056 8.1677 79.7355 4.32681Z"
        stroke={stroke}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const ToolBox = () => {
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
        fill="#FB9DA3"
      />
      <path
        d="M15 14.29L13.445 12.735C13.8803 12.1217 14.0694 11.3674 13.9748 10.6213C13.8802 9.87521 13.5088 9.19188 12.9343 8.70664C12.3597 8.2214 11.6239 7.96964 10.8725 8.00124C10.1212 8.03285 9.40905 8.3455 8.87727 8.87727C8.3455 9.40905 8.03285 10.1212 8.00124 10.8725C7.96964 11.6239 8.2214 12.3597 8.70664 12.9343C9.19188 13.5088 9.87521 13.8802 10.6213 13.9748C11.3674 14.0694 12.1217 13.8803 12.735 13.445L14.29 15L15 14.29ZM11 13C10.6044 13 10.2178 12.8827 9.88886 12.6629C9.55996 12.4432 9.30362 12.1308 9.15224 11.7654C9.00087 11.3999 8.96126 10.9978 9.03843 10.6098C9.1156 10.2219 9.30608 9.86549 9.58579 9.58579C9.86549 9.30608 10.2219 9.1156 10.6098 9.03843C10.9978 8.96126 11.3999 9.00087 11.7654 9.15224C12.1308 9.30362 12.4432 9.55996 12.6629 9.88886C12.8827 10.2178 13 10.6044 13 11C13 11.5304 12.7893 12.0391 12.4142 12.4142C12.0391 12.7893 11.5304 13 11 13Z"
        fill="#FB9DA3"
      />
    </svg>
  );
};

type JobColumn = {
  title: string;
  items: ReactNode[];
};

type JobRole = {
  label: string;
  bullets: ReactNode[];
  columns: JobColumn[];
};

const jobRoles: JobRole[] = [
  {
    label: "งานบรรณารักษ์",
    bullets: [
      "ดูแลงานที่เกี่ยวข้องกับทรัพยากรสารสนเทศทั้งหมด",
      "นักจัดการความรู้ที่คอยคัดสรรข้อมูลที่น่าสนใจ ทันสมัย และเป็นประโยชน์สูงสุด",
      "ใกล้ชิดกับผู้ใช้บริการมากที่สุด",
    ],
    columns: [
      {
        title: "งานหน้าบ้าน",
        items: [
          "รับสมัครสมาชิก",
          <>
            ให้บริการข้อมูลพื้นฐาน ตั้งแต่
            <br className="sm:hidden block" />
            ตำแหน่งชั้นวางหนังสือที่ผู้ใช้บริการ
            <br className="sm:hidden block" />
            ต้องการค้นหา
          </>,
          "ให้บริการยืมคืนหนังสือและสื่อทั้งหมด",
        ],
      },
      {
        title: "งานหลังบ้าน",
        items: [
          "วางแผนคัดเลือกและจัดซื้อหนังสือและสื่อต่างๆ",
          <>
            จัดทำระบบจัดเก็บหนังสือและสื่อ <br className="sm:hidden block" />
            ตั้งแต่การทำแคตตาล็อกหนังสือ <br className="sm:hidden block" />
            ติดแถบสัญลักษณ์ และนำหนังสือ
            <br className="sm:hidden block" />
            จัดขึ้นชั้นวาง
          </>,
          "ดูแลรักษาทรัพยากรที่ชำรุด",
          <>
            ดูแลข้อมูลสารสนเทศของห้องสมุด <br className="sm:hidden block" />
            เช่น สถิติผู้เข้าใช้บริการ เพื่อนำไปใช้
            <br className="sm:hidden block" />
            วิเคราะห์และจัดหาหนังสือให้
            <br className="sm:hidden block" />
            สอดคล้องกับ
            <br className="hidden sm:block" />
            ความต้องการของ
            <br className="sm:hidden block" />
            ผู้ใช้บริการ
          </>,
        ],
      },
    ],
  },
  {
    label: "งานกิจกรรม",
    bullets: [
      "ดูแลงานที่เกี่ยวข้องกับการจัดกิจกรรมการเรียนรู้",
      <>
        ควรจัดกิจกรรมสัปดาห์ละครั้งหรือเดือนละครั้ง เพื่อให้เกิดการแลกเปลี่ยนและ
        <br />
        แสดงผลงานอย่างสร้างสรรค์
      </>,
      <>
        ผลงานเกิดจากการผสมผสานด้านศิลปวัฒนธรรม ค่านิยมและวิถีชีวิตจากคนใน
        <br className="hidden sm:block" />
        ท้องถิ่น
      </>,
    ],
    columns: [
      {
        title: "งานหน้าบ้าน",
        items: [
          <>
            จัดกิจกรรมการเรียนรู้ให้กับ
            <br className="sm:hidden block" />
            ผู้ใช้บริการทั้งในและนอกสถานที่
          </>,
          <>
            ดูแลการรับสมัครลงทะเบียนเข้าร่วม
            <br className="sm:hidden block" />
            กิจกรรมของผู้ใช้บริการ
          </>,
        ],
      },
      {
        title: "งานหลังบ้าน",
        items: [
          <>
            วางแผนกิจกรรมที่จะเกิดขึ้น
            <br className="sm:hidden block" />
            ตลอดทั้งปี
          </>,
          <>
            คิดค้นวิธีนำเสนอกิจกรรมให้
            <br className="sm:hidden block" />
            เหมาะสมกับผู้ใช้ที่หลากหลาย
            <br className="sm:hidden block" />
            ตั้งแต่เด็กปฐมวัยไปจนถึงวัยเกษียณ
          </>,
          <>
            หาพาร์ทเนอร์เข้ามาจัดกิจกรรม
            <br />
            การเรียนรู้ร่วมกัน
          </>,
          <>
            ดูแลข้อมูลสารสนเทศของห้องสมุด <br className="sm:hidden block" />
            เช่น สถิติผู้เข้าใช้บริการ เพื่อนำไปใช้
            <br className="sm:hidden block" />
            วิเคราะห์และจัดหาหนังสือให้
            <br className="sm:hidden block" />
            สอดคล้องกับ
            <br className="hidden sm:block" />
            ความต้องการของ
            <br className="sm:hidden block" />
            ผู้ใช้บริการ
          </>,
        ],
      },
    ],
  },
  {
    label: "งานเทคโนโลยีสารสนเทศ",
    bullets: [
      <>
        ดูแลงานด้านเทคโนโลยีสารสนเทศทั้งหมดของพื้นที่การเรียนรู้เพื่อขับเคลื่อน
        <br className="hidden sm:block" />
        ระบบหน้าบ้านและหลังบ้าน
      </>,
      "สนับสนุนการทำงานระบบไอทีให้กับเจ้าหน้าที่ภายในศูนย์",
    ],
    columns: [
      {
        title: "งานหน้าบ้าน",
        items: [
          "บริการอุปกรณ์อิเล็กทรอนิกส์และอินเตอร์เน็ตให้กับผู้ใช้บริการ",
          "ดูแลอุปกรณ์อิเล็กทรอนิกส์",
        ],
      },
      {
        title: "งานหลังบ้าน",
        items: [
          "ดูแลระบบการจัดการและฐานข้อมูล",
          <>
            ดูแลการให้บริการระบบต่างๆ เช่น
            <br />
            E-library
          </>,
          <>
            ดูแลข้อมูลสารสนเทศของห้องสมุด <br className="sm:hidden block" />
            เช่น สถิติผู้เข้าใช้บริการ เพื่อนำไปใช้
            <br className="sm:hidden block" />
            วิเคราะห์และจัดหาหนังสือให้
            <br className="sm:hidden block" />
            สอดคล้องกับ
            <br className="hidden sm:block" />
            ความต้องการของ
            <br className="sm:hidden block" />
            ผู้ใช้บริการ
          </>,
          <>
            แก้ปัญหาระบบการจัดการเบื้องต้น
            <br />
            ก่อนติดต่อประสานงานกับผู้ดูแลระบบ
          </>,
        ],
      },
    ],
  },
  {
    label: "งานวิชาการ",
    bullets: [
      "ดูแลเนื้อหาสาระทุกหมวดที่สอดคล้องกับเป้าหมายของห้องสมุด",
      <>
        แปลงสารจากองค์ความรู้ทางวิชาการ และสร้างกระบวนการเรียนรู้ให้ผู้ใช้บริการ
        <br />
        เข้าถึงได้ง่าย
      </>,
    ],
    columns: [
      {
        title: "งานหน้าบ้าน",
        items: [
          <>
            จัดงานสัมมนาอบรมในหัวข้อ
            <br className="sm:hidden block" />
            ที่น่าสนใจให้กับคนในท้องถิ่น
          </>,
        ],
      },
      {
        title: "งานหลังบ้าน",
        items: [
          <>
            รวบรวมองค์ความรู้เพื่อใช้สร้าง
            <br className="sm:hidden block" />
            กระบวนการเรียนรู้ให้ผู้มาใช้บริการ
          </>,
          "พัฒนาเนื้อหาสาระ สร้างองค์ความรู้",
          <>
            ทำงานแบบบูรณาการจนสามารถ
            <br className="sm:hidden block" />
            นำความรู้ไปนำเสนอในรูปแบบต่างๆ <br className="sm:hidden block" />
            ได้ เช่น การทำกิจกรรม
          </>,
        ],
      },
    ],
  },
  {
    label: "งานประชาสัมพันธ์",
    bullets: ["ดูแลการสื่อสารและการประชาสัมพันธ์"],
    columns: [
      {
        title: "งานหน้าบ้าน",
        items: [
          "ให้บริการข้อมูลข่าวสารและกิจกรรมกับผู้ใช้บริการ",
          "สื่อสารและตอบคำถามผู้ใช้ออนไลน์ในช่องทางต่างๆ เช่น Facebook LINE เว็บไซต์",
          <>
            ให้บริการลงทะเบียนเข้าใช้งานและ
            <br />
            การบริการสมาชิก
          </>,
        ],
      },
      {
        title: "งานหลังบ้าน",
        items: [
          <>
            จัดทำเนื้อหาเพื่อสื่อสารและ
            <br className="sm:hidden block" />
            ประชาสัมพันธ์ โดยหาช่องทาง
            <br />
            การสื่อสารที่เหมาะสมกับท้องถิ่น
          </>,
          <>
            วางแผนการประชาสัมพันธ์
            <br className="sm:hidden block" />
            ประจำเดือนและประจำปี
          </>,
        ],
      },
    ],
  },
  {
    label: "งานธุรการ",
    bullets: ["ดูแลสำนักงาน เอกสารสนับสนุนต่างๆ เพื่อการดำเนินงานอย่างราบรื่น"],
    columns: [
      {
        title: "งานหลังบ้าน",
        items: [
          "ประสานงานทั้งภายในและภายนอก",
          "ดูแลงานพัสดุและครุภัณฑ์",
          "ดูแลการเงินและงานเบิกจ่าย",
          "ดูแลงานทรัพยากรบุคคล",
        ],
      },
    ],
  },
  {
    label: "งานบริหาร",
    bullets: [
      "บริหารพื้นที่การเรียนรู้ให้เป็นไปตามนโยบายและเป้าหมายของห้องสมุด",
    ],
    columns: [
      {
        title: "งานบริหาร",
        items: [
          "นโยบายและดูแลบริหารจัดการพื้นที่การเรียนรู้ตามทิศทางที่กำหนด",
          "ประเมินผลการปฏิบัติงานต่างๆ",
          "ติดต่อประสานงานกับ TK Park เพื่อเตรียมแผนงานในแต่ละปีร่วมกัน",
        ],
      },
    ],
  },
];

const JobRoleTooltip = ({ role }: { role: JobRole }) => {
  return (
    <div className="pointer-events-none invisible absolute md:right-0 left-0 top-full z-50 mt-2.5 w-[calc(100vw-6rem)] max-w-[540px] opacity-0 transition-opacity duration-200 group-hover/job:visible group-hover/job:opacity-100 group-focus-within/job:visible group-focus-within/job:opacity-100">
      <div className="flex flex-col gap-2.5 bg-green-500 p-4 shadow-lg">
        <p className="w-fit rounded-[5px] border border-white px-2.5 py-1 font-th desktop-s7-th-700 text-white text-nowrap">
          {role.label}
        </p>
        <ul className="flex list-disc flex-col gap-1 pl-5">
          {role.bullets.map((bullet, index) => (
            <li
              key={index}
              className="font-th desktop-s7-th-400 text-left text-white"
            >
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-start">
          {role.columns.map((column) => (
            <div key={column.title} className="flex flex-1 flex-col">
              <p className="w-fit bg-tk-black px-2.5 py-1 font-th desktop-s7-th-700 text-white text-nowrap">
                {column.title}
              </p>
              <div className="flex flex-col bg-white">
                {column.items.map((item, index) => (
                  <p
                    key={index}
                    className="border-b border-neutral-light-light px-2.5 py-2 font-th desktop-s7-th-400 text-left text-tk-black last:border-b-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SubSectionTwo = () => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center">
        <T10
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          หลักการ
          <br />
          บริหาร
          <br />
          บุคลากร
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2.5 p-10 border-2 border-white bg-[#FEE6A6]">
        <p className="font-th desktop-s6-th-400 text-tk-black">
          เมื่อเราพูดถึงคำว่าห้องสมุดมีชีวิต
          <br className="sm:hidden block" />
          ผู้ที่ทำให้ห้องสมุดมีชีวิตขึ้นมาได้
          <br className="sm:hidden block" />
          คือบุคลากรผู้เปรียบเสมือน
          <br className="sm:hidden block" />
          สะพานเชื่อมผู้คนในท้องถิ่น
          <br className="sm:hidden block" />
          กับพื้นที่การเรียนรู้
          <br className="hidden sm:block" />
          ห้องสมุดไม่ใช่
          <br className="sm:hidden block" />
          แค่พื้นที่เชิงกายภาพ อีกต่อไป <br className="sm:hidden block" />
          แต่เป็นสถานที่ในการแลกเปลี่ยน
          <br className="sm:hidden block" />
          องค์ความรู้ ในชุมชนอย่างยั่งยืน
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          บุคลากรของห้องสมุดจึงไม่ใช่
          <br className="sm:hidden block" />
          ใครที่ไหน แต่เป็นคนที่คลุกคลี
          <br className="sm:hidden block" />
          ใกล้ชิดกับคนในพื้นที่ และสามารถ
          <br className="sm:hidden block" />
          ส่งต่อความรู้ไปสู่มือคนท้องถิ่น <br className="sm:hidden block" />
          ขับเคลื่อนห้องสมุดของ <br />
          พวกเขาให้มีความหลากหลายและ
          <br className="sm:hidden block" />
          ตอบสนองการใช้งานของ
          <br className="sm:hidden block" />
          กลุ่มเป้าหมาย
        </p>
        <p className="font-th desktop-s6-th-400 text-tk-black">
          นับได้ว่า บุคลากรเหล่านี้คือ <br className="sm:hidden block" />
          “นักสร้างการเปลี่ยนแปลง” <br className="sm:hidden block" />
          (Change Agent) ของชุมชน
          <br className="sm:hidden block" />
          อย่างแท้จริง หากขาดพวกเขาไป
          <br className="sm:hidden block" />
          พื้นที่การเรียนรู้คงจะไม่สามารถ
          <br className="sm:hidden block" />
          พัฒนาศักยภาพได้อย่างต่อเนื่อง
          <br className="sm:hidden block" />
          และยั่งยืน
        </p>
      </div>
      <div
        className="flex items-start h-full md:flex-row flex-col"
        id="subsubtopic18"
      >
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              คุณสมบัติ
              <br />
              บุคลากร
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <span className="font-th desktop-s6-th-400 text-tk-black">
            <b className="font-th desktop-s6-th-700 text-tk-black ">นักคิด:</b>{" "}
            กล้าคิดริเริ่มสร้างสรรค์
            <br className="sm:hidden block" />
            การเรียนรู้
            <br className="hidden sm:block" />
            รูปแบบใหม่
          </span>
          <span className="font-th desktop-s6-th-400 text-tk-black">
            <b className="font-th desktop-s6-th-700 text-tk-black ">
              นักทดลอง:
            </b>{" "}
            กล้าทดลอง <br className="sm:hidden block" />
            ปรับเปลี่ยนสิ่งต่างๆ <br className="sm:hidden block" />
            เพื่อผลกระทบที่ดีของสังคม
          </span>
          <span className="font-th desktop-s6-th-400 text-tk-black">
            <b className="font-th desktop-s6-th-700 text-tk-black ">
              นักพัฒนา:
            </b>{" "}
            กล้าเชื่อว่าทุกอย่าง
            <br className="sm:hidden block" />
            ต่อยอดและปรับปรุงให้ดีขึ้น
            <br className="sm:hidden block" />
            ได้เสมอ มุ่งมั่นพัฒนาตนเอง
            <br className="sm:hidden block" />
            และเรียนรู้ศาสตร์ใหม่ๆ เพื่อ
            <br className="sm:hidden block" />
            ตอบสนองความต้องการ
            <br className="sm:hidden block" />
            ของคนในพื้นที่อย่างต่อเนื่อง
          </span>
          <span className="font-th desktop-s6-th-400 text-tk-black">
            <b className="font-th desktop-s6-th-700 text-tk-black ">
              นักบริการ:
            </b>{" "}
            กล้าเข้าหา <br className="sm:hidden block" />
            มีมนุษยสัมพันธ์ดี ใจรักงานบริการ
            <br className="sm:hidden block" />
            ต่อกลุ่มคนหลากหลายที่เข้ามา
            <br className="sm:hidden block" />
            ใช้งานห้องสมุด
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start" id="subsubtopic19">
        <div className="p-5 border-x-2 border-t-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              ขอบเขตงาน
              <br />
              และบทบาท
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-50 flex gap-5 flex-col md:flex-row">
          <div className="flex flex-col gap-2.5">
            <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
              เจ้าหน้าที่ของพื้นที่การเรียนรู้
              <br className="sm:hidden block" />
              จะต้องเข้าใจการทำงานหน้าบ้าน
              <br className="sm:hidden block" />
              และหลังบ้าน โดย
              <br className="hidden sm:block" />
              งานหน้าบ้านคือ
              <br className="sm:hidden block" />
              การรู้ขอบเขตงานประจำวันและ
              <br className="sm:hidden block" />
              ต้องเตรียมวางแผนงานประจำปี
              <br className="sm:hidden block" />
              ซึ่งเป็นการวางแผนภาพรวม
              <br className="sm:hidden block" />
              ของงานด้านบริการทั้งหมด
              <br className="sm:hidden block" />
              ที่จะเกิดขึ้น เจ้าหน้าที่ต้อง
              <br className="sm:hidden block" />
              วางแผนจัดหาสื่อเรียนรู้จำพวก
              <br className="sm:hidden block" />
              ทรัพยากรสารสนเทศและอุปกรณ์
              <br className="sm:hidden block" />
              ต่างๆ เพื่อหมุนเวียนใช้ในห้องสมุด{" "}
              <br className="sm:hidden block" />
              เช่น 3 ครั้ง/ปี รวมถึงวางแผน
              <br className="sm:hidden block" />
              การจัดกิจกรรมทั้งปี เช่น <br className="sm:hidden block" />
              การเรียนเชิญวิทยากรจาก
              <br className="sm:hidden block" />
              ข้างนอก <br className="hidden sm:block" />
              จัดกิจกรรมโดยกำหนด
              <br className="sm:hidden block" />
              ตีมรายสัปดาห์ เป็นต้น
            </p>
            <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
              ส่วนระบบจัดการหลังบ้าน
              <br className="sm:hidden block" />
              เจ้าหน้าที่ต้องเข้าใจระบบห้องสมุด
              <br className="sm:hidden block" />
              อัตโนมัติของ TK Park โดย
              <br className="sm:hidden block" />
              ต้องนำหนังสือทั้งหมดมาบันทึก
              <br className="sm:hidden block" />
              ข้อมูลลงในระบบและติดแถบ
              <br className="sm:hidden block" />
              สัญลักษณ์ตามฐานข้อมูล
            </p>
          </div>

          <div className="flex flex-col gap-5 flex-1 items-start justify-start">
            {jobRoles.map((role) => (
              <div
                key={role.label}
                className="group/job relative flex gap-2.5 items-center justify-center"
                tabIndex={0}
              >
                <p className="font-th desktop-s6-th-700 text-tk-red border border-tk-red px-2.5 py-1 w-fit rounded-[5px] text-nowrap">
                  {role.label}
                </p>
                <ToolBox />
                <JobRoleTooltip role={role} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start" id="subsubtopic20">
        <div className="p-5 border-x-2 border-t-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              การกำหนด
              <br />
              จำนวนบุคลากร
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-5">
          <p className="font-th desktop-s6-th-700 text-tk-black text-balance">
            เครือข่ายของ TK Park มีจำนวน
            <br className="sm:hidden block" />
            เจ้าหน้าที่ตั้งแต่ 3-30 คน <br className="sm:hidden block" />
            โดยหน่วยงานต้องคำนวณ
            <br className="sm:hidden block" />
            ตามความพร้อมและความ
            <br className="sm:hidden block" />
            เหมาะสมของศูนย์ตามปัจจัย
            <br className="sm:hidden block" />
            เหล่านี้
          </p>
          <div className="flex flex-col gap-2.5">
            <span className="font-th desktop-s6-th-400 text-tk-black">
              <b className="font-th desktop-s6-th-700 text-tk-black ">
                ขนาด (Size):
              </b>{" "}
              หากพื้นที่
              <br className="sm:hidden block" />
              มีขนาดใหญ่มาก ก็ต้องใช้จำนวน
              <br className="sm:hidden block" />
              เจ้าหน้าที่มากขึ้นไปด้วยเพื่อ
              <br className="sm:hidden block" />
              บริการและดูแลอย่างทั่วถึง
            </span>
            <span className="font-th desktop-s6-th-400 text-tk-black">
              <b className="font-th desktop-s6-th-700 text-tk-black ">
                เวลาเปิดทำการ (Opening <br className="sm:hidden block" />
                Hour):
              </b>{" "}
              หากเปิดบริการมากกว่า <br className="sm:hidden block" />8 ชั่วโมง
              อาจต้องใช้จำนวน
              <br className="sm:hidden block" />
              เจ้าหน้าที่มากขึ้น เนื่องจาก
              <br className="sm:hidden block" />
              ต้องมีการจัดระบบการทำงาน
              <br className="sm:hidden block" />
              เป็นกะ
            </span>
            <span className="font-th desktop-s6-th-400 text-tk-black">
              <b className="font-th desktop-s6-th-700 text-tk-black ">
                การบริการ (Service):
              </b>{" "}
              หากมี
              <br className="sm:hidden block" />
              จำนวนการบริการมาก ก็ต้องมี
              <br className="sm:hidden block" />
              จำนวนเจ้าหน้าที่มากขึ้น
              <br className="sm:hidden block" />
              ตามไปด้วย เช่น หากมีบริการ
              <br className="sm:hidden block" />
              ห้องใช้ภาพยนตร์ ก็ต้องมี
              <br className="sm:hidden block" />
              เจ้าหน้าที่ในการดูแลจัดตาราง
              <br className="sm:hidden block" />
              ฉายภาพยนตร์ประจำสัปดาห์
            </span>
            <span className="font-th desktop-s6-th-400 text-tk-black">
              <b className="font-th desktop-s6-th-700 text-tk-black ">
                กิจกรรม (Activity):
              </b>{" "}
              จำนวนเจ้าหน้าที่สัมพันธ์กับความถี่ในการจัดกิจกรรม
            </span>
            <span className="font-th desktop-s6-th-400 text-tk-black">
              <b className="font-th desktop-s6-th-700 text-tk-black ">
                ลักษณะของกิจกรรม (Activity Character):
              </b>{" "}
              หากมีการจัด
              <br className="sm:hidden block" />
              กิจกรรมนอกพื้นที่หรือจัดตาม
              <br className="sm:hidden block" />
              โรงเรียนจำนวนของเจ้าหน้าที่
              <br className="sm:hidden block" />
              ก็ต้องมากขึ้นตามไปด้วย
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start" id="subsubtopic21">
        <div className="p-5 border-x-2 border-t-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              การทดสอบ
              <br />
              บริการ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-50 flex flex-col">
          <div className="flex gap-2.5 px-[14px] py-2.5">
            <div className="shrink-0 flex items-center justify-center w-[25px] h-[25px] border border-tk-red rounded-full">
              <p className="font-th desktop-s7-th-700 text-tk-red">1</p>
            </div>
            <span className="font-th desktop-s6-th-400 text-tk-black">
              <b className="font-th desktop-s6-th-700 text-tk-red ">
                ก่อนเปิดให้บริการ
              </b>
              <br />
              เจ้าหน้าที่ต้องทดลอง
              <br className="sm:hidden block" />
              ใช้งานทั้งระบบและพื้นที่
              <br className="sm:hidden block" />
              ในฐานะเจ้าหน้าที่และ
              <br />
              ผู้ใช้บริการ เมื่อเจอ
              <br className="sm:hidden block" />
              ปัญหาในการใช้งาน <br className="sm:hidden block" />
              พวกเขาต้องปรับรูปแบบ
              <br />
              การให้บริการอย่าง
              <br className="sm:hidden block" />
              ทันท่วงที เช่น เคาน์เตอร์
              <br className="sm:hidden block" />
              บริการควรจะเป็น
              <br />
              ตำแหน่งแรกๆ ที่ผู้ใช้
              <br className="sm:hidden block" />
              บริการมองหาเมื่อ
              <br className="sm:hidden block" />
              ต้องการสอบถามข้อมูล
              <br />
              ยืม-คืนหนังสือ <br className="sm:hidden block" />
              ขอใช้บริการอินเตอร์เน็ต
              <br className="sm:hidden block" />
              และหากมีเคาน์เตอร์
              <br className="sm:hidden block" />
              บริการอยู่หลายชั้นควร
              <br className="sm:hidden block" />
              ติดกล้องวงจรปิด
              <br className="sm:hidden block" />
              เพื่อเป็นตัวช่วย
            </span>
          </div>
          <div className="flex gap-2.5 px-[14px] py-2.5">
            <div className="shrink-0 flex items-center justify-center w-[25px] h-[25px] border border-tk-red rounded-full">
              <p className="font-th desktop-s7-th-700 text-tk-red">2</p>
            </div>
            <span className="font-th desktop-s6-th-400 text-tk-black">
              เจ้าหน้าที่ต้องช่วยกันหา
              <b className="font-th desktop-s6-th-700 text-tk-red ">
                วิธีการแก้ไขปัญหาเพื่อ
                <br className="sm:hidden block" />
                ยกระดับบริการให้ดี
                <br className="sm:hidden block" />
                ยิ่งขึ้น
              </b>{" "}
              เช่น หากพบ
              <br className="sm:hidden block" />
              ว่าชั้นหนังสือสูงเกินไป
              <br className="sm:hidden block" />
              สำหรับผู้ใช้บริการที่
              <br className="sm:hidden block" />
              เป็น เด็ก ต้องจัดหาเก้าอี้
              <br className="sm:hidden block" />
              บันไดมาเพิ่มเติมไว้ <br className="sm:hidden block" />
              เพื่อให้ปีนขึ้นไปหยิบ
              <br className="sm:hidden block" />
              หนังสือ ได้สะดวกขึ้น
            </span>
          </div>
          <div className="flex gap-2.5 px-[14px] py-2.5">
            <div className="shrink-0 flex items-center justify-center w-[25px] h-[25px] border border-tk-red rounded-full">
              <p className="font-th desktop-s7-th-700 text-tk-red">3</p>
            </div>
            <span className="font-th desktop-s6-th-400 text-tk-black">
              <b className="font-th desktop-s6-th-700 text-tk-red ">
                เจ้าหน้าที่ควรทดสอบ
                <br className="sm:hidden block" />
                บริการและปรับเปลี่ยน
                <br className="sm:hidden block" />
                พื้นที่
              </b>
              อยู่ตลอด เพื่อ
              <br className="sm:hidden block" />
              ตอบสนองต่อความ
              <br className="sm:hidden block" />
              ต้องการต่อผู้ใช้บริการ
              <br className="sm:hidden block" />
              หรือตัวเจ้าหน้าที่เอง <br className="sm:hidden block" />
              ทั้งยังเป็นการเปลี่ยน
              <br className="sm:hidden block" />
              บรรยากาศให้ผู้ที่ใช้
              <br className="sm:hidden block" />
              บริการได้พบเจอกับ
              <br className="sm:hidden block" />
              ประสบการณ์ใหม่ๆ <br className="sm:hidden block" />
              โดยสามารถทดสอบ
              <br className="sm:hidden block" />
              และทำตามง่ายๆ <br className="sm:hidden block" />
              ใน 4 ขั้นตอนดังนี้
            </span>
          </div>
          <div className="w-full flex flex-col items-end justify-end">
            <div className="flex flex-col max-w-[422px]  justify-end">
              <div className="px-[14px] py-2.5">
                <span className="font-th desktop-s6-th-400 text-tk-black">
                  <b className="font-th desktop-s6-th-700 text-tk-black ">
                    หาโจทย์ที่อยากปรับเปลี่ยน:
                  </b>{" "}
                  อาจมาจากปัญหาที่ผู้ใช้งาน <br className="sm:hidden block" />
                  หรือเจ้าหน้าที่พบเจอ
                </span>
              </div>
              <div className="px-[14px] py-2.5">
                <span className="font-th desktop-s6-th-400 text-tk-black">
                  <b className="font-th desktop-s6-th-700 text-tk-black ">
                    เข้าโหมดทดลอง:
                  </b>{" "}
                  ลองระดม
                  <br className="sm:hidden block" />
                  สมองในกลุ่มทีมเจ้าหน้าที่
                  <br />
                  หาไอเดียใหม่ๆ ในการ
                  <br className="sm:hidden block" />
                  ปรับเปลี่ยนพื้นที่
                </span>
              </div>
              <div className="px-[14px] py-2.5">
                <span className="font-th desktop-s6-th-400 text-tk-black">
                  <b className="font-th desktop-s6-th-700 text-tk-black ">
                    กรองผลตอบรับ:
                  </b>{" "}
                  เก็บข้อมูล
                  <br className="sm:hidden block" />
                  ความคิดเห็นจากผู้ใช้บริการ <br className="sm:hidden block" />
                  และบันทึกสถิติการบริการ
                  <br className="sm:hidden block" />
                  ต่างๆ เป็นบันทึกผล
                  <br className="sm:hidden block" />
                  การทดลอง
                </span>
              </div>
              <div className="px-[14px] py-2.5">
                <span className="font-th desktop-s6-th-400 text-tk-black">
                  <b className="font-th desktop-s6-th-700 text-tk-black ">
                    นำมาปรับต่อ:
                  </b>{" "}
                  นำผล
                  <br className="sm:hidden block" />
                  การทดลองมาพูดคุยกันในทีม
                  <br />
                  เพื่อนำไปพัฒนาปรับปรุง
                  <br className="sm:hidden block" />
                  พื้นที่และบริการต่อไป
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSectionTwo;
