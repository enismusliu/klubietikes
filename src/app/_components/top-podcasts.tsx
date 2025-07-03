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

const TopPodcasts = async () => {
  const trpc = await getTrpcCaller();
  const { data: podcasts } = await trpc.public.getTopPodcasts({
    topNumber: "3",
  });
  return (
    <div className="container">
      <h3 className="text-seconadary border-b font-extrabold text-xl md:text-2xl mb-4 pb-4 ">
        Podcastet tona të fundit
      </h3>
      <hr className="mb-3 lg:mb-5 bg-primary h-1 rounded-full -mt-4.5 w-20" />
      <Carousel className="w-full " opts={{ align: "start" }}>
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
