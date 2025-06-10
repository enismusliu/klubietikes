import { HeroImageGallery } from "@/components/magicui/hero-image-gallery";
import ShareLink from "@/components/share-link";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/config/globals.config";
import formatDate from "@/lib/date.utils";
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
    <div className="pt-5 lg:pt-7 lg:pb-12 flex flex-col gap-3 lg:gap-5 pb-10 container  max-w-6xl">
      <div className="w-full aspect-[16/9] lg:aspect-[16/6] overflow-hidden rounded-3xl border">
        <img
          src={activity.coverImagePath}
          alt={`Projekti: ${activity.title}`}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <HeroImageGallery
        images={activity.activityImagesPaths}
        thumbnailSrc={activity.coverImagePath}
        thumbnailAlt="Gallery thumbnail"
        animationStyle="from-center"
      />
      <div className="mb-3 lg:mb-5 ">
        <p className="text-sm mb-1.5  text-black/50">
          {formatDate(activity.finishedAt)}
        </p>
        <div className="flex items-center justify-between gap-3 lg:gap-5 mb-3">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
            {activity.title}
          </h1>
          <ShareLink title={activity.title} text={decodedContent}>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "group h-9 w-9 rounded-lg bg-accent/20 p-2 border  hover:text-primary"
              )}
            >
              <Share2 />
            </Button>
          </ShareLink>
        </div>
        <div className="flex flex-row gap-1.5 text-xs font-semibold  flex-wrap">
          {activity.tags.map((tag, index) => (
            <span
              key={index}
              className="border whitespace-nowrap border-primary bg-white px-4 py-1 rounded-full text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: decodedContent }} />
    </div>
  );
};

export default Activity;
