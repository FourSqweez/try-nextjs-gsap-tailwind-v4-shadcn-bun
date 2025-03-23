"use client";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { GSDevTools } from "gsap-trial/GSDevTools";
import { useRef } from "react";

gsap.registerPlugin(GSDevTools);

export default function Page() {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const herman = useRef<HTMLImageElement | null>(null);
  const hole = useRef<HTMLDivElement | null>(null);

  tl.current = gsap.timeline({
    repeat: 0,
  });

  useGSAP(() => {
    if (!tl.current) return;

    gsap.set(".demo", { autoAlpha: 1 });

    // start animation here

    tl.current
      .from(hole.current, { scale: 0, yoyo: true, repeat: 1 })
      .fromTo(herman.current, { y: 110 }, { y: -175 }, 0.2)
      .to(herman.current, { y: 0, ease: "power1.in" }, ">");

    const devTools = GSDevTools.create({
      animation: tl.current,
      loop: false,
    });

    return () => {
      tl.current?.kill();
      devTools.kill();
    };
  });

  return (
    <div className="m-0 flex h-screen w-full items-center justify-center bg-[20253f]">
      <div className="demo relative size-[400px] border-[1px] border-solid border-gray-500 bg-[#d6deff]">
        <div
          ref={hole}
          className="hole absolute top-[290px] left-1/2 h-[20px] w-[150px] -translate-x-1/2 rounded-[50%] bg-black"
        />

        <div className="hermanWrapper relative h-[300px] w-full overflow-hidden">
          <img
            ref={herman}
            className="herman absolute bottom-0 left-1/2 z-10 w-[100px] -translate-x-1/2"
            src="https://assets.codepen.io/32887/herman.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
