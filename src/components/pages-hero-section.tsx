import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  pageTitle: string;
  imagePath: string;
  imageClassName?: string;
}
const PagesHeroSection: FC<Props> = ({
  pageTitle,
  imagePath,
  imageClassName,
}) => {
  return (
    <div className="relative h-[200px] md:h-[280px]  xl:h-[300px] ">
      <img
        src={imagePath}
        alt={`${pageTitle}`}
        width={1280}
        height={800}
        className={cn(
          "h-full w-full object-cover object-center",
          "brightness-20",
          imageClassName
        )}
      />
      <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[80%]">
        <h1 className={cn("sm:text-4xl text-3xl font-extrabold text-white")}>
          {pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default PagesHeroSection;
