import ShareLink from "@/components/share-link";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/config/globals.config";
import { decodeHtmlContent } from "@/lib/decode-html-content";
import { getTrpcCaller } from "@/lib/trpc/server";
import { cn } from "@/lib/utils";
import { PageParams } from "@/types";
import { Share2 } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const trpc = await getTrpcCaller();
  const activity = await trpc.public.getActivity(slug);
  return {
    metadataBase: new URL(BASE_URL),
    title: activity.title,
    description: decodeHtmlContent(activity.htmlContentDescription),
  };
}

const Activity = async ({ params }: PageParams) => {
  const { slug } = await params;
  const trpc = await getTrpcCaller();
  const activity = await trpc.public.getActivity(slug);
  /**
   * @decoded_content
   */
  const decodedContent = decodeURIComponent(activity.htmlContentDescription);
  return (
    <div>
      <div className="relative h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[350px] 2xl:h-[370px]">
        <img
          src={activity.coverImagePath}
          alt={`Projekti: ${activity.title}`}
          width={1280}
          height={800}
          className="h-full w-full bg-gradient-to-b from-transparent to-black object-cover object-top"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-black">
          <div className="container absolute bottom-4 left-1/2 max-w-[1100px] -translate-x-1/2 transform text-white md:bottom-6 xl:bottom-8">
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-[20px] sm:text-[30px] xl:text-[35px]">
                {activity.title}
              </h1>
              <ShareLink title={activity.title} text={decodedContent}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "group h-9 w-9 rounded-sm bg-accent/20 p-2 text-white hover:text-primary"
                  )}
                >
                  <Share2 />
                </Button>
              </ShareLink>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] mt-4 container flex flex-row space-x-1.5 text-xs font-semibold">
        {activity.tags.map((tag, index) => (
          <span
            key={index}
            className="border border-primary bg-white px-4 py-1 rounded-md text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className="container mb-8 mt-4 max-w-[1100px]"
        dangerouslySetInnerHTML={{ __html: decodedContent }}
      />
    </div>
  );
};

export default Activity;
