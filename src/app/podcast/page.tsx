import Card from "@/components/card";
import PagesHeroSection from "@/components/pages-hero-section";
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
    <div className="">
      <PagesHeroSection
        imagePath="/images/podcast-bg.jpg"
        pageTitle="Podcast"
      />
      <div className="container max-w-[1200px]  py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10  auto-rows-min md:gap-16 ">
        {podcasts.map((podcast) => {
          return (
            <Card
              key={podcast.slug}
              tags={podcast.tags}
              title={podcast.title}
              slug={podcast.slug}
              module={"podcast"}
              coverImagePath={podcast.coverImagePath}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Podcast;
