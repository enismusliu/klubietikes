"use client";
import formatDate from "@/lib/date.utils";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomePodcastCard = ({
  slug,
  title,
  coverImagePath,
  tags = [],
  date,
  shortDescription,
}: {
  slug: string;
  coverImagePath: string;
  title: string;
  tags: string[];
  date?: string;
  shortDescription: string;
}) => {
  return (
    <Link
      href={`/podcast/${slug}`}
      className={cn(
        " cursor-pointer group  relative flex flex-col w-full rounded-lg overflow-hidden border bg-no-repeat bg-cover bg-center"
      )}
      style={{
        backgroundImage: `url(${coverImagePath})`,
      }}
    >
      <div className="h-full w-full bg-black/50 backdrop-blur-lg absolute" />
      <div className="p-4 text-white z-10">
        <div className="aspect-video mb-2.5 rounded-xl p-3 px-5 overflow-hidden">
          <img
            src={coverImagePath ? coverImagePath : "/images/about-bg.jpg"}
            alt={`${title?.toLocaleLowerCase()}-image`}
            className="w-full h-full object-cover  rounded-lg "
          />
        </div>
        <div className="text content w-full flex flex-col">
          {date && (
            <p className="text-xs text-white/50 mb-1.5">{formatDate(date)}</p>
          )}
          <p className="font-bold text-md text-ellipsis-2 lg:text-lg  mb-1.5 transition-colors duration-300 ease-out group-hover:text-white/90">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </p>
          <div className="flex flex-row flex-wrap gap-1.5 text-xs font-semibold mb-1.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 px-3 py-0.5 rounded-lg text-white/90 font-light whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <p className="text-ellipsis-2 font-light text-sm">
              {shortDescription}
            </p>

            <div className=" self-end flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
                <div
                  className={`relative flex size-12 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.05]`}
                >
                  <Play
                    className="size-5 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                    style={{
                      filter:
                        "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomePodcastCard;
