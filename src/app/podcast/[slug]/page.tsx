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
  const podcast = await trpc.public.getPodcast(slug);

  return {
    metadataBase: new URL(BASE_URL),
    title: podcast.title,
    description: decodeHtmlContent(podcast.htmlContentDescription),
  };
}

const Podcast = async ({ params }: PageParams) => {
  const { slug } = await params;
  const trpc = await getTrpcCaller();
  const podcast = await trpc.public.getPodcast(slug);
  return (
    <div className="container">
      <Typography>{podcast.title}</Typography>
    </div>
  );
};

export default Podcast;
