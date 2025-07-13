import React from "react";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = "#5d43ba4c",
      duration = "5s",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative flex z-10 cursor-pointer items-center justify-center rounded-lg bg-primary px-3 py-1.5 text-center text-primary-foreground",
          className
        )}
        style={
          {
            "--pulse-color": pulseColor,
            "--duration": duration,
          } as React.CSSProperties
        }
        {...props}
      >
        <div className="relative z-10 flex gap-x-2 items-center">
          {children}
        </div>
        <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
      </button>
    );
  }
);

PulsatingButton.displayName = "PulsatingButton";
