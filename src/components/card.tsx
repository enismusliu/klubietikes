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
      className={cn(
        "cursor-pointer overflow-hidden relative card  flex flex-col  w-full ",
        "transform transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-101 "
      )}
    >
      <div className="w-full h-60 md:h-72  mb-2.5 rounded-xl">
        <img
          src={coverImagePath ? coverImagePath : "/images/about-bg.jpg"}
          alt={`${title?.toLocaleLowerCase()}-image`}
          className="w-full h-full object-cover border rounded-2xl"
        />
      </div>
      <div className="text content w-full ">
        <p className="font-bold text-xl md:text-2xl truncate  mb-3">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </p>
        <div className="flex flex-row space-x-1.5 text-xs font-semibold">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border border-primary bg-white px-4 py-1 rounded-full text-primary"
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
