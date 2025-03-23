"use client";
import BasicSVG from "@/components/svgs/BasicSVG";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap-trial/MotionPathPlugin";
import { useRef, useState } from "react";

gsap.registerPlugin(MotionPathPlugin, useGSAP);

export default function Page() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<GSAPAnimation>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const { contextSafe } = useGSAP(
    () => {
      animationRef.current = gsap.to("#herman", {
        duration: 6,
        ease: "none",
        motionPath: {
          path: "#motionpath",
          align: "#herman",
        },
        onComplete: () => {
          setIsPlaying(false);
        },
      });
    },
    { scope: wrapperRef },
  );

  const togglePlay = contextSafe(() => {
    animationRef.current?.paused(!animationRef.current?.paused());
    if (animationRef.current?.progress() === 1) {
      animationRef.current.restart();
    }
    setIsPlaying((prev) => !prev);
  });

  return (
    <div
      ref={wrapperRef}
      className="flex h-screen w-full flex-col items-center justify-center gap-4"
    >
      <BasicSVG />

      <Button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</Button>
    </div>
  );
}
