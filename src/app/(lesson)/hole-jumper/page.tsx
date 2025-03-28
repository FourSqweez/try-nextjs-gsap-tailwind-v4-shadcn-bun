"use client";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { GSDevTools } from "gsap-trial/GSDevTools";
import { useRef } from "react";

gsap.registerPlugin(GSDevTools);

export default function Page() {
  const herman = useRef<HTMLImageElement | null>(null);
  const hole = useRef<HTMLDivElement | null>(null);
  const demo = useRef<HTMLDivElement | null>(null);
  const shadow = useRef<HTMLDivElement | null>(null);

  gsap.config({
    trialWarn: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 0.5,
      });

      tl.from(hole.current, { scale: 0, yoyo: true, repeat: 1 })
        .fromTo(
          herman.current,
          { y: 160, scaleY: 2 },
          { y: -175, scaleY: 1 },
          0.2,
        )
        .to(herman.current, { y: -4, ease: "power1.in" }, ">")
        .to(herman.current, {
          scaleY: 0.8,
          scaleX: 1.3,
          transformOrigin: "50% 100%",
          repeat: 1,
          yoyo: true,
          duration: 0.1,
        })
        .to(shadow.current, { opacity: 1, duration: 0.2 }, 0.7)
        .to(shadow.current, { scale: 0.7, ease: "power1.in" }, ">");

      const devTools = GSDevTools.create({
        animation: tl,
        loop: false,
      });

      return () => {
        tl.kill();
        devTools.kill();
        gsap.set([hole.current, herman.current, shadow.current], {
          clearProps: "all",
        });
      };
    },
    { scope: demo },
  );

  return (
    <div className="m-0 flex h-screen w-full items-center justify-center bg-[20253f]">
      <div
        ref={demo}
        className="demo relative size-[400px] border-[1px] border-solid border-gray-500 bg-[#d6deff]"
      >
        <div
          ref={shadow}
          className="absolute top-[290px] left-1/2 h-[20px] w-[150px] -translate-x-1/2 bg-radial bg-no-repeat opacity-0"
        />
        <div
          ref={hole}
          className="hole absolute top-[290px] left-1/2 h-[20px] w-[150px] -translate-x-1/2 rounded-[50%] bg-black"
        />

        <div className="hermanWrapper relative h-[305px] w-full overflow-hidden rounded-[50%]">
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
