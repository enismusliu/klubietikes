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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getTrpcCaller } from "@/lib/trpc/server";
import { cn } from "@/lib/utils";
import { PageParams } from "@/types";
import { Home, Share2 } from "lucide-react";
import { Metadata } from "next";
import React from "react";
import RecommendedCard from "@/components/recommended-card ";
import Link from "next/link";
import HaveQuestions from "@/components/have-questions";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const trpc = await getTrpcCaller();
  const project = await trpc.public.getProject(slug);
  return {
    metadataBase: new URL(BASE_URL),
    title: project.title,
  };
}

const Project = async ({ params }: PageParams) => {
  const { slug } = await params;
  const trpc = await getTrpcCaller();
  const project = await trpc.public.getProject(slug);
  const { data: projects } = await trpc.public.getTopProjects({
    topNumber: "5",
  });
  /**
   * @decoded_content
   */
  const decodedContent = decodeURIComponent(project.htmlContentDescription);
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
              <BreadcrumbLink href="/projects">Projektet</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
          {project.title}
        </h1>

        <ShareLink title={project.title}>
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
              src={project.coverImagePath}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-row gap-1.5 text-xs font-semibold  flex-wrap mb-3 lg:mb-5 mx-4">
            {project.tags.map((tag, index) => (
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
            {projects
              .filter((project) => project.slug !== slug)
              .map((project) => (
                <RecommendedCard
                  key={project.slug}
                  tags={project.tags}
                  title={project.title}
                  slug={project.slug}
                  module="projects"
                  coverImagePath={project.coverImagePath}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 my-3 lg:my-5">
        {!!project.activities.length && (
          <div>
            <h4 className=" text-xl md:text-2xl pb-1.5 border-b text-black/50">
              Aktivitetet gjatë këtij projekti
            </h4>
            <hr className="mb-3 lg:mb-5 bg-secondary h-1 rounded-full  -mt-0.5 w-32" />
            <Carousel className="w-full " opts={{ align: "start" }}>
              <CarouselContent className="py-3">
                {project.activities.map((podcast) => (
                  <CarouselItem
                    key={podcast.activitySlug}
                    className="max-w-[80%] sm:basis-1/2 lg:basis-1/3"
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
        {!!project.podcasts.length && (
          <div>
            <h4 className=" text-xl md:text-2xl pb-1.5 border-b text-black/50">
              Podcastet gjatë këtij projekti
            </h4>
            <hr className="mb-3 lg:mb-5 bg-primary h-1 rounded-full  -mt-0.5 w-32" />
            <Carousel className="w-full " opts={{ align: "start" }}>
              <CarouselContent className="py-3">
                {project.podcasts.map((podcast) => (
                  <CarouselItem
                    key={podcast.podcastSlug}
                    className="max-w-[80%] sm:basis-1/2 lg:basis-1/3"
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
      </div>
      <HaveQuestions />
    </div>
  );
};

export default Project;
