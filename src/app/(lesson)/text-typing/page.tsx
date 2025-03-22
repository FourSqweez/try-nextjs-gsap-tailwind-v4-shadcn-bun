"use client";
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import TextPlugin from "gsap-trial/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Page() {
  useGSAP(() => {
    gsap.to("p", {
      text: "typewriter effect with GSAP 3",
      duration: 2,
      ease: "power1.in",
      yoyo: true,
      repeat: 2,
    });
  });
  return (
    <div className="bg-kitty-blue flex h-screen w-full items-center justify-center">
      <p>I love pancakes so much!!!</p>
    </div>
  );
}
