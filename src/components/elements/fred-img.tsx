import Image from "next/image";
import { forwardRef } from "react";

export type FredColor = "purple" | "blue" | "pink" | "orange" | "red";
interface FredImageProps {
  color?: FredColor;
}

const FredImage = forwardRef<HTMLImageElement, FredImageProps>(
  ({ color }, ref) => {
    const imageUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred${color ? `-${color}` : ""}.svg`;

    return (
      <Image
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any} // `next/image` does not support ref directly, so we cast it
        className="absolute w-full will-change-transform"
        src={imageUrl}
        alt={`Fred ${color}`}
        fill
        priority
      />
    );
  },
);

FredImage.displayName = "FredImage";

export default FredImage;
