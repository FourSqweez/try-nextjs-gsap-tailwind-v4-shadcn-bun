"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import GSDevTools from "gsap-trial/GSDevTools";
import SplitText from "gsap-trial/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText, GSDevTools);

export default function Page() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!wrapperRef.current) return;

      const animation = gsap.timeline({
        repeat: 2,
        yoyo: true,
        repeatDelay: 0.3,
      });

      gsap.set(wrapperRef.current, { autoAlpha: 1 });

      const split = new SplitText("h1", { type: "chars" });

      console.log("split : ", split.chars);

      animation.from(split.chars, {
        opacity: 0,
        y: 50,
        ease: "back(4)",
        stagger: 0.05,
        rotate: 40,
      });

      const devTools = GSDevTools.create({
        animation,
        container: wrapperRef.current,
        timeScale: 1,
        loop: false,
      });

      return () => {
        animation.kill();
        split.revert();
        devTools.kill();
      };
    },
    { scope: wrapperRef },
  );

  return (
    <div className="bg-kitty-blue flex h-screen w-full items-center justify-center">
      <div
        ref={wrapperRef}
        id="wrapper"
        className="invisible flex h-full items-center perspective-midrange"
      >
        <h1 className="text-8xl">Letter by letter animation with GSAP</h1>
      </div>
    </div>
  );
}
