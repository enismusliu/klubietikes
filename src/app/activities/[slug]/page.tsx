import { HeroImageGallery } from "@/components/magicui/hero-image-gallery";
import ShareLink from "@/components/share-link";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/config/globals.config";
import formatDate from "@/lib/date.utils";
import { getTrpcCaller } from "@/lib/trpc/server";
import { cn } from "@/lib/utils";
import { PageParams } from "@/types";
import { Home, Share2 } from "lucide-react";
import { Metadata } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import Link from "next/link";
import RecommendedCard from "@/components/recommended-card ";
import HaveQuestions from "@/components/have-questions";

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
  const { data: activities } = await trpc.public.getTopActivities({
    topNumber: "5",
  });

  /**
   * @decoded_content
   */
  const decodedContent = decodeURIComponent(activity.htmlContentDescription);
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
              <BreadcrumbLink href="/activities">Aktivitetet</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{activity.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {activity.title}
          </h1>
          <p className="text-sm mt-3  text-black/50">
            {formatDate(activity.finishedAt)}
          </p>
        </div>

        <ShareLink title={activity.title}>
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
          <div className="aspect-video overflow-hidden rounded-lg mb-5 lg:mb-7">
            <img
              src={activity.coverImagePath}
              alt={`Projekti: ${activity.title}`}
              className="w-full h-full object-cover"
            />
          </div>
          <HeroImageGallery
            images={activity.activityImagesPaths}
            thumbnailSrc={activity.coverImagePath}
            thumbnailAlt="Gallery thumbnail"
            animationStyle="from-center"
            className="mx-4 mb-5"
          />
          <div className="flex flex-row gap-1.5 text-xs font-semibold  flex-wrap mb-3 lg:mb-5 mx-4">
            {activity.tags.map((tag, index) => (
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
            {activities
              .filter((item) => item.slug !== slug)
              .map((item, idx) => (
                <RecommendedCard
                  key={`${item.title}-${idx}`}
                  tags={item.tags}
                  title={item.title}
                  slug={item.slug}
                  module="podcast"
                  date={item.finishedAt}
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

export default Activity;
