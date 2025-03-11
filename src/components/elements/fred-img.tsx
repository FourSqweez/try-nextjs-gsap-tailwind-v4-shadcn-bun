"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function FredImg() {
  const fredRef = useRef<null>(null);

  useGSAP(() => {
    gsap.to(".green", { duration: 3, x: 600, ease: "bounce" });
    gsap.to(".pink", { duration: 3, x: 600, ease: "back(6)" });
  }, {});

  return (
    <div ref={fredRef} className="mt-10 h-fit">
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
