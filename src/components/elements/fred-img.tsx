"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export default function FredImg() {
  const fredRef = useRef<null>(null);
  const [start, setStart] = useState(false);

  useGSAP(
    () => {
      setStart(true);
      gsap.fromTo(
        fredRef.current,
        {
          x: 700,
          y: 400,
          opacity: 0,
        },
        {
          x: 400,
          y: 200,
          scale: 3,
          opacity: 1,
          duration: 3,
        },
      );

      console.log("render in client");
    },
    { dependencies: [start], scope: fredRef },
  );

  return (
    <div ref={fredRef} className="h-fit">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg"
        alt=""
        className={cn("fred hidden h-auto w-fit object-fill", {
          block: start,
        })}
      />
    </div>
  );
}
