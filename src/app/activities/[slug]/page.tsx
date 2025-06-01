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
  const activity = await trpc.public.getActivity(slug);
  return {
    metadataBase: new URL(BASE_URL),
    title: activity.title,
    description: decodeHtmlContent(activity.htmlContentDescription),
  };
}

const Activity = async ({ params }: PageParams) => {
  const { slug } = await params;
  const trpc = await getTrpcCaller();
  const activity = await trpc.public.getActivity(slug);
  return (
    <div className="container">
      <Typography>{activity.title}</Typography>
    </div>
  );
};

export default Activity;
