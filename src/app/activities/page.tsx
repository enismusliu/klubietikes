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
  title: "Aktivitete ",
  description:
    "Zbulo aktivitetet që organizojmë në kampus, tryeza diskutimi, seminare dhe nisma që nxisin mendimin kritik dhe përgjegjësinë shoqërore.",
};

const Activities = async ({ searchParams }: PageParams) => {
  const { page, search } = await searchParams;
  const trpc = await getTrpcCaller();
  const { data: activities, paginationData } = await trpc.public.getActivities({
    page,
    search,
    pageSize: "6",
  });
  return (
    <div className="">
      <PagesHeroSection
        imagePath="/images/activites-bg.jpg"
        pageTitle="Aktivitetet"
      />
      <div className="container">
        <div className="mx-4 sm:max-w-[80%] sm:mx-auto md:max-w-[50%] h-10 z-10 relative  -mt-5 bg-white rounded-lg shadow">
          <SearchInput className="w-full" />
        </div>
      </div>
      {activities.length < 1 ? (
        <Empty />
      ) : (
        <div className="container  py-10 md:py-16 ">
          <div className="grid3">
            {activities.map((activity) => {
              return (
                <Card
                  key={activity.slug}
                  tags={activity.tags}
                  title={activity.title}
                  slug={activity.slug}
                  module="activities"
                  coverImagePath={activity.coverImagePath}
                  date={activity.finishedAt}
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

export default Activities;
