import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
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
  const podcast = await trpc.public.getPodcast(slug);

  return {
    metadataBase: new URL(BASE_URL),
    title: podcast.title,
  };
}

function getYouTubeEmbedUrl(url: string): string | null {
  const regExp =
    /^.*(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[1].length === 11) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return null;
}

const Podcast = async ({ params }: PageParams) => {
  const { slug } = await params;
  const trpc = await getTrpcCaller();
  const podcast = await trpc.public.getPodcast(slug);

  const decodedContent = decodeURIComponent(podcast.htmlContentDescription);
  const embedUrl = podcast.videoUrl && getYouTubeEmbedUrl(podcast.videoUrl);

  return (
    <div className="pt-5 lg:pt-7 lg:pb-12 flex flex-col gap-3 lg:gap-5 pb-10 container  max-w-6xl">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc={embedUrl ?? ""}
        thumbnailSrc={podcast.coverImagePath}
        thumbnailAlt={podcast.title}
      />
      <div className="mb-3 lg:mb-5">
        <p className="text-sm mb-1.5  text-black/50">
          {formatDate(podcast.recordedAt)}
        </p>
        <div className="flex items-center justify-between gap-3 lg:gap-5 mb-3">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
            {podcast.title}
          </h1>
          <ShareLink title={podcast.title} text={decodedContent}>
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
        <div className="flex flex-row space-x-1.5 text-xs font-semibold flex-wrap">
          {podcast.tags.map((tag, index) => (
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

export default Podcast;
