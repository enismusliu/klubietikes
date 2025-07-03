import Card from "@/components/card";
import { buttonVariants } from "@/components/ui/button";
import { getTrpcCaller } from "@/lib/trpc/server";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TopActivities = async () => {
  const trpc = await getTrpcCaller();
  const { data: activities } = await trpc.public.getTopActivities({
    topNumber: "6",
  });
  return (
    <div className="py-5 xl:py-10 bg-primary/5">
      <div className="container ">
        <Carousel className="w-full " opts={{ align: "start" }}>
          <div className="mb-4 pb-4 border-b flex items-center justify-between ">
            <h3 className="font-extrabold text-seconadary text-xl md:text-2xl  ">
              Aktivitetet tona të fundit
            </h3>
            <div className="flex items-center justify-end  gap-3 ">
              <CarouselPrevious className="static translate-x-0 translate-y-0 h-8 w-8 md:w-15 rounded-lg" />
              <CarouselNext className="static translate-x-0 translate-y-0 h-8 w-8 md:w-15 rounded-lg" />
            </div>
          </div>
          <hr className="mb-3 lg:mb-5 bg-secondary h-1 rounded-full -mt-4.5 w-20" />
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
            className={buttonVariants({ size: "sm", color: "secondary" })}
          >
            Shiko më shumë <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopActivities;
