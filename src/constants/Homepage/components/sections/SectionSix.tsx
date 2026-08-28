import Image from "next/image";
import { T11, T12, T13 } from "@/src/components/icons/topics";
import CoverCap from "../CoverCap";
import SubSectionOne from "../subsecyions/S06/SubSectionOne";
import SubSectionTwo from "../subsecyions/S06/SubSectionTwo";
import SubSectionThree from "../subsecyions/S06/SubSectionThree";

const IconOne = ({ className }: { className?: string }) => {
  return (
    <svg
      width="62"
      height="48"
      viewBox="0 0 62 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M29.4628 41.2577C40.1164 41.2577 48.7529 32.6213 48.7529 21.9677C48.7529 11.3142 40.1164 2.67773 29.4628 2.67773C18.8093 2.67773 10.1729 11.3142 10.1729 21.9677C10.1729 32.6213 18.8093 41.2577 29.4628 41.2577Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.1229 6.61808C41.6929 7.04808 42.2329 7.52808 42.7629 8.02808C48.0429 5.72808 51.9729 5.11808 53.1929 6.76808C55.5029 9.88808 47.2429 19.8981 34.7629 29.1281C22.2729 38.3581 10.2828 43.3081 7.97285 40.1881C6.75285 38.5381 8.48286 34.9581 12.2329 30.5881C11.9029 29.9381 11.6129 29.2781 11.3629 28.6081C3.60286 36.3181 -0.497124 42.9981 1.50288 45.7081C4.50288 49.7681 20.1129 43.3281 36.3729 31.3181C52.6229 19.3081 63.3629 6.27808 60.3629 2.21808C58.3629 -0.491922 50.7729 1.46808 41.1229 6.62808V6.61808Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IconTwo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="59"
      height="70"
      viewBox="0 0 59 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M26.038 37.4945C26.8912 29.1265 22.1 21.784 15.3364 21.0943C8.57286 20.4046 2.39822 26.6291 1.54496 34.997C0.691706 43.3649 5.48294 50.7075 12.2465 51.3972C19.0101 52.0869 25.1847 45.8624 26.038 37.4945Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M20.4597 36.6861C20.4733 32.3397 18.5726 28.8102 16.2144 28.8028C13.8561 28.7954 11.9333 32.3129 11.9197 36.6593C11.9061 41.0058 13.8068 44.5353 16.165 44.5427C18.5232 44.5501 20.446 41.0326 20.4597 36.6861Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M39.8729 5.19117C24.9429 -3.07883 15.2529 17.5912 13.7529 21.0612C14.2729 21.0312 14.8029 21.0412 15.3329 21.1012C17.3229 21.3012 19.1529 22.0912 20.7029 23.3012C32.5729 3.14117 43.0329 8.37116 44.5229 9.26116C43.3829 7.68116 41.8629 6.30116 39.8629 5.20116L39.8729 5.19117Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.2927 41.9519C45.7827 42.7819 47.6827 44.2819 48.6027 46.3919C48.9527 47.1919 49.1427 48.0419 49.1827 48.9119C51.4727 45.4219 60.5427 30.8519 57.2427 19.0819C52.9027 3.62188 34.7827 1.17188 34.7827 1.17188C51.6027 8.28188 51.7827 25.6019 43.2927 41.9419V41.9519Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.1428 43.3817L48.3528 38.6317C48.7928 37.6917 49.9728 37.3717 50.8328 37.9617C51.4628 38.4017 51.7128 39.2117 51.4528 39.9217C50.8328 41.5817 49.6728 44.5417 48.6128 46.3917C47.0828 49.0717 46.1528 43.3817 46.1528 43.3817H46.1428Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.963 1.96105C23.593 -3.65895 13.3829 17.121 11.5229 21.431C12.2529 21.2211 12.9929 21.1011 13.7529 21.0511C15.2529 17.5911 24.9429 -3.07895 39.8729 5.18105C54.8729 13.4911 43.2529 37.441 41.1929 41.411C41.9329 41.531 42.6329 41.711 43.3029 41.931C51.7029 25.4611 55.623 8.85105 37.973 1.95105L37.963 1.96105Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M37.1191 63.1124C45.8387 59.3156 50.9733 51.7962 48.5877 46.3174C46.202 40.8385 37.1994 39.475 28.4798 43.2718C19.7602 47.0686 14.6256 54.588 17.0113 60.0668C19.397 65.5457 28.3996 66.9092 37.1191 63.1124Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M36.3722 61.5433C40.7941 59.3222 43.5208 55.8132 42.4623 53.7059C41.4038 51.5985 36.9609 51.6908 32.539 53.9119C28.117 56.133 25.3903 59.642 26.4488 61.7493C27.5073 63.8567 31.9502 63.7644 36.3722 61.5433Z"
        fill="#FDF1BD"
        stroke="#FFFAEA"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};
function SectionCover() {
  return (
    <div className="flex w-full max-w-[602px] flex-col items-start">
      <CoverCap />
      <div className="flex w-full flex-col items-start gap-2.5 border-x-2 border-white bg-[#4d2f2f] p-10 text-white">
        <h2 className="font-th desktop-s3-th-700 leading-[1.35]">เปิดบริการ</h2>
        <p className=" font-en desktop-s5-400 leading-normal">The Opening</p>
        <div className="flex w-full flex-col items-stretch md:flex-row md:items-end">
          <div className="flex w-full flex-col md:w-auto">
            <div className="border-x border-t border-white px-[14px] py-[10px] md:border-b md:border-r-0">
              <p className="font-th desktop-s6-th-400 text-white">
                ทดลองเปิดบริการ
                <br className="hidden md:inline" />
                เพื่อทดสอบระบบ
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col md:w-auto">
            <div className="border-x border-t border-white px-[14px] py-[10px] md:border-b md:border-r-0">
              <p className="font-th desktop-s6-th-400 text-white">
                นำข้อเสนอแนะ
                <br className="hidden md:inline" />
                จากผู้ใช้บริการ
                <br className="hidden md:inline" />
                และเจ้าหน้าที่
                <br className="hidden md:inline" />
                มาปรับปรุง
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col md:w-auto">
            <div className="border-x border-t border-white px-[14px] py-[10px] md:border-b ">
              <p className="font-th desktop-s6-th-400 text-white">
                เปิดให้
                <br className="hidden md:inline" />
                บริการ
                <br className="hidden md:inline" />
                อย่างเป็น
                <br className="hidden md:inline" />
                ทางการ
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col md:w-auto md:flex-1">
            <div className="border border-white px-[14px] py-[10px] md:border-l-0">
              <p className="font-th desktop-s6-th-400 text-white">
                ประชาสัมพันธ์และจัดกิจกรรม <br className="hidden md:inline" />
                เปิดตัว
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="w-full rotate-180">
          <CoverCap />
        </div>
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div
      className="relative aspect-[602/420] w-full max-w-[602px]"
      aria-label="คำกล่าวเกี่ยวกับการพัฒนาพื้นที่การเรียนรู้ท้องถิ่น"
    >
      <div className="absolute left-[21.2625%] top-0 h-[78.3333%] w-[78.4053%] border-2 border-white bg-[#ffbaa1]" />
      <blockquote className="absolute left-0 top-[18.0952%] flex h-[81.9048%] w-[87.0432%] items-center justify-center border-2 border-white bg-[#f5333f] p-2.5 text-center text-white">
        <p className="font-th desktop-s5-th-700 leading-normal">
          การเปิดบริการ
          <br />
          คือการส่งมอบพื้นที่แห่งการเรียนรู้ให้ชุมชน <br />
          และเปิดโอกาสให้การเรียนรู้เติบโตไปพร้อมกับผู้คน
        </p>
      </blockquote>
    </div>
  );
}

function KnowledgeBox() {
  return (
    <div className="relative flex h-auto w-full max-w-[602px] flex-col items-stretch md:h-[484px] md:flex-row md:items-end">
      <div className="flex h-auto w-fit shrink-0 items-center justify-center border-t-2 border-x-2 border-white bg-[#c0a765] px-10 py-10 text-center text-[#1d252c] md:h-[382px] md:w-[39.535%] md:border-r-0 md:border-b-2 md:py-0">
        <p className="font-th desktop-s5-th-700 leading-normal">
          ขั้นตอนนี้
          <br />
          ต้องรู้อะไรบ้าง
        </p>
      </div>
      <div className="relative h-[484px] w-full min-w-0 overflow-clip border-2 border-white bg-[#fdf1bd] md:flex-1">
        <IconOne className="pointer-events-none absolute left-[79px] top-[56px] z-0" />
        <IconTwo className="pointer-events-none absolute right-[39px] top-[253px] z-0" />
        <div className="absolute bottom-[259px] right-0 z-10 flex size-[168px] items-center justify-center">
          <T12
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            แนะนำ
            <br />
            กิจกรรม
          </p>
        </div>
        <div className="absolute top-[145px] left-[-20px] z-10 flex size-[168px] items-center justify-center">
          <T13
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            ตัวอย่าง
            <br />
            พื้นที่การเรียนรู้
          </p>
        </div>
        <div className="absolute left-1/2 bottom-0 z-10 flex size-[168px] -translate-x-1/2 items-center justify-center">
          <T11
            fill="#f5333f"
            stroke="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          />
          <p className="relative w-[129px] text-center font-th desktop-s6-th-700 leading-normal text-white">
            รูปแบบบริการ
            <br />
            ตามกลุ่มเป้าหมาย
          </p>
        </div>
      </div>
    </div>
  );
}

const SectionSix = () => {
  return (
    <section
      className="relative z-10 mx-auto min-h-screen w-full max-w-300"
      id="section6"
    >
      <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
      <div className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25">
        <SectionCover />
        <QuoteSection />
        <KnowledgeBox />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic11"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionOne />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic12"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionTwo />
      </div>
      <div
        className="flex min-h-screen items-center justify-center px-4 py-10 flex-col gap-25"
        id="subtopic13"
      >
        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-100px)]" />
        <SubSectionThree />
      </div>
    </section>
  );
};

export default SectionSix;
