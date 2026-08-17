import { T08 } from "@/src/components/icons/topics";
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
      width="112"
      height="112"
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M111 5.29268C104.777 5.29268 99.7317 10.3377 99.7317 16.561V95.9756C99.7317 102.199 104.777 107.244 111 107.244V111H1V107.244C7.22332 107.244 12.2683 102.199 12.2683 95.9756V16.561C12.2683 10.3377 7.22332 5.29268 1 5.29268V1H111V5.29268Z"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
};

const Textbox = ({
  stroke,
  className,
}: {
  stroke: string;
  className: string;
}) => {
  return (
    <svg
      width="157"
      height="207"
      viewBox="0 0 157 207"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M156 9C147.231 9 140.122 18.402 140.122 30V178C140.122 189.598 147.231 199 156 199V206H1V199C9.76922 199 16.878 189.598 16.878 178V30C16.878 18.402 9.76922 9 1 9V1H156V9Z"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
};

const BarOne = ({ className }: { className?: string }) => {
  return (
    <svg
      width="155"
      height="140"
      viewBox="0 0 155 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M155 5.46341C146.231 5.46341 139.122 11.8843 139.122 19.8049V120.878C139.122 128.799 146.231 135.22 155 135.22V140H0V135.22C8.76922 135.22 15.878 128.799 15.878 120.878V19.8049C15.878 11.8843 8.76922 5.46341 0 5.46341V0H155V5.46341Z"
        fill="#91C5F4"
      />
    </svg>
  );
};

const BarTwo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="155"
      height="130"
      viewBox="0 0 155 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M155 5.07317C146.231 5.07317 139.122 11.0354 139.122 18.3902V112.244C139.122 119.599 146.231 125.561 155 125.561V130H0V125.561C8.76922 125.561 15.878 119.599 15.878 112.244V18.3902C15.878 11.0354 8.76922 5.07317 0 5.07317V0H155V5.07317Z"
        fill="#91C5F4"
      />
    </svg>
  );
};

const BarThree = ({ className }: { className?: string }) => {
  return (
    <svg
      width="155"
      height="230"
      viewBox="0 0 155 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M155 8.97561C146.231 8.97561 139.122 19.5242 139.122 32.5366V198.585C139.122 211.598 146.231 222.146 155 222.146V230H0V222.146C8.76922 222.146 15.878 211.598 15.878 198.585V32.5366C15.878 19.5242 8.76922 8.97561 0 8.97561V0H155V8.97561Z"
        fill="#91C5F4"
      />
    </svg>
  );
};

const SubSectionOne = () => {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-50">
      <div className="relative flex items-center justify-center">
        <T08
          fill="#f5333f"
          stroke="#f5333f"
          className="size-full"
          aria-hidden="true"
        />
        <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s4-th-700 leading-normal text-white">
          แนวทาง
          <br />
          การจัดสรร
          <br />
          งบประมาณ
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-10 border-2 border-white bg-[#FEE6A6]">
        <p className="font-th desktop-s6-th-400 text-tk-black">
          งบประมาณเป็นหนึ่งในปัจจัยสำคัญที่มีผลต่อการสร้างพื้นที่การเรียนรู้
          หน่วยงานจึงต้องบริหารจัดการงบประมาณอย่างมีประสิทธิภาพ
          และควรพึ่งพาแหล่งงบประมาณจากหลากหลายที่มา เช่น หน่วยงานต้นสังกัด
          เงินบริจาคจากภาคเอกชน ค่าบำรุงห้องสมุดจากสมาชิก และรายได้อื่นๆ เช่น
          การเขียนโครงการขอทุนสนับสนุน
          นอกจากนั้นผู้บริหารของพื้นที่การเรียนรู้ควรยึดหลักความรับผิดชอบต่อสังคม
          ในภาคธุรกิจ (CSR)
          โดยแสวงหาความร่วมมือจากภาคเอกชนในการสนับสนุนด้านเงินทุน
        </p>

        <div className="flex flex-col gap-2.5 justify-end items-end w-full">
          <p className="font-th desktop-s6-th-700 text-tk-black px-2.5 py-1 bg-yellow-700">
            โดยงบประมาณสามารถแบ่งเป็น 2 ประเภท ดังนี้
          </p>
          <div className="flex">
            <div className="relative flex items-center justify-center">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                งบ
                <br />
                ลงทุน
              </p>
            </div>
            <div className="relative flex items-center justify-center ml-[-2px] mr-[-2px]">
              <IconBox
                stroke="#C0A765"
                className="w-[110px] h-[110px] "
                aria-hidden="true"
              />
              <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                งบ
                <br />
                ดำเนินการ
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <div className="p-5 border-y-2 border-l-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              งบลงทุน
            </p>
          </div>
        </div>
        <div
          className="p-10 border-2 border-white bg-pink-100 flex flex-col gap-2.5"
          style={{ height: "stretch" }}
        >
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            งบประมาณสำหรับช่วงเริ่มต้น ส่วนใหญ่จะนำไปใช้ในการก่อสร้างอาคาร
            ตกแต่งพื้นที่ เตรียมเปิดบริการ
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-start" id="subsubtopic13">
        <CoverCap color="#5B73ED" />
        <div className="flex w-full flex-col items-start gap-10 border-x-2 border-white bg-[#5B73ED] px-10 pt-5 pb-10 text-white">
          <div className="border-t-2 border-blue-50 w-full" />
          <div className="w-full flex flex-col gap-2.5">
            <div className="px-5 py-1.5 border-2 border-white rounded-full w-fit">
              <p className="font-th desktop-s6-th-700 text-white">งบก่อสร้าง</p>
            </div>
            <div className="flex justify-between flex-wrap">
              <div className="flex flex-col gap-3 justify-center items-center ">
                <div className="relative flex items-center justify-center">
                  <Textbox
                    stroke="#91C5F4"
                    className="w-[155px] h-[205px] "
                    aria-hidden="true"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-white">
                    งบประมาณ <br />
                    ขึ้นอยู่กับ <br />
                    ประเภทที่ดิน
                  </p>
                </div>
                <p className="font-th desktop-s7-th-700 text-white">
                  การจัดซื้อ / เช่าที่ดิน
                </p>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="relative flex items-center justify-center">
                  <Textbox
                    stroke="#91C5F4"
                    className="w-[155px] h-[205px] "
                    aria-hidden="true"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-white">
                    เฉลี่ยประมาณ <br />
                    25,000 <br />
                    ต่อตารางเมตร
                  </p>
                </div>
                <p className="font-th desktop-s7-th-700 text-white">
                  การก่อสร้าง
                </p>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="relative flex items-center justify-center">
                  <Textbox
                    stroke="#91C5F4"
                    className="w-[155px] h-[205px] "
                    aria-hidden="true"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-white">
                    ขึ้นอยู่กับ <br />
                    การจัดซื้อ <br />
                    อุปกรณ์ <br />
                    และสิ่งอำนวย <br />
                    ความสะดวก
                    <br />
                    ที่จะนำมาใช้
                  </p>
                </div>
                <p className="font-th desktop-s7-th-700 text-white">
                  การตกแต่งภายใน
                </p>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-blue-50 w-full" />
          <div className="border-t-2 border-blue-50 w-full" />
          <div className="w-full flex flex-col gap-10">
            <div className="flex justify-between items-center">
              <div className="px-5 py-1.5 border-2 border-white rounded-full w-fit">
                <p className="font-th desktop-s6-th-700 text-white">
                  งบเตรียมการ
                </p>
              </div>
              <p className="font-th desktop-s6-th-400 text-white">
                กรณีเลือกใช้ระบบการจัดการของ TK Park
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p className="font-th desktop-s6-th-700 text-white">
                    เฉลี่ยประมาณ
                    <br />
                    140,000 บาท
                  </p>
                  <BarOne />
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p className="font-th desktop-s6-th-700 text-white">
                    เฉลี่ยประมาณ
                    <br />
                    130,000 บาท
                  </p>
                  <BarTwo />
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p className="font-th desktop-s6-th-700 text-white">
                    เฉลี่ยประมาณ
                    <br />
                    230,000 บาท
                  </p>
                  <BarThree />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-center max-w-[155px] text-balance">
                  <p className="font-th desktop-s7-th-700 text-white">
                    จัดหาอุปกรณ์ ประกอบการใช้งาน ระบบห้องสมุดอัตโนมัติ (Walai
                    Autolib)
                  </p>
                </div>
                <div className="text-center max-w-[155px] text-balance">
                  <p className="font-th desktop-s7-th-700 text-white">
                    จัดหาอุปกรณ์ ประกอบการการจัด แคตตาล็อก ทรัพยากรสารสนเทศ
                  </p>
                </div>
                <div className="text-center max-w-[155px] text-balance">
                  <p className="font-th desktop-s7-th-700 text-white">
                    จัดหาอุปกรณ์ประกอบ การใช้งานระบบสมาชิก (TK Member)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-blue-50 w-full" />
        </div>
      </div>
      <div className="flex items-start">
        <div className="p-5 border-y-2 border-l-2 border-white bg-yellow-700">
          <div className="relative flex items-center justify-center">
            <IconBox
              stroke="#FFFFFF"
              className="w-[168px] h-[168px]"
              aria-hidden="true"
            />
            <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s5-th-700 text-tk-black">
              งบ
              <br />
              ดำเนินการ
            </p>
          </div>
        </div>
        <div className="p-10 border-2 border-white bg-pink-100 flex flex-col gap-2.5">
          <p className="font-th desktop-s6-th-400 text-tk-black text-balance">
            งบประมาณที่ต้องจัดสรรและบริหารจัดการ
            ประจำปีตลอดระยะเวลาการเปิดให้บริการ
            จำแนกได้เป็นงบสำหรับการจ้างบุคลากร การจัดกิจกรรม
            การจัดซื้อทรัพยากรสารสนเทศเพิ่มเติม รวมทั้งค่าสาธารณูปโภคต่างๆ เช่น
            ค่าน้ำประปา ค่าไฟฟ้า
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-start">
        <CoverSub color="#FFBAA1" />

        <div className="flex w-full flex-col items-center justify-center gap-10 border-x-2 border-b-2 border-white bg-[#FFBAA1] px-10 pb-10 text-white ">
          <div className="border-t-2 border-white w-full" />

          <div className="w-full flex flex-col gap-5">
            <div className="px-5 py-1.5 border-2 border-tk-black rounded-full w-fit">
              <p className="font-th desktop-s6-th-700 text-tk-black">
                งบก่อสร้าง
              </p>
            </div>
            <div className="flex justify-between ">
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="relative flex items-center justify-center">
                  <IconBox
                    stroke="#FFFFFF"
                    className="w-[155px] h-[155px]"
                    aria-hidden="true"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                    งบจ้าง <br />
                    บุคลากร
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="relative flex items-center justify-center">
                  <IconBox
                    stroke="#FFFFFF"
                    className="w-[155px] h-[155px]"
                    aria-hidden="true"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                    งบค่า <br />
                    สาธารณูปโภค
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="relative flex items-center justify-center">
                  <IconBox
                    stroke="#FFFFFF"
                    className="w-[155px] h-[155px]"
                    aria-hidden="true"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                    งบบำรุงรักษา <br />
                    พื้นที่
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-white w-full" />
          <div className="border-t-2 border-white w-full" />
          <div className="w-full flex flex-col gap-5">
            <div className="px-5 py-1.5 border-2 border-tk-black rounded-full w-fit">
              <p className="font-th desktop-s6-th-700 text-tk-black">
                จัดสรรรายปี
              </p>
            </div>
            <div className="flex justify-between ">
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="relative flex items-center justify-center">
                  <IconBox
                    stroke="#FFFFFF"
                    className="w-[155px] h-[155px]"
                    aria-hidden="true"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                    งบจัดหา
                    <br />
                    ทรัพยากร
                    <br />
                    สารสนเทศ
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="relative flex items-center justify-center">
                  <IconBox
                    stroke="#FFFFFF"
                    className="w-[155px] h-[155px]"
                    aria-hidden="true"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                    งบ
                    <br />
                    ประชาสัมพันธ์
                    <br />
                    และจัดกิจกรรม
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="relative flex items-center justify-center">
                  <IconBox
                    stroke="#FFFFFF"
                    className="w-[155px] h-[155px]"
                    aria-hidden="true"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-tk-black">
                    งบจัดหา
                    <br />
                    อุปกรณ์และ
                    <br />
                    บำรุงรักษาระบบ <br />
                    IT
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-white w-full" />
        </div>
      </div>
    </div>
  );
};

export default SubSectionOne;
