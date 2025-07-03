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

const TopPodcasts = async () => {
  const trpc = await getTrpcCaller();
  const { data: podcasts } = await trpc.public.getTopPodcasts({
    topNumber: "5",
  });
  return (
    <div className="container">
      <Carousel className="w-full " opts={{ align: "start" }}>
        <div className="mb-4 pb-4 border-b flex items-center justify-between ">
          <h3 className="font-extrabold text-seconadary text-xl md:text-2xl  ">
            Podcastet tona të fundit
          </h3>
          <div className="flex items-center justify-end  gap-3 ">
            <CarouselPrevious className="static translate-x-0 translate-y-0 h-8 w-8 md:w-15 rounded-lg" />
            <CarouselNext className="static translate-x-0 translate-y-0 h-8 w-8 md:w-15 rounded-lg" />
          </div>
        </div>
        <hr className="mb-3 lg:mb-5 bg-primary h-1 rounded-full -mt-4.5 w-20" />
        <CarouselContent className="py-3">
          {podcasts.map((podcast) => (
            <CarouselItem
              key={podcast.slug}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card
                key={podcast.slug}
                tags={podcast.tags}
                title={podcast.title}
                slug={podcast.slug}
                module="podcast"
                coverImagePath={podcast.coverImagePath}
                date={podcast.recordedAt}
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
  );
};

export default TopPodcasts;
