import Card from "@/components/card";
import SearchInput from "@/components/controlled-input/search-input";
import Empty from "@/components/empty";
import PagesHeroSection from "@/components/pages-hero-section";
import { Pagination } from "@/components/pagination";
import { getTrpcCaller } from "@/lib/trpc/server";
import { PageParams } from "@/types";
import { Metadata } from "next";
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
        imageClassName="object-left"
      />
      <div className="container">
        <div className="mx-4 sm:max-w-[80%] sm:mx-auto md:max-w-[50%] h-10 z-10 relative  -mt-5 bg-white rounded-lg shadow">
          <SearchInput className="w-full" />
        </div>
      </div>
      {projects.length < 1 ? (
        <Empty />
      ) : (
        <div className="container  py-10 md:py-16 ">
          <div className=" grid3 ">
            {projects.map((project) => {
              return (
                <Card
                  key={project.slug}
                  tags={project.tags}
                  title={project.title}
                  slug={project.slug}
                  module={"projects"}
                  coverImagePath={project.coverImagePath}
                  description={project.shortDescription}
                />
              );
            })}
          </div>
          <Pagination pageCount={paginationData.totalPages} />
        </div>
      )}
    </div>
  );
};

export default Projects;
