type FredColor = "purple" | "blue" | "pink" | "orange" | "red";
interface FredImageProps {
  color?: FredColor;
}

export default function FredImage({ color }: FredImageProps) {
  const imageUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred${color ? `-${color}` : ""}.svg`;

  return <img className="w-full" src={imageUrl} alt={`Fred ${color}`} />;
}
