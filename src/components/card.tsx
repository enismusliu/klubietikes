"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Card = ({
  slug,
  title,
  coverImagePath,
  tags = [],
  module,
}: {
  slug: string;
  coverImagePath: string;
  title: string;
  tags: string[];
  module: "projects" | "activities" | "podcast";
}) => {
  return (
    <Link
      href={`/${module}/${slug}`}
      className={cn("group cursor-pointer  relative flex flex-col w-full")}
    >
      <div className="w-full h-56 md:h-64 mb-2.5 rounded-2xl border overflow-hidden">
        <img
          src={coverImagePath ? coverImagePath : "/images/about-bg.jpg"}
          alt={`${title?.toLocaleLowerCase()}-image`}
          className="w-full h-full object-cover border rounded-2xl transform transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="text content w-full">
        <p className="font-bold text-md lg:text-lg  mb-3 transition-colors duration-300 ease-out group-hover:text-primary">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </p>
        <div className="flex flex-row flex-wrap gap-1.5 text-xs font-semibold">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border border-primary bg-white px-4 py-1 rounded-full text-primary whitespace-nowrap"
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
