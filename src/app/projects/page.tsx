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
    <div className="container flex items-center justify-center h-full">
      {projects.map((project) => {
        return (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            {project.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;
