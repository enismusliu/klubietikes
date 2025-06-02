import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  pageTitle: string;
  imagePath: string;
  imageClassName?: string;
  description?: string;
}
const PagesHeroSection: FC<Props> = ({
  pageTitle,
  imagePath,
  imageClassName,
  description,
}) => {
  return (
    <div className="relative h-[260px] md:h-[280px] lg:h-[300px] xl:h-[350px] 2xl:h-[380px]">
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
      <div className="absolute left-1/2 top-1/2 pt-20 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[80%]">
        <h1
          className={cn(
            " sm:text-[55px] text-[30px] font-extrabold",
            "text-primary"
          )}
        >
          {pageTitle}
        </h1>
        <h2 className="text-white/80  text-balance">{description}</h2>
      </div>
    </div>
  );
};

export default PagesHeroSection;
