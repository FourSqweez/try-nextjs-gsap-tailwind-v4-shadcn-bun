"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function FredImg() {
  const fredRef = useRef<null>(null);

  useGSAP(() => {
    gsap.to(".green", { duration: 2, x: 600, repeat: -1, yoyo: true });
    gsap.to(".pink", { duration: 2, x: 600, delay: 2, repeat: -1, yoyo: true });
  }, {});

  return (
    <div ref={fredRef} className="h-fit">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg"
        alt=""
        className={cn("green h-auto w-fit object-fill")}
      />
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred-pink.svg"
        alt=""
        className={cn("pink h-auto w-fit object-fill")}
      />
    </div>
  );
}
