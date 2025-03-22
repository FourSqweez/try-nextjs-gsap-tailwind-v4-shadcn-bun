"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const items = ["Item One", "Item Two", "Item Three", "Item Four"];

export default function HoverAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items: HTMLElement[] = gsap.utils.toArray(".item");
      gsap.defaults({ duration: 0.3 });

      const cleanupFunctions: (() => void)[] = [];

      items.forEach((item: HTMLElement) => {
        const tl = gsap
          .timeline({ paused: true })
          .to(item.querySelector(".text"), {
            color: "white",
            x: 10,
            scale: 1.2,
            transformOrigin: "left center",
          })
          .to(
            item.querySelector(".dot"),
            { backgroundColor: "#F93", scale: 1.5 },
            0,
          );

        const onMouseEnter = () => {
          tl.play();
        };

        const onMouseLeave = () => {
          tl.reverse();
        };

        console.log("test");

        item.addEventListener("mouseenter", onMouseEnter);
        item.addEventListener("mouseleave", onMouseLeave);

        cleanupFunctions.push(() => {
          item.removeEventListener("mouseenter", onMouseEnter);
          item.removeEventListener("mouseleave", onMouseLeave);
          tl.kill();
        });
      });

      return () => {
        cleanupFunctions.forEach((cleanup) => cleanup());
      };
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center gap-5 bg-black p-10"
    >
      <div className="flex w-fit flex-col">
        {items.map((text, index) => (
          <div key={index} className="item flex cursor-pointer items-center">
            <div className="dot mr-3 h-6 w-6 rounded-full bg-[#333] will-change-transform" />
            <span className="text text-5xl font-bold text-[#777] uppercase will-change-transform">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
