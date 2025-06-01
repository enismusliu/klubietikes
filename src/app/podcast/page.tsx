import { getTrpcCaller } from "@/lib/trpc/server";
import { PageParams } from "@/types";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "Dëgjo podcast-et tona ku trajtojmë tema etike, intervista me të ftuar dhe biseda frymëzuese që sfidojnë mendimin tradicional dhe nxisin ndërgjegjësim.",
};

const Podcast = async ({ searchParams }: PageParams) => {
  const { page, search } = await searchParams;
  const trpc = await getTrpcCaller();
  const { data: podcasts, paginationData } = await trpc.public.getPodcasts({
    page,
    search,
  });
  return (
    <div className="container flex flex-col h-full items-center justify-center">
      {podcasts.map((podcast) => {
        return (
          <Link href={`/podcast/${podcast.slug}`} key={podcast.slug}>
            {podcast.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Podcast;
