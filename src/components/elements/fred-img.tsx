"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function FredImg() {
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
        <FredImage />
        <FredImage color="purple" />
        <FredImage color="blue" />
        <FredImage color="pink" />
        <FredImage color="orange" />
        <FredImage color="red" />
      </div>
    </div>
  );
}

type FredColor = "purple" | "blue" | "pink" | "orange" | "red";
interface FredImageProps {
  color?: FredColor;
}

const FredImage: React.FC<FredImageProps> = ({ color }) => {
  const imageUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred${color ? `-${color}` : ""}.svg`;

  return <img className="w-full" src={imageUrl} alt={`Fred ${color}`} />;
};
