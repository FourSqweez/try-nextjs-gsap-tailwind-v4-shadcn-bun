"use client";

import FredImage, { type FredColor } from "@/components/elements/fred-img";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
const fredColors: (FredColor | undefined)[] = [
  undefined,
  "purple",
  "blue",
  "pink",
  "orange",
  "red",
];

export default function BasicTween() {
  const fredsContainer = useRef<null>(null);

  useGSAP(
    () => {
      gsap.to("img", {
        y: -100,
        stagger: {
          amount: 0.2,
          from: "edges",
        },
      });
    },
    { scope: fredsContainer },
  );

  return (
    <div
      id="demo"
      className="relative flex h-screen w-full justify-center bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/space-background.png')] bg-cover bg-center"
    >
      <div ref={fredsContainer} className="absolute bottom-30 flex gap-x-2">
        {fredColors.map((color) => (
          <div
            key={color || "default"}
            className="relative h-[170px] w-[220px]"
          >
            <FredImage color={color} />
          </div>
        ))}
      </div>
    </div>
  );
}
