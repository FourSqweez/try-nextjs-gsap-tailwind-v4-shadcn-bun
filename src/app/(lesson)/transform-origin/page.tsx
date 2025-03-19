"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useRef, useState } from "react";

const values = {
  keywordsHorizontal: ["left", "center", "right"],
  keywordsVertical: ["top", "center", "bottom"],
  keywordsArray: [] as string[],
  pixelsHorizontal: ["0", "150px", "300px"],
  pixelsVertical: ["0", "150px", "300px"],
  pixelsArray: [] as string[],
  percentsHorizontal: ["0", "50%", "100%"],
  percentsVertical: ["0", "50%", "100%"],
  percentsArray: [] as string[],
};

const TransformOriginDemo = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const [property, setProperty] = useState<"pixels" | "percents" | "keywords">(
    "pixels",
  );

  const generateValues = (type: "pixels" | "percents" | "keywords") => {
    values[`${type}Array`] = [];

    for (let v = 0; v < 3; v++) {
      for (let h = 0; h < 3; h++) {
        values[`${type}Array`].push(
          `${values[`${type}Horizontal`][h]} ${values[`${type}Vertical`][v]}`,
        );
      }
    }
  };

  useGSAP(
    () => {
      generateValues(property);
      createLabels();

      if (!labelsRef.current) return;
      const newLabels = labelsRef.current.children;
      Array.from(newLabels).forEach((e, i) => {
        const arrayKey = `${property}Array` as keyof typeof values;
        gsap.set(e, { textContent: values[arrayKey][i] });
      });
    },
    { dependencies: [property] },
  );

  const createLabels = useCallback(() => {
    if (!labelsRef.current) return;
    labelsRef.current.innerHTML = "";
    let n = 0;
    for (let v = 0; v < 3; v++) {
      for (let h = 0; h < 3; h++) {
        const label = document.createElement("div");
        label.classList.add(
          "absolute",
          "bg-pink-500",
          "text-white",
          "px-3",
          "py-2",
          "rounded-full",
          "cursor-pointer",
          "shadow-lg",
          "text-center",
          "min-w-[132px]",
          "border-2",
          "border-white",
        );
        label.textContent = values.pixelsArray[n];
        gsap.set(label, {
          x: values.pixelsHorizontal[h],
          y: values.pixelsVertical[v],
        });
        label.addEventListener("click", () => {
          if (boxRef.current) {
            gsap.set(boxRef.current, {
              transformOrigin: label.textContent ?? "50% 50%",
            });
            gsap.fromTo(
              boxRef.current,
              { rotation: 0 },
              { rotation: 360, ease: "none", duration: 1 },
            );
          }
        });
        labelsRef.current.appendChild(label);
        n++;
      }
    }
    gsap.set(labelsRef.current, { x: -210, y: -170 });
  }, []);

  return (
    <div
      ref={demoRef}
      className="flex h-screen flex-col items-center justify-center bg-black text-white"
    >
      <h2 className="absolute top-40 text-center font-light">
        <span className="text-pink-500">transformOrigin</span> is set with a
        pair of
        <span className="text-pink-500"> horizontal </span> and
        <span className="text-pink-500"> vertical </span> values
      </h2>

      <div ref={boxRef} className="h-[300px] w-[300px] bg-blue-500" />
      <div ref={labelsRef} className="absolute" />

      <div className="absolute bottom-5 flex w-4/5 justify-around rounded-lg bg-gray-900 p-5">
        {["pixels", "percents", "keywords"].map((type) => (
          <label key={type} className="cursor-pointer">
            <input
              type="radio"
              name="property"
              value={type}
              checked={property === type}
              onChange={() =>
                setProperty(type as "pixels" | "percents" | "keywords")
              }
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
};

export default TransformOriginDemo;
