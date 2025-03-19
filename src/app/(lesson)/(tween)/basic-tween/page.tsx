"use client";

import FredImage, { fredColors } from "@/components/elements/fred-img";
import MarBg from "@/components/mar-bg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function BasicTween() {
  const fredsContainer = useRef<null>(null);

  useGSAP(
    () => {
      gsap.to("img", {
        y: -100,
        stagger: {
          amount: 0.2,
          from: "edges",
        },
      });
    },
    { scope: fredsContainer },
  );

  return (
    <div id="demo" className="relative flex h-screen w-full justify-center">
      <MarBg />
      <div ref={fredsContainer} className="absolute bottom-30 flex gap-x-2">
        {fredColors.map((color) => (
          <div
            key={color || "default"}
            className="relative h-[170px] w-[220px]"
          >
            <FredImage color={color} />
          </div>
        ))}
      </div>
    </div>
  );
}
