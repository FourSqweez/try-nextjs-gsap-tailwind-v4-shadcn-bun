import FredImg from "@/components/elements/fred-img";

export default function Page() {
  console.log("render in server");
  return (
    <div className="bg-kitty-darker relative flex h-screen w-full overflow-hidden">
      <FredImg />
    </div>
  );
}
