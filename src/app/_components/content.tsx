"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

const Content = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const home = pathname === "/";
  return (
    <div className={cn("pt-15 min-h-dvh", home && "md:pt-0")}>{children}</div>
  );
};

export default Content;
