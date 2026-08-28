import { T04 } from "@/src/components/icons/topics";
import React from "react";
import CoverSub from "../../CoverSub";
import CoverCap from "../../CoverCap";

const IconBox = ({
  stroke,
  className,
}: {
  stroke: string;
  className: string;
}) => {
  return (
    <svg
      width="165"
      height="169"
      viewBox="0 0 165 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M79.5198 1.78751C81.0652 0.737471 83.095 0.737471 84.6404 1.78751L97.2064 10.3258C98.1529 10.969 99.3067 11.2323 100.439 11.0636L115.465 8.82298C117.313 8.54744 119.142 9.42815 120.078 11.0447L127.695 24.1897C128.269 25.1798 129.194 25.9177 130.287 26.2567L144.797 30.7577C146.582 31.3112 147.848 32.8982 147.99 34.7611L149.149 49.9092C149.237 51.0501 149.75 52.1165 150.588 52.8961L161.708 63.2471C163.076 64.5201 163.528 66.499 162.848 68.2393L157.32 82.3902C156.903 83.4561 156.903 84.6396 157.32 85.7055L162.848 99.8564C163.528 101.597 163.076 103.576 161.708 104.849L150.588 115.2C149.75 115.979 149.237 117.046 149.149 118.187L147.99 133.335C147.848 135.198 146.582 136.785 144.797 137.338L130.287 141.839C129.194 142.178 128.269 142.916 127.695 143.906L120.078 157.051C119.142 158.668 117.313 159.548 115.465 159.273L100.439 157.032C99.3067 156.863 98.1529 157.127 97.2064 157.77L84.6404 166.308C83.095 167.358 81.0652 167.358 79.5198 166.308L66.9538 157.77C66.0073 157.127 64.8534 156.863 63.7216 157.032L48.6954 159.273C46.8475 159.548 45.0186 158.668 44.0819 157.051L36.465 143.906C35.8913 142.916 34.9659 142.178 33.873 141.839L19.3627 137.338C17.5782 136.785 16.3126 135.198 16.17 133.335L15.0108 118.187C14.9235 117.046 14.41 115.979 13.5724 115.2L2.4519 104.849C1.08431 103.576 0.632621 101.597 1.31246 99.8564L6.84052 85.7055C7.2569 84.6396 7.2569 83.4561 6.84052 82.3902L1.31246 68.2393C0.632622 66.499 1.08431 64.5201 2.4519 63.2471L13.5724 52.8961C14.41 52.1165 14.9235 51.0501 15.0108 49.9092L16.17 34.7611C16.3126 32.8982 17.5782 31.3112 19.3627 30.7577L33.873 26.2567C34.9659 25.9177 35.8913 25.1798 36.465 24.1897L44.0819 11.0447C45.0186 9.42816 46.8475 8.54744 48.6954 8.82298L63.7216 11.0636C64.8534 11.2323 66.0073 10.969 66.9538 10.3258L79.5198 1.78751Z"
        stroke={stroke}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const SubSectionTwo = () => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center">
        <T04
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          สิทธิประโยชน์
          <br />
          ของเครือข่าย
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-10 border-2 border-white bg-[#FEE6A6]">
        <p className="font-th desktop-s6-th-400 text-tk-black">
          ทุกอย่างต้องเริ่มจาก
          <br className="sm:hidden block" /> “ความพร้อมของเครือข่าย”
          <br className="sm:hidden block" />
          เนื่องจากความแตกต่าง
          <br className="hidden sm:block" />
          ในบริบท
          <br className="sm:hidden block" />
          ทางกายภาพและการบริหาร
          <br className="sm:hidden block" />
          จัดการของหน่วยงานเจ้าภาพ <br className="sm:hidden block" />
          ดังนั้น
          <br className="hidden sm:block" />
          การหารือร่วมกันจึงเป็น
          <br className="sm:hidden block" />
          กระบวนการสำคัญที่จะทำให้
          <br className="sm:hidden block" />
          หน่วยงานในฐานะเครือข่าย
          <br className="sm:hidden block" /> TK Park เข้าใจและต่อยอดได้ว่า
          <br className="sm:hidden block" />
          การสร้างพื้นที่การเรียนรู้ที่เป็น
          <br className="sm:hidden block" />
          หัวใจของชุมชนต้องการอะไร
          <br className="sm:hidden block" />
          ต้องดำเนินการอย่างไรบ้าง
          <br className="sm:hidden block" />
          โดยตัวอย่างด้านล่างเหล่านี้
          <br className="sm:hidden block" />
          คือเครื่องมือที่ทาง TK Park
          <br className="sm:hidden block" />
          สามารถให้คำแนะนำตามความ
          <br className="sm:hidden block" />
          เหมาะสม
          <br className="hidden sm:block" />
          อย่างเต็มกำลัง
        </p>
      </div>
      <div className="flex items-start h-full flex-col md:flex-row">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              โมเดลพื้นที่ <br />
              การเรียนรู้
            </p>
          </div>
        </div>
        <div
          className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5"
          style={{ height: "stretch" }}
        >
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            โมเดลพื้นที่การเรียนรู้
            <br className="sm:hidden block" />
            พร้อมใช้งาน ไม่ว่าจะเป็น
            <br className="hidden sm:block" />
            โมเดล
            <br className="sm:hidden block" />
            ด้านการออกแบบพื้นที่
            <br className="sm:hidden block" /> การบริการ
            <br className="hidden sm:block" /> การบริหารจัดการ
          </p>
        </div>
      </div>
      <div className="flex items-start flex-col md:flex-row">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              คอนเทนต์ <br />
              และกิจกรรม
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-50 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            TK Park รวบรวมแนวคิดและ
            <br className="sm:hidden block" />
            รูปแบบกิจกรรมที่ผ่านการพัฒนา
            <br className="sm:hidden block" />
            และทดลองใช้งานจากพื้นที่
            <br className="sm:hidden block" />
            การเรียนรู้ ทั่วประเทศ เพื่อให้
            <br className="sm:hidden block" />
            หน่วยงานสามารถนำไปประยุกต์
            <br className="sm:hidden block" />
            ใช้ได้ อย่างเหมาะสม
            <br className="hidden sm:block" />
            กับบริบท
            <br className="sm:hidden block" />
            ของตนเอง ทั้งกิจกรรมส่งเสริม
            <br className="sm:hidden block" />
            การอ่าน การเรียนรู้เชิงสร้างสรรค์ <br className="sm:hidden block" />
            เวิร์กช็อป การเรียนรู้ผ่านการเล่น
            <br className="sm:hidden block" />
            ตลอดจนกิจกรรมที่ช่วยสร้าง
            <br className="sm:hidden block" />
            การมีส่วนร่วม ของคนในชุมชน
            <br /> โดยสามารถเลือกปรับรูปแบบ
            <br className="sm:hidden block" /> ระยะเวลา และกลุ่มเป้าหมาย
            <br className="sm:hidden block" />
            ให้สอดคล้องกับศักยภาพ
            <br className="sm:hidden block" />
            ของพื้นที่ได้
          </p>
        </div>
      </div>
      <div className="flex items-start flex-col md:flex-row">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              ระบบ <br />
              และเครื่องมือ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            ระบบและเครื่องมือ
            <br />
            เพื่อช่วยให้การทำงาน <br className="sm:hidden block" />
            สะดวกสบายขึ้น
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-start" id="subsubtopic7">
        <CoverCap color="#F5333F" />
        <div className="flex w-full flex-col items-start gap-10 border-x-2 border-white bg-[#F5333F] px-10 pt-5 pb-10 text-white">
          <div className="flex flex-col sm:flex-row">
            <h2 className="font-th desktop-s6-th-400 px-2.5 py-1 bg-tk-black text-white">
              ระบบและเครื่องมือที่จะได้รับ
            </h2>
            <h2 className="font-th desktop-s6-th-700 px-2.5 py-1 bg-tk-black text-white w-fit">
              มี 4 ระบบ ดังนี้
            </h2>
          </div>
          <div className="flex items-start md:flex-row flex-col">
            <div className="px-2.5 py-1 bg-yellow-700">
              <p className="font-th desktop-s6-th-700 text-white">
                ระบบห้องสมุด
                <br />
                อัตโนมัติ <br />
                (TK Lib)
              </p>
            </div>
            <div className="bg-white border border-yellow-700">
              <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-red border-b border-yellow-700">
                โปรแกรมพื้นฐานที่ช่วย
                <br className="sm:hidden block" />
                บรรณารักษ์จัดการทรัพยากร
                <br />
                อัตโนมัติ ภายในพื้นที่
                <br className="sm:hidden block" />
                การเรียนรู้อย่างครอบคลุม
              </div>
              <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-red border-b border-yellow-700">
                การบริหารจัดการ การจัดเก็บ เลือกสรร จัดหา
              </div>
              <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-red border-b border-yellow-700">
                การประมวลผลและเรียบเรียง
              </div>
              <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-red border-b border-yellow-700">
                การจัดเก็บและค้นคืน
              </div>
              <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-red">
                การให้บริการและการเผยแพร่
              </div>
            </div>
          </div>
          <div className="flex items-start md:flex-row flex-col">
            <div className="px-2.5 py-1 bg-yellow-700">
              <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                My TK
              </p>
            </div>
            <div className="bg-white border border-yellow-700">
              <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-red">
                แอปพลิเคชันที่รวบรวม
                <br className="sm:hidden block" />
                บริการของ TK Park ไว้ใน
                <br className="sm:hidden block" />
                ที่เดียว สมาชิกสามารถเข้าถึง
                <br className="sm:hidden block" />
                บริการห้องสมุดและกิจกรรม
                <br className="sm:hidden block" />
                ต่างๆ
                <br className="hidden sm:block" /> ได้อย่างสะดวกสบาย
                <br className="sm:hidden block" />
                ผ่านสมาร์ตโฟน <br className="sm:hidden block" />
                ไม่ว่าจะเป็นการค้นหา
                <br />
                การจองหนังสือ การสมัคร
                <br className="sm:hidden block" />
                เข้าร่วมกิจกรรม โดยสามารถ <br />
                ใช้บัตรสมาชิกดิจิทัล <br className="sm:hidden block" />
                (QR Code) ตรวจสอบข้อมูล
                <br className="sm:hidden block" />
                สมาชิก และเชื่อมต่อบริการ
                <br className="sm:hidden block" />
                อ่านหนังสือออนไลน์ <br className="sm:hidden block" />
                (TK Read) ได้ทุกที่ทุกเวลา
              </div>
            </div>
          </div>
          <div className="flex items-start md:flex-row flex-col">
            <div className="px-2.5 py-1 bg-yellow-700">
              <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                บริการ
                <br />
                ส่งหนังสือ <br />
                (TK Delivery)
              </p>
            </div>
            <div className="bg-white border border-yellow-700">
              <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-red">
                บริการส่งหนังสือถึงมือผู้อ่านผ่านไปรษณีย์
              </div>
            </div>
          </div>
          <div className="flex items-start md:flex-row flex-col">
            <div className="px-2.5 py-1 bg-yellow-700">
              <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                แพลตฟอร์ม
                <br />
                TK Read
              </p>
            </div>
            <div className="bg-white border border-yellow-700">
              <div className="px-[14px] py-2.5 font-th desktop-s6-th-400 text-tk-red">
                แอปพลิเคชันห้องสมุดดิจิทัลของ TK Park ที่รวบรวม
                <br />
                อีบุ๊ก อีแม็กกาซีน หนังสือเสียง หรือแม้กระทั่งคอร์ส <br />
                ออนไลน์ไว้ในที่เดียว
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col md:flex-row">
        <div className="p-5 border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              เวิร์กช็อป
              <br />
              พัฒนา <br />
              บุคลากร
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-orange-300 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            จัดอบรมกระบวนการพัฒนา
            <br className="sm:hidden block" />
            ศักยภาพบุคลากรผ่านการ
            <br className="sm:hidden block" />
            ฝึกปฏิบัติงาน <br />
            (On-the-Job Training) <br className="sm:hidden block" />
            ก่อนเปิดบริการเกี่ยวกับ
            <br className="sm:hidden block" />
            การทำงานหลังบ้าน
            <br />
            ที่ครอบคลุมทุกด้าน
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-start">
        <CoverSub color="#FEDFCA" />
        <div className="absolute right-[40px] top-[48px]">
          <div className=" px-5 py-1.5 bg-tk-black flex md:flex-row flex-col md:gap-5 gap-0">
            <h2 className="font-th desktop-s6-th-400 text-white">
              On-the-Job Training
            </h2>
            <h2 className="font-th desktop-s6-th-700 text-white">
              มีรายละเอียดเบื้องต้นดังนี้
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-10 border-x-2 border-b-2 border-white bg-[#FEDFCA] px-10 pb-10">
          <div className="mt-px flex items-start md:flex-row flex-col">
            <div className=" px-5 py-1.5 bg-tk-black">
              <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                ขั้นตอนที่ 1
              </p>
            </div>
            <div className="px-[14px] py-2.5 border border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                อบรมความรู้ด้านบรรณารักษ์
                <br className="sm:hidden block" />
                และการบริหารจัดการ
                <br />
                ห้องสมุด เสริมสร้าง
                <br className="sm:hidden block" />
                องค์ความรู้พื้นฐาน
                <br className="sm:hidden block" />
                ที่จำเป็นสำหรับการดำเนิน
                <br className="sm:hidden block" />
                งานห้องสมุด เช่น การพัฒนา
                <br className="sm:hidden block" />
                ทรัพยากรสารสนเทศ <br className="sm:hidden block" />
                การคัดเลือกหนังสือ
                <br className="sm:hidden block" />
                และสื่อการเรียนรู้
              </p>
            </div>
          </div>
          <div className="flex items-start md:flex-row flex-col">
            <div className="px-5 py-1.5 bg-tk-black">
              <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                ขั้นตอนที่ 2
              </p>
            </div>
            <div className="px-[14px] py-2.5 border border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                อบรมการใช้งานระบบ
                <br className="sm:hidden block" />
                ห้องสมุดอัตโนมัติและระบบ
                <br className="sm:hidden block" />
                สมาชิก พัฒนาทักษะ
                <br className="sm:hidden block" />
                การใช้งานระบบห้องสมุด
                <br className="sm:hidden block" />
                อัตโนมัติและเครื่องมือดิจิทัล
                <br className="sm:hidden block" />
                ที่ใช้ในการบริหารจัดการ
                <br className="sm:hidden block" />
                ห้องสมุด เช่น การยืม–คืน
                <br className="sm:hidden block" />
                ทรัพยากร
              </p>
            </div>
          </div>
          <div className="flex items-start md:flex-row flex-col">
            <div className="px-5 py-1.5 bg-tk-black">
              <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                ขั้นตอนที่ 3
              </p>
            </div>
            <div className="px-[14px] py-2.5 border border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                อบรมกิจกรรมส่งเสริม
                <br className="sm:hidden block" />
                การเรียนรู้และแนวทาง <br />
                การจัดกิจกรรม เสริมสร้าง
                <br className="sm:hidden block" />
                ความรู้และทักษะในการ
                <br className="sm:hidden block" />
                ออกแบบและดำเนินกิจกรรม
                <br className="sm:hidden block" />
                ให้สอดคล้องกับบริบทของ
                <br className="sm:hidden block" />
                พื้นที่และกลุ่มเป้าหมาย
                <br className="sm:hidden block" />
                และสร้างการมีส่วนร่วม
                <br className="sm:hidden block" />
                กับทุกภาคส่วนในพื้นที่ <br className="sm:hidden block" />
                ทั้งภาครัฐ ภาคเอกชน <br className="sm:hidden block" />
                ภาคประชาสังคม สถานศึกษา <br className="sm:hidden block" />
                และชุมชน
              </p>
            </div>
          </div>
          <div className="flex items-start md:flex-row flex-col">
            <div className="px-5 py-1.5 bg-tk-black">
              <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                ขั้นตอนที่ 4
              </p>
            </div>
            <div className="px-[14px] py-2.5 border border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                อบรมด้านการประชาสัมพันธ์
                <br className="sm:hidden block" />
                และการใช้อัตลักษณ์ของ
                <br className="sm:hidden block" /> องค์กร (Corporate{" "}
                <br className="sm:hidden block" />
                Identity: CI) ของ TK Park
                <br className="sm:hidden block" />
                พัฒนาความรู้ความเข้าใจ
                <br className="sm:hidden block" />
                เกี่ยวกับการสื่อสาร
                <br className="sm:hidden block" />
                ประชาสัมพันธ์ การสร้าง
                <br className="sm:hidden block" />
                การรับรู้และภาพลักษณ์
                <br className="sm:hidden block" />
                องค์กรให้สอดคล้องกัน
                <br className="sm:hidden block" /> เช่น การจัดทำสื่อ
                <br className="sm:hidden block" />
                ประชาสัมพันธ์ <br className="hidden sm:block" /> การใช้งาน
                <br className="sm:hidden block" />
                ตราสัญลักษณ์ สี รูปแบบ
                <br className="sm:hidden block" />
                ตัวอักษร และองค์ประกอบ
                <br className="sm:hidden block" />
                การสื่อสารต่างๆ
              </p>
            </div>
          </div>
          <div className="flex items-start md:flex-row flex-col">
            <div className="px-5 py-1.5 bg-tk-black">
              <p className="font-th desktop-s6-th-700 text-white text-nowrap">
                ขั้นตอนที่ 5
              </p>
            </div>
            <div className="px-[14px] py-2.5 border border-tk-black">
              <p className="font-th desktop-s6-th-400 text-tk-black">
                เรียนรู้งานบริการจากพื้นที่
                <br className="sm:hidden block" />
                ต้นแบบต่างๆ ของ TK Park
                <br className="sm:hidden block" />
                เรียนรู้การปฏิบัติงานจริง
                <br className="sm:hidden block" />
                จากอุทยานการเรียนรู้ <br />
                TK Park ชั้น 8 ศูนย์การค้า
                <br className="sm:hidden block" />
                เซ็นทรัลเวิลด์ ซึ่งเป็นพื้นที่
                <br className="sm:hidden block" />
                ต้นแบบ โดยสังเกตการณ์และ
                <br className="sm:hidden block" />
                ฝึกปฏิบัติงานภายใต้ <br className="hidden sm:block" />
                การดูแล
                <br className="sm:hidden block" />
                ของเจ้าหน้าที่ผู้มี
                <br className="sm:hidden block" />
                ประสบการณ์เพื่อให้บริการ
                <br className="sm:hidden block" />
                ผู้ใช้งานได้อย่างตรงจุด <br className="sm:hidden block" />
                รวมถึงการบริหารจัดการ <br />
                พื้นที่การเรียนรู้ และปัญหา
                <br className="sm:hidden block" />
                เฉพาะหน้าต่างๆ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSectionTwo;
