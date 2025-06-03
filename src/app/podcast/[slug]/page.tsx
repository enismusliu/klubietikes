import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import ShareLink from "@/components/share-link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
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
  const podcast = await trpc.public.getPodcast(slug);

  return {
    metadataBase: new URL(BASE_URL),
    title: podcast.title,
    description: decodeHtmlContent(podcast.htmlContentDescription),
  };
}

/**
 * Given a YouTube URL (e.g. "https://www.youtube.com/watch?v=ABC123"
 * or "https://youtu.be/ABC123"), returns the "embed" version:
 * "https://www.youtube.com/embed/ABC123".
 * If no valid ID is found, returns null.
 */
function getYouTubeEmbedUrl(url: string): string | null {
  // Regular expression to capture the YouTube video ID:
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

  // Decode the HTML description
  const decodedContent = decodeURIComponent(podcast.htmlContentDescription);

  // Compute the "embed" URL (or null if podcast.videoUrl is not a recognized YouTube link)
  const embedUrl = podcast.videoUrl && getYouTubeEmbedUrl(podcast.videoUrl);

  return (
    <div>
      {/* Banner / header image + title + share button */}
      <div className="relative h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[350px] 2xl:h-[370px]">
        <img
          src="/images/podcast-bg.jpg"
          width={1280}
          height={800}
          className="h-full w-full bg-gradient-to-b from-transparent to-black object-cover object-top"
          alt="Podcast Header Background"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-black">
          <div className="container absolute bottom-4 left-1/2 max-w-[1100px] -translate-x-1/2 transform text-white md:bottom-6 xl:bottom-8">
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-[20px] sm:text-[30px] xl:text-[35px]">
                {podcast.title}
              </h1>
              <ShareLink title={podcast.title} text={decodedContent}>
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

      <div className="container mb-8 mt-4 max-w-[1100px]">
        <div className="relative">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc={embedUrl ?? ""}
            thumbnailSrc={podcast.coverImagePath}
            thumbnailAlt={podcast.title}
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc={embedUrl ?? ""}
            thumbnailSrc={podcast.coverImagePath}
            thumbnailAlt={podcast.title}
          />
        </div>
        <div className="my-4  flex flex-row space-x-1.5 text-xs font-semibold">
          {podcast.tags.map((tag, index) => (
            <span
              key={index}
              className="border border-primary bg-white px-4 py-1 rounded-md text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: decodedContent }}
        />
      </div>
    </div>
  );
};

export default Podcast;
