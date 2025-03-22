"use client";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { GSDevTools } from "gsap-trial/GSDevTools";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(GSDevTools);

export default function Page() {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    gsap.set(".demo", { autoAlpha: 1 });

    tl.current = gsap.timeline({
      repeat: 0,
    });

    tl.current.from("h1", { x: 200, opacity: 0, duration: 1 }).to(
      ".slime",
      {
        keyframes: {
          "25%": { y: 0 },
          "50%": { y: -300, ease: "sine" },
          "75%": { y: 0, ease: "sine.in" },
          "100%": { x: 800, ease: "none" },
        },
        duration: 2,
        stagger: 0.4,
      },
      "<+0.5",
    );

    const devTools = GSDevTools.create({
      animation: tl.current,
      loop: false,
    });

    return () => {
      tl.current?.kill();
      devTools.kill();
    };
  });

  const handlePlay = () => {
    tl.current?.restart();
  };

  return (
    <div className="main relative flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl font-bold text-white">
        Keyframes Simple Jump
      </h1>

      <div className="demo relative flex h-1/2 w-1/2 overflow-hidden bg-black">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            className="slime absolute bottom-0 size-40 -translate-x-full"
            key={index}
          >
            <Image
              src="https://assets.codepen.io/32887/slime.svg"
              alt="slime"
              fill
            />
          </div>
        ))}
      </div>

      <Button
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        onClick={handlePlay}
      >
        play
      </Button>
    </div>
  );
}
