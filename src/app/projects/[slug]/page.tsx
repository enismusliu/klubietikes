import Card from "@/components/card";
import ShareLink from "@/components/share-link";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/config/globals.config";
import formatDate from "@/lib/date.utils";
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
  const project = await trpc.public.getProject(slug);

  return {
    metadataBase: new URL(BASE_URL),
    title: project.title,
    description: decodeHtmlContent(project.htmlContentDescription),
  };
}

const Project = async ({ params }: PageParams) => {
  const { slug } = await params;
  const trpc = await getTrpcCaller();
  const project = await trpc.public.getProject(slug);
  /**
   * @decoded_content
   */
  const decodedContent = decodeURIComponent(project.htmlContentDescription);
  return (
    <div className="mt-5 container  max-w-6xl">
      <div className="rounded-3xl  w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[350px] 2xl:h-[370px]">
        <img
          src={project.coverImagePath}
          alt={`Projekti: ${project.title}`}
          width={1280}
          height={800}
          className="h-full w-full rounded-3xl  to-black object-cover "
        />
      </div>
      <div className=" mt-4 sm:mt-8">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
            {project.title}
          </h1>
          <ShareLink title={project.title} text={decodedContent}>
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
      <div className="mt-4  flex flex-row space-x-1.5 text-xs font-semibold">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="border border-primary bg-white px-4 py-1 rounded-md text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className=" mt-4 "
        dangerouslySetInnerHTML={{ __html: decodedContent }}
      />
      <div className="flex flex-col gap-10 pb-10 md:pb-20 ">
        {!!project.podcasts.length && (
          <div className="py-4 md:py-8">
            <h3 className="text-primary font-extrabold text-xl md:text-2xl mb-4 pb-4 border-b">
              Podcastet e ndërlidhura me këtë projekt
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  auto-rows-min md:gap-16 ">
              {project.podcasts.map((podcast) => {
                return (
                  <Card
                    key={podcast.podcastSlug}
                    tags={podcast.tags}
                    title={podcast.title}
                    slug={podcast.podcastSlug}
                    module={"podcast"}
                    coverImagePath={podcast.coverImagePath}
                  />
                );
              })}
            </div>
          </div>
        )}
        {!!project.activities.length && (
          <div className="py-4 md:py-8">
            <h3 className="text-primary font-extrabold text-xl md:text-2xl mb-4 pb-4 border-b">
              Aktivitetet e ndërlidhura me këtë projekt
            </h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10  auto-rows-min md:gap-16 ">
              {project.activities.map((podcast) => {
                return (
                  <Card
                    key={podcast.activitySlug}
                    tags={podcast.tags}
                    title={podcast.title}
                    slug={podcast.activitySlug}
                    module={"activities"}
                    coverImagePath={podcast.coverImagePath}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
