import { getTrpcCaller } from "@/lib/trpc/server";
import { PageParams } from "@/types";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Aktivitete ",
  description:
    "Zbulo aktivitetet që organizojmë në kampus - punëtori, tryeza diskutimi, seminare dhe nisma që nxisin mendimin kritik dhe përgjegjësinë shoqërore.",
};

const Activities = async ({ searchParams }: PageParams) => {
  const { page, search } = await searchParams;
  const trpc = await getTrpcCaller();
  const { data: activities, paginationData } = await trpc.public.getActivities({
    page,
    search,
  });
  return (
    <div className="container h-full">
      {activities.map((activity) => {
        return (
          <Link href={`/activities/${activity.slug}`} key={activity.slug}>
            {activity.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Activities;
