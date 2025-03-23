import Link from "next/link";

const routes = [
  {
    name: "Tween Control",
    href: "/tween-control",
  },
  {
    name: "Basic Tween",
    href: "/basic-tween",
  },
  {
    name: "From Glitch Stop",
    href: "/from-glitch-stop",
  },
  {
    name: "Transform Origin",
    href: "/transform-origin",
  },
  {
    name: "Basic Timeline",
    href: "/basic-timeline",
  },
  {
    name: "Hover Effect",
    href: "/hover-effect",
  },
  {
    name: "Creative Process",
    href: "/creative-process",
  },
  {
    name: "Text Typing",
    href: "/text-typing",
  },
  {
    name: "Split Text",
    href: "/split-text",
  },
  {
    name: "Keyframe",
    href: "/keyframe",
  },
  {
    name: "Hole Jumper",
    href: "/hole-jumper",
  },
];
export default function Navbar() {
  return (
    <div className="fixed top-4 left-4 z-10">
      <Link
        className="text-kitty-green-dark z-10 cursor-pointer text-3xl"
        href="/"
      >
        Gsap trying
      </Link>
      <div className="text-kitty-dark mt-4 flex h-fit w-fit flex-wrap gap-4">
        {routes.map((route) => (
          <Link
            className="cursor-pointer bg-orange-300 px-4 py-2"
            key={route.href}
            href={route.href}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
