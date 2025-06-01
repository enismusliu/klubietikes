import { Typography } from "@/components/ui/typography";
import { BASE_URL } from "@/config/globals.config";
import { decodeHtmlContent } from "@/lib/decode-html-content";
import { getTrpcCaller } from "@/lib/trpc/server";
import { PageParams } from "@/types";
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
  return (
    <div className="container">
      <Typography>{project.title}</Typography>
    </div>
  );
};

export default Project;
