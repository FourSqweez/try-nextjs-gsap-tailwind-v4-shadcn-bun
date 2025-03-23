"use client";
import BasicSVG from "@/components/svgs/BasicSVG";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap-trial/all";
import { ChangeEvent, useRef, useState } from "react";

gsap.registerPlugin(MotionPathPlugin, useGSAP);

export const checkpoints = {
  home: 0,
  candy: 0.5,
  dogpark: 0.9,
  school: 1,
};

export default function Page() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const { contextSafe } = useGSAP(
    () => {
      animationRef.current = gsap.to("#herman", {
        duration: 6,
        ease: "none",
        motionPath: {
          path: "#motionpath",
          align: "#herman",
        },
        onUpdate: animationUpdate,
        onComplete: () => {
          setIsPlaying(false);
        },
      });

      return () => {
        setIsPlaying(true);
        animationRef.current?.kill();
      };
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

  const animationUpdate = contextSafe(() => {
    setProgress(animationRef.current?.progress() ?? 0);
  });

  const handleProgressChange = contextSafe(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (isPlaying) {
        setIsPlaying(false);
      }
      animationRef.current?.progress(Number(e.target.value)).pause();
    },
  );

  const handleTravelTo = contextSafe((place: keyof typeof checkpoints) => {
    const progress = checkpoints[place];
    animationRef.current?.pause();
    setIsPlaying(false);

    gsap.to(animationRef.current, {
      duration: 1,
      progress: progress,
    });
  });

  return (
    <div
      ref={wrapperRef}
      className="flex h-screen w-full flex-col items-center justify-center gap-4"
    >
      <BasicSVG
        onPlaceClick={{
          home: () => handleTravelTo("home"),
          candy: () => handleTravelTo("candy"),
          dogpark: () => handleTravelTo("dogpark"),
          school: () => handleTravelTo("school"),
        }}
      />

      <div className="flex w-full items-center gap-4 px-4">
        <Button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</Button>
        <input
          className="w-full"
          id="progressSlider"
          type="range"
          min="0"
          max="1"
          value={progress}
          step="0.001"
          onChange={handleProgressChange}
        />
        <div id="time" className="min-w-[80px] text-center text-4xl text-white">
          {animationRef.current?.progress().toFixed(2)}
        </div>
      </div>
    </div>
  );
}
