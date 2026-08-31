import React from "react";
import CoverSub from "../CoverSub";
import { T03 } from "@/src/components/icons/topics";
import Image from "next/image";
import { asset } from "@/src/lib/asset";
import outroSectionImage from "@/public/images/homepage/outro-section-image.png";

const OutroSection = () => {
  return (
    <div className="relative z-10 max-w-[1200px] mx-auto w-full ">
      <section className="relative mx-auto w-full" id="outro-section">
        <div className="h-screen" />

        <div className="mx-auto w-full max-w-[600px]">
          <div className="relative flex w-full flex-col items-start">
            <CoverSub color="#5B73ED" />
            <div className="absolute md:right-[40px] md:top-[40px] right-1 top-1 w-full h-full">
              <div className="flex flex-col justify-end items-end">
                <p className="font-th desktop-s6-th-400 text-white px-2.5 py-1.5 bg-tk-black w-fit">
                  หากหน่วยงานของคุณ
                  <br className="sm:hidden block" />
                  พร้อมเปลี่ยนพื้นที่ในชุมชน
                </p>
                <p className="font-th desktop-s6-th-400 text-white px-2.5 py-1.5 bg-tk-black w-fit">
                  ให้กลายเป็นศูนย์กลาง
                  <br className="sm:hidden block" />
                  การเรียนรู้
                </p>
                <p className="font-th desktop-s6-th-700 text-white px-2.5 py-1.5 bg-tk-black w-fit">
                  เริ่มต้นได้ที่นี่
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col  justify-center gap-10 border-x-2 border-b-2 border-white bg-[#5B73ED] p-10 text-white ">
              <p className="font-th desktop-s6-th-700 text-white">
                หน่วยงานสามารถใช้คู่มือนี้
                <br className="sm:hidden block" />
                เป็นแนวทางในการออกแบบและ
                <br className="sm:hidden block" />
                พัฒนาพื้นที่
                <br className="hidden sm:block" />
                การเรียนรู้ที่มีชีวิต <br className="sm:hidden block" />
                โดยเริ่มต้นจากศักยภาพและบริบท
                <br className="sm:hidden block" />
                ของพื้นที่ที่มีอยู่
              </p>
              <p className="font-th desktop-s6-th-400 text-white">
                TK Park พร้อมเป็นพันธมิตร
                <br className="sm:hidden block" />
                ในการให้คำปรึกษา ถ่ายทอด
                <br className="sm:hidden block" />
                องค์ความรู้ และสนับสนุนการพัฒนา
                <br className="sm:hidden block" />
                ระบบนิเวศการเรียนรู้ เพื่อสร้างพื้นที่
                <br className="sm:hidden block" />
                ที่ตอบโจทย์ชุมชนและเติบโต
                <br className="sm:hidden block" />
                ได้อย่างยั่งยืน
              </p>
              <div className="flex gap-5 w-full  md:flex-row flex-col">
                <div className="relative flex items-center justify-center">
                  <T03
                    fill="#F5333F"
                    stroke="#F5333F"
                    className="h-[110px] w-[110px]"
                    aria-hidden="true"
                  />
                  <h2 className="mt-2 absolute inset-0 flex items-center justify-center text-center font-th desktop-s6-th-700 text-white">
                    สนใจ
                    <br />
                    เข้าร่วม
                  </h2>
                </div>
                <div className="flex flex-col gap-5 flex-1">
                  <p className="font-th desktop-s6-th-400 text-white">
                    สนใจเข้าร่วมเป็นเครือข่าย TK Park
                    <br />
                    สามารถติดต่อกลับมายังอีเมล
                  </p>
                  <p className="font-th desktop-s6-th-400 text-tk-red py-2.5 px-3.5 bg-white w-full">
                    nwd@tkpark.or.th
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-start items-start flex-col">
                <p className="font-th desktop-s6-th-700 text-white bg-tk-red py-1 px-2.5 w-fit">
                  พร้อมระบุข้อมูลดังนี้
                </p>
                <div className="border-2 border-[#D9D9D9] w-full">
                  <div className="border-b-2 border-[#D9D9D9] py-2.5 px-3.5">
                    <p className="font-th desktop-s6-th-400 text-white">
                      ชื่อ-นามสกุล
                    </p>
                  </div>
                  <div className="border-b-2 border-[#D9D9D9] py-2.5 px-3.5">
                    <p className="font-th desktop-s6-th-400 text-white">
                      ตำแหน่ง
                    </p>
                  </div>
                  <div className="border-b-2 border-[#D9D9D9] py-2.5 px-3.5">
                    <p className="font-th desktop-s6-th-400 text-white">
                      หน่วยงาน / องค์กร
                    </p>
                  </div>
                  <div className="border-b-2 border-[#D9D9D9] py-2.5 px-3.5">
                    <p className="font-th desktop-s6-th-400 text-white">
                      จังหวัด
                    </p>
                  </div>
                  <div className="border-b-2 border-[#D9D9D9] py-2.5 px-3.5">
                    <p className="font-th desktop-s6-th-400 text-white">
                      เบอร์โทรศัพท์
                    </p>
                  </div>
                  <div className="py-2.5 px-3.5">
                    <p className="font-th desktop-s6-th-400 text-white">
                      อีเมล
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-th desktop-s6-th-400 text-white">
                เจ้าหน้าที่จะติดต่อกลับ
                <br />
                พร้อมส่งแบบประเมินข้อมูลเครือข่ายเบื้องต้นเพื่อดำเนินการในขั้นตอนต่อไป
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[600px] mt-[calc(100vh-200px)] pb-10">
          <Image
            src={asset("/img/footer.svg")}
            alt="Outro Section Image"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default OutroSection;
