import Card from "@/components/card";
import { buttonVariants } from "@/components/ui/button";
import { getTrpcCaller } from "@/lib/trpc/server";
import Link from "next/link";

const TopPodcasts = async () => {
  const trpc = await getTrpcCaller();
  const { data: podcasts } = await trpc.public.getTopPodcasts({
    topNumber: "2",
  });
  return (
    <div className="container max-w-[1200px]">
      <h3 className="text-primary font-extrabold text-xl md:text-2xl mb-4 pb-4 border-b">
        Podcastet tona të fundit
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10  auto-rows-min md:gap-16 ">
        {podcasts.map((podcast) => {
          return (
            <Card
              key={podcast.slug}
              tags={podcast.tags}
              title={podcast.title}
              slug={podcast.slug}
              module="podcast"
              coverImagePath={podcast.coverImagePath}
            />
          );
        })}
      </div>
      <div className="flex justify-end mt-5">
        <Link
          href="/activities"
          className={buttonVariants({ size: "sm", variant: "ghost" })}
        >
          Shiko më shumë...
        </Link>
      </div>
    </div>
  );
};

export default TopPodcasts;
