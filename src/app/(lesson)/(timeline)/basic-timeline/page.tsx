"use client";

import FredImage, { fredColors } from "@/components/elements/fred-img";
import MarBg from "@/components/mar-bg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function BasicTimeline() {
  useGSAP(() => {
    gsap.set("#demo", { scale: 0.7 });
    gsap.set("#freds .fred", { opacity: 0, y: 200 });
    gsap
      .timeline()
      .from("#demo", {
        opacity: 0,
        duration: 1,
        scale: 1,
      })
      .from("#title", { opacity: 0, scale: 0, ease: "back" })
      .to("#freds .fred", {
        y: 0,
        stagger: 0.1,
        opacity: 1,
        duration: 0.8,
        ease: "back",
      })
      .from("#time", { xPercent: 100, duration: 0.2 });
  });
  return (
    <div
      id="demo"
      className="relative flex h-screen w-screen flex-col items-center justify-center gap-20 overflow-hidden border border-gray-800"
    >
      <MarBg />
      <Image
        id="title"
        className="z-10 h-fit w-3/4"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/meet-the-freds.png"
        alt="Meet the Freds"
        width={1000}
        height={1000}
        priority
      />

      {/* Freds */}

      <div id="freds" className="flex gap-2">
        {fredColors.map((color) => (
          <div
            key={color || "default"}
            className="fred relative h-[170px] w-[220px] will-change-transform"
          >
            <FredImage color={color} />
          </div>
        ))}
      </div>

      {/* Time */}
      <Image
        id="time"
        className="absolute top-1/6 right-0 h-10 w-60"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/time.png"
        alt="Time"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}
