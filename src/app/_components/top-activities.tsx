import Card from "@/components/card";
import { buttonVariants } from "@/components/ui/button";
import { getTrpcCaller } from "@/lib/trpc/server";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TopActivities = async () => {
  const trpc = await getTrpcCaller();
  const { data: activities } = await trpc.public.getTopActivities({
    topNumber: "3",
  });
  return (
    <div className="py-5 xl:py-10 bg-primary/5">
      <div className="container ">
        <h3 className=" border-b font-extrabold text-xl md:text-2xl mb-4 pb-4 ">
          Aktivitetet tona të fundit
        </h3>
        <hr className="mb-3 lg:mb-5 bg-secondary h-1 rounded-full -mt-4.5 w-20" />
        <Carousel className="w-full " opts={{ align: "start" }}>
          <CarouselContent className="py-3">
            {activities.map((activity) => (
              <CarouselItem
                key={activity.slug}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  key={activity.slug}
                  tags={activity.tags}
                  title={activity.title}
                  slug={activity.slug}
                  module="activities"
                  coverImagePath={activity.coverImagePath}
                  date={activity.finishedAt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-end mt-5">
          <Link
            href="/activities"
            className={buttonVariants({ size: "sm", variant: "outline" })}
          >
            Shiko më shumë <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopActivities;
