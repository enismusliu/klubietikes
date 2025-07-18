"use client";
import formatDate from "@/lib/date.utils";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Card = ({
  slug,
  title,
  coverImagePath,
  tags = [],
  module,
  description,
  date,
}: {
  slug: string;
  coverImagePath: string;
  title: string;
  tags: string[];
  module: "projects" | "activities" | "podcast";
  date?: string;
  description: string;
}) => {
  return (
    <Link
      href={`/${module}/${slug}`}
      className={cn("group cursor-pointer  relative flex flex-col w-full")}
    >
      <div className="aspect-video mb-2.5 rounded-lg border overflow-hidden">
        <img
          src={coverImagePath ? coverImagePath : "/images/about-bg.jpg"}
          alt={`${title?.toLocaleLowerCase()}-image`}
          className="w-full h-full object-cover border rounded-lg transform transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="text content w-full">
        {date && (
          <p className="text-sm mb-1.5  text-black/30">{formatDate(date)}</p>
        )}
        <p
          className={cn(
            "font-bold text-md text-ellipsis-2 lg:text-lg  mb-1 transition-colors duration-300 ease-out group-hover:text-primary",
            module == "activities" && "group-hover:text-secondary",
            module == "projects" && "group-hover:text-black/70"
          )}
        >
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </p>
        <p className="text-ellipsis-1 mb-3 text-foreground font-light text-sm">
          {description}
        </p>
        <div className="flex flex-row flex-wrap gap-1.5 text-xs font-semibold">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border border-black/20 bg-white px-3 py-0.5 rounded-lg text-black/50 font-light whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
