import { cn } from "@/lib/utils";

export default function MarBg({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/space-background.png')] bg-cover bg-center",
        className,
      )}
    />
  );
}

MarBg.displayName = "MarBg";
