"use client";
import formatDate from "@/lib/date.utils";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const HomeProjectCard = ({
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
        "group cursor-pointer relative flex flex-col w-full"
        // make sure the link wrapper is relative
      )}
    >
      <div className="relative aspect-video mb-2.5 rounded-lg border overflow-hidden">
        <img
          src={coverImagePath ? coverImagePath : "/images/about-bg.jpg"}
          alt={`${title?.toLocaleLowerCase()}-image`}
          className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      <div className="absolute bottom-4 left-0 w-full p-4">
        <p className="font-bold text-ellipsis-2 lg:max-w-3/4 text-sm sm:text-base lg:text-lg mb-2 text-white transition-colors duration-300 ease-out ">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </p>
        <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white/20 px-3 py-0.5 rounded-lg text-white/90 font-light whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default HomeProjectCard;
