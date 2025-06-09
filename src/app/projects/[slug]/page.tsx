import Card from "@/components/card";
import ShareLink from "@/components/share-link";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/config/globals.config";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
    description: project.title,
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
    <div className="pt-5 lg:pt-7 lg:pb-12 flex flex-col gap-3 lg:gap-5 pb-10 container  max-w-6xl">
      <div className="w-full  aspect-[16/9] lg:aspect-[16/6] overflow-hidden rounded-3xl border">
        <img
          src={project.coverImagePath}
          alt={`Projekti: ${project.title}`}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="mb-3 lg:mb-5">
        <div className="flex items-center justify-between gap-3 lg:gap-5 mb-1.5">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
            {project.title}
          </h1>
          <ShareLink title={project.title} text={decodedContent}>
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
        <div className="flex flex-row space-x-1.5 text-xs font-semibold">
          {project.tags.map((tag, index) => (
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
      <div className="flex flex-col gap-10 my-3 lg:my-5">
        {!!project.podcasts.length && (
          <div>
            <h3 className="text-primary font-extrabold text-xl md:text-2xl mb-4">
              Podcastet gjatë këtij projekti
            </h3>
            <Carousel className="w-full " opts={{ align: "start" }}>
              <CarouselContent className="py-3">
                {project.podcasts.map((podcast) => (
                  <CarouselItem
                    key={podcast.podcastSlug}
                    className={cn(
                      "md:basis-1/2 ",
                      project.podcasts.length > 2 && "lg:basis-1/3"
                    )}
                  >
                    <Card
                      tags={podcast.tags}
                      title={podcast.title}
                      slug={podcast.podcastSlug}
                      module={"podcast"}
                      coverImagePath={podcast.coverImagePath}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div
                className={cn(
                  "mt-3 flex items-center justify-end  gap-3 lg:hidden",
                  project.podcasts.length > 2 && "lg:flex"
                )}
              >
                <CarouselPrevious className="static translate-x-0 translate-y-0 h-8 w-15 rounded-lg" />
                <CarouselNext className="static translate-x-0 translate-y-0 h-8 w-15 rounded-lg" />
              </div>
            </Carousel>
          </div>
        )}
        {!!project.activities.length && (
          <div>
            <h3 className="text-primary font-extrabold text-xl md:text-2xl mb-4">
              Aktivitetet gjatë këtij projekti
            </h3>
            <Carousel className="w-full " opts={{ align: "start" }}>
              <CarouselContent className="py-3">
                {project.activities.map((podcast) => (
                  <CarouselItem
                    key={podcast.activitySlug}
                    className={cn(
                      "md:basis-1/2 ",
                      project.activities.length > 2 && "lg:basis-1/3"
                    )}
                  >
                    <Card
                      key={podcast.activitySlug}
                      tags={podcast.tags}
                      title={podcast.title}
                      slug={podcast.activitySlug}
                      module={"activities"}
                      coverImagePath={podcast.coverImagePath}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div
                className={cn(
                  "mt-3 flex items-center justify-end  gap-3 lg:hidden",
                  project.activities.length > 2 && "lg:flex"
                )}
              >
                <CarouselPrevious className="static translate-x-0 translate-y-0 h-8 w-15 rounded-lg" />
                <CarouselNext className="static translate-x-0 translate-y-0 h-8 w-15 rounded-lg" />
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
