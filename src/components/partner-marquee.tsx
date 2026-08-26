"use client";

import React from "react";

export interface PartnerLogo {
  name: string;
  image?: string;
  svg?: React.ReactNode;
  width?: string;
  height?: string;
}

// Client logos: Physiio Connect, Winestreet Media, Corvis, Cadian, Meta Sabers, Quantum VSL
export const clientLogos: PartnerLogo[] = [
  {
    name: "Physiio Connect",
    image: "/images/clients/physiio-connect.png",
    width: "w-[56px] sm:w-[62px]",
    height: "h-[24px] sm:h-[27px]",
  },
  {
    name: "Winestreet Media",
    image: "/images/clients/winestreet.png",
    width: "w-[92px] sm:w-[102px]",
    height: "h-[23px] sm:h-[25px]",
  },
  {
    name: "Corvis",
    image: "/images/clients/corvis.png",
    width: "w-[76px] sm:w-[84px]",
    height: "h-[16px] sm:h-[18px]",
  },
  {
    name: "Cadian",
    image: "/images/clients/cadian.png",
    width: "w-[68px] sm:w-[76px]",
    height: "h-[17px] sm:h-[19px]",
  },
  {
    name: "Meta Sabers",
    image: "/images/clients/meta-sabers.png",
    width: "w-[60px] sm:w-[66px]",
    height: "h-[20px] sm:h-[22px]",
  },
  {
    name: "Quantum VSL",
    image: "/images/clients/quantum-vsl.png",
    width: "w-[115px] sm:w-[126px]",
    height: "h-[15px] sm:h-[17px]",
  },
];

export default function PartnerMarquee() {
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <div className="w-full border-t border-b border-white/[0.08] py-6 sm:py-7 relative z-10 bg-[#070707] overflow-hidden">
      {/* Background Seamless SVG Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="marqueeNoiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.4 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#marqueeNoiseFilter)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-14">
          {/* Left Static Badge */}
          <div className="flex items-center gap-3.5 shrink-0 select-none">
            <div className="text-[#EA7A24] shrink-0">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
              >
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
            </div>
            <div className="text-xs sm:text-[13px] font-extrabold tracking-wider uppercase leading-snug font-sans">
              <div className="text-white">
                TRUSTED BY <span className="text-[#EA7A24]">150+ BUSINESSES</span>
              </div>
              <div className="text-neutral-400 font-bold">
                FOR RELIABLE EXECUTION
              </div>
            </div>
          </div>

          {/* Scrolling Marquee (Dual-track seamless infinite loop with zero jump) */}
          <div
            className="marquee-group relative flex-1 w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            <div className="flex w-max">
              {/* Track 1 */}
              <div className="animate-marquee flex items-center shrink-0 gap-24 sm:gap-32 lg:gap-36 pr-24 sm:pr-32 lg:pr-36">
                {marqueeItems.map((logo, idx) => (
                  <div
                    key={`logo-1-${idx}`}
                    className="group flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-all duration-200 cursor-pointer select-none"
                    title={logo.name}
                  >
                    <div
                      className={`${logo.width} ${logo.height} bg-neutral-400 group-hover:bg-white transition-colors duration-200`}
                      style={{
                        maskImage: `url(${logo.image})`,
                        WebkitMaskImage: `url(${logo.image})`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                      role="img"
                      aria-label={logo.name}
                    />
                  </div>
                ))}
              </div>

              {/* Track 2 (Cloned for 100% seamless infinite loop) */}
              <div className="animate-marquee flex items-center shrink-0 gap-24 sm:gap-32 lg:gap-36 pr-24 sm:pr-32 lg:pr-36" aria-hidden="true">
                {marqueeItems.map((logo, idx) => (
                  <div
                    key={`logo-2-${idx}`}
                    className="group flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-all duration-200 cursor-pointer select-none"
                    title={logo.name}
                  >
                    <div
                      className={`${logo.width} ${logo.height} bg-neutral-400 group-hover:bg-white transition-colors duration-200`}
                      style={{
                        maskImage: `url(${logo.image})`,
                        WebkitMaskImage: `url(${logo.image})`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                      role="img"
                      aria-label={logo.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

