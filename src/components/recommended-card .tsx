"use client";
import formatDate from "@/lib/date.utils";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const RecommendedCard = ({
  slug,
  title,
  coverImagePath,
  tags = [],
  module,
  date,
}: {
  slug: string;
  coverImagePath: string;
  title: string;
  tags: string[];
  module: "projects" | "activities" | "podcast";
  date?: string;
}) => {
  return (
    <Link
      href={`/${module}/${slug}`}
      className={cn(
        "group cursor-pointer  relative flex gap-x-1.5 items-center overflow-hidden max-w-xl"
      )}
    >
      <div className="aspect-video w-full  rounded-lg max-w-[40%] border overflow-hidden">
        <img
          src={coverImagePath ? coverImagePath : "/images/about-bg.jpg"}
          alt={`${title?.toLocaleLowerCase()}-image`}
          className="w-full h-full object-cover border rounded-lg "
        />
      </div>
      <div className="text content w-full">
        <p className="font-semibold lg:text-sm text-ellipsis-2  mb-1.5 transition-colors duration-300 ease-out group-hover:text-primary">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </p>
        {date && (
          <p className="text-xs mb-1.5 text-black/50">{formatDate(date)}</p>
        )}
        <div className="flex items-center gap-1.5 flex-wrap">
          {tags.map((tag) => {
            return (
              <span
                key={tag}
                className="text-xs lg:text-[10px] border border-black/20 bg-white px-1.5 rounded-lg text-black/50 font-light whitespace-nowrap-"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default RecommendedCard;
