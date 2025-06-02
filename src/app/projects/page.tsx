import Card from "@/components/card";
import PagesHeroSection from "@/components/pages-hero-section";
import { getTrpcCaller } from "@/lib/trpc/server";
import { PageParams } from "@/types";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Projektet",
  description:
    "Njihuni me projektet tona që synojnë të sjellin ndryshim real në universitet dhe komunitet. Nga kampanja ndërgjegjësuese deri te iniciativat praktike me ndikim.",
};

const Projects = async ({ searchParams }: PageParams) => {
  const { page, search } = await searchParams;
  const trpc = await getTrpcCaller();
  const { data: projects, paginationData } = await trpc.public.getProjects({
    page,
    search,
  });
  return (
    <div className="">
      <PagesHeroSection
        imagePath="/images/about-bg.jpg"
        pageTitle="Projektet"
        description="Njihuni me projektet tona që synojnë të sjellin ndryshim real në universitet dhe komunitet."
        imageClassName="object-left"
      />
      <div className="container max-w-[1200px]  py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10  auto-rows-min md:gap-16 ">
        {projects.map((project) => {
          return (
            <Card
              key={project.slug}
              tags={project.tags}
              title={project.title}
              slug={project.slug}
              module={"projects"}
              coverImagePath={project.coverImagePath}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
