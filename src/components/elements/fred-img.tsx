"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function FredImg() {
  const fredRef = useRef<null>(null);

  useGSAP(() => {
    gsap.from(fredRef.current, {
      x: 400,
      y: 200,
      scale: 3,
      duration: 3,
    });

    console.log("render in client");
  });
  return (
    <img
      ref={fredRef}
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg"
      alt=""
      className="h-fit object-fill"
    />
  );
}
