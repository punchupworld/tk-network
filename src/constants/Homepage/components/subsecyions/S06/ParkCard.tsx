"use client";

import { T13 } from "@/src/components/icons/topics";
import CoverSub from "../../CoverSub";
import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";

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
        fill="#FFFFFF"
      />
      <path
        d="M15 14.29L13.445 12.735C13.8803 12.1217 14.0694 11.3674 13.9748 10.6213C13.8802 9.87521 13.5088 9.19188 12.9343 8.70664C12.3597 8.2214 11.6239 7.96964 10.8725 8.00124C10.1212 8.03285 9.40905 8.3455 8.87727 8.87727C8.3455 9.40905 8.03285 10.1212 8.00124 10.8725C7.96964 11.6239 8.2214 12.3597 8.70664 12.9343C9.19188 13.5088 9.87521 13.8802 10.6213 13.9748C11.3674 14.0694 12.1217 13.8803 12.735 13.445L14.29 15L15 14.29ZM11 13C10.6044 13 10.2178 12.8827 9.88886 12.6629C9.55996 12.4432 9.30362 12.1308 9.15224 11.7654C9.00087 11.3999 8.96126 10.9978 9.03843 10.6098C9.1156 10.2219 9.30608 9.86549 9.58579 9.58579C9.86549 9.30608 10.2219 9.1156 10.6098 9.03843C10.9978 8.96126 11.3999 9.00087 11.7654 9.15224C12.1308 9.30362 12.4432 9.55996 12.6629 9.88886C12.8827 10.2178 13 10.6044 13 11C13 11.5304 12.7893 12.0391 12.4142 12.4142C12.0391 12.7893 11.5304 13 11 13Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

export type ParkImage = {
  src: string;
  alt: string;
  height: number;
};

export type ParkCardProps = {
  color: string;
  title: string;
  locationName: string;
  images: ParkImage[];
  highlights: string[];
  challenges: string[];
  descriptions: string[];
  host: string;
  location: string;
  id: string;
};

const ListBlock = ({ label, items }: { label: string; items: string[] }) => {
  return (
    <div className="flex flex-col items-stretch justify-start md:flex-row md:items-start">
      <p className="font-th mobile-s6-th-700 md:desktop-s6-th-700 bg-tk-black text-white py-1 px-2.5 md:flex-1 md:text-nowrap">
        {label}
      </p>
      <div className="flex flex-col border border-tk-black">
        {items.map((item, index) => (
          <div
            key={index}
            className={`px-2.5 py-2 md:px-3.5 md:py-2.5${index > 0 ? " border-t border-tk-black" : ""}`}
          >
            <p className="font-th mobile-s6-th-400 md:desktop-s6-th-400 text-tk-black">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const MetaPair = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-wrap items-center justify-start gap-1 md:justify-center">
      <div className="py-1 px-2.5 border-r border-tk-black border-b">
        <p className="font-th mobile-s7-s8-th-700 md:desktop-s7-th-700 text-tk-black">
          {label}
        </p>
      </div>
      <div className="py-1 px-2.5 border-r border-tk-red border-b">
        <p className="font-th mobile-s7-s8-th-400 md:desktop-s7-th-400 text-tk-black">
          {value}
        </p>
      </div>
    </div>
  );
};

export const ImageModal = ({
  image,
  onClose,
}: {
  image: ParkImage;
  onClose: () => void;
}) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <div
        className="relative max-h-[80vh] w-full max-w-[min(88vw,720px)] border border-tk-red bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] md:max-h-[85vh] md:w-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="ปิด"
          className="absolute -top-3 -right-3 z-10 flex size-8 cursor-pointer items-center justify-center rounded-full bg-tk-red md:-top-4 md:-right-4"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 1L11 11M11 1L1 11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <Image
          src={image.src}
          alt={image.alt}
          width={720}
          height={960}
          className="max-h-[80vh] w-full object-contain md:max-h-[85vh]"
        />
      </div>
    </div>,
    document.body,
  );
};

const ParkCard = ({
  color,
  title,
  locationName,
  images,
  highlights,
  challenges,
  descriptions,
  host,
  location,
  id,
}: ParkCardProps) => {
  const [openImage, setOpenImage] = useState<ParkImage | null>(null);

  return (
    <div className="relative flex w-full flex-col items-start" id={id}>
      <CoverSub color={color} />
      <div className="absolute right-5 top-5 left-5 md:right-10 md:top-10 md:left-auto md:max-w-[70%]">
        <div className="flex flex-col justify-end w-full items-end">
          <div className="px-2.5 py-1.5 bg-tk-black w-fit">
            <h2 className="font-th mobile-s6-th-700 md:desktop-s6-th-700 text-white">
              {title}
            </h2>
          </div>
        </div>
      </div>

      <div
        className="flex w-full flex-col items-center justify-center gap-6 border-x-2 border-b-2 border-white px-5 pb-5 text-white md:gap-10 md:px-10 md:pb-10"
        style={{ backgroundColor: color }}
      >
        <div className="mt-px w-full h-0.5 bg-white" />
        <div className="flex flex-col gap-4 w-full md:gap-5">
          <div className="flex flex-wrap items-end justify-end gap-y-2">
            <div className="relative flex w-20 shrink-0 items-center justify-center md:w-27.5">
              <T13
                fill="#000000"
                stroke="#000000"
                className="h-auto w-full"
                aria-hidden="true"
              />
              <h2 className="absolute inset-0 flex items-center justify-center text-center font-th mobile-s7-s8-th-700 md:desktop-s6-th-700 text-white">
                {locationName}
              </h2>
            </div>
            {images.map((image) => (
              <button
                key={image.src}
                type="button"
                className="min-w-0 flex-1 cursor-pointer border border-tk-black text-left"
                onClick={() => setOpenImage(image)}
                aria-label={`ดูรูป ${image.alt}`}
              >
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={image.height}
                    className="h-[calc(var(--park-image-height)*0.7)] w-full object-cover md:h-(--park-image-height)"
                    style={
                      {
                        "--park-image-height": `${image.height}px`,
                      } as CSSProperties
                    }
                  />
                  <div className="absolute bottom-2 right-2">
                    <ToolBox />
                  </div>
                </div>
              </button>
            ))}
          </div>
          <ListBlock label="จุดเด่น" items={highlights} />
          <ListBlock label="ความท้าทาย" items={challenges} />
          {descriptions.map((description) => (
            <p
              key={description}
              className="font-th mobile-s6-th-400 md:desktop-s6-th-400 text-tk-black"
            >
              {description}
            </p>
          ))}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
            <MetaPair label="หน่วยงานเจ้าภาพ" value={host} />
            <MetaPair label="ทำเลที่ตั้ง" value={location} />
          </div>
        </div>
        <div className="w-full h-0.5 bg-white" />
      </div>
      {openImage ? (
        <ImageModal image={openImage} onClose={() => setOpenImage(null)} />
      ) : null}
    </div>
  );
};

export default ParkCard;
