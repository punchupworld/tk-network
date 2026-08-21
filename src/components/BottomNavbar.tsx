import React from "react";
import HoverPanel from "@/src/components/HoverPanel";

const BottomNavbar = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[40px] z-30">
      <div className="mx-auto flex w-full max-w-[1200px] justify-end px-2.5 lg:px-0">
        <div className="group/nav pointer-events-auto relative">
          <HoverPanel
            placement="top"
            align="right"
            nowrap={false}
            className="w-[240px]"
            description={
              <>
                หากหน่วยงานของคุณพร้อมเปลี่ยนพื้นที่ในชุมชน
                <br />
                ให้กลายเป็นศูนย์กลางการเรียนรู้เริ่มต้นได้ที่นี่
              </>
            }
            ctaLabel="อ่านเพิ่มเติม"
            ctaHref="#outro-section"
          />
          <a
            href="#outro-section"
            className="flex items-center rounded-full bg-white px-5 py-1.5 font-th desktop-s6-th-700 whitespace-nowrap hover:text-tk-red text-red-100"
          >
            ร่วมเป็นเครือข่าย
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
