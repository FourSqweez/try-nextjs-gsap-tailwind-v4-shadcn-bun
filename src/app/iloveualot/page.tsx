"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(3);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive || count === 0) return; // Only start the countdown if active and count is not 0

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Clear the interval when the countdown is finished or the component unmounts
    return () => clearInterval(timer);
  }, [isActive, count]);

  useEffect(() => {
    if (count === 0) {
      handleConfetti();
    }
  }, [count]);

  const startCountdown = () => {
    setIsActive(true); // Start the countdown when the button is clicked
  };

  const handleConfetti = () => {
    confetti({});
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-white">
      {count !== 0 ? (
        <h1
          className={`text-[200px] font-bold transition-all duration-500 ease-in-out ${
            count === 0 ? "scale-110 text-red-500" : "scale-100 text-red-500"
          }`}
        >
          {isActive && count}
        </h1>
      ) : (
        <Image
          src="/d8_iloveualot.png"
          alt="iloveualot"
          className={cn(
            `mx-10 hidden h-[420px] w-[330px] border-2 border-red-500 object-fill px-10 sm:h-[520px] sm:w-[400px]`,
            {
              block: count === 0,
            },
          )}
          width={1000}
          height={1000}
        />
      )}

      {count !== 0 && (
        <Button
          onClick={startCountdown}
          className="cursor-pointer border-2 border-red-400 text-red-400 outline-red-400 hover:text-red-400"
          variant="outline"
        >
          Click me
        </Button>
      )}
    </div>
  );
}
