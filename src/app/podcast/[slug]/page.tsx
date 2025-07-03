import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import ShareLink from "@/components/share-link";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/config/globals.config";
import formatDate from "@/lib/date.utils";
import { getTrpcCaller } from "@/lib/trpc/server";
import { cn } from "@/lib/utils";
import { PageParams } from "@/types";
import { Home, Share2 } from "lucide-react";
import { Metadata } from "next";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import RecommendedCard from "@/components/recommended-card ";
import HaveQuestions from "@/components/have-questions";

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
  const { data: podcasts } = await trpc.public.getTopPodcasts({
    topNumber: "5",
  });
  const decodedContent = decodeURIComponent(podcast.htmlContentDescription);
  const embedUrl = podcast.videoUrl && getYouTubeEmbedUrl(podcast.videoUrl);

  return (
    <div className="pt-5 lg:pt-7 lg:pb-12 flex flex-col gap-3 lg:gap-5 pb-10 container">
      <div className="flex flex-col gap-y-3 lg:gap-y-5">
        <Breadcrumb className="hidden lg:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">
                <Home size={18} />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/podcast">Podcastet</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{podcast.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {podcast.title}
          </h1>
          <p className="text-sm mt-3  text-black/50">
            {formatDate(podcast.recordedAt)}
          </p>
        </div>

        <ShareLink title={podcast.title}>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "group h-9 rounded-lg bg-accent/20 p-2 border hover:border-primary  hover:text-primary"
            )}
          >
            Shpërndaj
            <Share2 />
          </Button>
        </ShareLink>
      </div>
      <div className="grid xl:grid-cols-[1fr_420px] gap-x-7 gap-y-5">
        <div>
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc={embedUrl ?? ""}
            thumbnailSrc={podcast.coverImagePath}
            thumbnailAlt={podcast.title}
          />
          <div className="flex flex-row gap-1.5 text-xs font-semibold  flex-wrap mb-3 lg:mb-5 mx-4">
            {podcast.tags.map((tag, index) => (
              <span
                key={index}
                className="border border-black/20 bg-white px-3 py-0.5 rounded-lg text-black/50 font-light whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: decodedContent }}
            className="mx-4"
          />
        </div>
        <div className="self-start lg:sticky lg:top-20">
          <h4 className="border-b text-lg pb-1.5 text-black/50">
            Të rekomanduara
          </h4>
          <hr className="mb-3 lg:mb-5 bg-primary h-1 rounded-full -mt-0.5 w-20" />
          <div className="flex flex-col gap-3 sm:gap-5">
            {podcasts
              .filter((item) => item.slug !== slug)
              .map((item, idx) => (
                <RecommendedCard
                  key={`${item.title}-${idx}`}
                  tags={item.tags}
                  title={item.title}
                  slug={item.slug}
                  module="podcast"
                  date={item.recordedAt}
                  coverImagePath={item.coverImagePath}
                />
              ))}
          </div>
        </div>
      </div>
      <HaveQuestions className="mt-10 lg:mt-12" />
    </div>
  );
};

export default Podcast;
