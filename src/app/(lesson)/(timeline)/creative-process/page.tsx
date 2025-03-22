"use client";

import { CreativeSvg } from "@/components/CreativeSvg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GSDevTools from "gsap-trial/GSDevTools";
import { useRef } from "react";

gsap.registerPlugin(GSDevTools);

export default function CreativeProcess() {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        defaults: {
          opacity: 0,
          ease: "back",
        },
      });

      tl.current
        .from("#demo", { ease: "linear", autoAlpha: 0 })
        .from("h1", { x: 80 })
        .from("h2", { x: -80 }, "<")
        .from("p", { y: 30 }, "-=0.2")
        .from("button", { y: 80 }, "-=0.4")
        .from(
          "#items > g",
          {
            transformOrigin: "50% 50%",
            scale: 0,
            stagger: 0.1,
          },
          "-=0.4",
        );

      // Initialize GSDevTools
      GSDevTools.create({
        animation: tl.current,
        container: "#demo",
        timeScale: 1,
      });

      // Cleanup function
      return () => {
        tl.current?.kill();
      };
    },
    { scope: "#demo" },
  );

  return (
    <div
      id="demo"
      className="font-kanit invisible flex min-h-screen items-center justify-center bg-[#252525]"
    >
      <div className="relative h-[385px] w-[621px] border border-[#333] bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/creative-process-bg.png')]">
        <div className="absolute top-[130px] left-[20px] w-[250px]">
          <h1 className="text-kitty-dark text-[50px] font-medium">Creative</h1>
          <h2 className="text-kitty-dark mt-[-10px] text-[40px] font-extralight">
            Process
          </h2>
          <p className="text-kitty-dark mt-[14px] text-[16px] leading-[20px] font-extralight">
            Learn how to find inspiration in the things you love.
          </p>
          <button className="mt-[20px] cursor-pointer rounded-[17px] border border-[#ee1eb5] bg-gradient-to-b from-[#ff905c] to-[#ef027d] px-[24px] py-[6px] text-[15px] font-bold text-white shadow-inner hover:from-[#ef027d] hover:to-[#ff905c]">
            READ MORE
          </button>
        </div>

        <div className="absolute top-[80px] left-[375px]">
          <CreativeSvg />
        </div>
      </div>
    </div>
  );
}
