"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { ImageModal } from "../S06/ParkCard";
import { asset } from "@/src/lib/asset";

type BoxImage = {
  src: string;
  alt: string;
  height: number;
};

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
        fill="#5B73ED"
      />
    </svg>
  );
};

export const ChevronDown = () => {
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

const BOX_IMAGE = {
  src: asset("/img/s03/hover/box-1.png"),
  alt: "ห้องสมุดมีชีวิต",
  height: 100,
};

const BOX_IMAGE_2 = {
  src: asset("/img/s03/hover/box-2.png"),
  alt: "ห้องสมุดมีชีวิต",
  height: 100,
};

const BOX_IMAGE_3 = {
  src: asset("/img/s03/hover/box-3.png"),
  alt: "ห้อฉบพิมพ์หนังสืออ้างอิง",
  height: 100,
};

const BOX_IMAGE_4 = {
  src: asset("/img/s03/hover/box-4.png"),
  alt: "Mind Room",
  height: 100,
};

const BOX_IMAGE_5 = {
  src: asset("/img/s03/hover/box-5.png"),
  alt: "ห้องสมุดไอที",
  height: 100,
};

const BOX_IMAGE_6 = {
  src: asset("/img/s03/hover/box-6.png"),
  alt: "ห้องสมุดไอที",
  height: 100,
};

const BOX_IMAGE_7 = {
  src: asset("/img/s03/hover/box-7.png"),
  alt: "ห้องสมุดดนตรี",
  height: 100,
};

const BOX_IMAGE_8 = {
  src: asset("/img/s03/hover/box-8.png"),
  alt: "ห้องสมุดดนตรี",
  height: 100,
};

const BOX_IMAGE_9 = {
  src: asset("/img/s03/hover/box-9.png"),
  alt: "ห้องสมุดดนตรี",
  height: 100,
};

const IconOne = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" fill="white" fillOpacity="0.01" />
      <path
        d="M31.0006 31.3606H23.0006C22.8016 31.3606 22.6406 31.1996 22.6406 31.0006V23.0006C22.6406 22.8016 22.8016 22.6406 23.0006 22.6406H31.0006C31.1996 22.6406 31.3606 22.8016 31.3606 23.0006V31.0006C31.3606 31.1996 31.1996 31.3606 31.0006 31.3606ZM23.3606 30.6406H30.6396V23.3606H23.3606V30.6406ZM20.0006 31.3606H12.0006C11.8756 31.3606 11.7596 31.2956 11.6946 31.1896C11.6286 31.0836 11.6226 30.9506 11.6786 30.8386L15.6786 22.8386C15.7996 22.5946 16.2006 22.5946 16.3226 22.8386L20.3226 30.8386C20.3786 30.9496 20.3726 31.0826 20.3066 31.1896C20.2406 31.2956 20.1256 31.3606 20.0006 31.3606ZM12.5836 30.6406H19.4186L16.0006 23.8056L12.5836 30.6406ZM5.00063 31.3606C2.59663 31.3606 0.640625 29.4046 0.640625 27.0006C0.640625 24.5966 2.59663 22.6406 5.00063 22.6406C7.40462 22.6406 9.36062 24.5966 9.36062 27.0006C9.36062 29.4046 7.40462 31.3606 5.00063 31.3606ZM5.00063 23.3606C2.99363 23.3606 1.36063 24.9936 1.36063 27.0006C1.36063 29.0076 2.99363 30.6406 5.00063 30.6406C7.00763 30.6406 8.64062 29.0076 8.64062 27.0006C8.64062 24.9936 7.00763 23.3606 5.00063 23.3606ZM31.0006 20.3606H23.0006V19.6406H30.6406V12.3606H23.0006V11.6406H31.0006C31.1996 11.6406 31.3606 11.8016 31.3606 12.0006V20.0006C31.3606 20.1996 31.1996 20.3606 31.0006 20.3606ZM20.0006 20.3606H12.0006V19.6406H19.4186L15.6786 12.1616L16.3226 11.8396L20.3226 19.8396C20.3786 19.9506 20.3726 20.0836 20.3066 20.1906C20.2406 20.2956 20.1256 20.3606 20.0006 20.3606ZM5.00063 20.3606C2.59663 20.3606 0.640625 18.4046 0.640625 16.0006H1.36063C1.36063 18.0076 2.99363 19.6406 5.00063 19.6406C7.00763 19.6406 8.64062 18.0076 8.64062 16.0006C8.64062 13.9936 7.00763 12.3606 5.00063 12.3606V11.6406C7.40462 11.6406 9.36062 13.5966 9.36062 16.0006C9.36062 18.4046 7.40462 20.3606 5.00063 20.3606ZM5.00063 9.36062V8.64062C7.00763 8.64062 8.64062 7.00763 8.64062 5.00063C8.64062 2.99363 7.00763 1.36063 5.00063 1.36063V0.640625C7.40462 0.640625 9.36062 2.59663 9.36062 5.00063C9.36062 7.40462 7.40462 9.36062 5.00063 9.36062ZM19.6786 9.16162L15.6786 1.16163L16.3226 0.839625L20.3226 8.83962L19.6786 9.16162ZM31.3606 9.00062H30.6406V1.36063H23.0006V0.640625H31.0006C31.1996 0.640625 31.3606 0.801625 31.3606 1.00063V9.00062Z"
        fill="#1D252C"
      />
    </svg>
  );
};

const IconTwo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" fill="white" fillOpacity="0.01" />
      <path
        d="M31.0006 0.640625H1.00063C0.801625 0.640625 0.640625 0.801625 0.640625 1.00063V22.0006C0.640625 22.1996 0.801625 22.3606 1.00063 22.3606H31.0006C31.1996 22.3606 31.3606 22.1996 31.3606 22.0006V1.00063C31.3606 0.801625 31.1996 0.640625 31.0006 0.640625ZM24.6406 16.6406H7.36063V3.05363C7.97563 3.84263 8.92462 4.36063 10.0006 4.36063C11.3186 4.36063 12.4506 3.59063 13.0006 2.48263C13.5506 3.59063 14.6826 4.36063 16.0006 4.36063C17.3186 4.36063 18.4506 3.59063 19.0006 2.48363C19.5506 3.59063 20.6826 4.36063 22.0006 4.36063C23.0766 4.36063 24.0246 3.84363 24.6406 3.05463V16.6406ZM22.0006 3.64062C20.6676 3.64062 19.5746 2.64463 19.3976 1.36063H24.6046C24.4266 2.64463 23.3336 3.64062 22.0006 3.64062ZM16.0006 3.64062C14.6686 3.64062 13.5746 2.64463 13.3966 1.36063H18.6036C18.4266 2.64463 17.3336 3.64062 16.0006 3.64062ZM10.0006 3.64062C8.66862 3.64062 7.57463 2.64463 7.39663 1.36063H12.6036C12.4266 2.64463 11.3326 3.64062 10.0006 3.64062ZM4.00063 3.64062C2.66863 3.64062 1.57463 2.64463 1.39663 1.36063H6.60363C6.42663 2.64463 5.33263 3.64062 4.00063 3.64062ZM4.36063 4.32363C5.28763 4.22263 6.09562 3.75163 6.64062 3.05263V21.6406H4.36063V4.32363ZM7.36063 17.3606H24.6406V21.6396H7.36063V17.3606ZM25.3606 3.05463C25.9056 3.75262 26.7136 4.22363 27.6396 4.32363V21.6406H25.3606V3.05463ZM28.0006 3.64062C26.6676 3.64062 25.5746 2.64463 25.3976 1.36063H30.6046C30.4266 2.64463 29.3336 3.64062 28.0006 3.64062ZM1.36063 3.05363C1.90563 3.75262 2.71462 4.22362 3.64062 4.32463V21.6406H1.36063V3.05363ZM30.6406 21.6406H28.3606V4.32363C29.2866 4.22263 30.0946 3.75262 30.6396 3.05463L30.6406 21.6406ZM28.0006 28.7616C27.5836 28.0916 26.8466 27.6406 26.0006 27.6406H24.3606V27.0006C24.3606 26.0966 25.0956 25.3606 26.0006 25.3606H29.0006V24.6406H26.0006C25.1546 24.6406 24.4176 25.0916 24.0006 25.7616C23.5836 25.0916 22.8466 24.6406 22.0006 24.6406H18.0006C17.1546 24.6406 16.4176 25.0916 16.0006 25.7626C15.5836 25.0916 14.8466 24.6406 14.0006 24.6406H10.0006C9.15462 24.6406 8.41762 25.0916 8.00063 25.7626C7.58363 25.0916 6.84663 24.6406 6.00063 24.6406H3.00063V25.3616H6.00063C6.90462 25.3616 7.64062 26.0966 7.64062 27.0016V27.6416H6.00063C5.15462 27.6416 4.41763 28.0926 4.00063 28.7636C3.58363 28.0926 2.84663 27.6416 2.00063 27.6416H1.00063V28.3626H2.00063C2.90462 28.3626 3.64062 29.0976 3.64062 30.0026V31.0026H4.36063V30.0026C4.36063 29.0986 5.09663 28.3626 6.00063 28.3626H10.0006C10.9046 28.3626 11.6406 29.0976 11.6406 30.0026V31.0026H12.3606V30.0026C12.3606 29.0986 13.0966 28.3626 14.0006 28.3626H18.0006C18.9046 28.3626 19.6406 29.0976 19.6406 30.0026V31.0026H20.3616V30.0026C20.3616 29.0986 21.0966 28.3626 22.0016 28.3626H26.0016C26.9056 28.3626 27.6416 29.0976 27.6416 30.0026V31.0026H28.3626V30.0026C28.3626 29.0986 29.0976 28.3626 30.0026 28.3626H31.0026V27.6406H30.0026C29.1546 27.6406 28.4176 28.0906 28.0006 28.7616ZM12.0006 28.7626C11.5836 28.0916 10.8466 27.6406 10.0006 27.6406H8.36062V27.0006C8.36062 26.0966 9.09662 25.3606 10.0006 25.3606H14.0006C14.9046 25.3606 15.6406 26.0956 15.6406 27.0006V27.6406H14.0006C13.1546 27.6406 12.4176 28.0916 12.0006 28.7626ZM20.0006 28.7616C19.5836 28.0916 18.8466 27.6406 18.0006 27.6406H16.3606V27.0006C16.3606 26.0966 17.0966 25.3606 18.0006 25.3606H22.0006C22.9046 25.3606 23.6406 26.0956 23.6406 27.0006V27.6406H22.0006C21.1546 27.6406 20.4176 28.0906 20.0006 28.7616Z"
        fill="#1D252C"
      />
    </svg>
  );
};

const IconThree = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" fill="white" fillOpacity="0.01" />
      <path
        d="M23.0006 31.3606H20.0006C19.8016 31.3606 19.6406 31.1996 19.6406 31.0006V1.00063C19.6406 0.801625 19.8016 0.640625 20.0006 0.640625H22.0006C23.8536 0.640625 25.3606 2.14763 25.3606 4.00063V16.0006C25.3606 16.1996 25.1996 16.3606 25.0006 16.3606H23.3606V31.0006C23.3606 31.1996 23.1996 31.3606 23.0006 31.3606ZM20.3606 30.6406H22.6396V16.0006C22.6396 15.8016 22.8006 15.6406 22.9996 15.6406H24.6396V4.00063C24.6396 2.54463 23.4556 1.36063 21.9996 1.36063H20.3596L20.3606 30.6406ZM12.0006 31.3606H9.00063C8.80163 31.3606 8.64063 31.1996 8.64063 31.0006V13.3606H8.00063C6.69963 13.3606 5.64062 12.3016 5.64062 11.0006V1.00063H6.36063V11.0006C6.36063 11.9046 7.09663 12.6406 8.00063 12.6406H9.00063C9.19963 12.6406 9.36062 12.8016 9.36062 13.0006V30.6406H11.6406V13.0006C11.6406 12.8016 11.8016 12.6406 12.0006 12.6406H13.0006C13.9046 12.6406 14.6406 11.9046 14.6406 11.0006V1.00063H15.3606V11.0006C15.3606 12.3016 14.3016 13.3606 13.0006 13.3606H12.3606V31.0006C12.3606 31.1996 12.1996 31.3606 12.0006 31.3606ZM12.3606 9.00062H11.6406V1.00063H12.3606V9.00062ZM9.36062 9.00062H8.64063V1.00063H9.36062V9.00062Z"
        fill="#1D252C"
      />
    </svg>
  );
};

const HoverCell = ({
  title,
  description,
  image,
  tips,
  className,
  onOpenImage,
}: {
  title: string;
  description?: ReactNode;
  image?: BoxImage;
  tips: ReactNode[];
  className: string;
  onOpenImage: (image: BoxImage) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group relative flex items-center justify-center bg-blue-200 p-10 h-75 ${className}`}
    >
      <p className="font-th desktop-s5-th-700 text-white">{title}</p>
      {open ? null : (
        <button
          type="button"
          className="absolute inset-0 z-30 md:hidden"
          onClick={() => setOpen(true)}
          aria-label={`เปิดรายละเอียด ${title}`}
        />
      )}
      <div
        className={`absolute inset-0 z-10 overflow-y-auto overscroll-contain bg-blue-700 p-10 md:hidden md:group-hover:block ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-5">
          <p className="font-th desktop-s6-th-700 text-tk-black">{title}</p>
          {description ? (
            <p className="font-th desktop-s6-th-400 text-tk-black">
              {description}
            </p>
          ) : null}
          {image ? (
            <button
              type="button"
              className="relative w-full cursor-pointer text-left"
              onClick={() => onOpenImage(image)}
              aria-label={`ดูรูป ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={100}
                height={image.height}
                className="w-full h-full aspect-square object-cover border-2 border-white rounded-full"
              />
              <div className="absolute bottom-5 right-1/2 translate-x-1/2">
                <ToolBox />
              </div>
            </button>
          ) : null}
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
          open ? "bg-[#D9D9D9]" : "bg-blue-700"
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
  icon,
}: {
  title: string;
  className: string;
  children: ReactNode;
  icon: ReactNode;
}) => {
  return (
    <div className={className}>
      <div className="py-3.5 px-5 border-t-2 border-x-2 border-white bg-blue-700 flex items-center gap-2.5">
        {icon}
        <p className="font-th desktop-s5-th-700 text-tk-black">{title}</p>
      </div>
      <div className="border-2 border-white w-full">{children}</div>
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

const HoverSpaceGrid = () => {
  const [openImage, setOpenImage] = useState<BoxImage | null>(null);

  return (
    <>
      <SpaceGroup
        title="พื้นที่บริการ"
        icon={<IconOne />}
        className="flex w-full flex-col items-start"
      >
        <SpaceRow>
          <HoverCell
            title="ห้องสมุดมีชีวิต"
            description={
              <>
                ให้บริการด้านค้นคว้าข้อมูล <br className="sm:hidden block" />
                โดยมีหนังสือเกมสร้างสรรค์
                <br className="sm:hidden block" />
                และสื่อมัลติมีเดียหลากหลาย <br className="sm:hidden block" />
                เช่น หนังสือ วารสาร สื่อเรียนรู้{" "}
                <br className="sm:hidden block" />
                อิเล็กทรอนิกส์ทั้งไทยและสากล
              </>
            }
            image={BOX_IMAGE}
            tips={[
              <>
                จัดหาสื่อเรียนรู้ใหม่ๆ อยู่เสมอ{" "}
                <br className="sm:hidden block" />
                เช่น บรรณารักษ์คัดเลือกสื่อ
                <br className="sm:hidden block" />
                ทุกไตรมาส เก็บข้อมูลจากความ
                <br className="sm:hidden block" />
                สนใจและข้อเสนอแนะของผู้ใช้งาน
              </>,
              <>
                ควรปรับเปลี่ยนให้ตอบโจทย์
                <br className="sm:hidden block" />
                การใช้งาน และสร้างประสบการณ์ใหม่ๆ
              </>,
            ]}
            className="col-span-6 md:col-span-4 border-b-2 md:border-b-0 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="ห้องเด็ก"
            description={
              <>
                บรรยากาศแห่ง
                <br className="hidden sm:block" />
                การเรียนรู้ที่ทำให้
                <br className="sm:hidden block" />
                เด็กๆรู้สึกสนุกสนาน และเหมาะ
                <br className="sm:hidden block" />
                กับช่วงวัยผ่านการเล่น สระน้ำ
                <br className="sm:hidden block" />
                ความรู้ (Reading Pool)
                <br />
                บ้านต้นไม้ และบันไดรักการอ่าน <br className="sm:hidden block" />
                พร้อมกิจกรรมฝึกทักษะพัฒนา
                <br className="sm:hidden block" />
                สมองแบบบูรณาการ <br className="sm:hidden block" />
                (Brain-based Learning)
              </>
            }
            image={BOX_IMAGE_2}
            tips={[
              <>
                ออกแบบสภาพแวดล้อมโดย
                <br className="sm:hidden block" />
                เน้นที่ความปลอดภัยของเด็ก
                <br className="sm:hidden block" />
                เป็นสำคัญ และจัดหาเฟอร์นิเจอร์
                <br className="sm:hidden block" />
                ที่เหมาะสมกับการใช้งาน
              </>,
              <>
                จัดหาหนังสือและกิจกรรมส่งเสริม
                <br className="sm:hidden block" />
                การพัฒนาทักษะสำหรับเด็กและ
                <br className="sm:hidden block" />
                ผู้ปกครอง เด็กๆ สามารถเรียนรู้
                <br className="sm:hidden block" />
                ได้ด้วยตัวเองอย่างเพลิดเพลิน <br className="sm:hidden block" />
                ส่วนผู้ปกครองก็สามารถค้นคว้า
                <br className="sm:hidden block" />
                และทำกิจกรรมร่วมกันได้
              </>,
              "มีเจ้าหน้าที่ผู้เชี่ยวชาญด้านการดูแลเด็กปฐมวัย",
            ]}
            className="col-span-6 md:col-span-2 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title="ห้องเงียบ"
            description={
              <>
                พื้นที่สงบสำหรับ <br />
                ผู้ที่ต้องการใช้สมาธิ <br />
                ในการอ่านและค้นคว้า <br className="sm:hidden block" />
                ข้อมูลความรู้จากหนังสืออ้างอิง
              </>
            }
            image={BOX_IMAGE_3}
            tips={[
              <>
                ควรใช้วัสดุเก็บเสียงกั้นพื้นที่{" "}
                <br className="sm:hidden block" />
                และแยกโซนนี้ออกมาจากพื้นที่
                <br className="sm:hidden block" />
                ที่ต้องใช้เสียง
              </>,
            ]}
            className="col-span-6 md:col-span-2 border-b-2 md:border-b-0 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="Mind Room"
            description={
              <>
                จุดนัดพบเพื่อจุดประกายและแลกเปลี่ยนความคิดเห็นของ
                <br />
                คนรุ่นใหม่ที่สนใจการเรียนรู้เฉพาะทางด้านต่างๆ
                <br />
                ตามแนวทางเศรษฐกิจสร้างสรรค์ เช่น สถาปัตยกรรม <br />
                ศิลปะการแสดง แฟชัน ภาพยนตร์ ดนตรี
              </>
            }
            image={BOX_IMAGE_4}
            tips={[
              "บริหารจัดการหนังสือหายากหรือหนังสือมูลค่าสูงอย่างละเอียดรอบคอบ",
              "ควรตั้งอยู่บริเวณด้านหน้า เพื่อแนะนำการบริการความรู้แก่ผู้ใช้งาน",
              "มีบุคลากรที่คอยอัพเดทข้อมูล คัดเลือกทรัพยากรการเรียนรู้ใหม่เป็นประจำ",
            ]}
            className="col-span-6 md:col-span-4 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title="ห้องสมุดไอที"
            description={
              <>
                พื้นที่ส่งเสริมทักษะความรู้ด้านไอที{" "}
                <br className="sm:hidden block" />
                โดยให้บริการหนังสือและ
                <br className="sm:hidden block" />
                สื่อความรู้ด้านไอทีที่หลากหลาย{" "}
                <br className="sm:hidden block" />
                พร้อมบริการคอมพิวเตอร์
              </>
            }
            image={BOX_IMAGE_5}
            tips={[
              <>
                อัพเดทกิจกรรมด้านไอทีอย่าง
                <br className="sm:hidden block" />
                สม่ำเสมอ ทั้งระดับพื้นฐานและ
                <br className="sm:hidden block" />
                เฉพาะทาง (อาจต่อยอดเป็น
                <br className="sm:hidden block" />
                อาชีพได้)
              </>,
              <>
                ควรมีบริการอินเตอร์เน็ตและ
                <br className="sm:hidden block" />
                มีเจ้าหน้าที่เทคนิคคอยดูแล
              </>,
              <>
                เฟอร์นิเจอร์สำหรับการนั่งทำงาน
                <br className="sm:hidden block" />
                กับคอมพิวเตอร์
              </>,
            ]}
            className="col-span-6 md:col-span-4 border-b-2 md:border-b-0 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="ห้องสมุดดนตรี"
            description={
              <>
                พื้นที่ที่มีทั้งหนังสือ แท็ปเล็ต {/* <br /> */}
                ห้องสมุดดนตรี TK และ
                {/* <br /> */}
                เครื่องดนตรีให้ลองสัมผัส {/* <br /> */} ผู้ใช้งาน
                สามารถค้นคว้าข้อมูลเกี่ยวกับดนตรีจากทุกมุมโลก และ
                {/* <br /> */}
                ที่สำคัญคือสามารถ ร้อง เล่น ฟัง
                {/* <br /> */}
                ในพื้นที่นี้ได้
              </>
            }
            image={BOX_IMAGE_6}
            tips={[
              "จัดหาอุปกรณ์และเครื่องดนตรีที่สอดรับกับความต้องการของผู้ใช้",
              "จัดกิจกรรมด้านดนตรีอย่างสม่ำเสมอ",
              "มีเจ้าหน้าที่ผู้เชี่ยวชาญให้บริการปรึกษาด้านดนตรีทั้งในแง่ทฤษฎีและปฏิบัติ ผ่านการร้อง เล่น ฟัง",
            ]}
            className="col-span-6 md:col-span-2 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
      </SpaceGroup>

      <SpaceGroup
        title="พื้นที่สำหรับจัดกิจกรรมหรือเช่า"
        icon={<IconTwo />}
        className="flex w-full flex-col items-start max-w-[600px]"
      >
        <SpaceRow>
          <HoverCell
            title="ห้องฉายภาพยนตร์"
            description={
              <>
                พื้นที่สำหรับการฉายภาพยนตร์คุณภาพหลากหลายประเภท
                <br />
                ทั้งภาพยนตร์สั้น แอนิเมชันทั้งไทยและต่างประเทศ รวมถึง
                <br />
                ฉายผลงานสร้างสรรค์ของเยาวชนรุ่นใหม่ พร้อมการ
                <br className="sm:hidden block" />
                แลกเปลี่ยนเรียนรู้กับวิทยากร
              </>
            }
            image={BOX_IMAGE_7}
            tips={[
              <>
                ฉายภาพยนตร์ใหม่ๆ เป็นประจำ <br className="sm:hidden block" />
                โดยอาจเปิดรับความคิดเห็น <br className="sm:hidden block" />
                ของผู้ใช้งานต่อภาพยนตร์
                <br className="sm:hidden block" />
                ที่ต้องการชม
              </>,
              "จัดหาภาพยนตร์ที่ถูกลิขสิทธิ์",
            ]}
            className="col-span-6 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="ลานสานฝัน"
            description={
              <>
                ลานเปิดกว้างสำหรับทุกเพศ
                <br />
                ทุกวัย ไม่ว่าใครก็สามารถมาแสดง
                <br className="sm:hidden block" />
                ผลงาน ความคิด ความสามารถ <br className="sm:hidden block" />
                หรือจัดกิจกรรมสร้างสรรค์
                <br className="sm:hidden block" />
                ได้ทุกประเภท เช่น การร้องเพลง <br className="sm:hidden block" />
                เล่นละคร
                <br className="hidden sm:block" />
                พร้อมอุปกรณ์แสงและ
                <br />
                เสียงที่ได้มาตรฐานไว้บริการ
              </>
            }
            image={BOX_IMAGE_8}
            tips={[
              <>
                จัดกิจกรรมส่งเสริมการเรียนรู้
                <br className="sm:hidden block" />
                เป็นประจำ โดยมีเจ้าหน้าที่
                <br className="sm:hidden block" />
                เป็นวิทยากรนำกิจกรรม <br className="sm:hidden block" />
                หรือเชิญวิทยากรจากภายนอก
              </>,
            ]}
            className="col-span-6 md:col-span-3 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title="ศูนย์การเรียนรู้อเนกประสงค์"
            description={
              <>
                พื้นที่อเนกประสงค์สำหรับ
                <br className="sm:hidden block" />
                การเรียนรู้ทุกรูปแบบ เช่น <br className="sm:hidden block" />
                การสัมมนา
                <br className="hidden sm:block" />
                การอบรมเชิง
                <br className="sm:hidden block" />
                ปฏิบัติการ การเรียนรู้เชิงสาระ
                <br className="sm:hidden block" />
                บันเทิง รวมไปถึงการแสดงดนตรี <br className="sm:hidden block" />
                ละครเวที และศิลปะการแสดง
                <br className="sm:hidden block" />
                แขนงต่างๆ
              </>
            }
            image={BOX_IMAGE_9}
            tips={[
              <>
                ออกแบบพื้นที่ให้ยืดหยุ่นรองรับ
                <br className="sm:hidden block" />
                กิจกรรมหลายรูปแบบ เช่น <br className="sm:hidden block" />
                ปรับเปลี่ยนให้ฉายภาพยนตร์ จัด
                <br className="sm:hidden block" />
                งานสัมมนา จัดงานแถลงข่าวได้
              </>,
              "จัดทำระบบการจองล่วงหน้าสำหรับบุคคลภายนอก",
            ]}
            className="col-span-6 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
      </SpaceGroup>

      <SpaceGroup
        title="พื้นที่ใช้สอยภายในอาคาร"
        icon={<IconThree />}
        className="flex w-full flex-col items-end max-w-[600px]"
      >
        <SpaceRow>
          <HoverCell
            title="มุมอาหารเครื่องดื่ม"
            tips={[
              <>
                แจ้งข้อตกลงในการเก็บและ
                <br className="sm:hidden block" />
                ทิ้งอย่างชัดเจนหากผู้ใช้บริการ
                <br className="sm:hidden block" />
                ต้องการนำเครื่องดื่มเข้ามา
                <br className="sm:hidden block" />
                ในพื้นที่
              </>,
              <>
                อาจใช้พื้นที่ด้านนอกอาคาร
                <br className="sm:hidden block" />
                เป็นพื้นที่สำหรับรับประทานอาหาร
              </>,
              <>
                เลือกใช้เฟอร์นิเจอร์ที่ทำ
                <br />
                ความสะอาดง่าย ดูเรียบร้อย
                <br className="sm:hidden block" />
                โดยพิจารณาวัสดุของ
                <br className="sm:hidden block" />
                เฟอร์นิเจอร์
                <br className="hidden sm:block" />
                ให้เหมาะสม
                <br className="sm:hidden block" />
                ไม่เลอะเป็นคราบ
                <br className="hidden sm:block" />
                หรือสกปรกง่าย
              </>,
              <>
                แยกมุมอาหารและเครื่องดื่ม
                <br className="sm:hidden block" />
                ออกมาจากโซนของพื้นที่
                <br className="sm:hidden block" />
                การเรียนรู้ หรือใช้พื้นที่
                <br className="sm:hidden block" />
                นอกอาคาร
              </>,
            ]}
            className="col-span-6 md:col-auto md:col-start-4 md:col-end-7"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title="ห้องน้ำ"
            tips={[
              <>
                สามารถรองรับผู้ใช้บริการ
                <br />
                ทุกกลุ่ม (Universal Design)
                โดยคำนึงถึงผู้ที่มีข้อจำกัดด้านการเคลื่อนไหวหรือการรับรู้ เช่น
                ผู้ใช้รถเข็น ผู้พิการทางสายตา <br />
                ผู้พิการทางการได้ยิน ผู้สูงอายุ และครอบครัวที่มีเด็กเล็ก
              </>,
              <>
                หากอาคารมีหลายชั้น <br />
                ควรมีห้องน้ำทุกชั้น
              </>,
            ]}
            className="col-span-6 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="ที่จอดรถ"
            tips={[
              "ต้องคำนึงถึงปริมาณที่เพียงพอในการรองรับจำนวนผู้ใช้บริการ และประเภทของยานพาหนะ เช่น ในบางพื้นที่ไม่ควรมีพื้นที่จอดรถจักรยานยนตร์มากจนเกินไป",
              <>
                ควรตั้งอยู่ในจุดที่รถสาธารณะ
                <br className="sm:hidden block" />
                เข้าถึงได้
              </>,
              "มีจุดเชื่อมต่อจากจุดจอดรถกับตัวอาคาร",
            ]}
            className="col-span-6 md:col-span-3"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title="เคาน์เตอร์บริการลูกค้า"
            tips={[
              "มีเจ้าหน้าที่ประจำเคาน์เตอร์",
              "สังเกตเห็นได้ชัด เข้าถึงสะดวก",
            ]}
            className="col-span-6 md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="ห้องอื่นๆตามบริบทพื้นที่"
            tips={[
              <>
                ออกแบบห้องที่มีฟังก์ชันที่
                <br />
                ตอบโจทย์การใช้งาน
                <br />
                ของคนในพื้นที่ เช่น
                <br />
                พื้นที่การเรียนรู้ในสามจังหวัดชายแดนภาคใต้มีห้องละหมาดไว้บริการผู้ใช้บริการที่เป็นมุสลิม
                ซึ่งเป็นประชากรส่วนใหญ่ใน
                <br />
                พื้นที่
              </>,
            ]}
            className="col-span-6 md:col-span-3"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
      </SpaceGroup>

      {openImage ? (
        <ImageModal image={openImage} onClose={() => setOpenImage(null)} />
      ) : null}
    </>
  );
};

export default HoverSpaceGrid;
