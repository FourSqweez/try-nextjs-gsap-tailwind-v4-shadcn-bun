import React from "react";
import { Button } from "../ui/button";

type ButtonAction = "play" | "pause" | "reverse" | "restart";

interface ButtonProps {
  action: ButtonAction;
  onClick: () => void;
}

export const ControlButton = React.memo(({ action, onClick }: ButtonProps) => {
  console.log(`${action} button rendered`);

  return (
    <Button
      onClick={onClick}
      className="cursor-pointer rounded-[10px] bg-[#fc3] px-4 py-2 text-sm font-bold text-[#06c]"
    >
      {action}
    </Button>
  );
});

ControlButton.displayName = "ControlButton";
