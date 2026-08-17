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

const HoverCell = ({
  title,
  description,
  image,
  tips,
  className,
  onOpenImage,
}: {
  title: string;
  description?: string;
  image?: BoxImage;
  tips: string[];
  className: string;
  onOpenImage: (image: BoxImage) => void;
}) => {
  return (
    <div
      className={`group relative flex items-center justify-center bg-blue-200 p-10 ${className}`}
    >
      <p className="font-th desktop-s5-th-700 text-white">{title}</p>
      <div className="absolute inset-0 z-10 hidden overflow-y-auto overscroll-contain bg-blue-700 p-10 group-hover:block">
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
                  key={`${index}-${tip.slice(0, 24)}`}
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
      <div className="absolute right-10 bottom-10 z-20 rounded-[10px] bg-blue-700 p-2.5 group-hover:bg-[#D9D9D9]">
        <span className="group-hover:hidden">
          <SidePanel />
        </span>
        <span className="hidden group-hover:block">
          <ChevronDown />
        </span>
      </div>
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
      <div className="py-3.5 px-5 border-t-2 border-x-2 border-white bg-blue-700">
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
      className={`grid grid-cols-6 w-full h-[344px]${
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
        className="flex w-full flex-col items-start"
      >
        <SpaceRow>
          <HoverCell
            title="ห้องสมุดมีชีวิต"
            description="ให้บริการด้านค้นคว้าข้อมูล โดยมีหนังสือเกมสร้างสรรค์ และสื่อมัลติมีเดียหลากหลาย เช่น หนังสือ วารสาร สื่อเรียนรู้ อิเล็กทรอนิกส์ทั้งไทยและสากล"
            image={BOX_IMAGE}
            tips={[
              "จัดหาสื่อเรียนรู้ใหม่ๆ อยู่เสมอ เช่น บรรณารักษ์คัดเลือกสื่อทุกไตรมาส เก็บข้อมูลจากความสนใจและข้อเสนอแนะของผู้ใช้งาน",
              "ควรปรับเปลี่ยนให้ตอบโจทย์การใช้งาน และสร้างประสบการณ์ใหม่ๆ",
            ]}
            className="col-span-4 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="ห้องเด็ก"
            description="บรรยาการแห่งการเรียนรู้ที่ทำให้เด็กๆรู้สึกสนุกสนาน และเหมาะ กับช่วงวัย ผ่านการเล่น สระน้ำความรู้ (Reading Pool) บ้านต้นไม้ และบันไดรักการอ่าน พร้อมกิจกรรมฝึกทักษะพัฒนา สมองแบบบูรณาการ (Brain-based Learning)"
            image={BOX_IMAGE_2}
            tips={[
              "ออกแบบสภาพแวดล้อมโดย เน้นที่ความปลอดภัยของเด็ก เป็นสำคัญ และจัดหาเฟอร์นิเจอร์ ที่เหมาะสมกับการใช้งาน",
              "จัดหาหนังสือและกิจกรรม ส่งเสริมการพัฒนาทักษะสำหรับ เด็กและผู้ปกครอง เด็กๆ สามารถเรียนรู้ได้ด้วยตัวเอง อย่างเพลิดเพลิน ส่วนผู้ปกครองก็สามารถค้นคว้าและทำกิจกรรมร่วมกันได้",
              "มีเจ้าหน้าที่ผู้เชี่ยวชาญด้านการดูแลเด็กปฐมวัย",
            ]}
            className="col-span-2 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title="ห้องเงียบ"
            description="พื้นที่สงบสำหรับผู้ที่ต้องการใช้ สมาธิในการอ่านและค้นคว้า ข้อมูลความรู้จากหนังสืออ้างอิง"
            image={BOX_IMAGE_3}
            tips={[
              "ควรใช้วัสดุเก็บเสียงกั้นพื้นที่ และแยกโซนนี้ออกมาจากพื้นที่ ที่ต้องใช้เสียง",
            ]}
            className="col-span-2 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="Mind Room"
            description="จุดนัดพบเพื่อจุดประกายและแลกเปลี่ยนความคิดเห็นของคนรุ่นใหม่ที่สนใจการเรียนรู้เฉพาะทางด้านต่างๆ ตามแนวทางเศรษฐกิจสร้างสรรค์ เช่น สถาปัตยกรรม ศิลปะการแสดง แฟชัน ภาพยนตร์ ดนตรี"
            image={BOX_IMAGE_4}
            tips={[
              "บริหารจัดการหนังสือหายากหรือหนังสือมูลค่าสูงอย่าง ละเอียดรอบคอบ",
              "ควรตั้งอยู่บริเวณด้านหน้า เพื่อแนะนำการบริการความรู้ แก่ผู้ใช้งาน",
              "มีบุคลากรที่คอยอัพเดท ข้อมูล คัดเลือกทรัพยากร การเรียนรู้ใหม่เป็นประจำ",
            ]}
            className="col-span-4 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title="ห้องสมุดไอที"
            description="พื้นที่ส่งเสริมทักษะความรู้ด้านไอที พื้นที่ส่งเสริมทักษะความรู้ด้านไอที โดยให้บริการหนังสือและสื่อความรู้ด้านไอที ที่หลากหลาย พร้อมบริการคอมพิวเตอร์"
            image={BOX_IMAGE_5}
            tips={[
              "อัพเดทกิจกรรมด้านไอทีอย่างสม่ำเสมอทั้งระดับพื้นฐานและเฉพาะทาง (อาจต่อยอดเป็นอาชีพได้)",
              "ควรมีบริการอินเตอร์เน็ตและมีเจ้าหน้าที่เทคนิคคอยดูแล",
              "เฟอร์นิเจอร์สำหรับการนั่งทำงานกับคอมพิวเตอร์",
              "เฟอร์นิเจอร์สำหรับการนั่งทำงานกับคอมพิวเตอร์",
            ]}
            className="col-span-4 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="ห้องสมุดดนตรี"
            description="พื้นที่ที่มีทั้งหนังสือ แท็ปเล็ต ห้องสมุดดนตรี TK และเครื่อง ดนตรีให้ลองสัมผัส ผู้ใช้งาน สามารถค้นคว้าข้อมูลเกี่ยวกับ ดนตรีจากทุกมุมโลก และที่สำคัญคือสามารถ ร้อง เล่น ฟัง ในพื้นที่นี้ได้"
            image={BOX_IMAGE_6}
            tips={[
              "จัดหาอุปกรณ์และเครื่องดนตรีที่สอดรับกับความต้องการของผู้ใช้",
              "จัดกิจกรรมด้านดนตรีอย่างสม่ำเสมอ",
              "มีเจ้าหน้าที่ผู้เชี่ยวชาญให้บริการปรึกษาด้านดนตรีทั้งในแง่ทฤษฎีและปฏิบัติ ผ่านการร้อง เล่น ฟัง",
            ]}
            className="col-span-2 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
      </SpaceGroup>

      <SpaceGroup
        title="พื้นที่สำหรับจัดกิจกรรมหรือเช่า"
        className="flex w-full flex-col items-start max-w-[600px]"
      >
        <SpaceRow>
          <HoverCell
            title="ห้องฉายภาพยนตร์"
            description="พื้นที่สำหรับการฉายภาพยนตร์คุณภาพหลากหลายประเภท ทั้งภาพยนตร์สั้น แอนิเมชันทั้งไทยและต่างประเทศ รวมถึงฉายผลงานสร้างสรรค์ของเยาวชนรุ่นใหม่ พร้อมการแลกเปลี่ยนเรียนรู้กับวิทยากร"
            image={BOX_IMAGE_7}
            tips={[
              "ฉายภาพยนตร์ใหม่ๆ เป็นประจำ โดยอาจเปิดรับความคิดเห็นของผู้ใช้งานต่อภาพยนตร์ที่ต้องการชม",
              "จัดหาภาพยนตร์ที่ถูกลิขสิทธิ์",
            ]}
            className="col-span-3 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="ลานสานฝัน"
            description="ลานเปิดกว้างสำหรับทุกเพศทุกวัย ไม่ว่าใครก็สามารถมาแสดงผลงาน ความคิด ความสามารถ หรือจัดกิจกรรมสร้างสรรค์ได้ทุกประเภท เช่น การร้องเพลง เล่นละคร พร้อมอุปกรณ์แสงและเสียงที่ได้มาตรฐานไว้บริการ"
            image={BOX_IMAGE_8}
            tips={[
              "จัดกิจกรรมส่งเสริมการเรียนรู้เป็นประจำ โดยมีเจ้าหน้าที่เป็นวิทยากรนำกิจกรรม หรือเชิญวิทยากรจากภายนอก",
            ]}
            className="col-span-3 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title="ศูนย์การเรียนรู้อเนกประสงค์"
            description="พื้นที่เอนกประสงค์สำหรับการเรียนรู้ทุกรูปแบบ เช่น การสัมมนา การอบรมเชิงปฏิบัติการ การเรียนรู้เชิงสาระบันเทิง รวมไปถึงการแสดงดนตรี ละครเวที และศิลปะการแสดงแขนงต่างๆ"
            image={BOX_IMAGE_9}
            tips={[
              "ออกแบบพื้นที่ให้ยืดหยุ่นรองรับกิจกรรมหลายรูปแบบ เช่น ปรับเปลี่ยนให้ฉายภาพยนตร์ จัดงานสัมมนา จัดงานแถลงข่าวได้",
              "จัดทำระบบการจองล่วงหน้าสำหรับบุคคลภายนอก",
            ]}
            className="col-span-6 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
      </SpaceGroup>

      <SpaceGroup
        title="พื้นที่ใช้สอยภายในอาคาร"
        className="flex w-full flex-col items-end max-w-[600px]"
      >
        <SpaceRow>
          <HoverCell
            title="ที่จอดรถ"
            tips={[
              "ต้องคำนึงถึงปริมาณที่เพียงพอในการรองรับจำนวนผู้ใช้บริการ และประเภทของยานพาหนะ เช่น ในบางพื้นที่ไม่ควรมีพื้นที่จอดรถจักรยานยนตร์มากจนเกินไป",
              "ต้องคำนึงถึงปริมาณที่เพียงพอในการรองรับจำนวนผู้ใช้บริการ และประเภทของยานพาหนะ เช่น ในบางพื้นที่ไม่ควรมีพื้นที่จอดรถจักรยานยนตร์มากจนเกินไป",
              "มีจุดเชื่อมต่อจากจุดจอดรถกับตัวอาคาร",
            ]}
            className="col-start-4 col-end-7"
            onOpenImage={setOpenImage}
          />
        </SpaceRow>
        <SpaceRow bordered>
          <HoverCell
            title="ห้องน้ำ"
            tips={[
              "สามารถรองรับผู้ใช้บริการทุกกลุ่ม (Universal Design) โดยคำนึงถึงผู้ที่มีข้อจำกัดด้านการเคลื่อนไหวหรือการรับรู้ เช่น ผู้ใช้รถเข็น ผู้พิการทางสายตา ผู้พิการทางการได้ยิน ผู้สูงอายุ และครอบครัวที่มีเด็กเล็ก",
              "หากอาคารมีหลายชั้น ควรมีห้องน้ำทุกชั้น",
            ]}
            className="col-span-3 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="ห้องอื่นๆตามบริบทพื้นที่"
            tips={[
              "ออกแบบห้องที่มีฟังก์ชันที่ตอบโจทย์การใช้งานของคนในพื้นที่ เช่น พื้นที่การเรียนรู้ในสามจังหวัดชายแดนภาคใต้มีห้องละหมาดไว้บริการผู้ใช้บริการที่เป็นมุสลิม ซึ่งเป็นประชากรส่วนใหญ่ในพื้นที่",
            ]}
            className="col-span-3"
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
            className="col-span-3 border-r-2 border-white"
            onOpenImage={setOpenImage}
          />
          <HoverCell
            title="มุมอาหารเครื่องดื่ม"
            tips={[
              "แจ้งข้อตกลงในการเก็บและทิ้งอย่างชัดเจนหากผู้ใช้บริการต้องการนำเครื่องดื่มเข้ามาในพื้นที่",
              "อาจใช้พื้นที่ด้านนอกอาคารเป็นพื้นที่สำหรับรับประทานอาหาร",
              "เลือกใช้เฟอร์นิเจอร์ที่ทำความสะอาดง่าย ดูเรียบร้อย โดยพิจารณาวัสดุของเฟอร์นิเจอร์ให้เหมาะสม ไม่เลอะเป็นคราบหรือสกปรกง่าย",
              "แยกมุมอาหารและเครื่องดื่มออกมาจากโซนของพื้นที่การเรียนรู้ หรือใช้พื้นที่นอกอาคาร",
            ]}
            className="col-span-3"
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
