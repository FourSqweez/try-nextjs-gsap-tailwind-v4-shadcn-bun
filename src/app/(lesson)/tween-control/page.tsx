"use client";

import { ControlButton } from "@/components/elements/control-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useCallback } from "react";

const TweenControlPage = () => {
  const tweenRef = React.useRef<GSAPTween | null>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);
  useGSAP(
    () => {
      tweenRef.current = gsap.to(imageRef.current, {
        duration: 3,
        x: 600,
        ease: "linear",
        paused: true,
      });
    },
    { dependencies: [tweenRef] },
  );

  // Handlers for the buttons
  const play = useCallback(() => tweenRef.current?.play(), []);
  const pause = useCallback(() => tweenRef.current?.pause(), []);
  const reverse = useCallback(() => tweenRef.current?.reverse(), []);
  const restart = useCallback(() => tweenRef.current?.restart(), []);

  return (
    <div className="h-screen bg-[#0a5b90] p-5 text-center font-sans">
      <img
        ref={imageRef}
        className="green mx-auto block will-change-transform"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg"
        alt="Fred"
        width="150"
      />
      <div id="nav" className="mt-5 space-x-2">
        <ControlButton action="play" onClick={play} />
        <ControlButton action="pause" onClick={pause} />
        <ControlButton action="reverse" onClick={reverse} />
        <ControlButton action="restart" onClick={restart} />
      </div>
    </div>
  );
};

export default TweenControlPage;
