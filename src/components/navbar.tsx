import Link from "next/link";

const routes = [
  {
    name: "Tween",
    href: "/tween-control",
  },
  {
    name: "Basic Tween",
    href: "/basic-tween",
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
      <div className="text-kitty-dark mt-4 flex h-fit w-fit gap-4">
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
