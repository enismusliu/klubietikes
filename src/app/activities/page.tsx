import Card from "@/components/card";
import PagesHeroSection from "@/components/pages-hero-section";
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
  });
  return (
    <div className="">
      <PagesHeroSection
        imagePath="/images/activites-bg.jpg"
        pageTitle="Aktivitete"
        description="Zbulo aktivitetet që organizojmë në kampus, tryeza diskutimi, seminare."
      />
      <div className="container max-w-[1200px]  py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10  auto-rows-min md:gap-16 ">
        {activities.map((activity) => {
          return (
            <Card
              key={activity.slug}
              tags={activity.tags}
              title={activity.title}
              slug={activity.slug}
              module="activities"
              coverImagePath={activity.coverImagePath}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
