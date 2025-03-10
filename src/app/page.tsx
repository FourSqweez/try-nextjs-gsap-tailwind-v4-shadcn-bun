export default function Home() {
  return (
    <div className="bg-kitty-dark h-screen w-full">
      <h1 className="text-kitty-green-pale text-5xl">Hello</h1>
      <div className="flex gap-4 text-white">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i}>Item {i + 1}</div>
        ))}
      </div>
    </div>
  );
}
