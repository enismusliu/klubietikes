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
    pageSize: "6",
  });
  return (
    <div className="">
      <PagesHeroSection
        imagePath="/images/podcast-bg.jpg"
        pageTitle="Podcast"
      />
      <div className="container">
        <div className="mx-4 sm:max-w-[80%] sm:mx-auto md:max-w-[50%] h-10 z-10 relative  -mt-5 bg-white rounded-lg shadow">
          <SearchInput className="w-full" />
        </div>
      </div>
      {podcasts.length < 1 ? (
        <Empty />
      ) : (
        <div className="container  py-10 md:py-16 ">
          <div className=" grid3 ">
            {podcasts.map((podcast) => {
              return (
                <Card
                  key={podcast.slug}
                  tags={podcast.tags}
                  title={podcast.title}
                  slug={podcast.slug}
                  module={"podcast"}
                  coverImagePath={podcast.coverImagePath}
                  date={podcast.recordedAt}
                  description={podcast.shortDescription}
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

export default Podcast;
