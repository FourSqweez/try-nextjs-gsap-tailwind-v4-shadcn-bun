"use client";

import gsap from "gsap";
import { useRef } from "react";

const FromGlitchStopPage = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { scale: 0, duration: 1 },
        { scale: 1, ease: "circ.out" },
      );
    }
  };

  return (
    <div className="bg-kitty-blue-light flex h-screen w-full items-center justify-center">
      <div
        className="bg-kitty-pink relative flex h-[50vmin] w-[50vmin] cursor-pointer items-center justify-center overflow-hidden rounded-full border-[1vmin] border-black"
        onMouseEnter={handleMouseEnter}
      >
        <div
          ref={bgRef}
          className="absolute inset-0 rounded-full bg-white opacity-30 will-change-transform"
        />
        <span className="relative font-sans text-[13vmin] font-extrabold text-white">
          hover
        </span>
      </div>
    </div>
  );
};

export default FromGlitchStopPage;
